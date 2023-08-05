import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-table',
  templateUrl: './dev-table.component.html',
  styleUrls: ['./dev-table.component.scss']
})
export class DevTableComponent implements OnInit {
  words: string[] = [
    "Agile", "Backlog", "Code Review", "Debugging", "Deployment", "Framework", "Git", "Integration", "JIRA", "Kanban", "Leadership",
    "Methodology", "Nexus", "Object-oriented", "Pair Programming", "Quality Assurance", "Refactoring", "Scrum", "Testing", "User Story",
    "Version Control", "Workflow", "XML", "Yarn", "Zero Downtime", "API", "Automation", "Branch", "Bug", "CI/CD", "Cloud",
    "Collaboration", "Containerization", "Continuous Integration", "Database", "Dependency", "DevOps", "Documentation", "Encryption",
    "Endpoint", "Frontend", "Function", "Hackathon", "IDE", "Infrastructure", "Issue", "JSON", "Legacy code", "Logging",
    "Microservices", "Middleware", "Mocking", "Module", "Multithreading", "Namespace", "Optimization", "Package", "Performance",
    "Plugin", "Pull request", "Push", "Query", "REST", "Repository", "Responsive design", "Scalability", "SDK", "Security",
    "Serverless", "Sprint", "SQL", "SSL", "Stack trace", "Template", "UAT", "UI/UX", "Versioning", "Virtualization", "Webhook",
    "Wireframe", "Abstraction", "Algorithm", "Back-end", "Cache", "CDN", "CLI", "CMS", "Compiler", "Cryptography", "Data mining",
    "Deadlock", "DNS", "Docker", "Encryption", "Firewall", "FTP", "Grid", "Heap", "Inheritance", "JVM", /* ... Add the remaining words here ... */
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // playSound(word: string): void {
  //   const audio = new Audio(); // Create a new Audio element
  //   audio.src = `assets/sounds/${word}.mp3`; // Set the audio source path
  //   audio.load(); // Load the audio file
  //   audio.play(); // Play the audio
  // }
}
