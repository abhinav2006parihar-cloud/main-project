"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, Clock, BookOpen, Users, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    provider: "Crio",
    duration: "12 weeks",
    level: "Intermediate",
    enrolled: 245,
    description: "Master modern web development with React, Node.js, and MongoDB",
    skills: ["React", "Node.js", "MongoDB", "REST APIs"],
    color: "from-blue-500 to-blue-600",
    link: "https://www.crio.do/programs/software-development-fellowship-program/?utm_source=google-ads-search&utm_campaign=SD_Course&campaignid=23022218858&utm_medium=Search_SD_Phrase_Sep_25&utm_content=Ad1&utm_term=full%20stack%20developer%20course&utm_network=g&matchtype=p&gad_source=1&gad_campaignid=23022218858&gbraid=0AAAAAClbo8ska_4krrkfD99D8qwprE0CF&gclid=Cj0KCQiAiebIBhDmARIsAE8PGNInaIkm__vxx2sV5tStO_ft442RBKL3Pa-5UJ6qoB8OcoU1DV5vkbcaArk-EALw_wcB"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    provider: "Scaler",
    duration: "16 weeks",
    level: "Advanced",
    enrolled: 189,
    description: "Learn data analysis, ML algorithms, and AI fundamentals",
    skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    color: "from-green-500 to-green-600",
    link: "https://www.scaler.com/event/learn-data-science-machine-learning/?utm_source=ads&utm_medium=googlesearch&utm_campaign=perf_scaler-dsml_requestcallback_ads_googlesearch_dsa-new_key-metros_25-45&utm_content=dsa-data-science-new&utm_term=&param1=693322733490&param2=c&param3=&gad_source=1&gad_campaignid=21088132974&gbraid=0AAAAADQ037xCZi9M-LgE-Wd6-KEdewXOS&gclid=Cj0KCQiAiebIBhDmARIsAE8PGNIe8GaXSGbY6X09C4Rd9LtRELeibMzU4JeNa3gI8CtgTt46uQUQsPIaAqLGEALw_wcB"
  },
  {
    id: 3,
    title: " AWS Certification ",
    provider: "Amazon",
    duration: "8 weeks",
    level: "Intermediate",
    enrolled: 312,
    description: "Master cloud architecture and AWS services",
    skills: ["AWS", "EC2", "S3", "Lambda"],
    color: "from-orange-500 to-orange-600",
    link: "https://aws.amazon.com/training/"
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    provider: "Google",
    duration: "10 weeks",
    level: "Beginner",
    enrolled: 276,
    description: "Learn security principles, ethical hacking, and risk management",
    skills: ["Network Security", "Penetration Testing", "Cryptography"],
    color: "from-red-500 to-red-600",
    link: "https://www.coursera.org/learn/foundations-of-cybersecurity"
  },
  {
    id: 5,
    title: "Mobile App Development",
    provider: "Udemy",
    duration: "14 weeks",
    level: "Intermediate",
    enrolled: 198,
    description: "Build native mobile apps for iOS and Android",
    skills: ["React Native", "Flutter", "Firebase", "API Integration"],
    color: "from-purple-500 to-purple-600",
    link: "https://www.udemy.com/topic/mobile-app-design/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_Keyword_Beta_Prof_la.ES_cc.ROW-Spanish&campaigntype=Search&portfolio=ROW-Spanish&language=ES&product=Course&test=&audience=Keyword&topic=ProgrammingFundamentals&priority=Beta&utm_content=deal4584&utm_term=_._ag_167955722551_._ad_762856700305_._kw_fundamentos%20b%C3%A1sicos%20de%20la%20programaci%C3%B3n_._de_c_._dm__._pl__._ti_kwd-2082089116745_._li_9182607_._pd__._&matchtype=b&gad_source=1&gad_campaignid=21487757259&gbraid=0AAAAADROdO3CPwuIX_a2VjBw9g3eEcnmx&gclid=Cj0KCQiAiebIBhDmARIsAE8PGNLYan-pOdGEDt9-qQfieXj57Z59Smunxq-0djI43zf9_Bl5pHlRrIUaAgCKEALw_wcBs"
  },
  {
    id: 6,
    title: "Blockchain Technology",
    provider: "Quantum University",
    duration: "10 weeks",
    level: "Advanced",
    enrolled: 143,
    description: "Understanding blockchain, smart contracts, and DApps",
    skills: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts"],
    color: "from-indigo-500 to-indigo-600",
    link: "https://example.com/blockchain"
  },
  {
    id: 7,
    title: "UX Design Mastery",
    provider: "Google",
    duration: "8 weeks",
    level: "Beginner",
    enrolled: 321,
    description: "Learn design thinking, prototyping, and user research",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    color: "from-pink-500 to-pink-600",
    link: "https://grow.google/intl/en_in/ux-design-course/"
  },
  {
    id: 8,
    title: "DevOps Engineering",
    provider: "Quantum University",
    duration: "12 weeks",
    level: "Advanced",
    enrolled: 167,
    description: "Master CI/CD, containerization, and infrastructure automation",
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform"],
    color: "from-teal-500 to-teal-600",
    link: "https://example.com/devops"
  },
  {
    id: 9,
    title: "Digital Marketing",
    provider: "Quantum University",
    duration: "6 weeks",
    level: "Beginner",
    enrolled: 289,
    description: "Learn SEO, social media marketing, and analytics",
    skills: ["SEO", "Google Analytics", "Content Marketing", "Social Media"],
    color: "from-yellow-500 to-yellow-600",
    link: "https://example.com/marketing"
  }
];

const levelColors = {
  "Beginner": "bg-green-500",
  "Intermediate": "bg-blue-500",
  "Advanced": "bg-purple-500"
};

export default function CertificationsPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Professional Certifications
            </h1>
            <p className="text-muted-foreground">
              Enhance your skills with industry-recognized certification courses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${cert.color}`}>
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <Badge className={levelColors[cert.level as keyof typeof levelColors]}>
                        {cert.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {cert.provider}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4" />
                        {cert.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        {cert.enrolled} students enrolled
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Self-paced learning
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto space-y-2">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full mb-2">
                          Enroll Now
                        </Button>
                      </a>
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
