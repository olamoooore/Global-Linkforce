import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Sparkles, Phone, Mic, User } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Good day. I am the Global Linkforce Intelligence Agent. I can assist with NEMT bookings, freight quotes, or procurement enquiries. How may I direct you?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Minimized State / Button
  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-orange-600 text-white p-4 rounded-full shadow-2xl hover:bg-orange-700 transition-all hover:scale-105 group flex items-center gap-2 border-2 border-white ring-4 ring-orange-100"
      >
        <div className="relative">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></span>
        </div>
        <span className="font-bold tracking-wide hidden group-hover:block transition-all duration-300">AI AGENT</span>
      </button>
    );
  }

  return (
    <div className={`fixed z-40 bg-white shadow-2xl rounded-2xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 ${isMinimized ? 'w-72 h-16 bottom-6 right-6' : 'w-full sm:w-96 h-[550px] sm:h-[650px] bottom-0 sm:bottom-6 right-0 sm:right-6'}`}>
      
      {/* Header */}
      <div 
        className="bg-slate-900 text-white p-4 flex justify-between items-center cursor-pointer"
        onClick={() => !isMinimized && setIsMinimized(true)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center border-2 border-orange-400">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-sm tracking-wide">Global Linkforce AI</h3>
            {!isMinimized && <p className="text-[10px] text-orange-200 font-medium uppercase tracking-wider">Operational Gateway</p>}
          </div>
        </div>
        <div className="flex items-center gap-2">
           {isMinimized ? (
             <button onClick={(e) => { e.stopPropagation(); setIsMinimized(false); }} className="hover:text-orange-400"><MessageSquare className="w-4 h-4"/></button>
           ) : (
             <button onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }} className="hover:text-orange-400"><Minimize2 className="w-4 h-4"/></button>
           )}
           <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); setIsMinimized(false); }} className="hover:text-red-400"><X className="w-5 h-5"/></button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Chat Area */}
          <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center mr-2 mt-2 flex-shrink-0">
                         <Sparkles className="w-3 h-3 text-slate-600" />
                    </div>
                )}
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-orange-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center ml-2 mt-2 flex-shrink-0">
                         <User className="w-3 h-3 text-orange-600" />
                    </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center mr-2 flex-shrink-0">
                         <Sparkles className="w-3 h-3 text-slate-600" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm flex gap-1 items-center h-10">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions / Voice Notice */}
          <div className="px-4 py-3 bg-white border-t border-slate-100 flex gap-2 overflow-x-auto scrollbar-hide">
              <button className="flex items-center gap-1 text-xs bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 text-slate-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 whitespace-nowrap transition-colors font-medium">
                <Phone className="w-3 h-3" /> Call Agent
              </button>
              <button onClick={() => setInputText("Book a ride")} className="text-xs bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 text-slate-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 whitespace-nowrap transition-colors font-medium">
                NEMT Booking
              </button>
              <button onClick={() => setInputText("Request Shipping Quote")} className="text-xs bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 text-slate-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-700 whitespace-nowrap transition-colors font-medium">
                Freight Quote
              </button>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-slate-50 border-t border-slate-200">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-slate-300 focus-within:ring-2 focus-within:ring-orange-500 focus-within:border-orange-500 transition-all shadow-sm">
              <input 
                type="text" 
                placeholder="Message Global Linkforce..."
                className="flex-1 bg-transparent outline-none text-sm text-slate-800"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
              />
              <button className="text-slate-400 hover:text-orange-600 transition-colors">
                  <Mic className="w-4 h-4" />
              </button>
              <button 
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                className={`p-1.5 rounded-full transition-all ${inputText.trim() ? 'bg-orange-600 text-white shadow-md' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-2">
                 <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wider">Secure Connection • AI Assisted</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};