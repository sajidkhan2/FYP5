
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { PaperclipIcon, SendIcon, FileIcon, ImageIcon, FilePlus2 } from 'lucide-react';

// Mock data for conversations
const conversationsData = [
  {
    id: '1',
    person: {
      id: '101',
      name: 'Sarah Johnson',
      avatar: '',
      role: 'Family Law Attorney',
      lastActive: 'Just now'
    },
    unreadCount: 2,
    lastMessage: {
      content: 'Ive reviewed the documents you sent and have a few questions about the custody arrangement.',
      timestamp: '2023-11-18T14:30:00',
      isRead: false
    }
  },
  {
    id: '2',
    person: {
      id: '102',
      name: 'Michael Chen',
      avatar: '',
      role: 'Personal Injury Lawyer',
      lastActive: '5 minutes ago'
    },
    unreadCount: 0,
    lastMessage: {
      content: 'The settlement offer has been received. Let\'s discuss our response strategy.',
      timestamp: '2023-11-18T11:15:00',
      isRead: true
    }
  },
  {
    id: '3',
    person: {
      id: '103',
      name: 'Maria Rodriguez',
      avatar: '',
      role: 'Immigration Attorney',
      lastActive: '30 minutes ago'
    },
    unreadCount: 0,
    lastMessage: {
      content: 'Your visa application has been submitted. We should hear back within 2-3 weeks.',
      timestamp: '2023-11-17T16:45:00',
      isRead: true
    }
  },
  {
    id: '4',
    person: {
      id: '104',
      name: 'David Chen',
      avatar: '',
      role: 'Corporate Lawyer',
      lastActive: '2 hours ago'
    },
    unreadCount: 0,
    lastMessage: {
      content: 'I\'ve prepared the contract draft as discussed. Please review when you have time.',
      timestamp: '2023-11-17T09:20:00',
      isRead: true
    }
  }
];

// Mock messages for a conversation
const messageThreadData = [
  {
    id: '101',
    senderId: '101',
    content: 'Hello! Ive been assigned to your case. Ive reviewed the initial documents you submitted.',
    timestamp: '2023-11-16T10:15:00',
    isRead: true
  },
  {
    id: '102',
    senderId: 'user',
    content: 'Thank you for taking my case. Do you need any additional information from me at this point?',
    timestamp: '2023-11-16T10:20:00',
    isRead: true
  },
  {
    id: '103',
    senderId: '101',
    content: 'Yes, I would appreciate if you could send me any communication you\'ve had with your spouse regarding the property division.',
    timestamp: '2023-11-16T10:25:00',
    isRead: true
  },
  {
    id: '104',
    senderId: 'user',
    content: 'I have some emails I can forward. I\'ll gather those and send them over today.',
    timestamp: '2023-11-16T10:30:00',
    isRead: true
  },
  {
    id: '105',
    senderId: '101',
    content: 'Perfect. Also, I\'ve drafted a preliminary custody arrangement based on our discussion. I\'m attaching it to this message.',
    timestamp: '2023-11-16T14:45:00',
    isRead: true,
    attachments: [
      {
        id: 'a1',
        name: 'preliminary_custody_arrangement.pdf',
        size: '245 KB',
        type: 'pdf'
      }
    ]
  },
  {
    id: '106',
    senderId: 'user',
    content: 'Thank you. I\'ve reviewed the document and have some concerns about the visitation schedule.',
    timestamp: '2023-11-17T09:15:00',
    isRead: true
  },
  {
    id: '107',
    senderId: '101',
    content: 'I understand. Let\'s discuss your concerns and make adjustments. Would you prefer to schedule a call or continue the discussion here?',
    timestamp: '2023-11-17T09:30:00',
    isRead: true
  },
  {
    id: '108',
    senderId: 'user',
    content: 'I think a call would be more efficient. Do you have availability tomorrow afternoon?',
    timestamp: '2023-11-17T09:45:00',
    isRead: true
  },
  {
    id: '109',
    senderId: '101',
    content: 'Yes, I can speak at 2:00 PM tomorrow. I\'ll send a calendar invitation shortly. In the meantime, I\'ve reviewed the emails you sent and have a few questions about the custody arrangement.',
    timestamp: '2023-11-18T14:30:00',
    isRead: false
  }
];

