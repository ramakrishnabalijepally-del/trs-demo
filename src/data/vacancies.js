export const HR_EMAIL = "hr@trsforms.com";

/**
 * Open positions. Every field here comes from the TRS careers page — six roles
 * in Chennai and eight in Delhi.
 */
export const vacancies = [
  {
    id: "chennai-technical-support",
    role: "Technical Support",
    station: "Chennai",
    type: "Full time",
    experience: "Fresher",
    qualification: "Computer Science degree",
    skills: ["Presentation skills", "English communication"],
    detail:
      "A fresher position for a Computer Science graduate with strong presentation ability and English communication, supporting TRS products in the field and remotely.",
  },
  {
    id: "chennai-web-developer",
    role: "Web Developer",
    station: "Chennai",
    type: "Full time",
    experience: "2+ years",
    qualification: "Computer Science degree",
    skills: ["ASP.Net", "MVC", "C#.Net", "VB.Net", "SQL Server"],
    detail:
      "Building and maintaining the web applications behind TRS examination solutions, working across the ASP.Net and SQL Server stack.",
  },
  {
    id: "chennai-software-developer",
    role: "Software Developer",
    station: "Chennai",
    type: "Full time",
    experience: "2+ years",
    qualification: "Computer Science degree",
    skills: ["ASP.Net", "Javascript", "C#.Net", "VB.Net", "SQL Server", "Crystal Report", "HTML", "CSS"],
    detail:
      "Developing the software that runs examination processing end to end, from data capture through to result publication.",
  },
  {
    id: "chennai-android-developer",
    role: "Android Developer",
    station: "Chennai",
    type: "Full time",
    experience: "2+ years",
    qualification: "Computer Science degree",
    skills: ["Java or Kotlin", "MVVM / MVP", "SQLite", "ORM", "XML", "Firebase"],
    detail:
      "Working on the mobile applications TRS deploys in examination halls, including attendance capture and remote examination tools.",
  },
  {
    id: "chennai-programmer",
    role: "Programmer",
    station: "Chennai",
    type: "Full time",
    experience: "2+ years",
    qualification: "Computer Science degree",
    skills: ["VB.Net or VB6.0", "SQL Server", "Crystal Report"],
    detail:
      "Supporting and extending the established TRS processing applications used across client sites.",
  },
  {
    id: "chennai-software-trainer",
    role: "Software Trainer",
    station: "Chennai",
    type: "Full time",
    experience: "5+ years",
    qualification: "Computer Science degree",
    skills: ["Dot Net"],
    detail:
      "Training client teams and internal staff on TRS software, with hands-on Dot Net experience essential.",
  },

  {
    id: "delhi-programmer",
    role: "Programmer",
    station: "Delhi",
    type: "Full time",
    experience: "2+ years",
    qualification: "Computer Science degree",
    skills: ["VB6 or VB.Net", "MS SQL Server", "Crystal Reports"],
    detail:
      "Supporting and extending the TRS processing applications used by clients across the northern region.",
  },
  {
    id: "delhi-software-developer",
    role: "Software Developer",
    station: "Delhi",
    type: "Full time",
    experience: "2+ years",
    qualification: "Computer Science degree",
    skills: ["VB.Net", "MS SQL Server", "Crystal Reports"],
    detail:
      "Building the software behind examination processing for the Delhi operation and its client base.",
  },
  {
    id: "delhi-database-developer",
    role: "Database Developer",
    station: "Delhi",
    type: "Full time",
    experience: "1+ years",
    qualification: "Computer Science degree",
    skills: ["MS SQL Server", "Crystal Report"],
    detail:
      "Designing and maintaining the databases that hold large volumes of examination and candidate data.",
  },
  {
    id: "delhi-implementation-executive",
    role: "Software Implementation Executive",
    station: "Delhi",
    type: "Full time",
    experience: "2+ years",
    qualification: "Computer Science degree",
    skills: ["MS SQL Server", "Crystal Report"],
    detail:
      "Deploying TRS solutions at client sites and seeing implementations through to a working handover.",
  },
  {
    id: "delhi-team-leader",
    role: "Team Leader — Project",
    station: "Delhi",
    type: "Full time",
    experience: "2+ years",
    qualification: "Any degree",
    skills: ["Project execution", "Client coordination"],
    detail:
      "Leading project execution and coordinating directly with clients through the examination cycle.",
  },
  {
    id: "delhi-project-coordinator",
    role: "Project Co-ordinator",
    station: "Delhi",
    type: "Full time",
    experience: "2+ years",
    qualification: "Any degree",
    skills: ["Project handling", "Client coordination"],
    detail:
      "Handling projects day to day and keeping clients informed through delivery.",
  },
  {
    id: "delhi-project-associate",
    role: "Project Associate",
    station: "Delhi",
    type: "Full time",
    experience: "1+ years",
    qualification: "Computer Science degree",
    skills: ["Logical thinking", "VB", "Java Scripts", "SQL"],
    detail:
      "Supporting project delivery with hands-on work across scripting and data, suited to someone with strong logical thinking.",
  },
  {
    id: "delhi-hardware-manager",
    role: "Hardware Incharge / Manager",
    station: "Delhi",
    type: "Full time",
    experience: "5+ years",
    qualification: "Diploma or degree in Electronics or Computer Science",
    skills: ["PC & laptop", "Printer", "Scanner", "Server installation"],
    detail:
      "Owning the hardware estate — installation and upkeep of PCs, laptops, printers, scanners and servers across the operation.",
  },
];

/**
 * A Gmail compose link, pre-addressed to TRS HR. The subject follows the
 * instruction on the TRS careers page: position, place, experience and
 * qualification all belong in the subject line.
 */
export function gmailApplyLink(vacancy) {
  const subject = `Application — ${vacancy.role}, ${vacancy.station}, ${vacancy.experience}, ${vacancy.qualification}`;

  const body = [
    "Dear TRS HR team,",
    "",
    `I would like to apply for the ${vacancy.role} position at your ${vacancy.station} office.`,
    "",
    `Position: ${vacancy.role}`,
    `Place: ${vacancy.station}`,
    `Years of experience: ${vacancy.experience}`,
    `Qualification: ${vacancy.qualification}`,
    "",
    "I have attached my updated CV for your consideration.",
    "",
    "Kind regards,",
    "",
  ].join("\n");

  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: HR_EMAIL,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}

/** Plain mailto, for anyone whose mail lives outside Gmail. */
export function mailtoApplyLink(vacancy) {
  const subject = `Application — ${vacancy.role}, ${vacancy.station}, ${vacancy.experience}, ${vacancy.qualification}`;
  return `mailto:${HR_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
