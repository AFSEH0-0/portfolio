import { NextRequest, NextResponse } from "next/server";

const PORTFOLIO_CONTEXT = `
You are Genay, a smart AI assistant embedded in M Afseh Muneer's portfolio website. 
Your job is to help interviewers and visitors learn about Afseh. 
Be friendly, concise, and professional. Always respond as Genay.
Respond with short, clear answers (2-4 sentences max).

Here is everything about M Afseh Muneer:

PERSONAL INFO:
- Full Name: M Afseh Muneer
- Phone: +92 315 6783693
- Email: Afsehm53@gmail.com
- GitHub: AFSEH0-0
- LinkedIn: M Afseh Muneer
- Address: Street Number 33 Gol Chakr Gulberg Lahore
- Title: Software Engineer | Penetration Tester

SUMMARY:
BS Software Engineering graduate with hands-on experience in software development and penetration testing. 
Passionate about building secure applications and strengthening cybersecurity through ethical hacking and vulnerability assessment.

EDUCATION:
- BS in Software Engineering (2026) — University of Mianwali

TECHNICAL SKILLS:
- Programming: Python, PHP, C/C++, JavaScript, SQL, Bash, OOP, Data Structures
- Cybersecurity: WireShark, Metasploit, Social Engineering, Vulnerability Assessment, Kali Linux, Ubuntu, Penetration Testing
- Tools: XAMPP, Figma, Adobe Photoshop, Office Automation

EXPERIENCE:
1. Chashni The Sweet House — Coordinator
   - Currently working as a coordinator managing operations at Chashni The Sweet House.
   - Responsibilities include coordinating between departments, managing schedules, handling customer relations, and supporting daily business operations.

2. U3C Computer College — Manager & Computer Instructor (7 Months)
   - Managed computer labs, taught computer subjects, supervised students, handled documentation, coordinated staff, and provided technical support for systems, software, and networks.

3. Mehzab, Hudebia, Bright Career & Alpha Students Academy — Lecturer & Administrative Coordinator (3 Years, left Alpha Students Academy on 1 August 2026)
   - Taught students, managed records and documentation, supported computer operations and internet connectivity, coordinated with staff, students, and parents, and assisted in daily administration.

4. Noor Photoshop — Computer Operator (3 Months)
   - Operated printing and scanning equipment, assisted customers with typing, formatting, and online applications, performed basic computer troubleshooting, and maintained accurate records.

PROJECTS:
- AI-PECO (Final Year Project): AI-powered energy management system using IoT, cloud storage, machine learning, and a web dashboard.
- Round-Robin Scheduling Algorithm (Shell)
- E-Challan Maker (Web)
- Face Lock System (Python)
- Photo Gallery (Web)
- TuckShop Management System (Web)
- Password Cracker (Python)
- Weather WebApp (Web)
- Login Page (Python)
- Library Management System (C++)
- Simple Cipher (Python)

CERTIFICATIONS & ACHIEVEMENTS:
- First Frontier International Conference 2025, Mianwali
- Punjab Police Youth Internship Programme 2023
- NextGen CodeQuest — Coding & Graphics Designing
- Codex 2024 Namal Poster Design Contest

If asked something not related to Afseh, politely redirect the conversation back to Afseh's portfolio.
`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // Use rule-based responses as primary, with HuggingFace as fallback
    const lowerMsg = message.toLowerCase().trim();

    // Rule-based quick responses for common questions
    const quickResponses = getQuickResponse(lowerMsg);
    if (quickResponses) {
      return NextResponse.json({ reply: quickResponses });
    }

    // Try HuggingFace API
    const HF_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

    if (HF_TOKEN) {
      try {
        const prompt = `<|system|>
${PORTFOLIO_CONTEXT}
<|end|>
<|user|>
${message}
<|end|>
<|assistant|>`;

        const hfResponse = await fetch(
          "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${HF_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              inputs: prompt,
              parameters: {
                max_new_tokens: 200,
                temperature: 0.7,
                return_full_text: false,
                stop: ["<|end|>", "<|user|>", "</s>"],
              },
            }),
          }
        );

        if (hfResponse.ok) {
          const data = await hfResponse.json();
          let reply = "";

          if (Array.isArray(data) && data[0]?.generated_text) {
            reply = data[0].generated_text.trim();
          } else if (data?.generated_text) {
            reply = data.generated_text.trim();
          }

          if (reply && reply.length > 5) {
            // Clean up the reply
            reply = reply.replace(/<\|.*?\|>/g, "").trim();
            if (reply.length > 5) {
              return NextResponse.json({ reply });
            }
          }
        }
      } catch {
        // Fall through to smart fallback
      }
    }

    // Smart fallback responses
    const fallback = getSmartFallback(lowerMsg);
    return NextResponse.json({ reply: fallback });
  } catch {
    return NextResponse.json(
      { reply: "I'm having a little glitch! Ask me again about Afseh — I'm here to help." },
      { status: 200 }
    );
  }
}

