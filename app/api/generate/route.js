import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const systemPrompt = 'You are a flashcard AI. Your job is to help users learn by generating flashcards based on the input they provide. Each flashcard should have a question on one side and the answer on the other. Ensure the questions are clear and concise, and the answers are accurate and informative.';