export default function MessageCenter() {
  const [activeConversation, setActiveConversation] = useState(conversationsData[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredConversations = conversationsData.filter(convo => 
    convo.person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // In a real app, this would send the message to the backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[calc(100vh-240px)] min-h-[500px]">
      {/* Conversations List */}
      <Card className="md:col-span-1 flex flex-col">
        <div className="p-3 border-b">
          <Input 
            placeholder="Search conversations..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full px-2 pt-2">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="m-0">
            <ScrollArea className="h-[calc(100vh-350px)]">
              {filteredConversations.map((conversation) => (
                <div 
                  key={conversation.id}
                  className={`p-3 flex items-start space-x-3 hover:bg-legal-50 rounded-md cursor-pointer transition-colors ${
                    activeConversation.id === conversation.id ? 'bg-legal-50' : ''
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src={conversation.person.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {conversation.person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <p className="font-medium truncate">{conversation.person.name}</p>
                      <span className="text-xs text-muted-foreground">
                        {new Date(conversation.lastMessage.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">{conversation.person.role}</p>
                    
                    <p className={`text-sm mt-1 truncate ${
                      conversation.unreadCount > 0 ? 'font-medium text-legal-900' : 'text-muted-foreground'
                    }`}>
                      {conversation.lastMessage.content}
                    </p>
                  </div>
                  
                  {conversation.unreadCount > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="unread" className="m-0">
            <ScrollArea className="h-[calc(100vh-350px)]">
              {filteredConversations.filter(c => c.unreadCount > 0).map((conversation) => (
                <div 
                  key={conversation.id}
                  className={`p-3 flex items-start space-x-3 hover:bg-legal-50 rounded-md cursor-pointer transition-colors ${
                    activeConversation.id === conversation.id ? 'bg-legal-50' : ''
                  }`}
                  onClick={() => setActiveConversation(conversation)}
                >
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src={conversation.person.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {conversation.person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <p className="font-medium truncate">{conversation.person.name}</p>
                      <span className="text-xs text-muted-foreground">
                        {new Date(conversation.lastMessage.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground">{conversation.person.role}</p>
                    
                    <p className="text-sm mt-1 truncate font-medium text-legal-900">
                      {conversation.lastMessage.content}
                    </p>
                  </div>
                  
                  <span className="bg-primary text-primary-foreground text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full">
                    {conversation.unreadCount}
                  </span>
                </div>
              ))}
              
              {filteredConversations.filter(c => c.unreadCount > 0).length === 0 && (
                <div className="p-6 text-center">
                  <p className="text-muted-foreground">No unread messages</p>
                </div>
              )}
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </Card>
      
      {/* Chat Window */}
      <Card className="md:col-span-2 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={activeConversation.person.avatar} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {activeConversation.person.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="font-medium">{activeConversation.person.name}</h3>
              <div className="flex items-center text-xs text-muted-foreground">
                <span>{activeConversation.person.role}</span>
                <span className="mx-1">•</span>
                <span>{activeConversation.person.lastActive}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a href={`/call/${activeConversation.person.id}`}>Call</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href={`/video/${activeConversation.person.id}`}>Video</a>
            </Button>
          </div>
        </div>
        
        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messageThreadData.map((message) => {
              const isUserMessage = message.senderId === 'user';
              
              return (
                <div key={message.id} className={`flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] ${isUserMessage ? 'order-2' : 'order-1 flex'}`}>
                    {!isUserMessage && (
                      <Avatar className="h-8 w-8 mr-2 mt-1 flex-shrink-0">
                        <AvatarImage src={activeConversation.person.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {activeConversation.person.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    
                    <div>
                      <div className={`p-3 rounded-lg ${
                        isUserMessage 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-legal-100 text-legal-800'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      
                      {message.attachments && message.attachments.length > 0 && (
                        <div className="mt-2 space-y-2">
                          {message.attachments.map(attachment => (
                            <div 
                              key={attachment.id}
                              className="flex items-center p-2 rounded-md bg-legal-50 border border-legal-100"
                            >
                              <FileIcon className="h-4 w-4 mr-2 text-legal-500" />
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium truncate">{attachment.name}</p>
                                <p className="text-xs text-muted-foreground">{attachment.size}</p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-7 px-2">
                                <a href={`/files/${attachment.id}`} download>
                                  Download
                                </a>
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: '2-digit', 
                          minute: '2-digit'
                        })}
                        {isUserMessage && message.isRead && (
                          <span className="ml-1">• Read</span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
        
        {/* Input Area */}
        <div className="p-3 border-t">
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Input 
                className="pr-10 py-3 min-h-[50px]"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <div className="absolute right-2 top-2">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <PaperclipIcon className="h-4 w-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
              </div>
            </div>
            <Button 
              size="icon" 
              className="h-[50px] w-[50px] rounded-full"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
            >
              <SendIcon className="h-5 w-5" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
          
          <div className="flex mt-2">
            <Button variant="ghost" size="sm" className="text-xs">
              <FileIcon className="h-3.5 w-3.5 mr-1" />
              Document
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <ImageIcon className="h-3.5 w-3.5 mr-1" />
              Photo
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              <FilePlus2 className="h-3.5 w-3.5 mr-1" />
              Template
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
