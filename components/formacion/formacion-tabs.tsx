"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface FormacionTabsProps {
  tabs: Tab[]
  defaultTab?: string
}

export function FormacionTabs({ tabs, defaultTab }: FormacionTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  return (
    <div className="w-full">
      <div className="relative mb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-playfair">
            Nuestra Formación
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Programas diseñados para potenciar el bienestar de adultos mayores y capacitar a profesionales
          </p>
        </div>
        
        <div className="relative">
          <div className="flex justify-center space-x-1 rounded-xl bg-gray-50 p-1.5 max-w-2xl mx-auto">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative z-10 flex-1 py-3 px-6 text-sm md:text-base font-medium transition-all duration-300 rounded-lg",
                    isActive 
                      ? "text-gray-800 font-semibold" 
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-25"
                  )}
                >
                  {tab.label}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-orange-400 rounded-full"
                      style={{
                        transition: 'all 0.3s ease-in-out'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 transition-opacity duration-300">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
