"use client";

import { useState } from "react";
import { X, FileText, Shield } from "lucide-react";
import { termsOfService, privacyPolicy } from "@/lib/legal";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null;

  const content = type === 'terms' ? termsOfService : privacyPolicy;
  const title = type === 'terms' ? 'Termos de Uso' : 'Política de Privacidade';
  const icon = type === 'terms' ? <FileText className="w-6 h-6" /> : <Shield className="w-6 h-6" />;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-900 rounded-2xl border border-white/10 max-w-4xl w-full max-h-[80vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
              {icon}
            </div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="prose prose-invert max-w-none">
            <p className="text-sm text-gray-400 mb-6">
              Última atualização: {content.lastUpdated}
            </p>
            <div className="text-gray-300 whitespace-pre-line leading-relaxed">
              {content.content}
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t border-white/10 bg-slate-800/50">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}

export function LegalLinks() {
  const [modalOpen, setModalOpen] = useState<{ isOpen: boolean; type: 'terms' | 'privacy' | null }>({
    isOpen: false,
    type: null
  });

  const openModal = (type: 'terms' | 'privacy') => {
    setModalOpen({ isOpen: true, type });
  };

  const closeModal = () => {
    setModalOpen({ isOpen: false, type: null });
  };

  return (
    <>
      <div className="flex space-x-6 text-gray-400 text-sm">
        <button 
          onClick={() => openModal('terms')}
          className="hover:text-white transition-colors"
        >
          Termos de Uso
        </button>
        <button 
          onClick={() => openModal('privacy')}
          className="hover:text-white transition-colors"
        >
          Política de Privacidade
        </button>
        <a href="#" className="hover:text-white transition-colors">Cookies</a>
      </div>

      {modalOpen.type && (
        <LegalModal
          isOpen={modalOpen.isOpen}
          onClose={closeModal}
          type={modalOpen.type}
        />
      )}
    </>
  );
}