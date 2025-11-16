"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { Code, Music, Trophy, Heart, Mic, Calendar, MapPin, Users } from "lucide-react";

const clubs = [
  {
    id: 1,
    name: "Technical Society",
    description: "All tech-related clubs and coding communities",
    category: "Technical",
    color: "from-blue-500 to-blue-600",
    icon: Code,
    subClubs: [
      { id: 101, name: "Codex Club", president: "Alice", coordinator: "Bob", contact: "1234567890" },
      { id: 102, name: "CyberHunter", president: "Charlie", coordinator: "David", contact: "2345678901" },
      { id: 103, name: "GDG", president: "Eve", coordinator: "Frank", contact: "3456789012" },
    ]
  },
  {
    id: 2,
    name: "Cultural Society",
    description: "Music, dance, theatre and cultural activities",
    category: "Cultural",
    color: "from-purple-500 to-purple-600",
    icon: Music,
    subClubs: [
      { id: 201, name: "Music Club", president: "Grace", coordinator: "Hank", contact: "4567890123" },
      { id: 202, name: "Dance Club", president: "Ivy", coordinator: "Jack", contact: "5678901234" },
      { id: 203, name: "Theatre Club", president: "Kate", coordinator: "Leo", contact: "6789012345" },
    ]
  },
  {
    id: 3,
    name: "Social Society",
    description: "Community service and social initiatives",
    category: "Social",
    color: "from-red-500 to-red-600",
    icon: Heart,
    subClubs: [
      { id: 301, name: "Pahal", president: "Mona", coordinator: "Nash", contact: "7890123456" },
      { id: 302, name: "NSS", president: "Oscar", coordinator: "Paul", contact: "8901234567" },
    ]
  },
  {
    id: 4,
    name: "CRC",
    description: "Campus Resource Center activities",
    category: "Other",
    color: "from-teal-500 to-teal-600",
    icon: Trophy,
    subClubs: []
  },
  {
    id: 5,
    name: "Deepro",
    description: "Special interest club Deepro",
    category: "Other",
    color: "from-orange-500 to-orange-600",
    icon: Mic,
    subClubs: []
  }
];

const events = [
  {
    id: 1,
    title: "TechFest 2024",
    description: "Annual technology festival with hackathons, workshops, and tech talks",
    date: "2024-02-15",
    time: "9:00 AM",
    location: "Main Auditorium",
    category: "Technical",
    attendees: 500
  },
  {
    id: 2,
    title: "Cultural Night",
    description: "Showcase your talent in music, dance, and drama performances",
    date: "2024-02-20",
    time: "6:00 PM",
    location: "Open Air Theatre",
    category: "Cultural",
    attendees: 800
  },
  {
    id: 3,
    title: "Startup Summit",
    description: "Meet entrepreneurs, investors, and learn about startup ecosystem",
    date: "2024-02-25",
    time: "10:00 AM",
    location: "Convention Center",
    category: "Business",
    attendees: 300
  },
  {
    id: 4,
    title: "Sports Week",
    description: "Inter-department sports competitions and tournaments",
    date: "2024-03-01",
    time: "8:00 AM",
    location: "Sports Complex",
    category: "Sports",
    attendees: 1000
  },
  {
    id: 5,
    title: "Art Exhibition",
    description: "Display of student artwork, photography, and digital designs",
    date: "2024-03-05",
    time: "11:00 AM",
    location: "Art Gallery",
    category: "Cultural",
    attendees: 250
  },
  {
    id: 6,
    title: "Blood Donation Camp",
    description: "Contribute to society by donating blood and saving lives",
    date: "2024-03-10",
    time: "9:00 AM",
    location: "Medical Center",
    category: "Social",
    attendees: 200
  }
];

export default function ClubsEventsPage() {
  const router = useRouter();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Clubs & Events
            </h1>
            <p className="text-muted-foreground">Join clubs and participate in exciting campus events</p>
          </motion.div>

          <Tabs defaultValue="clubs" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
              <TabsTrigger value="clubs">Clubs</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            {/* Clubs Tab */}
            <TabsContent value="clubs">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubs.map((club, index) => (
                  <motion.div
                    key={club.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${club.color}`}>
                            <club.icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge>{club.category}</Badge>
                        </div>
                        <CardTitle>{club.name}</CardTitle>
                        <CardDescription>{club.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          className="w-full"
                          onClick={() => router.push(`/clubs/${club.id}`)}
                        >
                          View Sub Clubs
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <Badge>{event.category}</Badge>
                        </div>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-2 h-4 w-4" />
                            {new Date(event.date).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })} at {event.time}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="mr-2 h-4 w-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-2 h-4 w-4" />
                            {event.attendees} attendees expected
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button className="flex-1" onClick={() => router.push(`/events/${event.id}`)}>
                            Register
                          </Button>
                          <Button variant="outline" className="flex-1" onClick={() => router.push(`/events/${event.id}`)}>
                            Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </ProtectedRoute>
  );
}