function getQuickResponse(msg: string): string | null {
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("greet")) {
    return "Hey! I'm Genay 👾 — Afseh's AI assistant. Ask me anything about his skills, experience, projects, or education. I'm here to help!";
  }
  if (msg.includes("name")) {
    return "His full name is **M Afseh Muneer**. He's a Software Engineer and Penetration Tester based in Lahore, Pakistan.";
  }
  if (msg.includes("contact") || msg.includes("email") || msg.includes("phone") || msg.includes("reach")) {
    return "📧 Email: Afsehm53@gmail.com\n📱 Phone: +92 315 6783693\n💼 LinkedIn: M Afseh Muneer\n🐙 GitHub: AFSEH0-0";
  }
  if (msg.includes("education") || msg.includes("degree") || msg.includes("university") || msg.includes("study")) {
    return "Afseh holds a **BS in Software Engineering (2026)** from the University of Mianwali, Punjab, Pakistan.";
  }
  if (msg.includes("skill") || msg.includes("tech") || msg.includes("language") || msg.includes("tool")) {
    return "Afseh is skilled in Python, PHP, C/C++, JavaScript, SQL, Bash, Kali Linux, Metasploit, WireShark, Figma, and more. He specializes in software development and penetration testing.";
  }
  if (msg.includes("project") || msg.includes("work")) {
    return "His standout project is **AI-PECO** — an AI-powered energy management system using IoT, machine learning, and cloud storage. He also built E-Challan Maker, Face Lock System, TuckShop Management System, and more!";
  }
  if (msg.includes("experience") || msg.includes("job") || msg.includes("employ") || msg.includes("career")) {
    return "Afseh has 3+ years of experience as a Lecturer & Coordinator, 7 months as a Manager & Computer Instructor at U3C College, and is currently working as a Coordinator at Chashni The Sweet House.";
  }
  if (msg.includes("certification") || msg.includes("achievement") || msg.includes("award")) {
    return "Afseh has attended the First Frontier International Conference 2025, Punjab Police Youth Internship 2023, and won recognition at NextGen CodeQuest and the Codex 2024 Namal Poster Design Contest.";
  }
  if (msg.includes("security") || msg.includes("penetrat") || msg.includes("hacker") || msg.includes("cyber")) {
    return "Afseh is a skilled Penetration Tester with hands-on experience in ethical hacking, vulnerability assessment, Metasploit, WireShark, Kali Linux, and social engineering techniques.";
  }
  if (msg.includes("chashni") || msg.includes("sweet")) {
    return "Afseh currently works as a **Coordinator at Chashni The Sweet House**, where he manages operations, coordinates between departments, handles scheduling, customer relations, and daily business operations.";
  }
  if (msg.includes("location") || msg.includes("address") || msg.includes("where") || msg.includes("city")) {
    return "Afseh is based in **Lahore, Pakistan** — specifically at Street Number 33, Gol Chakr, Gulberg, Lahore.";
  }
  if (msg.includes("github")) {
    return "You can find Afseh's code on GitHub at **github.com/AFSEH0-0** — check out his projects there!";
  }
  if (msg.includes("linkedin")) {
    return "Connect with Afseh professionally on LinkedIn by searching **M Afseh Muneer**.";
  }
  if (msg.includes("ai-peco") || msg.includes("final year") || msg.includes("fyp")) {
    return "AI-PECO is Afseh's Final Year Project — an AI-powered energy management system that monitors energy usage, predicts consumption, estimates costs, and recommends energy-saving strategies using IoT, cloud storage, ML, and a web dashboard.";
  }
  if (msg.includes("available") || msg.includes("hire") || msg.includes("freelance") || msg.includes("opportunity")) {
    return "Afseh is open to exciting opportunities in software engineering and cybersecurity! Reach him at Afsehm53@gmail.com or +92 315 6783693.";
  }
  if (msg.includes("who are you") || msg.includes("what are you") || msg.includes("genay")) {
    return "I'm **Genay** 🤖, the AI assistant built into Afseh's portfolio. I can answer questions about his background, skills, projects, and experience. What would you like to know?";
  }
  if (msg.includes("bye") || msg.includes("thanks") || msg.includes("thank")) {
    return "You're welcome! Feel free to come back anytime 👾. Afseh would love to connect — reach out via email or LinkedIn!";
  }
  return null;
}

function getSmartFallback(msg: string): string {
  const topics = [
    { keywords: ["python", "code", "program"], response: "Afseh is proficient in Python and has built several Python projects including a Face Lock System, Password Cracker, and Simple Cipher. He uses Python for scripting, automation, and security tools." },
    { keywords: ["teach", "instructor", "lecture"], response: "Afseh has 3+ years of teaching experience as a Lecturer at multiple academies and 7 months as a Computer Instructor at U3C Computer College." },
    { keywords: ["alpha", "academy", "mehzab", "hudabia", "bright"], response: "Afseh worked as a Lecturer & Administrative Coordinator at Mehzab, Hudebia, Bright Career & Alpha Students Academy for 3 years, leaving Alpha Students Academy on August 1, 2026." },
  ];

  for (const topic of topics) {
    if (topic.keywords.some(k => msg.includes(k))) {
      return topic.response;
    }
  }

  return "Great question! I'm Genay, Afseh's portfolio assistant. You can ask me about his **skills**, **projects**, **experience**, **education**, or **contact info**. What would you like to know? 🚀";
}
