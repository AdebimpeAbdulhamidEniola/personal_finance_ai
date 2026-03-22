"use client";

import { Heart } from "lucide-react";

export function Signature() {
  return (
    <footer className="mt-auto py-6 text-center border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-3">
          {/* Signature Image */}
          <div className="relative">
            <img
              src="/sain.png"
              alt="Adebimpe Abdulhamid Eniola Signature"
              width={120}
              height={40}
              className="h-auto max-w-[120px]"
            />
          </div>
          
          {/* Attribution Text */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Proudly Built by</span>
            <span className="font-semibold text-gray-800">Adebimpe Abdulhamid Eniola</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
          </div>
          
          {/* Additional Info */}
          <p className="text-xs text-gray-500">
            © 2026 MyKudi - AI Personal Finance Dashboard
          </p>
        </div>
      </div>
    </footer>
  );
}
