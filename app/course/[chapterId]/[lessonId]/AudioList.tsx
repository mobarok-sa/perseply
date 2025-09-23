"use client";

import React, { useRef } from "react";
import { Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type AudioItem = {
  id: string;
  arabic: string;
  transliteration: string;
  en: string;
  bn: string;
  url: string;
  audio: string;
  example?: {
    ar: string;
    en: string;
    bn: string;
  };
};

type AudioListProps = {
  items: AudioItem[];
};

export default function AudioList({ items }: AudioListProps) {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const currentAudio = useRef<HTMLAudioElement | null>(null);

  const playAudio = (id: string, audioUrl?: string) => {
    if (!audioUrl) return;

    // Stop current
    if (currentAudio.current && !currentAudio.current.paused) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }

    // Create if not exists
    if (!audioRefs.current[id]) {
      audioRefs.current[id] = new Audio(audioUrl);
    }

    const audio = audioRefs.current[id];
    currentAudio.current = audio;
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="grid gap-6">
      {items.map((item) => (
        <Card
          key={item.id}
          className="p-6 rounded-2xl shadow-sm hover:shadow-md transition"
        >
          <CardContent className="flex items-center justify-between gap-6 p-0">
            <div className="text-left">
              <div dir="rtl" className="text-2xl font-bold text-gray-900 mb-1">
                {item.arabic}
              </div>
              <div className="text-green-700 italic mb-1">
                {item.transliteration}
              </div>
              <div className="text-sm text-gray-600">
                {item.en} • {item.bn}
              </div>
              {item.example && (
                <p className="mt-2 text-sm text-gray-500 italic">
                  “{item.example.en}”
                </p>
              )}
            </div>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                playAudio(item.id, item.audio);
              }}
              size="lg"
              className="rounded-full bg-green-600 hover:bg-green-700"
            >
              <Volume2 className="w-5 h-5" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
