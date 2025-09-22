// app/course/[chapterId]/[lessonId]/AudioList.jsx
'use client';
import React, { useState, useRef  } from 'react';


export default function AudioList({ items }) {
  // const playAudio = (url) => {
  //   if (!url) return;
  //   const audio = new Audio(url);
  //   audio.play();
  // };

 const audioRefs = useRef<{ [key: number]: HTMLAudioElement }>({});
   const currentAudio = useRef<HTMLAudioElement | null>(null);


const playAudio = (id: number, audioUrl?: string) => {
    if (!audioUrl) return;


     // Stop currently playing audio
    if (currentAudio.current && !currentAudio.current.paused) {
      currentAudio.current.pause();
      currentAudio.current.currentTime = 0;
    }

    // create new Audio if not exists
    if (!audioRefs.current[id]) {
      audioRefs.current[id] = new Audio(audioUrl);
    }

    const audio = audioRefs.current[id];
    currentAudio.current = audio; // mark this as the currently playing audio
    audio.currentTime = 0;
    // reset audio to start if playing
    audio.currentTime = 0;
    audio.play();
  };




  return (
    <ul className="space-y-4">
      {items.map(item => (
        <li key={item.id} className="flex justify-between items-center bg-green-50 p-4 rounded-lg">
          <div>
            <div dir="rtl" className="text-xl font-semibold">{item.arabic}</div>
            <div className="text-gray-600">{item.transliteration}</div>
            <div>{item.en} • {item.bn}</div>
          </div>
          {item.audio && (
            <button onClick={(e) => {
              e.stopPropagation() // prevent triggering other click events
            playAudio(item.id, item.audio)
            }} 
            className="px-4 py-2 bg-green-600 text-white rounded-xl">
              🔊 Play
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
