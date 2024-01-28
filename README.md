# Chatbot App

A simple chatbot application built with React, Tailwind CSS, TypeScript, and Next.js.

## Table of Contents

- [Overview](#overview)
- [Components](#components)
- [Setting Up Project](#project-settings)
- [Project Structure](#project-structure)

## Overview

This application features a chatbot interface with a loading animation, message input, and message display section. The chatbot responds to user input and showcases a reusable robot animation component with dynamic eye and eyebrow movements.

## Components

### 1. Chatbot Component

The primary chatbot component located at `/app/page.tsx`:

```jsx
// components/Chatbot.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { RingLoader } from "react-spinners";
import RobotAnimation from "./RobotAnimation";
import MessageSection from "./Messages";
import MessageInput from "./Input";

const Chatbot: React.FC = () => {
  // ... (component details)
};

export default Chatbot;

2.Message Input Component
// components/MessageInput.tsx
"use client";
import React, { useState } from "react";

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  // ... (component details)
};

export default MessageInput;

3.Message display Component
// components/MessageSection.tsx
"use client";
import React, { useEffect, useRef } from "react";

const MessageSection: React.FC<MessageSectionProps> = ({ messages }) => {
  // ... (component details)
};

export default MessageSection;

4.Reusable Animation Component
// components/RobotAnimation.tsx
"use client";
import React, { useState, useEffect } from "react";

const RobotAnimation: React.FC<RobotAnimationProps> = ({ size = "medium", text }) => {
  // ... (component details)
};

export default RobotAnimation;


## Setting Up Project
1. Install Dependencies:
npm install
2.Run the Application :
npm run dev

Visit  "http://localhost:3000"  to view the app.

## Project Structure
/chatbot-app
│   README.md
│   tsconfig.json
│   ... (other project files)
└───components
│   │   Chatbot.tsx
│   │   MessageInput.tsx
│   │   MessageSection.tsx
│   │   RobotAnimation.tsx
└───app
    │   page.tsx
        ... (other project files)


```
