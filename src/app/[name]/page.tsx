"use client";
import { useParams } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { personas } from '../constants';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";


const EngineerPage = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(name == "sam" ? personas[0]: personas[1]);
  const [allChats, setAllChats] = useState<any[]>([{ User: "Hii", model: "Hey there how are you?" }]);
  const [text, setText] = useState("");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState(name == "sam" ? "/sam.webp" : "/elon.jpg")

    useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [allChats]);



  const handleSubmit = async ()=>{
    setLoading(true);
    try {
      const res = await axios.post(`https://persona-ai-lac.vercel.app/api/gemini`, {
        historyChat: allChats,
        recentMessage: text,
        teacherDetails: selectedPersona
      })

      // console.log("The response is: ", res);
     setAllChats(prev => [...prev, { User: text, model: res.data.data }]);
     setText(""); // Clear input after sending

    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Card className="mb-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={image || "/placeholder.svg?height=48&width=48"} />
                <AvatarFallback className="bg-indigo-500 text-white text-lg font-semibold">
                  {name?.toString().charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              Hi, I am {name?.toString().replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}.
            </CardTitle>
          </CardHeader>
        </Card>

        {/* Chat Container */}
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-0">
            {/* Chat Messages */}
            <ScrollArea className="h-96 p-4">
              <div className="space-y-4">
                {allChats.length > 0 && allChats.map((msg: any, index: number) => (
                  <div key={index} className="space-y-3">
                    {/* User Message */}
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-indigo-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs lg:max-w-md shadow-md">
                        <p className="text-sm font-medium">{msg.User}</p>
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-indigo-100 text-indigo-600 text-xs">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Model Response */}
                    <div className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={image || "/placeholder.svg?height=48&width=48"} />
                        <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div  ref={scrollerRef} className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs lg:max-w-md shadow-md">
                        <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        code({ node, inline, className, children, ...props }: any) {
                          const match = /language-(\w+)/.exec(className || "");
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={tomorrow}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                        h1: ({ children }) => (
                          <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-900 dark:text-gray-100">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-2xl font-semibold mt-5 mb-3 text-gray-800 dark:text-gray-200">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300">
                            {children}
                          </h3>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc pl-6 mb-4">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal pl-6 mb-4">{children}</ol>
                        ),
                        p: ({ children }) => (
                          <p className="mb-4 text-gray-700 dark:text-gray-300">
                            {children}
                          </p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-gray-900 dark:text-gray-100">
                            {children}
                          </strong>
                        ),
                      }}
                    >
                      {msg.model}
                    </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t bg-gray-50/50 p-4">
              <div className="flex gap-3 items-end">
                <div className="flex-1">
                  <Input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your message here..."
                    className="resize-none border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 rounded-xl bg-white shadow-sm"
                  />
                </div>
                <Button
                  onClick={handleSubmit}
                  disabled={!text.trim() || loading}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-2 shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {
                    loading ? <Loader2 className='h-4 w-4 text-white animate-spin'/> : <Send className="h-4 w-4" />
                  }
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EngineerPage
