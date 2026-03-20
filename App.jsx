// VakeelMate v2.1 — Full multilingual
import { useState, useEffect, createContext, useContext } from "react";
import "./style.css";


// ── Language Context ──────────────────────────────────────────────────────────
const LangCtx = createContext("en");
const useLang = () => useContext(LangCtx);

const STRINGS = {
  en: {
    appName:"VakeelMate", tagline:"Legal Awareness for Everyone",
    disclaimer:"This platform provides legal awareness only. It is not a substitute for professional legal advice.",
    disclaimerShort:"Legal awareness only",
    signIn:"Sign In", createAccount:"Create Account", signOut:"Sign Out",
    emailAddress:"Email Address", password:"Password", fullName:"Full Name",
    tryDemo:"Try Demo Account", minPassword:"Min. 6 characters",
    fillAllFields:"Please fill in all fields.",
    invalidCredentials:"Invalid email or password.",
    passwordTooShort:"Password must be at least 6 characters.",
    accountExists:"An account with this email already exists.",
    accountCreated:"Account created! Please log in.",
    welcomeUser:"Welcome", howUsing:"How will you be using VakeelMate?",
    publicUser:"Public User", publicDesc:"Seeking legal awareness, FIR guidance & acts library",
    advocate:"Advocate", advocateDesc:"Draft documents, manage client cases & resources",
    continueDashboard:"Continue to Dashboard", selectRole:"Please select your role to continue.",
    overview:"Overview", jurisbot:"JurisBot", actsLibrary:"Acts Library",
    firGuide:"FIR Guide", draftGenerator:"Draft Generator",
    caseFiles:"Case Files", adminPanel:"Admin Panel", comingSoon:"SOON",
    advocateDashboard:"Advocate Dashboard", legalHub:"Legal Awareness Hub",
    advocateSubtitle:"Manage drafts, cases, and legal resources for your clients.",
    publicSubtitle:"Understand your rights. Navigate the law with confidence.",
    advocateAccess:"Advocate Access", publicAccess:"Public Access",
    actsAvailable:"Acts Available", jurisBotQueries:"JurisBot Queries",
    draftsGenerated:"Drafts Generated", languagesSupported:"Languages",
    yourTools:"Your Tools", exploreFeatures:"Explore Features", openArrow:"Open",
    jurisBotTitle:"JurisBot",
    jurisBotSubtitlePublic:"AI-powered legal awareness. Ask anything about Indian law.",
    jurisBotSubtitleLawyer:"Professional legal research assistant for advocates.",
    advocateMode:"Advocate Research Mode",
    jurisBotHelloPublic:"Hello! I'm JurisBot.",
    jurisBotDescPublic:"Describe your legal situation and I'll explain the relevant Indian acts, your rights, and suggested next steps. I provide awareness — not legal advice.",
    jurisBotDescLawyer:"Ask procedural queries, research statutes, look up sections, or get drafting guidance. Tailored for qualified advocates.",
    trySample:"Try a sample question", askJurisBot:"Ask JurisBot", thinking:"Thinking...",
    legalReport:"Legal Awareness Report", situationSummary:"Situation Summary",
    relevantAct:"Relevant Act", whatCovers:"What This Act Covers",
    yourRights:"Your Rights", suggestedSteps:"Suggested Next Steps",
    proceduralSteps:"Procedural Steps", caseReference:"Case Reference",
    urgencyLow:"LOW URGENCY", urgencyMed:"MEDIUM URGENCY", urgencyHigh:"HIGH URGENCY",
    recentQuestions:"Recent Questions",
    jurisBotPlaceholderPublic:"Describe your legal situation... e.g. 'My employer has not paid my salary for 3 months'",
    jurisBotPlaceholderLawyer:"e.g. 'What are the grounds for anticipatory bail under Section 438 CrPC?'",
    disclaimerPublic:"This platform provides legal awareness only. This is not legal advice. Please consult a qualified advocate before taking formal legal action.",
    disclaimerLawyer:"Responses are for research and reference only. Always verify citations independently. JurisBot does not replace professional legal judgement.",
    actsTitle:"Acts Library", actsSubtitle:"Browse key Indian legal acts — know your rights.",
    searchActs:"Search acts, keywords...", allCategories:"All",
    noResultsActs:"No acts found for", tryDifferent:"Try a different keyword.",
    backToActs:"Back to Acts Library", enacted:"Enacted",
    overviewLabel:"Overview", applicabilityLabel:"Applicability",
    rightsLabel:"Your Rights Under This Act", penaltiesLabel:"Penalties & Consequences",
    stepsLabel:"Steps to Take", faqsLabel:"Frequently Asked Questions",
    firTitle:"FIR Filing Guide",
    firSubtitle:"Everything you need to know about filing a First Information Report.",
    whatIsFir:"What is an FIR?",
    firDesc:"A First Information Report (FIR) is a written document prepared by police when they receive information about a cognisable offence — such as theft, assault, or fraud. It officially sets the criminal law in motion. Filing an FIR is your fundamental right as a citizen.",
    crpcSection:"CrPC Section",
    stepsTab:"Steps to File", docsTab:"Documents Needed", rightsTab:"Your Rights",
    draftTab:"Draft FIR", faqsTab:"FAQs",
    draftTitle:"Document Draft Generator",
    draftSubtitle:"Three steps to a professional legal document — pick type, fill details, get draft.",
    chooseType:"Choose Type", fillDetails:"Fill Details", yourDraft:"Your Draft",
    selectDocType:"Select the document you want to generate:",
    generateDraft:"Generate Draft", generating:"Generating...",
    copyDraft:"Copy Draft", edit:"Edit", newDraft:"New Draft", changeType:"Change Type",
    reviewBeforeFiling:"AI-generated template. Always review and adapt before filing in court.",
    selectLanguage:"Language",
    featureFirTitle:"FIR Filing Guide",
    featureFirDesc:"Step-by-step guide to understanding and filing an FIR, with sample templates.",
    featureDraftTitle:"Document Draft Generator",
    featureDraftDesc:"Generate professional legal drafts — petitions, notices, affidavits.",
    featureActsTitle:"Acts Library",
    featureActsDesc:"Browse Indian legal acts — IPC, RTI, POSH, Consumer Protection & more.",
    featureJurisTitle:"JurisBot – AI Legal Assistant",
    featureJurisDesc:"Ask any legal question. Get structured, reliable awareness based on Indian law.",
    demoTag:"HACKATHON DEMO",
    builtWith:"Built for legal awareness. Powered by AI.",

    navigation:"Navigation",
    firFormTitle:"Fill In Your FIR Details",
    firFormPS:"Police Station Details",
    firFormPersonal:"Your Personal Details",
    firFormIncident:"Incident Details",
    firFormAccused:"Accused & Evidence",
    firFieldPS:"Station Name",
    firFieldPSAddr:"Station Address",
    firFieldDate:"Date of Filing",
    firFieldName:"Your Full Name",
    firFieldParent:"Father / Mother Name",
    firFieldAge:"Age",
    firFieldAddr:"Your Address",
    firFieldPhone:"Contact Number",
    firFieldSubject:"Subject / Nature of Offence",
    firFieldIncDate:"Date of Incident",
    firFieldTime:"Approximate Time",
    firFieldLocation:"Location of Incident",
    firFieldDesc:"What Happened",
    firFieldAccused:"Accused Name (if known)",
    firFieldAccusedDesc:"Accused Description",
    firFieldWitness:"Witnesses (if any)",
    firFieldEvidence:"Evidence Available",
    firFieldLoss:"Loss / Injury Suffered",
    firStepByStep:"Step-by-Step Process",
    firDocsTitle:"Documents to Carry",
    firRightsTitle:"Your Legal Rights When Filing an FIR",
    multiLangTitle:"Multi-Language Support",
    multiLangDesc:"Access all content in English, Hindi, and Telugu.",
    caseFilesDesc:"Organise client information and case notes in one secure place.",
    draftingDoc:"Drafting your",
    errorGeneric:"Something went wrong. Please try again.",
    aiDraftError:"AI draft failed. Please try again.",
    generating:"Generating...",
    copy:"Copy",
    copied:"Copied!",
    generateDraft:"Generate Draft",
    changeType:"Change Type",
    livePreview:"Live Preview",
    aiDraftMode:"AI Draft Mode",
    featureDraftTitle:"Document Draft Generator",
    featureDraftDesc:"Draft legal notices, petitions, affidavits and more — in minutes.",
    featureFirTitle:"FIR Filing Guide",
    featureFirDesc:"Step-by-step guide to filing an FIR. Know your rights.",
    featureActsTitle:"Acts Library",

    aiGeneratedPreview:"AI-generated in selected language",
    livePreviewNote:"Updates as you type",
    firAlwaysAsk:"Always ask for a copy of your FIR before leaving the police station. It is free and it is your right.",
    fillWhatYouKnow:"fill in what you know, leave the rest blank",
    newDraft:"New Draft",
    edit:"Edit",
    firFormHint:"Fill the form on the left. Your complaint letter builds in real-time on the right. Unfilled fields stay as placeholders.",
    generatingDraft:"Generating your draft...",
    caseFilesTitle:"Case Files",
    caseFilesSubtitle:"Manage your client cases — track status, notes, hearings, and documents.",
    newCase:"New Case",
    addCase:"Add Case",
    editCase:"Edit Case",
    deleteCase:"Delete Case",
    saveCase:"Save Case",
    cancelBtn:"Cancel",
    noCases:"No cases yet.",
    noCasesHint:"Add your first client case using the button above.",
    searchCases:"Search by client name, case number, or court…",
    allStatus:"All Status",
    statusActive:"Active",
    statusHearing:"Hearing Scheduled",
    statusJudgment:"Awaiting Judgment",
    statusClosed:"Closed",
    statusStay:"Stay Granted",
    cfClientName:"Client Name",
    cfCaseNo:"Case Number",
    cfCourt:"Court / Tribunal",
    cfCaseType:"Case Type",
    cfOpponent:"Opposite Party",
    cfFir:"FIR / Complaint No.",
    cfStatus:"Status",
    cfNextDate:"Next Hearing Date",
    cfNotes:"Case Notes",
    cfCreated:"Opened",
    cfDaysOpen:"days open",
    cfHearing:"Next Hearing",
    cfNoDate:"No date set",
    cfDeleteConfirm:"Delete this case? This cannot be undone.",
    cfSection:"Sections / Acts",
    totalCases:"Total Cases",
    activeCases:"Active Cases",
    upcomingHearings:"Upcoming Hearings",
    closedCases:"Closed Cases",
    adminPanelTitle:"Admin Panel",
    adminPanelSubtitle:"Platform overview — usage stats, quick actions, and system health.",
    apOverview:"Overview",
    apActivity:"Recent Activity",
    apQuickActions:"Quick Actions",
    apSystemHealth:"System Health",
    apTotalUsers:"Total Users",
    apActiveToday:"Active Today",
    apQueriesTotal:"JurisBot Queries",
    apDraftsTotal:"Drafts Generated",
    apCasesTotal:"Total Cases",
    apActsTotal:"Acts in Library",
    apAvgResponse:"Avg Response",
    apUptime:"Uptime",
    apApiStatus:"API Status",
    apDbStatus:"Database",
    apLangCoverage:"Lang Coverage",
    apOperational:"Operational",
    apHealthy:"Healthy",
    apDegradedWarning:"Degraded",
    apClearCache:"Clear Cache",
    apExportData:"Export Data",
    apAddAct:"Add New Act",
    apManageUsers:"Manage Users",
    apActionDone:"Done!",
    apActivityTitle:"Recent System Events",
    apMs:"ms",
    apPercent:"100%",
    loadingAuth:"Loading…",
    creatingAccount:"Creating account…",
    signingIn:"Signing in…",
    authStorageError:"Could not save account. Please try again.",
    accountReady:"Account created! You can now sign in.",
    confirmPassword:"Confirm Password",
    passwordMismatch:"Passwords do not match.",
    rememberMe:"Stay signed in",
    forgotNote:"Accounts are stored on this device.",
    strongPassword:"Use at least 6 characters.",
    welcomeBack:"Welcome back",
    fieldRequired:"This field is required.",
    chipsPublic:["My landlord won't return my security deposit","I was wrongfully terminated from my job","Someone is harassing me online","My employer is not paying overtime","How to file a consumer complaint?"],
    chipsLawyer:["What is the limitation period for filing a civil suit?","How to draft a legal notice under Section 80 CPC?","Grounds for anticipatory bail under Section 438 CrPC","How to challenge an FIR quashing under Section 482 CrPC?","What evidence is admissible in a domestic violence case?","Procedure for filing a writ petition in High Court"],
    catColors:{Criminal:"#c0392b",Civil:"#2980b9",Labour:"#27ae60",Consumer:"#8e44ad",Women:"#e91e8c",RTI:"#e67e22",Property:"#795548"},
    acts:[
      {id:1,name:"Indian Penal Code",year:1860,category:"Criminal",overview:"The primary criminal code of India. Defines offences from theft to murder.",applicability:"Applies to all persons committing offences within India.",rights:["Right to know charges against you","Right to legal representation","Right to bail (bailable offences)","Right to a fair trial"],penalties:["Imprisonment from days to life","Fines per section","Death penalty for gravest offences"],steps:["Note the relevant IPC section","Consult a criminal lawyer immediately","Apply for bail if arrest is imminent"],faqs:[{q:"What is an FIR?",a:"A document prepared by police when they receive information about a cognisable offence."},{q:"Can I be arrested without a warrant?",a:"Yes, for cognisable offences."}],tags:["Criminal","Offences","Punishment"]},
      {id:2,name:"Right to Information Act",year:2005,category:"RTI",overview:"Empowers citizens to request information from public authorities. Promotes transparency in government.",applicability:"Applies to all public authorities funded by the government.",rights:["Right to inspect government records","Right to certified copies","Right to receive info within 30 days","Right to appeal if denied"],penalties:["Rs. 250/day penalty on PIO up to Rs. 25,000","Disciplinary action against officials"],steps:["Write a clear RTI application","Pay Rs. 10 fee","Submit to the PIO","Appeal if no response in 30 days"],faqs:[{q:"Who can file an RTI?",a:"Any Indian citizen. No reason required."},{q:"What info is exempt?",a:"National security, cabinet proceedings, or privacy-breaching info."}],tags:["Government","Transparency","Citizens"]},
      {id:3,name:"Consumer Protection Act",year:2019,category:"Consumer",overview:"Protects consumers from unfair trade practices, defective goods, and deficient services.",applicability:"Applies to all consumers purchasing goods or services for personal use.",rights:["Right to protection from hazardous goods","Right to product information","Right to seek redressal"],penalties:["Fines up to Rs. 10 lakh","Imprisonment up to 2 years for adulteration"],steps:["Try to resolve directly with seller","File complaint with District Consumer Commission","Appear on hearing dates"],faqs:[{q:"What is the time limit for filing?",a:"2 years from the cause of action."},{q:"Do I need a lawyer?",a:"No, you can file and argue yourself."}],tags:["Consumer","Redressal","Deficiency"]},
      {id:4,name:"Protection of Women from Domestic Violence Act",year:2005,category:"Women",overview:"Protects women from domestic violence including physical, verbal, emotional, and economic abuse.",applicability:"Women in domestic relationships — married, live-in, or family members.",rights:["Right to protection orders","Right to residence","Right to monetary relief","Right to child custody"],penalties:["Breach of protection order is non-bailable","Up to 1 year imprisonment or Rs. 20,000 fine"],steps:["Contact a Protection Officer or police","File application before Magistrate","Court issues order within 3 days in urgent cases"],faqs:[{q:"Can unmarried women use this act?",a:"Yes — women in live-in relationships are also protected."},{q:"Is this civil or criminal?",a:"Primarily civil but criminal consequences for breaching orders."}],tags:["Women","Domestic Violence","Protection"]},
      {id:5,name:"Employees Provident Funds Act",year:1952,category:"Labour",overview:"Mandates provident fund, pension, and insurance for employees' social security.",applicability:"Establishments with 20 or more employees.",rights:["Right to EPF contributions","Right to withdraw PF on retirement","Right to EPS pension","Right to EDLI insurance"],penalties:["Penalties up to Rs. 5,000/day","Up to 3 years imprisonment for defaults"],steps:["Check if employer is registered with EPFO","Access your UAN","File grievance at epfigms.gov.in"],faqs:[{q:"How much is the PF contribution?",a:"Both employer and employee contribute 12% of basic salary."},{q:"Can I withdraw early?",a:"Yes, partial withdrawals allowed for medical, home loan, marriage, education."}],tags:["Labour","PF","Social Security"]},
      {id:6,name:"Sexual Harassment of Women at Workplace Act (POSH)",year:2013,category:"Women",overview:"Protects women from sexual harassment at the workplace. Mandates Internal Complaints Committees.",applicability:"All workplaces with 10 or more employees.",rights:["Right to file complaint with ICC","Right to fair inquiry within 90 days","Right to interim relief","Right to transfer during inquiry"],penalties:["Respondent: apology to termination","Employer fined up to Rs. 50,000 for no ICC"],steps:["Report to ICC within 3 months","ICC conducts confidential inquiry","Employer acts on recommendations within 60 days"],faqs:[{q:"What counts as sexual harassment?",a:"Physical contact, sexual demands, showing pornography, verbal abuse, hostile environment."},{q:"What if there is no ICC?",a:"Complain to the Local Complaints Committee (LCC) set up by the District Officer."}],tags:["Women","Workplace","POSH"]},
      {id:7,name:"Transfer of Property Act",year:1882,category:"Property",overview:"Governs transfers of property — sale, mortgage, lease, gift, and exchange of immovable property.",applicability:"All transfers of immovable property in India.",rights:["Right to sale deed on purchase","Right to quiet possession","Right to redeem mortgage","Right to notice before lease termination"],penalties:["Unregistered transfers above Rs. 100 are invalid","Fraudulent transfers challengeable in court"],steps:["Get property title verified by a lawyer","Register sale deed with Sub-Registrar","Pay stamp duty","Obtain encumbrance certificate"],faqs:[{q:"Is registration mandatory?",a:"Yes, for any transfer above Rs. 100 under the Registration Act 1908."},{q:"What is an encumbrance certificate?",a:"Document showing all transactions registered against a property."}],tags:["Property","Sale","Mortgage"]},
      {id:8,name:"Motor Vehicles Act",year:1988,category:"Civil",overview:"Regulates road transport — registration, licensing, traffic rules, insurance, and accident compensation.",applicability:"All motor vehicles and persons using public roads in India.",rights:["Right to compensation from MACT","Right to third-party insurance","Right to Solatium Fund for hit-and-run","Right to contest challans"],penalties:["Fine up to Rs. 10,000 for drunk driving","Licence suspension","Up to 6 months imprisonment for rash driving"],steps:["Report accident to police and get FIR","File claim with MACT","Collect medical bills and income loss documents"],faqs:[{q:"What if the vehicle has no insurance?",a:"Third-party liability is mandatory. Victims can still claim from the insurer."},{q:"What is the Solatium Fund?",a:"Government fund compensating hit-and-run victims when vehicle/owner cannot be traced."}],tags:["Vehicle","Accident","Compensation"]},
      {id:9,name:"Protection of Children from Sexual Offences Act (POCSO)",year:2012,category:"Women",
        overview:"India's primary law protecting children under 18 from sexual abuse, assault, harassment, and exploitation. Mandates child-friendly procedures and special courts.",
        applicability:"Any person who commits a sexual offence against a child (under 18 years). Applies across India.",
        rights:["Right to child-friendly investigation and trial","Right to record statement before magistrate (not police)","Right to not be identified in media","Right to free legal aid","Right to be accompanied by trusted person","Right to compensation under Section 33(8)"],
        penalties:["Penetrative sexual assault: minimum 10 years, up to life imprisonment","Aggravated assault (by relative, authority): minimum 20 years to life","Sexual harassment: up to 3 years imprisonment","Pornography involving child: up to 5 years","Abetment or attempt: punishable on par with offence"],
        steps:["Report to police, CWC (Child Welfare Committee), or any adult","Police MUST register FIR immediately — cannot refuse","Statement recorded by female officer, at child's home/chosen place","Trial in Special Court — in camera (closed proceedings)","Identity of child protected throughout"],
        faqs:[{q:"Can a boy also be a victim under POCSO?",a:"Yes. POCSO protects all children regardless of gender — boys, girls, and transgender children under 18."},{q:"What if the abuser is a family member?",a:"POCSO still applies fully. In fact, abuse by a relative is 'aggravated' and carries harsher punishment."},{q:"Is there a time limit to report?",a:"No. There is no limitation period under POCSO. Delayed reporting is common and accepted by courts."},{q:"What is the role of CWC?",a:"The Child Welfare Committee ensures the child's welfare and rehabilitation throughout the case."}],
        tags:["Children","POCSO","Sexual Offences","Child Protection"]},
    ],
    firSteps:[
      {num:1,title:"Visit the nearest Police Station",desc:"Go to the police station in the jurisdiction where the crime occurred. You can file at any station — they can transfer it."},
      {num:2,title:"Speak to the Duty Officer / SHO",desc:"Ask to speak with the Station House Officer. Explain what happened clearly and ask to register an FIR."},
      {num:3,title:"Give a written complaint",desc:"Write the full incident — who, what, when, where, how. Be factual. If you cannot write, dictate to the officer."},
      {num:4,title:"FIR is written and read to you",desc:"The officer drafts the FIR from your complaint and reads it aloud. Review carefully before signing."},
      {num:5,title:"Sign and receive a free copy",desc:"Once signed, police MUST give you a free FIR copy. This is your right under Section 154 CrPC."},
      {num:6,title:"If police refuse — escalate",desc:"Write to the Superintendent of Police, approach a Magistrate under Section 156(3) CrPC, or file an e-FIR online."},
    ],
    firDocs:[
      {icon:"🪪",name:"Identity Proof",note:"Aadhaar card, Voter ID, Passport, or Driving Licence"},
      {icon:"📝",name:"Written Complaint",note:"Your handwritten or typed account of the incident"},
      {icon:"📸",name:"Photographs / Videos",note:"Any visual evidence of the crime or injury"},
      {icon:"📱",name:"Screenshots / Call Records",note:"For cyber crimes, online fraud, or phone harassment"},
      {icon:"🏥",name:"Medical Reports",note:"For assault, domestic violence, or injury cases"},
      {icon:"📄",name:"Supporting Documents",note:"Contracts, receipts, agreements relevant to the case"},
    ],
    firRights:[
      {title:"Right to free FIR copy",desc:"Legally entitled to a free copy immediately after filing — Section 154(2) CrPC."},
      {title:"Right to file at any station",desc:"For serious offences you can file a Zero FIR at any station. Police cannot refuse on jurisdiction grounds."},
      {title:"Right to know FIR number",desc:"You must be given the FIR number for tracking. Note it down."},
      {title:"Right against refusal",desc:"If police refuse, complain to the SP, file with a Magistrate, or use the state e-FIR portal."},
      {title:"Right to legal representation",desc:"You can bring a lawyer or trusted person when filing."},
      {title:"Right to confidentiality",desc:"For sexual offences, the victim's identity is protected by law."},
    ],
    firFaqs:[
      {q:"What is the difference between cognisable and non-cognisable offences?",a:"For cognisable offences (murder, robbery) police can arrest without warrant and must register FIR. For non-cognisable, they file an NCR."},
      {q:"Can I file an FIR online?",a:"Yes! Many states offer e-FIR portals. Use cybercrime.gov.in for cybercrime."},
      {q:"What if I don't know the accused's name?",a:"You can file against 'unknown persons'. Describe physical features or vehicle numbers."},
      {q:"Is there a time limit to file an FIR?",a:"No strict limit, but filing promptly strengthens your case."},
      {q:"What happens after an FIR is filed?",a:"Police register the case, assign an FIR number, and begin investigation. Charge sheet within 60 days."},
    ],
    draftTypes:[
      {id:"legal_notice",icon:"📨",name:"Legal Notice",desc:"Demand letter before litigation"},
      {id:"petition",icon:"📃",name:"Petition",desc:"Court petition or application"},
      {id:"affidavit",icon:"🔏",name:"Affidavit",desc:"Sworn statement of facts"},
      {id:"reply_notice",icon:"📩",name:"Reply Notice",desc:"Response to a received notice"},
      {id:"vakalatnama",icon:"📋",name:"Vakalatnama",desc:"Advocate authorisation deed"},
      {id:"bail_app",icon:"🔓",name:"Bail Application",desc:"Regular or anticipatory bail"},
      {id:"stay_order",icon:"📌",name:"Stay Application",desc:"Interim stay of proceedings"},
      {id:"complaint",icon:"📮",name:"Complaint",desc:"Formal complaint to authority"},
    ],
    draftSections:{
      legal_notice:[{label:"Advocate Details",fields:["advocateName","barNumber"]},{label:"Client Details",fields:["clientName","clientAddress"]},{label:"Opposite Party",fields:["opponentName","opponentAddress"]},{label:"Matter Details",fields:["subject","facts","relief","noticePeriod"]}],
      petition:[{label:"Advocate Details",fields:["advocateName","barNumber"]},{label:"Petitioner",fields:["petitionerName","petitionerAddress"]},{label:"Respondent",fields:["respondentName","respondentAddress"]},{label:"Court & Matter",fields:["court","caseType","subject","facts","prayer"]}],
      affidavit:[{label:"Advocate Details",fields:["advocateName"]},{label:"Deponent Details",fields:["deponentName","deponentAddress","deponentAge"]},{label:"Affidavit Content",fields:["subject","facts","place","date"]}],
      reply_notice:[{label:"Advocate Details",fields:["advocateName","barNumber"]},{label:"Client Details",fields:["clientName","clientAddress"]},{label:"Original Notice",fields:["senderName","senderAddress","noticeDate"]},{label:"Reply Content",fields:["subject","facts","reply"]}],
      vakalatnama:[{label:"Advocate Details",fields:["advocateName","barNumber"]},{label:"Client Details",fields:["clientName","clientAddress"]},{label:"Court & Matter",fields:["court","caseNumber","subject"]}],
      bail_app:[{label:"Advocate Details",fields:["advocateName","barNumber"]},{label:"Accused Details",fields:["accusedName","accusedAddress"]},{label:"Case Details",fields:["court","fir","policeStation","charges"]},{label:"Bail Grounds",fields:["bailGrounds","suretyName"]}],
      stay_order:[{label:"Advocate Details",fields:["advocateName","barNumber"]},{label:"Parties",fields:["petitionerName","respondentName"]},{label:"Court & Order",fields:["court","caseNumber","impugnedOrder"]},{label:"Stay Grounds",fields:["stayGrounds","urgency"]}],
      complaint:[{label:"Advocate Details",fields:["advocateName","barNumber"]},{label:"Complainant",fields:["complainantName","complainantAddress"]},{label:"Opposite Party",fields:["opponentName","opponentAddress"]},{label:"Forum & Matter",fields:["authority","subject","facts","relief"]}],
    },
    fieldMeta:{
      advocateName:{label:"Advocate Full Name",placeholder:"Adv. Full Name"},barNumber:{label:"Bar Registration No.",placeholder:"BCI/State No."},clientName:{label:"Client Name",placeholder:"Full name"},clientAddress:{label:"Client Address",placeholder:"Complete address",multi:true},opponentName:{label:"Opposite Party Name",placeholder:"Full name"},opponentAddress:{label:"Opposite Party Address",placeholder:"Complete address",multi:true},petitionerName:{label:"Petitioner Name",placeholder:"Full name"},petitionerAddress:{label:"Petitioner Address",placeholder:"Complete address",multi:true},respondentName:{label:"Respondent Name",placeholder:"Full name"},respondentAddress:{label:"Respondent Address",placeholder:"Complete address",multi:true},deponentName:{label:"Deponent Name",placeholder:"Full name"},deponentAddress:{label:"Deponent Address",placeholder:"Complete address",multi:true},deponentAge:{label:"Deponent Age",placeholder:"e.g. 35",type:"number"},senderName:{label:"Notice Sender Name",placeholder:"Who sent the notice?"},senderAddress:{label:"Sender Address",placeholder:"Address of sender",multi:true},noticeDate:{label:"Date of Original Notice",placeholder:"",type:"date"},court:{label:"Court / Tribunal",placeholder:"e.g. District Court, Hyderabad"},caseType:{label:"Case Type",placeholder:"e.g. Civil Suit"},caseNumber:{label:"Case Number",placeholder:"e.g. CS No. 123/2024"},fir:{label:"FIR Number",placeholder:"e.g. FIR No. 45/2024"},policeStation:{label:"Police Station",placeholder:"Station name"},charges:{label:"Charges / IPC Sections",placeholder:"e.g. S.420, S.406 IPC",multi:true},bailGrounds:{label:"Grounds for Bail",placeholder:"List the grounds clearly…",multi:true},suretyName:{label:"Proposed Surety Name",placeholder:"Name and address"},impugnedOrder:{label:"Impugned Order / Date",placeholder:"Order being challenged"},stayGrounds:{label:"Grounds for Stay",placeholder:"Why stay should be granted…",multi:true},urgency:{label:"Urgency / Interim Relief",placeholder:"Nature of urgency"},subject:{label:"Subject / Nature of Matter",placeholder:"Brief subject line"},facts:{label:"Facts of the Case",placeholder:"Describe the facts clearly…",multi:true},prayer:{label:"Prayer / Relief Sought",placeholder:"Specific relief sought…",multi:true},relief:{label:"Relief Claimed",placeholder:"What relief is sought?",multi:true},reply:{label:"Reply / Response Content",placeholder:"Your reply to the notice…",multi:true},noticePeriod:{label:"Notice Period (days)",placeholder:"e.g. 15",type:"number"},place:{label:"Place of Affidavit",placeholder:"e.g. Hyderabad"},date:{label:"Date",placeholder:"",type:"date"},authority:{label:"Authority / Forum",placeholder:"e.g. District Consumer Commission"},complainantName:{label:"Complainant Name",placeholder:"Full name"},complainantAddress:{label:"Complainant Address",placeholder:"Complete address",multi:true},
    },
    version:"v1.0 — Hackathon Build",
  },
  hi: {
    appName:"VakeelMate", tagline:"सभी के लिए कानूनी जागरूकता",
    disclaimer:"यह मंच केवल कानूनी जागरूकता प्रदान करता है। यह पेशेवर कानूनी सलाह का विकल्प नहीं है।",
    disclaimerShort:"केवल कानूनी जागरूकता",
    signIn:"साइन इन", createAccount:"खाता बनाएं", signOut:"साइन आउट",
    emailAddress:"ईमेल पता", password:"पासवर्ड", fullName:"पूरा नाम",
    tryDemo:"डेमो आज़माएं", minPassword:"न्यूनतम 6 अक्षर",
    fillAllFields:"कृपया सभी फ़ील्ड भरें।",
    invalidCredentials:"ईमेल या पासवर्ड गलत है।",
    passwordTooShort:"पासवर्ड कम से कम 6 अक्षर का होना चाहिए।",
    accountExists:"इस ईमेल से पहले से खाता है।",
    accountCreated:"खाता बन गया! लॉग इन करें।",
    welcomeUser:"स्वागत है", howUsing:"आप VakeelMate का उपयोग कैसे करेंगे?",
    publicUser:"सामान्य उपयोगकर्ता", publicDesc:"कानूनी जागरूकता, FIR और अधिनियम पुस्तकालय",
    advocate:"अधिवक्ता", advocateDesc:"दस्तावेज़ तैयार करें, मुवक्किल के मामले प्रबंधित करें",
    continueDashboard:"डैशबोर्ड पर जाएं", selectRole:"कृपया अपनी भूमिका चुनें।",
    overview:"अवलोकन", jurisbot:"जुरिसबॉट", actsLibrary:"अधिनियम पुस्तकालय",
    firGuide:"FIR गाइड", draftGenerator:"प्रारूप जनरेटर",
    caseFiles:"मामले की फ़ाइलें", adminPanel:"एडमिन पैनल", comingSoon:"जल्द",
    advocateDashboard:"अधिवक्ता डैशबोर्ड", legalHub:"कानूनी जागरूकता केंद्र",
    advocateSubtitle:"प्रारूप, मामले और कानूनी संसाधन प्रबंधित करें।",
    publicSubtitle:"अपने अधिकार जानें। आत्मविश्वास से कानून को समझें।",
    advocateAccess:"अधिवक्ता पहुंच", publicAccess:"सार्वजनिक पहुंच",
    actsAvailable:"उपलब्ध अधिनियम", jurisBotQueries:"जुरिसबॉट प्रश्न",
    draftsGenerated:"तैयार प्रारूप", languagesSupported:"भाषाएं",
    yourTools:"आपके उपकरण", exploreFeatures:"सुविधाएं देखें", openArrow:"खोलें",
    jurisBotTitle:"जुरिसबॉट",
    jurisBotSubtitlePublic:"AI-संचालित कानूनी जागरूकता। भारतीय कानून के बारे में कुछ भी पूछें।",
    jurisBotSubtitleLawyer:"अधिवक्ताओं के लिए पेशेवर कानूनी अनुसंधान सहायक।",
    advocateMode:"अधिवक्ता अनुसंधान मोड",
    jurisBotHelloPublic:"नमस्ते! मैं जुरिसबॉट हूं।",
    jurisBotDescPublic:"अपनी कानूनी स्थिति बताएं — मैं प्रासंगिक भारतीय कानून, आपके अधिकार और सुझाव समझाऊंगा।",
    jurisBotDescLawyer:"प्रक्रियागत प्रश्न पूछें, विधियों का अनुसंधान करें, धाराएं देखें।",
    trySample:"नमूना प्रश्न आज़माएं", askJurisBot:"जुरिसबॉट से पूछें", thinking:"सोच रहा हूं...",
    legalReport:"कानूनी जागरूकता रिपोर्ट", situationSummary:"स्थिति सारांश",
    relevantAct:"प्रासंगिक अधिनियम", whatCovers:"यह अधिनियम क्या कवर करता है",
    yourRights:"आपके अधिकार", suggestedSteps:"सुझाए गए अगले कदम",
    proceduralSteps:"प्रक्रियागत कदम", caseReference:"मामले का संदर्भ",
    urgencyLow:"कम जरूरी", urgencyMed:"मध्यम जरूरी", urgencyHigh:"अत्यंत जरूरी",
    recentQuestions:"हाल के प्रश्न",
    jurisBotPlaceholderPublic:"अपनी कानूनी स्थिति बताएं...",
    jurisBotPlaceholderLawyer:"जैसे 'धारा 438 CrPC के तहत अग्रिम जमानत के क्या आधार हैं?'",
    disclaimerPublic:"यह मंच केवल कानूनी जागरूकता प्रदान करता है। यह कानूनी सलाह नहीं है।",
    disclaimerLawyer:"प्रतिक्रियाएं केवल अनुसंधान के लिए हैं। स्वतंत्र रूप से जांच करें।",
    actsTitle:"अधिनियम पुस्तकालय", actsSubtitle:"प्रमुख भारतीय कानूनी अधिनियम देखें — अपने अधिकार जानें।",
    searchActs:"अधिनियम, कीवर्ड खोजें...", allCategories:"सभी",
    noResultsActs:"कोई अधिनियम नहीं मिला", tryDifferent:"कोई अन्य कीवर्ड आज़माएं।",
    backToActs:"अधिनियम पुस्तकालय पर वापस", enacted:"लागू",
    overviewLabel:"अवलोकन", applicabilityLabel:"लागूपन",
    rightsLabel:"इस अधिनियम के तहत आपके अधिकार", penaltiesLabel:"दंड और परिणाम",
    stepsLabel:"उठाए जाने वाले कदम", faqsLabel:"अक्सर पूछे जाने वाले प्रश्न",
    firTitle:"FIR दाखिल करने की गाइड",
    firSubtitle:"प्रथम सूचना रिपोर्ट दाखिल करने के बारे में सब कुछ।",
    whatIsFir:"FIR क्या है?",
    firDesc:"प्रथम सूचना रिपोर्ट (FIR) पुलिस द्वारा तैयार किया गया दस्तावेज़ है जब उन्हें संज्ञेय अपराध की सूचना मिलती है।",
    crpcSection:"CrPC धारा",
    stepsTab:"दाखिल करने के चरण", docsTab:"आवश्यक दस्तावेज़", rightsTab:"आपके अधिकार",
    draftTab:"FIR प्रारूप", faqsTab:"सामान्य प्रश्न",
    draftTitle:"दस्तावेज़ प्रारूप जनरेटर",
    draftSubtitle:"तीन चरणों में पेशेवर कानूनी दस्तावेज़।",
    chooseType:"प्रकार चुनें", fillDetails:"विवरण भरें", yourDraft:"आपका प्रारूप",
    selectDocType:"वह दस्तावेज़ चुनें जो आप बनाना चाहते हैं:",
    generateDraft:"प्रारूप बनाएं", generating:"बन रहा है...",
    copyDraft:"प्रारूप कॉपी करें", edit:"संपादित करें", newDraft:"नया प्रारूप", changeType:"प्रकार बदलें",
    reviewBeforeFiling:"AI-जनित टेम्पलेट। दाखिल करने से पहले समीक्षा करें।",
    selectLanguage:"भाषा",
    featureFirTitle:"FIR दाखिल गाइड", featureFirDesc:"FIR समझने और दाखिल करने की चरण-दर-चरण गाइड।",
    featureDraftTitle:"दस्तावेज़ प्रारूप जनरेटर", featureDraftDesc:"पेशेवर कानूनी प्रारूप बनाएं।",
    featureActsTitle:"अधिनियम पुस्तकालय", featureActsDesc:"IPC, RTI, POSH और अधिक देखें।",
    featureJurisTitle:"जुरिसबॉट – AI सहायक", featureJurisDesc:"कोई भी कानूनी प्रश्न पूछें।",
    demoTag:"हैकाथॉन डेमो",
    builtWith:"कानूनी जागरूकता के लिए। AI द्वारा संचालित।",

    navigation:"नेविगेशन",
    firFormTitle:"FIR विवरण भरें",
    firFormPS:"पुलिस स्टेशन विवरण",
    firFormPersonal:"आपका व्यक्तिगत विवरण",
    firFormIncident:"घटना का विवरण",
    firFormAccused:"आरोपी और साक्ष्य",
    firFieldPS:"स्टेशन का नाम",
    firFieldPSAddr:"स्टेशन का पता",
    firFieldDate:"दर्ज करने की तारीख",
    firFieldName:"आपका पूरा नाम",
    firFieldParent:"पिता / माता का नाम",
    firFieldAge:"आयु",
    firFieldAddr:"आपका पता",
    firFieldPhone:"संपर्क नंबर",
    firFieldSubject:"विषय / अपराध की प्रकृति",
    firFieldIncDate:"घटना की तारीख",
    firFieldTime:"अनुमानित समय",
    firFieldLocation:"घटना स्थान",
    firFieldDesc:"क्या हुआ",
    firFieldAccused:"आरोपी का नाम (यदि ज्ञात हो)",
    firFieldAccusedDesc:"आरोपी का विवरण",
    firFieldWitness:"गवाह (यदि कोई हो)",
    firFieldEvidence:"उपलब्ध साक्ष्य",
    firFieldLoss:"नुकसान / चोट",
    firStepByStep:"चरण-दर-चरण प्रक्रिया",
    firDocsTitle:"आवश्यक दस्तावेज़",
    firRightsTitle:"FIR दर्ज करते समय आपके कानूनी अधिकार",
    multiLangTitle:"बहुभाषी सहायता",
    multiLangDesc:"अंग्रेज़ी, हिंदी और तेलुगु में सभी सामग्री पाएं।",
    caseFilesDesc:"ग्राहक जानकारी और केस नोट्स एक सुरक्षित स्थान पर व्यवस्थित करें।",
    draftingDoc:"तैयार किया जा रहा है",
    errorGeneric:"कुछ गलत हुआ। कृपया पुनः प्रयास करें।",
    aiDraftError:"AI ड्राफ्ट विफल। कृपया पुनः प्रयास करें।",
    generating:"तैयार हो रहा है...",
    copy:"कॉपी करें",
    copied:"कॉपी हो गया!",
    generateDraft:"ड्राफ्ट तैयार करें",
    changeType:"प्रकार बदलें",
    livePreview:"लाइव प्रीव्यू",
    aiDraftMode:"AI ड्राफ्ट मोड",
    featureDraftTitle:"दस्तावेज़ ड्राफ्ट जेनरेटर",
    featureDraftDesc:"कानूनी नोटिस, याचिकाएं, शपथ पत्र - मिनटों में।",
    featureActsDesc:"भारतीय कानूनी अधिनियम ब्राउज़ करें — IPC, RTI, POSH, उपभोक्ता संरक्षण आदि।",
    featureJurisDesc:"कोई भी कानूनी प्रश्न पूछें। भारतीय कानून पर संरचित जागरूकता प्राप्त करें।",
    featureFirTitle:"FIR दर्ज करने की मार्गदर्शिका",
    featureFirDesc:"FIR दर्ज करने की चरण-दर-चरण मार्गदर्शिका। अपने अधिकार जानें।",
    featureActsTitle:"अधिनियम पुस्तकालय",

    aiGeneratedPreview:"चयनित भाषा में AI-जनित",
    livePreviewNote:"टाइप करते समय अपडेट होता है",
    firAlwaysAsk:"पुलिस स्टेशन छोड़ने से पहले FIR की एक प्रति अवश्य मांगें। यह निशुल्क है और आपका अधिकार है।",
    fillWhatYouKnow:"जो पता हो भरें, बाकी खाली छोड़ें",
    newDraft:"नया ड्राफ्ट",
    edit:"संपादित करें",
    firFormHint:"बाईं ओर फ़ॉर्म भरें। आपकी शिकायत पत्र दाईं ओर रियल-टाइम में बनती है।",
    generatingDraft:"आपका ड्राफ्ट तैयार हो रहा है...",
    caseFilesTitle:"मामले की फ़ाइलें",
    caseFilesSubtitle:"अपने मुवक्किल के मामले प्रबंधित करें — स्थिति, नोट्स, सुनवाई और दस्तावेज़ ट्रैक करें।",
    newCase:"नया मामला",
    addCase:"मामला जोड़ें",
    editCase:"मामला संपादित करें",
    deleteCase:"मामला हटाएं",
    saveCase:"मामला सहेजें",
    cancelBtn:"रद्द करें",
    noCases:"अभी कोई मामला नहीं।",
    noCasesHint:"ऊपर दिए बटन से पहला मुवक्किल मामला जोड़ें।",
    searchCases:"मुवक्किल का नाम, केस नंबर या कोर्ट खोजें…",
    allStatus:"सभी स्थिति",
    statusActive:"सक्रिय",
    statusHearing:"सुनवाई निर्धारित",
    statusJudgment:"निर्णय की प्रतीक्षा",
    statusClosed:"बंद",
    statusStay:"स्थगन स्वीकृत",
    cfClientName:"मुवक्किल का नाम",
    cfCaseNo:"मामला संख्या",
    cfCourt:"न्यायालय / न्यायाधिकरण",
    cfCaseType:"मामले का प्रकार",
    cfOpponent:"विपक्षी पक्ष",
    cfFir:"FIR / शिकायत संख्या",
    cfStatus:"स्थिति",
    cfNextDate:"अगली सुनवाई तिथि",
    cfNotes:"मामले के नोट्स",
    cfCreated:"शुरू हुआ",
    cfDaysOpen:"दिन से खुला",
    cfHearing:"अगली सुनवाई",
    cfNoDate:"तिथि निर्धारित नहीं",
    cfDeleteConfirm:"यह मामला हटाएं? यह पूर्ववत नहीं किया जा सकता।",
    cfSection:"धाराएं / अधिनियम",
    totalCases:"कुल मामले",
    activeCases:"सक्रिय मामले",
    upcomingHearings:"आगामी सुनवाई",
    closedCases:"बंद मामले",
    adminPanelTitle:"एडमिन पैनल",
    adminPanelSubtitle:"प्लेटफ़ॉर्म अवलोकन — उपयोग आंकड़े, त्वरित क्रियाएं और सिस्टम स्वास्थ्य।",
    apOverview:"अवलोकन",
    apActivity:"हाल की गतिविधि",
    apQuickActions:"त्वरित क्रियाएं",
    apSystemHealth:"सिस्टम स्वास्थ्य",
    apTotalUsers:"कुल उपयोगकर्ता",
    apActiveToday:"आज सक्रिय",
    apQueriesTotal:"JurisBot प्रश्न",
    apDraftsTotal:"उत्पन्न ड्राफ्ट",
    apCasesTotal:"कुल मामले",
    apActsTotal:"लाइब्रेरी में अधिनियम",
    apAvgResponse:"औसत प्रतिक्रिया",
    apUptime:"अपटाइम",
    apApiStatus:"API स्थिति",
    apDbStatus:"डेटाबेस",
    apLangCoverage:"भाषा कवरेज",
    apOperational:"चालू",
    apHealthy:"स्वस्थ",
    apDegradedWarning:"खराब",
    apClearCache:"कैश साफ़ करें",
    apExportData:"डेटा निर्यात",
    apAddAct:"नया अधिनियम जोड़ें",
    apManageUsers:"उपयोगकर्ता प्रबंधित करें",
    apActionDone:"हो गया!",
    apActivityTitle:"हाल की सिस्टम गतिविधियां",
    apMs:"ms",
    apPercent:"100%",
    loadingAuth:"लोड हो रहा है…",
    creatingAccount:"खाता बनाया जा रहा है…",
    signingIn:"साइन इन हो रहा है…",
    authStorageError:"खाता सहेजा नहीं जा सका। कृपया पुनः प्रयास करें।",
    accountReady:"खाता बन गया! अब साइन इन करें।",
    confirmPassword:"पासवर्ड की पुष्टि करें",
    passwordMismatch:"पासवर्ड मेल नहीं खाते।",
    rememberMe:"साइन इन रहें",
    forgotNote:"खाते इस डिवाइस पर संग्रहीत हैं।",
    strongPassword:"कम से कम 6 अक्षर उपयोग करें।",
    welcomeBack:"वापस स्वागत है",
    fieldRequired:"यह फ़ील्ड आवश्यक है।",
    chipsPublic:["मेरा मकान मालिक सुरक्षा जमा वापस नहीं कर रहा","मुझे गलत तरीके से नौकरी से निकाला","कोई मुझे ऑनलाइन परेशान कर रहा है","मेरा नियोक्ता ओवरटाइम नहीं दे रहा","उपभोक्ता शिकायत कैसे दर्ज करें?"],
    chipsLawyer:["दीवानी मुकदमे की सीमा अवधि क्या है?","धारा 80 CPC के तहत कानूनी नोटिस कैसे तैयार करें?","धारा 438 CrPC के तहत अग्रिम जमानत के आधार","धारा 482 CrPC के तहत FIR रद्द करने की चुनौती","घरेलू हिंसा मामले में कौन से साक्ष्य मान्य हैं?","उच्च न्यायालय में रिट याचिका की प्रक्रिया"],
    catColors:{Criminal:"#c0392b",Civil:"#2980b9",Labour:"#27ae60",Consumer:"#8e44ad",Women:"#e91e8c",RTI:"#e67e22",Property:"#795548"},
    acts:[
      {id:1,name:"भारतीय दंड संहिता",year:1860,category:"Criminal",overview:"भारत की प्राथमिक आपराधिक संहिता। चोरी से हत्या तक के अपराधों को परिभाषित करती है।",applicability:"भारत में अपराध करने वाले सभी पर लागू।",rights:["आरोप जानने का अधिकार","कानूनी प्रतिनिधित्व का अधिकार","जमानत का अधिकार","निष्पक्ष सुनवाई का अधिकार"],penalties:["कारावास (दिनों से आजीवन)","जुर्माना","मृत्युदंड (गंभीर अपराध)"],steps:["IPC धारा नोट करें","वकील से तुरंत परामर्श करें","जरूरत हो तो अग्रिम जमानत लें"],faqs:[{q:"FIR क्या है?",a:"पुलिस द्वारा संज्ञेय अपराध पर तैयार दस्तावेज़।"},{q:"बिना वारंट गिरफ्तारी?",a:"हां, संज्ञेय अपराधों में।"}],tags:["आपराधिक","अपराध","दंड"]},
      {id:2,name:"सूचना का अधिकार अधिनियम",year:2005,category:"RTI",overview:"नागरिकों को सरकारी जानकारी मांगने का अधिकार देता है।",applicability:"सरकार वित्त पोषित सभी सार्वजनिक प्राधिकरणों पर।",rights:["सरकारी रिकॉर्ड देखने का अधिकार","30 दिनों में जानकारी पाने का अधिकार","अपील का अधिकार"],penalties:["देरी पर PIO को ₹250/दिन जुर्माना"],steps:["RTI आवेदन लिखें","₹10 शुल्क दें","PIO को जमा करें","30 दिनों में जवाब न मिले तो अपील करें"],faqs:[{q:"RTI कौन दर्ज कर सकता है?",a:"कोई भी भारतीय नागरिक।"},{q:"छूट प्राप्त जानकारी?",a:"राष्ट्रीय सुरक्षा और गोपनीयता से जुड़ी जानकारी।"}],tags:["सरकार","पारदर्शिता","नागरिक"]},
      {id:3,name:"उपभोक्ता संरक्षण अधिनियम",year:2019,category:"Consumer",overview:"उपभोक्ताओं को अनुचित व्यापार प्रथाओं और दोषपूर्ण सेवाओं से बचाता है।",applicability:"व्यक्तिगत उपयोग के लिए सामान खरीदने वालों पर।",rights:["खतरनाक वस्तुओं से सुरक्षा","उत्पाद जानकारी का अधिकार","निवारण का अधिकार"],penalties:["₹10 लाख जुर्माना","मिलावट पर 2 साल कारावास"],steps:["विक्रेता से सीधे समाधान की कोशिश","जिला उपभोक्ता आयोग में शिकायत"],faqs:[{q:"दर्ज करने की समय सीमा?",a:"2 वर्ष के भीतर।"},{q:"वकील जरूरी है?",a:"नहीं, खुद दर्ज कर सकते हैं।"}],tags:["उपभोक्ता","निवारण","दोष"]},
      {id:4,name:"घरेलू हिंसा से महिलाओं का संरक्षण",year:2005,category:"Women",overview:"घरेलू हिंसा से महिलाओं की कानूनी सुरक्षा।",applicability:"विवाहित, लिव-इन या परिवार की महिलाओं पर।",rights:["संरक्षण आदेश का अधिकार","घर में रहने का अधिकार","भरण-पोषण का अधिकार"],penalties:["आदेश उल्लंघन पर 1 साल कारावास या ₹20,000"],steps:["संरक्षण अधिकारी से संपर्क करें","मजिस्ट्रेट के समक्ष आवेदन दें"],faqs:[{q:"अविवाहित महिलाएं लाभ ले सकती हैं?",a:"हां, लिव-इन में रहने वाली महिलाएं भी।"}],tags:["महिला","घरेलू हिंसा","संरक्षण"]},
      {id:5,name:"कर्मचारी भविष्य निधि अधिनियम",year:1952,category:"Labour",overview:"कर्मचारियों की सामाजिक सुरक्षा के लिए PF अनिवार्य।",applicability:"20+ कर्मचारियों वाले प्रतिष्ठानों पर।",rights:["EPF योगदान का अधिकार","PF निकालने का अधिकार","EPS पेंशन का अधिकार"],penalties:["नियोक्ता पर ₹5,000/दिन जुर्माना"],steps:["EPFO नमोदीकरण जांचें","UAN प्राप्त करें"],faqs:[{q:"PF योगदान कितना?",a:"नियोक्ता और कर्मचारी दोनों 12%।"}],tags:["श्रम","PF","सामाजिक सुरक्षा"]},
      {id:6,name:"POSH अधिनियम",year:2013,category:"Women",overview:"कार्यस्थल पर यौन उत्पीड़न से महिलाओं की रक्षा।",applicability:"10+ कर्मचारियों वाले सभी कार्यस्थलों पर।",rights:["ICC में शिकायत का अधिकार","90 दिनों में जांच"],penalties:["आरोपी पर चेतावनी से बर्खास्तगी तक"],steps:["3 महीने में ICC को रिपोर्ट करें"],faqs:[{q:"यौन उत्पीड़न क्या है?",a:"शारीरिक संपर्क, यौन मांग, अश्लील सामग्री दिखाना।"}],tags:["महिला","कार्यस्थल","POSH"]},
      {id:7,name:"संपत्ति हस्तांतरण अधिनियम",year:1882,category:"Property",overview:"बिक्री, बंधक, पट्टा और संपत्ति मार्पिडी को नियंत्रित करता है।",applicability:"भारत में अचल संपत्ति के सभी हस्तांतरण पर।",rights:["बिक्री विलेख का अधिकार","शांतिपूर्ण कब्जे का अधिकार"],penalties:["₹100 से अधिक की अपंजीकृत संपत्ति हस्तांतरण अवैध"],steps:["वकील से शीर्षक सत्यापित करें","उप-रजिस्ट्रार के पास पंजीकरण करें"],faqs:[{q:"पंजीकरण अनिवार्य है?",a:"हां, ₹100 से अधिक के लिए।"}],tags:["संपत्ति","बिक्री","बंधक"]},
      {id:8,name:"मोटर वाहन अधिनियम",year:1988,category:"Civil",overview:"सड़क परिवहन, बीमा और दुर्घटना मुआवजे को नियंत्रित करता है।",applicability:"सभी मोटर वाहनों और सड़क उपयोगकर्ताओं पर।",rights:["MACT से मुआवजे का अधिकार","तृतीय-पक्ष बीमा का अधिकार"],penalties:["नशे में गाड़ी पर ₹10,000","लाइसेंस निलंबन"],steps:["पुलिस को दुर्घटना की सूचना दें","MACT में दावा दर्ज करें"],faqs:[{q:"हिट-एंड-रन में मुआवजा?",a:"Solatium Fund से।"}],tags:["वाहन","दुर्घटना","मुआवजा"]},
      {id:9,name:"यौन अपराधों से बच्चों का संरक्षण अधिनियम (POCSO)",year:2012,category:"Women",
        overview:"18 वर्ष से कम उम्र के बच्चों को यौन शोषण, उत्पीड़न और दुर्व्यवहार से बचाने वाला भारत का प्राथमिक कानून। बाल-सुलभ प्रक्रियाएं और विशेष न्यायालय अनिवार्य।",
        applicability:"कोई भी व्यक्ति जो 18 वर्ष से कम आयु के बच्चे के विरुद्ध यौन अपराध करता है। पूरे भारत में लागू।",
        rights:["बाल-सुलभ जांच और मुकदमे का अधिकार","मजिस्ट्रेट के सामने बयान दर्ज करने का अधिकार (पुलिस नहीं)","मीडिया में पहचान न हो इसका अधिकार","मुफ्त कानूनी सहायता का अधिकार","विश्वस्त व्यक्ति के साथ रहने का अधिकार","धारा 33(8) के तहत मुआवजे का अधिकार"],
        penalties:["प्रवेशकारी यौन उत्पीड़न: न्यूनतम 10 वर्ष, आजीवन कारावास तक","गंभीर उत्पीड़न (रिश्तेदार/प्राधिकरण द्वारा): न्यूनतम 20 वर्ष से आजीवन","यौन उत्पीड़न: 3 वर्ष तक कारावास","बाल अश्लीलता: 5 वर्ष तक कारावास","उकसावे या प्रयास पर अपराध के समान दंड"],
        steps:["पुलिस, CWC या किसी विश्वस्त वयस्क को रिपोर्ट करें","पुलिस को तुरंत FIR दर्ज करनी होगी — मना नहीं कर सकती","महिला अधिकारी द्वारा बच्चे के घर/पसंदीदा स्थान पर बयान दर्ज","विशेष न्यायालय में कैमरे में (बंद कार्यवाही) मुकदमा","पूरी प्रक्रिया में बच्चे की पहचान संरक्षित"],
        faqs:[{q:"क्या POCSO के तहत लड़का भी पीड़ित हो सकता है?",a:"हां। POCSO लिंग की परवाह किए बिना 18 वर्ष से कम सभी बच्चों की रक्षा करता है।"},{q:"यदि शोषणकर्ता परिवार का सदस्य हो?",a:"POCSO तब भी पूरी तरह लागू होता है। रिश्तेदार द्वारा दुर्व्यवहार 'गंभीर' माना जाता है और कड़ी सजा होती है।"},{q:"क्या रिपोर्ट करने की समय सीमा है?",a:"नहीं। POCSO के तहत कोई सीमा नहीं है। देरी से रिपोर्टिंग न्यायालयों द्वारा स्वीकार की जाती है।"},{q:"CWC की क्या भूमिका है?",a:"बाल कल्याण समिति पूरे मामले में बच्चे के कल्याण और पुनर्वास सुनिश्चित करती है।"}],
        tags:["बच्चे","POCSO","यौन अपराध","बाल संरक्षण"]},
    ],
    firSteps:[
      {num:1,title:"निकटतम पुलिस स्टेशन जाएं",desc:"उस थाने में जाएं जहां अपराध हुआ। आप किसी भी थाने में FIR दर्ज करा सकते हैं।"},
      {num:2,title:"ड्यूटी ऑफिसर / SHO से मिलें",desc:"SHO से मिलें और स्पष्ट रूप से बताएं कि क्या हुआ। FIR दर्ज करने को कहें।"},
      {num:3,title:"लिखित शिकायत दें",desc:"पूरी घटना लिखें — कौन, क्या, कब, कहां, कैसे। तथ्यात्मक रहें।"},
      {num:4,title:"FIR पढ़ी और सुनाई जाएगी",desc:"अधिकारी FIR लिखेगा और पढ़कर सुनाएगा। संतुष्ट होने पर ही हस्ताक्षर करें।"},
      {num:5,title:"हस्ताक्षर करें और मुफ्त प्रति लें",desc:"धारा 154 CrPC के तहत आपको मुफ्त FIR प्रति मिलेगी।"},
      {num:6,title:"पुलिस मना करे तो आगे बढ़ें",desc:"SP को शिकायत दें, मजिस्ट्रेट के पास जाएं, या e-FIR दर्ज करें।"},
    ],
    firDocs:[
      {icon:"🪪",name:"पहचान प्रमाण",note:"आधार, मतदाता पहचान पत्र, पासपोर्ट"},
      {icon:"📝",name:"लिखित शिकायत",note:"घटना का आपका लिखित विवरण"},
      {icon:"📸",name:"फ़ोटो / वीडियो",note:"अपराध या चोट का साक्ष्य"},
      {icon:"📱",name:"स्क्रीनशॉट / कॉल रिकॉर्ड",note:"साइबर अपराध के लिए"},
      {icon:"🏥",name:"मेडिकल रिपोर्ट",note:"मारपीट या हिंसा के मामलों के लिए"},
      {icon:"📄",name:"सहायक दस्तावेज़",note:"संबंधित अनुबंध, रसीदें"},
    ],
    firRights:[
      {title:"मुफ्त FIR प्रति का अधिकार",desc:"धारा 154(2) CrPC के तहत तुरंत मुफ्त प्रति।"},
      {title:"किसी भी थाने में दर्ज कराने का अधिकार",desc:"Zero FIR — पुलिस क्षेत्राधिकार के आधार पर मना नहीं कर सकती।"},
      {title:"FIR नंबर जानने का अधिकार",desc:"ट्रैकिंग के लिए FIR नंबर नोट करें।"},
      {title:"इनकार के विरुद्ध अधिकार",desc:"SP को शिकायत करें या e-FIR पोर्टल का उपयोग करें।"},
      {title:"कानूनी प्रतिनिधित्व का अधिकार",desc:"FIR दर्ज करते समय वकील साथ ला सकते हैं।"},
      {title:"गोपनीयता का अधिकार",desc:"यौन अपराधों में पीड़ित की पहचान गोपनीय।"},
    ],
    firFaqs:[
      {q:"संज्ञेय और असंज्ञेय अपराध में फर्क?",a:"संज्ञेय में बिना वारंट गिरफ्तारी और अनिवार्य FIR। असंज्ञेय में NCR।"},
      {q:"ऑनलाइन FIR हो सकती है?",a:"हां, cybercrime.gov.in और राज्य पुलिस पोर्टल पर।"},
      {q:"आरोपी का नाम नहीं पता?",a:"अज्ञात व्यक्तियों के विरुद्ध FIR दर्ज होती है।"},
      {q:"FIR की कोई समय सीमा है?",a:"कोई सख्त सीमा नहीं, पर जल्दी दर्ज करना बेहतर।"},
      {q:"FIR दर्ज होने के बाद क्या होता है?",a:"पुलिस मामला दर्ज करती है और जांच शुरू करती है।"},
    ],
    draftTypes:[
      {id:"legal_notice",icon:"📨",name:"कानूनी नोटिस",desc:"मुकदमे से पहले मांग पत्र"},
      {id:"petition",icon:"📃",name:"याचिका",desc:"न्यायालय याचिका"},
      {id:"affidavit",icon:"🔏",name:"शपथ पत्र",desc:"तथ्यों का शपथ बद्ध विवरण"},
      {id:"reply_notice",icon:"📩",name:"जवाबी नोटिस",desc:"नोटिस का जवाब"},
      {id:"vakalatnama",icon:"📋",name:"वकालतनामा",desc:"अधिवक्ता प्राधिकरण"},
      {id:"bail_app",icon:"🔓",name:"जमानत आवेदन",desc:"जमानत के लिए आवेदन"},
      {id:"stay_order",icon:"📌",name:"स्थगन आवेदन",desc:"कार्यवाही स्थगन"},
      {id:"complaint",icon:"📮",name:"शिकायत",desc:"औपचारिक शिकायत"},
    ],
    draftSections:{
      legal_notice:[{label:"अधिवक्ता विवरण",fields:["advocateName","barNumber"]},{label:"मुवक्किल विवरण",fields:["clientName","clientAddress"]},{label:"विपक्षी पक्ष",fields:["opponentName","opponentAddress"]},{label:"मामले का विवरण",fields:["subject","facts","relief","noticePeriod"]}],
      petition:[{label:"अधिवक्ता विवरण",fields:["advocateName","barNumber"]},{label:"याचिकाकर्ता",fields:["petitionerName","petitionerAddress"]},{label:"प्रतिवादी",fields:["respondentName","respondentAddress"]},{label:"न्यायालय और मामला",fields:["court","caseType","subject","facts","prayer"]}],
      affidavit:[{label:"अधिवक्ता विवरण",fields:["advocateName"]},{label:"शपथकर्ता विवरण",fields:["deponentName","deponentAddress","deponentAge"]},{label:"शपथ पत्र सामग्री",fields:["subject","facts","place","date"]}],
      reply_notice:[{label:"अधिवक्ता विवरण",fields:["advocateName","barNumber"]},{label:"मुवक्किल विवरण",fields:["clientName","clientAddress"]},{label:"मूल नोटिस",fields:["senderName","senderAddress","noticeDate"]},{label:"जवाब सामग्री",fields:["subject","facts","reply"]}],
      vakalatnama:[{label:"अधिवक्ता विवरण",fields:["advocateName","barNumber"]},{label:"मुवक्किल विवरण",fields:["clientName","clientAddress"]},{label:"न्यायालय और मामला",fields:["court","caseNumber","subject"]}],
      bail_app:[{label:"अधिवक्ता विवरण",fields:["advocateName","barNumber"]},{label:"आरोपी विवरण",fields:["accusedName","accusedAddress"]},{label:"मामले का विवरण",fields:["court","fir","policeStation","charges"]},{label:"जमानत के आधार",fields:["bailGrounds","suretyName"]}],
      stay_order:[{label:"अधिवक्ता विवरण",fields:["advocateName","barNumber"]},{label:"पक्षकार",fields:["petitionerName","respondentName"]},{label:"न्यायालय और आदेश",fields:["court","caseNumber","impugnedOrder"]},{label:"स्थगन के आधार",fields:["stayGrounds","urgency"]}],
      complaint:[{label:"अधिवक्ता विवरण",fields:["advocateName","barNumber"]},{label:"शिकायतकर्ता",fields:["complainantName","complainantAddress"]},{label:"विपक्षी पक्ष",fields:["opponentName","opponentAddress"]},{label:"मंच और मामला",fields:["authority","subject","facts","relief"]}],
    },
    fieldMeta:{
      advocateName:{label:"अधिवक्ता का पूरा नाम",placeholder:"अधि. पूरा नाम"},barNumber:{label:"बार पंजीकरण संख्या",placeholder:"BCI/राज्य संख्या"},clientName:{label:"मुवक्किल का नाम",placeholder:"पूरा नाम"},clientAddress:{label:"मुवक्किल का पता",placeholder:"पूरा पता",multi:true},opponentName:{label:"विपक्षी का नाम",placeholder:"पूरा नाम"},opponentAddress:{label:"विपक्षी का पता",placeholder:"पूरा पता",multi:true},petitionerName:{label:"याचिकाकर्ता का नाम",placeholder:"पूरा नाम"},petitionerAddress:{label:"याचिकाकर्ता का पता",placeholder:"पूरा पता",multi:true},respondentName:{label:"प्रतिवादी का नाम",placeholder:"पूरा नाम"},respondentAddress:{label:"प्रतिवादी का पता",placeholder:"पूरा पता",multi:true},deponentName:{label:"शपथकर्ता का नाम",placeholder:"पूरा नाम"},deponentAddress:{label:"शपथकर्ता का पता",placeholder:"पूरा पता",multi:true},deponentAge:{label:"शपथकर्ता की आयु",placeholder:"जैसे 35",type:"number"},senderName:{label:"नोटिस प्रेषक",placeholder:"किसने भेजा?"},senderAddress:{label:"प्रेषक का पता",placeholder:"पता",multi:true},noticeDate:{label:"मूल नोटिस की तारीख",placeholder:"",type:"date"},court:{label:"न्यायालय",placeholder:"जैसे जिला न्यायालय"},caseType:{label:"मामले का प्रकार",placeholder:"जैसे दीवानी मुकदमा"},caseNumber:{label:"मामला संख्या",placeholder:"जैसे CS No. 123/2024"},fir:{label:"FIR संख्या",placeholder:"जैसे FIR No. 45/2024"},policeStation:{label:"पुलिस स्टेशन",placeholder:"थाने का नाम"},charges:{label:"आरोप / IPC धाराएं",placeholder:"जैसे S.420 IPC",multi:true},bailGrounds:{label:"जमानत के आधार",placeholder:"आधार लिखें…",multi:true},suretyName:{label:"जमानतदार का नाम",placeholder:"नाम और पता"},impugnedOrder:{label:"विवादित आदेश",placeholder:"चुनौती दिया गया आदेश"},stayGrounds:{label:"स्थगन के आधार",placeholder:"आधार लिखें…",multi:true},urgency:{label:"अत्यावश्यकता",placeholder:"प्रकृति"},subject:{label:"विषय",placeholder:"संक्षिप्त विषय"},facts:{label:"मामले के तथ्य",placeholder:"तथ्य लिखें…",multi:true},prayer:{label:"प्रार्थना",placeholder:"मांगी गई राहत…",multi:true},relief:{label:"राहत",placeholder:"क्या राहत चाहिए?",multi:true},reply:{label:"जवाब",placeholder:"नोटिस का जवाब…",multi:true},noticePeriod:{label:"नोटिस अवधि (दिन)",placeholder:"जैसे 15",type:"number"},place:{label:"स्थान",placeholder:"जैसे हैदराबाद"},date:{label:"तारीख",placeholder:"",type:"date"},authority:{label:"प्राधिकरण",placeholder:"जैसे जिला उपभोक्ता आयोग"},complainantName:{label:"शिकायतकर्ता का नाम",placeholder:"पूरा नाम"},complainantAddress:{label:"शिकायतकर्ता का पता",placeholder:"पूरा पता",multi:true},
    },
    version:"v1.0 — हैकाथॉन बिल्ड",
  },
  te: {
    appName:"VakeelMate", tagline:"అందరికీ న్యాయ అవగాహన",
    disclaimer:"ఈ వేదిక కేవలం న్యాయ అవగాహన మాత్రమే అందిస్తుంది. ఇది వృత్తిపరమైన న్యాయ సలహాకు ప్రత్యామ్నాయం కాదు.",
    disclaimerShort:"కేవలం న్యాయ అవగాహన",
    signIn:"సైన్ ఇన్", createAccount:"ఖాతా తయారు చేయండి", signOut:"సైన్ అవుట్",
    emailAddress:"ఇమెయిల్ చిరునామా", password:"పాస్‌వర్డ్", fullName:"పూర్తి పేరు",
    tryDemo:"డెమో ప్రయత్నించండి", minPassword:"కనీసం 6 అక్షరాలు",
    fillAllFields:"దయచేసి అన్ని ఫీల్డ్‌లు పూరించండి.",
    invalidCredentials:"ఇమెయిల్ లేదా పాస్‌వర్డ్ తప్పు.",
    passwordTooShort:"పాస్‌వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి.",
    accountExists:"ఈ ఇమెయిల్‌తో ఖాతా ఇప్పటికే ఉంది.",
    accountCreated:"ఖాతా తయారైంది! లాగిన్ అవ్వండి.",
    welcomeUser:"స్వాగతం", howUsing:"మీరు VakeelMate ను ఎలా ఉపయోగించాలనుకుంటున్నారు?",
    publicUser:"సాధారణ వినియోగదారు", publicDesc:"న్యాయ అవగాహన, FIR మరియు చట్టాల లైబ్రరీ",
    advocate:"న్యాయవాది", advocateDesc:"పత్రాలు తయారు చేయండి, కేసులు నిర్వహించండి",
    continueDashboard:"డాష్‌బోర్డ్‌కు వెళ్ళండి", selectRole:"దయచేసి మీ పాత్రను ఎంచుకోండి.",
    overview:"అవలోకనం", jurisbot:"జ్యూరిస్‌బాట్", actsLibrary:"చట్టాల లైబ్రరీ",
    firGuide:"FIR గైడ్", draftGenerator:"ముసాయిదా జనరేటర్",
    caseFiles:"కేసు ఫైళ్ళు", adminPanel:"అడ్మిన్ ప్యానెల్", comingSoon:"త్వరలో",
    advocateDashboard:"న్యాయవాది డాష్‌బోర్డ్", legalHub:"న్యాయ అవగాహన కేంద్రం",
    advocateSubtitle:"ముసాయిదాలు, కేసులు మరియు న్యాయ వనరులను నిర్వహించండి.",
    publicSubtitle:"మీ హక్కులు తెలుసుకోండి. విశ్వాసంతో చట్టాన్ని అర్థం చేసుకోండి.",
    advocateAccess:"న్యాయవాది యాక్సెస్", publicAccess:"సార్వజనీన యాక్సెస్",
    actsAvailable:"అందుబాటులో చట్టాలు", jurisBotQueries:"జ్యూరిస్‌బాట్ ప్రశ్నలు",
    draftsGenerated:"తయారు ముసాయిదాలు", languagesSupported:"భాషలు",
    yourTools:"మీ సాధనాలు", exploreFeatures:"లక్షణాలు అన్వేషించండి", openArrow:"తెరవండి",
    jurisBotTitle:"జ్యూరిస్‌బాట్",
    jurisBotSubtitlePublic:"AI-ఆధారిత న్యాయ అవగాహన. భారతీయ చట్టం గురించి ఏదైనా అడగండి.",
    jurisBotSubtitleLawyer:"న్యాయవాదులకు వృత్తిపరమైన న్యాయ పరిశోధన సహాయకుడు.",
    advocateMode:"న్యాయవాది పరిశోధన మోడ్",
    jurisBotHelloPublic:"నమస్కారం! నేను జ్యూరిస్‌బాట్.",
    jurisBotDescPublic:"మీ న్యాయ పరిస్థితిని వివరించండి — సంబంధిత చట్టాలు, హక్కులు మరియు తదుపరి చర్యలు వివరిస్తాను.",
    jurisBotDescLawyer:"విధానపరమైన ప్రశ్నలు అడగండి, చట్టాలు పరిశోధించండి, విభాగాలు చూడండి.",
    trySample:"నమూనా ప్రశ్న ప్రయత్నించండి", askJurisBot:"జ్యూరిస్‌బాట్ అడగండి", thinking:"ఆలోచిస్తున్నాను...",
    legalReport:"న్యాయ అవగాహన నివేదిక", situationSummary:"పరిస్థితి సారాంశం",
    relevantAct:"సంబంధిత చట్టం", whatCovers:"ఈ చట్టం ఏమి కవర్ చేస్తుంది",
    yourRights:"మీ హక్కులు", suggestedSteps:"సూచించిన తదుపరి చర్యలు",
    proceduralSteps:"విధానపరమైన చర్యలు", caseReference:"కేసు సూచన",
    urgencyLow:"తక్కువ అత్యవసరం", urgencyMed:"మధ్యస్థ అత్యవసరం", urgencyHigh:"అత్యంత అత్యవసరం",
    recentQuestions:"ఇటీవలి ప్రశ్నలు",
    jurisBotPlaceholderPublic:"మీ న్యాయ పరిస్థితిని వివరించండి...",
    jurisBotPlaceholderLawyer:"ఉదా: 'సెక్షన్ 438 CrPC కింద అంచనా బెయిల్ ఆధారాలు ఏమిటి?'",
    disclaimerPublic:"ఈ వేదిక కేవలం న్యాయ అవగాహన మాత్రమే అందిస్తుంది. ఇది న్యాయ సలహా కాదు.",
    disclaimerLawyer:"ప్రతిస్పందనలు పరిశోధన కోసం మాత్రమే. స్వతంత్రంగా నిర్ధారించుకోండి.",
    actsTitle:"చట్టాల లైబ్రరీ", actsSubtitle:"ప్రధాన భారతీయ న్యాయ చట్టాలు చూడండి — మీ హక్కులు తెలుసుకోండి.",
    searchActs:"చట్టాలు, కీవర్డ్‌లు వెతకండి...", allCategories:"అన్నీ",
    noResultsActs:"ఫలితాలు కనుగొనబడలేదు", tryDifferent:"వేరే కీవర్డ్ ప్రయత్నించండి.",
    backToActs:"చట్టాల లైబ్రరీకి తిరిగి", enacted:"అమలు",
    overviewLabel:"అవలోకనం", applicabilityLabel:"వర్తింపు",
    rightsLabel:"ఈ చట్టం కింద మీ హక్కులు", penaltiesLabel:"శిక్షలు మరియు పరిణామాలు",
    stepsLabel:"తీసుకోవాల్సిన చర్యలు", faqsLabel:"తరచుగా అడిగే ప్రశ్నలు",
    firTitle:"FIR దాఖలు గైడ్",
    firSubtitle:"ప్రథమ సమాచార నివేదిక దాఖలు చేయడం గురించి అన్నీ.",
    whatIsFir:"FIR అంటే ఏమిటి?",
    firDesc:"ప్రథమ సమాచార నివేదిక (FIR) పోలీసులు జ్ఞానపూర్వక నేరం గురించి సమాచారం స్వీకరించినప్పుడు రూపొందించే పత్రం.",
    crpcSection:"CrPC విభాగం",
    stepsTab:"దాఖలు దశలు", docsTab:"అవసరమైన పత్రాలు", rightsTab:"మీ హక్కులు",
    draftTab:"FIR ముసాయిదా", faqsTab:"సాధారణ ప్రశ్నలు",
    draftTitle:"పత్ర ముసాయిదా జనరేటర్",
    draftSubtitle:"మూడు దశల్లో వృత్తిపరమైన న్యాయ పత్రం.",
    chooseType:"రకం ఎంచుకోండి", fillDetails:"వివరాలు నమోదు చేయండి", yourDraft:"మీ ముసాయిదా",
    selectDocType:"మీరు రూపొందించాలనుకునే పత్రాన్ని ఎంచుకోండి:",
    generateDraft:"ముసాయిదా రూపొందించండి", generating:"రూపొందిస్తున్నాము...",
    copyDraft:"ముసాయిదా కాపీ చేయండి", edit:"సవరించు", newDraft:"కొత్త ముసాయిదా", changeType:"రకం మార్చండి",
    reviewBeforeFiling:"AI-రూపొందించిన టెంప్లేట్. దాఖలు చేయడానికి ముందు సమీక్షించండి.",
    selectLanguage:"భాష",
    featureFirTitle:"FIR దాఖలు గైడ్", featureFirDesc:"FIR అర్థం చేసుకోవడానికి మరియు దాఖలు చేయడానికి దశల వారీ గైడ్.",
    featureDraftTitle:"పత్ర ముసాయిదా జనరేటర్", featureDraftDesc:"వృత్తిపరమైన న్యాయ ముసాయిదాలు రూపొందించండి.",
    featureActsTitle:"చట్టాల లైబ్రరీ", featureActsDesc:"IPC, RTI, POSH మరియు మరిన్ని చూడండి.",
    featureJurisTitle:"జ్యూరిస్‌బాట్ – AI సహాయకుడు", featureJurisDesc:"ఏ న్యాయ ప్రశ్నైనా అడగండి.",
    demoTag:"హ్యాకథాన్ డెమో",
    builtWith:"న్యాయ అవగాహన కోసం. AI ద్వారా నడుస్తుంది.",

    navigation:"నావిగేషన్",
    firFormTitle:"మీ FIR వివరాలు నింపండి",
    firFormPS:"పోలీస్ స్టేషన్ వివరాలు",
    firFormPersonal:"మీ వ్యక్తిగత వివరాలు",
    firFormIncident:"సంఘటన వివరాలు",
    firFormAccused:"నిందితుడు & సాక్ష్యాలు",
    firFieldPS:"స్టేషన్ పేరు",
    firFieldPSAddr:"స్టేషన్ చిరునామా",
    firFieldDate:"దాఖలు చేసిన తేదీ",
    firFieldName:"మీ పూర్తి పేరు",
    firFieldParent:"తండ్రి / తల్లి పేరు",
    firFieldAge:"వయస్సు",
    firFieldAddr:"మీ చిరునామా",
    firFieldPhone:"సంప్రదింపు నంబర్",
    firFieldSubject:"విషయం / నేరం స్వభావం",
    firFieldIncDate:"సంఘటన తేదీ",
    firFieldTime:"సుమారు సమయం",
    firFieldLocation:"సంఘటన స్థలం",
    firFieldDesc:"ఏమి జరిగింది",
    firFieldAccused:"నిందితుడి పేరు (తెలిస్తే)",
    firFieldAccusedDesc:"నిందితుడి వివరణ",
    firFieldWitness:"సాక్షులు (ఉంటే)",
    firFieldEvidence:"అందుబాటులో ఉన్న సాక్ష్యాలు",
    firFieldLoss:"నష్టం / గాయం",
    firStepByStep:"దశల వారీ ప్రక్రియ",
    firDocsTitle:"తీసుకెళ్ళాల్సిన పత్రాలు",
    firRightsTitle:"FIR దాఖలు చేసేటప్పుడు మీ చట్టపరమైన హక్కులు",
    multiLangTitle:"బహుభాషా మద్దతు",
    multiLangDesc:"తెలుగు, హిందీ మరియు ఇంగ్లీష్‌లో అన్ని కంటెంట్ యాక్సెస్ చేయండి।",
    caseFilesDesc:"క్లయింట్ సమాచారం మరియు కేసు నోట్లను ఒక సురక్షిత చోట నిర్వహించండి.",
    draftingDoc:"తయారు చేస్తున్నాం",
    errorGeneric:"ఏదో తప్పు జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి.",
    aiDraftError:"AI డ్రాఫ్ట్ విఫలమైంది. దయచేసి మళ్ళీ ప్రయత్నించండి.",
    generating:"తయారవుతోంది...",
    copy:"కాపీ చేయండి",
    copied:"కాపీ అయింది!",
    generateDraft:"డ్రాఫ్ట్ తయారు చేయండి",
    changeType:"రకం మార్చండి",
    livePreview:"లైవ్ ప్రివ్యూ",
    aiDraftMode:"AI డ్రాఫ్ట్ మోడ్",
    featureDraftTitle:"డాక్యుమెంట్ డ్రాఫ్ట్ జెనరేటర్",
    featureDraftDesc:"న్యాయ నోటీసులు, పిటిషన్లు, అఫిడవిట్లు - నిమిషాల్లో.",
    featureActsDesc:"భారతీయ చట్టాలను బ్రౌజ్ చేయండి — IPC, RTI, POSH, వినియోగదారుల రక్షణ & మరిన్ని.",
    featureJurisDesc:"ఏ చట్టపరమైన ప్రశ్న అయినా అడగండి. భారతీయ చట్టంపై నిర్మాణాత్మక అవగాహన పొందండి.",
    featureFirTitle:"FIR దాఖలు మార్గదర్శిని",
    featureFirDesc:"FIR దాఖలు చేయడానికి దశల వారీ మార్గదర్శిని. మీ హక్కులు తెలుసుకోండి.",
    featureActsTitle:"చట్టాల లైబ్రరీ",

    aiGeneratedPreview:"ఎంచుకున్న భాషలో AI-రూపొందించిన",
    livePreviewNote:"టైప్ చేస్తున్నప్పుడు అప్‌డేట్ అవుతుంది",
    firAlwaysAsk:"పోలీస్ స్టేషన్ వదలడానికి ముందు FIR కాపీ తప్పకుండా అడగండి. ఇది ఉచితం మరియు మీ హక్కు.",
    fillWhatYouKnow:"తెలిసిన వివరాలు నింపండి, మిగతావి ఖాళీగా వదలండి",
    newDraft:"కొత్త డ్రాఫ్ట్",
    edit:"సవరించు",
    firFormHint:"ఎడమవైపు ఫారం నింపండి. మీ ఫిర్యాదు లేఖ కుడివైపు రియల్-టైమ్‌లో నిర్మించబడుతుంది.",
    generatingDraft:"మీ డ్రాఫ్ట్ తయారవుతోంది...",
    caseFilesTitle:"కేసు ఫైళ్ళు",
    caseFilesSubtitle:"మీ క్లయింట్ కేసులను నిర్వహించండి — స్థితి, నోట్లు, విచారణలు మరియు పత్రాలు ట్రాక్ చేయండి.",
    newCase:"కొత్త కేసు",
    addCase:"కేసు జోడించండి",
    editCase:"కేసు సవరించండి",
    deleteCase:"కేసు తొలగించండి",
    saveCase:"కేసు సేవ్ చేయండి",
    cancelBtn:"రద్దు చేయండి",
    noCases:"ఇంకా కేసులు లేవు.",
    noCasesHint:"పై బటన్ ఉపయోగించి మొదటి క్లయింట్ కేసు జోడించండి.",
    searchCases:"క్లయింట్ పేరు, కేసు నంబర్ లేదా కోర్టు వెతకండి…",
    allStatus:"అన్ని స్థితులు",
    statusActive:"క్రియాశీలం",
    statusHearing:"విచారణ నిర్ణయించబడింది",
    statusJudgment:"తీర్పు కోసం వేచి ఉంది",
    statusClosed:"మూసివేయబడింది",
    statusStay:"స్టే మంజూరు",
    cfClientName:"క్లయింట్ పేరు",
    cfCaseNo:"కేసు నంబర్",
    cfCourt:"కోర్టు / ట్రిబ్యునల్",
    cfCaseType:"కేసు రకం",
    cfOpponent:"వ్యతిరేక పక్షం",
    cfFir:"FIR / ఫిర్యాదు నంబర్",
    cfStatus:"స్థితి",
    cfNextDate:"తదుపరి విచారణ తేదీ",
    cfNotes:"కేసు నోట్లు",
    cfCreated:"ప్రారంభించబడింది",
    cfDaysOpen:"రోజులు తెరిచి ఉంది",
    cfHearing:"తదుపరి విచారణ",
    cfNoDate:"తేదీ నిర్ణయించబడలేదు",
    cfDeleteConfirm:"ఈ కేసు తొలగించాలా? ఇది రద్దు చేయలేము.",
    cfSection:"సెక్షన్లు / చట్టాలు",
    totalCases:"మొత్తం కేసులు",
    activeCases:"క్రియాశీల కేసులు",
    upcomingHearings:"రాబోయే విచారణలు",
    closedCases:"మూసివేసిన కేసులు",
    adminPanelTitle:"అడ్మిన్ ప్యానెల్",
    adminPanelSubtitle:"ప్లాట్‌ఫామ్ అవలోకనం — వినియోగ గణాంకాలు, త్వరిత చర్యలు మరియు సిస్టమ్ ఆరోగ్యం.",
    apOverview:"అవలోకనం",
    apActivity:"ఇటీవలి కార్యకలాపాలు",
    apQuickActions:"త్వరిత చర్యలు",
    apSystemHealth:"సిస్టమ్ ఆరోగ్యం",
    apTotalUsers:"మొత్తం వినియోగదారులు",
    apActiveToday:"నేడు క్రియాశీలం",
    apQueriesTotal:"JurisBot ప్రశ్నలు",
    apDraftsTotal:"రూపొందించిన డ్రాఫ్ట్‌లు",
    apCasesTotal:"మొత్తం కేసులు",
    apActsTotal:"లైబ్రరీలో చట్టాలు",
    apAvgResponse:"సగటు స్పందన",
    apUptime:"అప్‌టైమ్",
    apApiStatus:"API స్థితి",
    apDbStatus:"డేటాబేస్",
    apLangCoverage:"భాషా కవరేజ్",
    apOperational:"పనిచేస్తోంది",
    apHealthy:"ఆరోగ్యంగా",
    apDegradedWarning:"క్షీణించింది",
    apClearCache:"కాష్ క్లియర్ చేయండి",
    apExportData:"డేటా ఎక్స్‌పోర్ట్",
    apAddAct:"కొత్త చట్టం జోడించండి",
    apManageUsers:"వినియోగదారులను నిర్వహించండి",
    apActionDone:"పూర్తయింది!",
    apActivityTitle:"ఇటీవలి సిస్టమ్ ఈవెంట్‌లు",
    apMs:"ms",
    apPercent:"100%",
    loadingAuth:"లోడ్ అవుతోంది…",
    creatingAccount:"ఖాతా సృష్టించబడుతోంది…",
    signingIn:"సైన్ ఇన్ అవుతోంది…",
    authStorageError:"ఖాతా సేవ్ చేయలేకపోయింది. దయచేసి మళ్ళీ ప్రయత్నించండి.",
    accountReady:"ఖాతా సృష్టించబడింది! ఇప్పుడు సైన్ ఇన్ చేయండి.",
    confirmPassword:"పాస్‌వర్డ్ నిర్ధారించండి",
    passwordMismatch:"పాస్‌వర్డ్‌లు సరిపోలడం లేదు.",
    rememberMe:"సైన్ ఇన్‌గా ఉండండి",
    forgotNote:"ఖాతాలు ఈ పరికరంలో నిల్వ చేయబడతాయి.",
    strongPassword:"కనీసం 6 అక్షరాలు వాడండి.",
    welcomeBack:"తిరిగి స్వాగతం",
    fieldRequired:"ఈ ఫీల్డ్ అవసరం.",
    chipsPublic:["నా యజమాని భద్రతా డిపాజిట్ తిరిగి ఇవ్వడం లేదు","నన్ను తప్పుగా ఉద్యోగం నుండి తొలగించారు","ఎవరో నన్ను ఆన్‌లైన్‌లో వేధిస్తున్నారు","నా యజమాని ఓవర్‌టైమ్ చెల్లించడం లేదు","వినియోగదారుల ఫిర్యాదు ఎలా దాఖలు చేయాలి?"],
    chipsLawyer:["సివిల్ కేసు సమయ పరిమితి ఏమిటి?","సెక్షన్ 80 CPC కింద న్యాయ నోటీసు ఎలా తయారు చేయాలి?","సెక్షన్ 438 CrPC కింద అంచనా బెయిల్ ఆధారాలు","సెక్షన్ 482 CrPC కింద FIR రద్దు సవాలు","గృహ హింస కేసులో ఏ ఆధారాలు మంజూరు?","హైకోర్టులో రిట్ పిటిషన్ ప్రక్రియ"],
    catColors:{Criminal:"#c0392b",Civil:"#2980b9",Labour:"#27ae60",Consumer:"#8e44ad",Women:"#e91e8c",RTI:"#e67e22",Property:"#795548"},
    acts:[
      {id:1,name:"భారతీయ శిక్షాస్మృతి",year:1860,category:"Criminal",overview:"భారతదేశం యొక్క ప్రాథమిక నేరస్మృతి. దొంగతనం నుండి హత్య వరకు నేరాలను నిర్వచిస్తుంది.",applicability:"భారతదేశంలో నేరాలు చేసే అందరికీ వర్తిస్తుంది.",rights:["అభియోగాలు తెలుసుకోవడానికి హక్కు","న్యాయ ప్రాతినిధ్యానికి హక్కు","బెయిల్ హక్కు","న్యాయమైన విచారణకు హక్కు"],penalties:["జైలు శిక్ష రోజుల నుండి జీవితకాలం","జరిమానాలు","మరణదండన (తీవ్ర నేరాలకు)"],steps:["సంబంధిత IPC సెక్షన్ గుర్తించండి","వెంటనే లాయర్‌ని సంప్రదించండి"],faqs:[{q:"FIR అంటే ఏమిటి?",a:"పోలీసులు జ్ఞానపూర్వక నేరం గురించి తయారుచేసే పత్రం."},{q:"వారెంట్ లేకుండా అరెస్ట్?",a:"అవును, జ్ఞానపూర్వక నేరాలకు."}],tags:["నేర","అపరాధాలు","శిక్ష"]},
      {id:2,name:"సమాచార హక్కు చట్టం",year:2005,category:"RTI",overview:"పౌరులకు ప్రభుత్వ సమాచారం అడగడానికి అధికారం ఇస్తుంది.",applicability:"ప్రభుత్వంచే నిధులు పొందే అన్ని సంస్థలకు.",rights:["ప్రభుత్వ రికార్డులు పరిశీలించడానికి హక్కు","30 రోజుల్లో సమాచారానికి హక్కు"],penalties:["ఆలస్యానికి రూ. 250/రోజు జరిమానా"],steps:["స్పష్టమైన RTI దరఖాస్తు రాయండి","రూ. 10 రుసుము చెల్లించండి"],faqs:[{q:"RTI ఎవరు దాఖలు చేయవచ్చు?",a:"ఏ భారతీయ పౌరుడైనా."},{q:"మినహాయింపు సమాచారం?",a:"జాతీయ భద్రత మరియు గోప్యత సమాచారం."}],tags:["ప్రభుత్వం","పారదర్శకత","పౌరులు"]},
      {id:3,name:"వినియోగదారుల రక్షణ చట్టం",year:2019,category:"Consumer",overview:"వినియోగదారులను అన్యాయమైన వ్యాపార పద్ధతుల నుండి రక్షిస్తుంది.",applicability:"వ్యక్తిగత వినియోగం కోసం వస్తువులు కొనే వారికి.",rights:["హానికరమైన వస్తువుల నుండి రక్షణ","న్యాయమైన పరిష్కారానికి హక్కు"],penalties:["రూ. 10 లక్షల వరకు జరిమానా"],steps:["విక్రేతతో నేరుగా పరిష్కరించండి","జిల్లా కమిషన్‌లో ఫిర్యాదు చేయండి"],faqs:[{q:"దాఖలు సమయ పరిమితి?",a:"2 సంవత్సరాల్లోపు."},{q:"లాయర్ అవసరమా?",a:"లేదు, మీరే దాఖలు చేయవచ్చు."}],tags:["వినియోగదారు","పరిష్కారం","లోపం"]},
      {id:4,name:"గృహ హింస నుండి మహిళల రక్షణ చట్టం",year:2005,category:"Women",overview:"గృహ హింస నుండి మహిళలకు కానూనీ రక్షణ.",applicability:"వివాహిత, లివ్-ఇన్ లేదా కుటుంబ మహిళలకు.",rights:["రక్షణ ఉత్తర్వు హక్కు","నివాస హక్కు","ఆర్థిక సహాయానికి హక్కు"],penalties:["ఉత్తర్వు ఉల్లంఘన జ్ఞానపూర్వక నేరం"],steps:["రక్షణ అధికారిని సంప్రదించండి","మేజిస్ట్రేట్ వద్ద దరఖాస్తు దాఖలు చేయండి"],faqs:[{q:"అవివాహిత మహిళలు ఉపయోగించగలరా?",a:"అవును, లివ్-ఇన్ మహిళలు కూడా రక్షించబడతారు."}],tags:["మహిళలు","గృహ హింస","రక్షణ"]},
      {id:5,name:"ఉద్యోగుల భవిష్య నిధుల చట్టం",year:1952,category:"Labour",overview:"ఉద్యోగుల సామాజిక భద్రత కోసం PF తప్పనిసరి చేస్తుంది.",applicability:"20+ మంది ఉద్యోగులు ఉన్న సంస్థలకు.",rights:["EPF సహకారానికి హక్కు","PF ఉపసంహరణ హక్కు"],penalties:["రూ. 5,000/రోజు జరిమానా"],steps:["EPFO నమోదు తనిఖీ చేయండి","UAN నంబర్ పొందండి"],faqs:[{q:"PF సహకారం ఎంత?",a:"యజమాని మరియు ఉద్యోగి ఇద్దరూ 12%."}],tags:["శ్రమ","PF","సామాజిక భద్రత"]},
      {id:6,name:"POSH చట్టం",year:2013,category:"Women",overview:"కార్యాలయంలో లైంగిక వేధింపు నుండి మహిళలను రక్షిస్తుంది.",applicability:"10+ మంది ఉద్యోగులు ఉన్న అన్ని కార్యాలయాలకు.",rights:["ICC లో ఫిర్యాదు హక్కు","90 రోజుల్లో విచారణ"],penalties:["నిందితుడికి హెచ్చరిక నుండి తొలగింపు వరకు"],steps:["3 నెలల్లోపు ICC కి నివేదించండి"],faqs:[{q:"లైంగిక వేధింపు అంటే?",a:"శారీరక సంప్రదింపు, లైంగిక అనుకూలత డిమాండ్, అశ్లీల సామగ్రి చూపించడం."}],tags:["మహిళలు","కార్యాలయం","POSH"]},
      {id:7,name:"ఆస్తి బదిలీ చట్టం",year:1882,category:"Property",overview:"అమ్మకం, తనఖా, లీజు మరియు ఆస్తి మార్పిడిని నియంత్రిస్తుంది.",applicability:"భారతదేశంలో స్థిర ఆస్తి బదిలీలకు.",rights:["అమ్మకపు పత్రం హక్కు","నిశ్శబ్ద స్వాధీనపు హక్కు"],penalties:["రూ. 100 కంటే ఎక్కువ నమోదు చేయని బదిలీ చెల్లదు"],steps:["న్యాయవాది ద్వారా హక్కు పత్రాన్ని ధృవీకరించండి"],faqs:[{q:"నమోదు తప్పనిసరిగా?",a:"అవును, రూ. 100 కంటే ఎక్కువ ఆస్తికి."}],tags:["ఆస్తి","అమ్మకం","తనఖా"]},
      {id:8,name:"మోటార్ వాహనాల చట్టం",year:1988,category:"Civil",overview:"రోడ్డు రవాణా, బీమా మరియు ప్రమాద పరిహారాన్ని నియంత్రిస్తుంది.",applicability:"అన్ని మోటార్ వాహనాలకు మరియు సార్వజనీన రహదారి వినియోగదారులకు.",rights:["MACT నుండి పరిహారానికి హక్కు","థర్డ్-పార్టీ బీమా హక్కు"],penalties:["మద్యపానం చేసి వాహనం నడిపిన రూ. 10,000"],steps:["ప్రమాదాన్ని పోలీసులకు నివేదించండి","MACT లో క్లెయిమ్ దాఖలు చేయండి"],faqs:[{q:"హిట్-అండ్-రన్‌లో పరిహారం?",a:"Solatium Fund ద్వారా."}],tags:["వాహనం","ప్రమాదం","పరిహారం"]},
      {id:9,name:"పిల్లలపై లైంగిక నేరాల నుండి రక్షణ చట్టం (POCSO)",year:2012,category:"Women",
        overview:"18 సంవత్సరాల కంటే తక్కువ వయసు పిల్లలను లైంగిక వేధింపులు, దాడులు మరియు దోపిడీ నుండి రక్షించే భారతదేశపు ప్రాథమిక చట్టం. శిశు-అనుకూల విధానాలు మరియు ప్రత్యేక న్యాయస్థానాలు నిర్బంధం.",
        applicability:"18 సంవత్సరాల కంటే తక్కువ వయసు పిల్లలపై లైంగిక నేరం చేసే ఏ వ్యక్తికైనా వర్తిస్తుంది. భారతదేశమంతా వర్తిస్తుంది.",
        rights:["శిశు-అనుకూల దర్యాప్తు మరియు విచారణ హక్కు","మేజిస్ట్రేట్ ముందు వాంగ్మూలం నమోదు చేయడానికి హక్కు","మీడియాలో గుర్తింపు పొందకుండా హక్కు","ఉచిత న్యాయ సహాయానికి హక్కు","నమ్మకమైన వ్యక్తితో ఉండే హక్కు","సెక్షన్ 33(8) కింద పరిహారానికి హక్కు"],
        penalties:["చొచ్చుకుపోయే లైంగిక దాడి: కనీసం 10 సంవత్సరాలు, జీవిత ఖైదు వరకు","తీవ్రమైన దాడి (బంధువు/అధికారి): కనీసం 20 సంవత్సరాలు నుండి జీవిత ఖైదు","లైంగిక వేధింపు: 3 సంవత్సరాల వరకు ఖైదు","శిశు అశ్లీలత: 5 సంవత్సరాల వరకు ఖైదు","ప్రేరణ లేదా ప్రయత్నానికి నేరానికి సమానమైన శిక్ష"],
        steps:["పోలీసులకు, CWCకి లేదా నమ్మకమైన పెద్దవారికి నివేదించండి","పోలీసులు వెంటనే FIR నమోదు చేయాలి — నిరాకరించలేరు","మహిళా అధికారి ద్వారా పిల్లవాడి ఇంట్లో/ఇష్టమైన చోట వాంగ్మూలం","ప్రత్యేక న్యాయస్థానంలో కెమెరా సమక్షంలో (మూసిన విచారణ)","మొత్తం ప్రక్రియలో పిల్లవాడి గుర్తింపు రక్షించబడుతుంది"],
        faqs:[{q:"POCSO కింద బాలుడు కూడా బాధితుడు కాగలడా?",a:"అవును. POCSO లింగంతో సంబంధం లేకుండా 18 సంవత్సరాల కంటే తక్కువ వయసు అన్ని పిల్లలను రక్షిస్తుంది."},{q:"దోషి కుటుంబ సభ్యుడైతే?",a:"POCSO పూర్తిగా వర్తిస్తుంది. బంధువు నేరం 'తీవ్రమైనది'గా పరిగణించబడుతుంది."},{q:"నివేదించడానికి గడువు ఉందా?",a:"లేదు. POCSO కింద ఎటువంటి పరిమితి లేదు. ఆలస్యంగా నివేదించడం న్యాయస్థానాలు అంగీకరిస్తాయి."},{q:"CWC పాత్ర ఏమిటి?",a:"బాల సంక్షేమ సంఘం కేసు అంతటా పిల్లవాడి సంక్షేమం మరియు పునరావాసం నిర్ధారిస్తుంది."}],
        tags:["పిల్లలు","POCSO","లైంగిక నేరాలు","శిశు రక్షణ"]},
    ],
    firSteps:[
      {num:1,title:"సమీప పోలీస్ స్టేషన్‌కు వెళ్ళండి",desc:"నేరం జరిగిన ప్రాంత పోలీస్ స్టేషన్‌కు వెళ్ళండి. ఏ స్టేషన్‌లో అయినా FIR దాఖలు చేయవచ్చు."},
      {num:2,title:"డ్యూటీ ఆఫీసర్ / SHO తో మాట్లాడండి",desc:"SHO తో మాట్లాడి ఏమి జరిగిందో స్పష్టంగా వివరించండి."},
      {num:3,title:"లిఖిత ఫిర్యాదు ఇవ్వండి",desc:"మొత్తం సంఘటన రాయండి — ఎవరు, ఏమి, ఎప్పుడు, ఎక్కడ, ఎలా."},
      {num:4,title:"FIR రాసి చదివి వినిపించబడుతుంది",desc:"ఆఫీసర్ FIR రాసి మీకు చదివి వినిపిస్తారు. సంతృప్తిగా ఉంటేనే సంతకం పెట్టండి."},
      {num:5,title:"సంతకం పెట్టి ఉచిత కాపీ తీసుకోండి",desc:"సెక్షన్ 154 CrPC కింద మీకు ఉచిత FIR కాపీ ఇవ్వాలి."},
      {num:6,title:"పోలీసులు నిరాకరిస్తే — పైకి వెళ్ళండి",desc:"SP కి ఫిర్యాదు ఇవ్వండి, మేజిస్ట్రేట్ వద్దకు వెళ్ళండి, లేదా e-FIR దాఖలు చేయండి."},
    ],
    firDocs:[
      {icon:"🪪",name:"గుర్తింపు రుజువు",note:"ఆధార్, ఓటర్ ID, పాస్‌పోర్ట్"},
      {icon:"📝",name:"లిఖిత ఫిర్యాదు",note:"సంఘటన యొక్క మీ లిఖిత వివరణ"},
      {icon:"📸",name:"ఫోటోలు / వీడియోలు",note:"నేరం లేదా గాయానికి ఆధారాలు"},
      {icon:"📱",name:"స్క్రీన్‌షాట్‌లు / కాల్ రికార్డ్‌లు",note:"సైబర్ నేరాలకు"},
      {icon:"🏥",name:"వైద్య నివేదికలు",note:"దాడి, హింస కేసులకు"},
      {icon:"📄",name:"సహాయక పత్రాలు",note:"సంబంధిత ఒప్పందాలు, రసీదులు"},
    ],
    firRights:[
      {title:"ఉచిత FIR కాపీకి హక్కు",desc:"సెక్షన్ 154(2) CrPC కింద వెంటనే ఉచిత కాపీ."},
      {title:"ఏ స్టేషన్‌లో అయినా దాఖలు చేయడానికి హక్కు",desc:"Zero FIR — పోలీసులు పరిధి కారణంగా నిరాకరించలేరు."},
      {title:"FIR నంబర్ తెలుసుకోవడానికి హక్కు",desc:"ట్రాకింగ్ కోసం FIR నంబర్ నోట్ చేసుకోండి."},
      {title:"నిరాకరణకు వ్యతిరేకంగా హక్కు",desc:"SP కి ఫిర్యాదు చేయండి లేదా e-FIR పోర్టల్ ఉపయోగించండి."},
      {title:"న్యాయ ప్రాతినిధ్యానికి హక్కు",desc:"FIR దాఖలు చేసేటప్పుడు న్యాయవాది తీసుకొని రావచ్చు."},
      {title:"గోప్యతకు హక్కు",desc:"లైంగిక నేరాలలో బాధితుడి గుర్తింపు బహిర్గతం చేయలేరు."},
    ],
    firFaqs:[
      {q:"జ్ఞానపూర్వక మరియు అజ్ఞానపూర్వక నేరాల తేడా?",a:"జ్ఞానపూర్వక నేరాలకు వారెంట్ లేకుండా అరెస్ట్, FIR తప్పనిసరి. అజ్ఞానపూర్వకానికి NCR."},
      {q:"ఆన్‌లైన్‌లో FIR దాఖలు చేయగలనా?",a:"అవును, cybercrime.gov.in మరియు రాష్ట్ర పోలీస్ పోర్టళ్ళపై."},
      {q:"నిందితుడి పేరు తెలియకపోతే?",a:"తెలియని వ్యక్తులకు వ్యతిరేకంగా FIR దాఖలు చేయవచ్చు."},
      {q:"FIR కి సమయ పరిమితి ఉందా?",a:"కఠినమైన పరిమితి లేదు, కానీ వెంటనే దాఖలు చేయడం మంచిది."},
      {q:"FIR తర్వాత ఏమి జరుగుతుంది?",a:"పోలీసులు కేసు నమోదు చేసి దర్యాప్తు ప్రారంభిస్తారు."},
    ],
    draftTypes:[
      {id:"legal_notice",icon:"📨",name:"న్యాయ నోటీసు",desc:"వ్యాజ్యానికి ముందు డిమాండ్ లేఖ"},
      {id:"petition",icon:"📃",name:"పిటిషన్",desc:"కోర్టు పిటిషన్"},
      {id:"affidavit",icon:"🔏",name:"అఫిడవిట్",desc:"వాస్తవాల శపథ ప్రకటన"},
      {id:"reply_notice",icon:"📩",name:"జవాబు నోటీసు",desc:"నోటీసుకు ప్రతిస్పందన"},
      {id:"vakalatnama",icon:"📋",name:"వకాలత్‌నామా",desc:"న్యాయవాది అధికార పత్రం"},
      {id:"bail_app",icon:"🔓",name:"బెయిల్ దరఖాస్తు",desc:"బెయిల్ కోసం దరఖాస్తు"},
      {id:"stay_order",icon:"📌",name:"స్టే దరఖాస్తు",desc:"విచారణల తాత్కాలిక నిలుపుదల"},
      {id:"complaint",icon:"📮",name:"ఫిర్యాదు",desc:"అధికారిక ఫిర్యాదు"},
    ],
    draftSections:{
      legal_notice:[{label:"న్యాయవాది వివరాలు",fields:["advocateName","barNumber"]},{label:"క్లయింట్ వివరాలు",fields:["clientName","clientAddress"]},{label:"వ్యతిరేక పక్షం",fields:["opponentName","opponentAddress"]},{label:"విషయ వివరాలు",fields:["subject","facts","relief","noticePeriod"]}],
      petition:[{label:"న్యాయవాది వివరాలు",fields:["advocateName","barNumber"]},{label:"పిటిషనర్",fields:["petitionerName","petitionerAddress"]},{label:"ప్రతివాది",fields:["respondentName","respondentAddress"]},{label:"కోర్టు & విషయం",fields:["court","caseType","subject","facts","prayer"]}],
      affidavit:[{label:"న్యాయవాది వివరాలు",fields:["advocateName"]},{label:"ప్రమాణికుడి వివరాలు",fields:["deponentName","deponentAddress","deponentAge"]},{label:"అఫిడవిట్ కంటెంట్",fields:["subject","facts","place","date"]}],
      reply_notice:[{label:"న్యాయవాది వివరాలు",fields:["advocateName","barNumber"]},{label:"క్లయింట్ వివరాలు",fields:["clientName","clientAddress"]},{label:"అసలు నోటీసు",fields:["senderName","senderAddress","noticeDate"]},{label:"జవాబు కంటెంట్",fields:["subject","facts","reply"]}],
      vakalatnama:[{label:"న్యాయవాది వివరాలు",fields:["advocateName","barNumber"]},{label:"క్లయింట్ వివరాలు",fields:["clientName","clientAddress"]},{label:"కోర్టు & విషయం",fields:["court","caseNumber","subject"]}],
      bail_app:[{label:"న్యాయవాది వివరాలు",fields:["advocateName","barNumber"]},{label:"నిందితుడి వివరాలు",fields:["accusedName","accusedAddress"]},{label:"కేసు వివరాలు",fields:["court","fir","policeStation","charges"]},{label:"బెయిల్ ఆధారాలు",fields:["bailGrounds","suretyName"]}],
      stay_order:[{label:"న్యాయవాది వివరాలు",fields:["advocateName","barNumber"]},{label:"పక్షాలు",fields:["petitionerName","respondentName"]},{label:"కోర్టు & ఉత్తర్వు",fields:["court","caseNumber","impugnedOrder"]},{label:"స్టే ఆధారాలు",fields:["stayGrounds","urgency"]}],
      complaint:[{label:"న్యాయవాది వివరాలు",fields:["advocateName","barNumber"]},{label:"ఫిర్యాదుదారు",fields:["complainantName","complainantAddress"]},{label:"వ్యతిరేక పక్షం",fields:["opponentName","opponentAddress"]},{label:"వేదిక & విషయం",fields:["authority","subject","facts","relief"]}],
    },
    fieldMeta:{
      advocateName:{label:"న్యాయవాది పూర్తి పేరు",placeholder:"అడ్వొకేట్ పూర్తి పేరు"},barNumber:{label:"బార్ నమోదు సంఖ్య",placeholder:"BCI/రాష్ట్ర సంఖ్య"},clientName:{label:"క్లయింట్ పేరు",placeholder:"పూర్తి పేరు"},clientAddress:{label:"క్లయింట్ చిరునామా",placeholder:"పూర్తి చిరునామా",multi:true},opponentName:{label:"వ్యతిరేక పక్షం పేరు",placeholder:"పూర్తి పేరు"},opponentAddress:{label:"వ్యతిరేక పక్షం చిరునామా",placeholder:"పూర్తి చిరునామా",multi:true},petitionerName:{label:"పిటిషనర్ పేరు",placeholder:"పూర్తి పేరు"},petitionerAddress:{label:"పిటిషనర్ చిరునామా",placeholder:"పూర్తి చిరునామా",multi:true},respondentName:{label:"ప్రతివాది పేరు",placeholder:"పూర్తి పేరు"},respondentAddress:{label:"ప్రతివాది చిరునామా",placeholder:"పూర్తి చిరునామా",multi:true},deponentName:{label:"ప్రమాణికుడి పేరు",placeholder:"పూర్తి పేరు"},deponentAddress:{label:"ప్రమాణికుడి చిరునామా",placeholder:"పూర్తి చిరునామా",multi:true},deponentAge:{label:"ప్రమాణికుడి వయస్సు",placeholder:"ఉదా. 35",type:"number"},senderName:{label:"నోటీసు పంపిన వ్యక్తి",placeholder:"ఎవరు పంపారు?"},senderAddress:{label:"పంపిన వ్యక్తి చిరునామా",placeholder:"చిరునామా",multi:true},noticeDate:{label:"అసలు నోటీసు తేదీ",placeholder:"",type:"date"},court:{label:"కోర్టు / ట్రిబ్యునల్",placeholder:"ఉదా. జిల్లా కోర్టు, హైదరాబాద్"},caseType:{label:"కేసు రకం",placeholder:"ఉదా. సివిల్ సూట్"},caseNumber:{label:"కేసు నంబర్",placeholder:"ఉదా. CS No. 123/2024"},fir:{label:"FIR నంబర్",placeholder:"ఉదా. FIR No. 45/2024"},policeStation:{label:"పోలీస్ స్టేషన్",placeholder:"స్టేషన్ పేరు"},charges:{label:"అభియోగాలు / IPC సెక్షన్లు",placeholder:"ఉదా. S.420 IPC",multi:true},bailGrounds:{label:"బెయిల్ ఆధారాలు",placeholder:"ఆధారాలు రాయండి…",multi:true},suretyName:{label:"జామీన్దారు పేరు",placeholder:"పేరు మరియు చిరునామా"},impugnedOrder:{label:"వివాదాస్పద ఉత్తర్వు",placeholder:"సవాలు చేయబడిన ఉత్తర్వు"},stayGrounds:{label:"స్టే ఆధారాలు",placeholder:"స్టే ఎందుకు ఇవ్వాలి…",multi:true},urgency:{label:"అత్యవసరం",placeholder:"స్వభావం"},subject:{label:"విషయం",placeholder:"సంక్షిప్త విషయం"},facts:{label:"కేసు వాస్తవాలు",placeholder:"వాస్తవాలు రాయండి…",multi:true},prayer:{label:"ప్రార్థన",placeholder:"అభ్యర్థించిన సహాయం…",multi:true},relief:{label:"సహాయం",placeholder:"ఏ సహాయం అభ్యర్థిస్తున్నారు?",multi:true},reply:{label:"జవాబు",placeholder:"నోటీసుకు మీ జవాబు…",multi:true},noticePeriod:{label:"నోటీసు వ్యవధి (రోజులు)",placeholder:"ఉదా. 15",type:"number"},place:{label:"స్థలం",placeholder:"ఉదా. హైదరాబాద్"},date:{label:"తేదీ",placeholder:"",type:"date"},authority:{label:"అధికారి / వేదిక",placeholder:"ఉదా. జిల్లా వినియోగదారుల కమిషన్"},complainantName:{label:"ఫిర్యాదుదారు పేరు",placeholder:"పూర్తి పేరు"},complainantAddress:{label:"ఫిర్యాదుదారు చిరునామా",placeholder:"పూర్తి చిరునామా",multi:true},
    },
    version:"v1.0 — హ్యాకథాన్ బిల్డ్",
  },
};

function L(lang, key) {
  return (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
}

// ── In-memory DB ──────────────────────────────────────────────────────────────
// ── Persistent Auth Store (window.storage) ───────────────────────────────────
const DEMO_USER = { id:1, name:"Demo User", email:"demo@vakeelmate.in", password:"demo123", role:"public" };

async function dbGetUsers() {
  try {
    const res = await window.storage.get("vm_users");
    const users = res ? JSON.parse(res.value) : [DEMO_USER];
    // Ensure demo always exists
    if (!users.find(u => u.email === DEMO_USER.email)) users.unshift(DEMO_USER);
    return users;
  } catch {
    return [DEMO_USER];
  }
}

async function dbSaveUsers(users) {
  try {
    await window.storage.set("vm_users", JSON.stringify(users));
    return true;
  } catch {
    return false;
  }
}

async function dbGetSession() {
  try {
    const res = await window.storage.get("vm_session");
    return res ? JSON.parse(res.value) : null;
  } catch { return null; }
}

async function dbSaveSession(user) {
  try {
    await window.storage.set("vm_session", JSON.stringify(user));
  } catch {}
}

async function dbClearSession() {
  try { await window.storage.delete("vm_session"); } catch {}
}

// Legacy in-memory fallback
const DB = { users: [DEMO_USER] };

// ── CSS ───────────────────────────────────────────────────────────────────────

// ── Logo ──────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <div className="logo-wrap">
      <div className="logo-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M12 2v20M3 7l9 5 9-5" stroke="#c9a84c" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="logo-mark">Vakeel<span>Mate</span></div>
    </div>
  );
}

// ── Auth Screen ───────────────────────────────────────────────────────────────
function AuthScreen({ onAuth, lang, setLang }) {
  const [tab, setTab]   = useState("login");
  const [form, setForm] = useState({ name:"", email:"", password:"", confirm:"" });
  const [msg, setMsg]   = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]   = useState({});
  const _ = (k) => L(lang, k);
  const set = k => e => { setForm(f => ({ ...f, [k]: e.target.value })); setErrors(er => ({ ...er, [k]:null })); };

  function validate(fields) {
    const er = {};
    if (fields.includes("name")    && !form.name.trim())    er.name    = _("fieldRequired");
    if (fields.includes("email")   && !form.email.trim())   er.email   = _("fieldRequired");
    if (fields.includes("password") && !form.password)       er.password = _("fieldRequired");
    if (fields.includes("confirm") && form.password !== form.confirm) er.confirm = _("passwordMismatch");
    if (fields.includes("password") && form.password && form.password.length < 6) er.password = _("passwordTooShort");
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function handleLogin() {
    if (!validate(["email","password"])) return;
    setLoading(true); setMsg(null);
    try {
      const users = await dbGetUsers();
      const user  = users.find(u => u.email.toLowerCase() === form.email.toLowerCase().trim() && u.password === form.password);
      if (!user) { setMsg({ type:"error", text:_("invalidCredentials") }); setLoading(false); return; }
      await dbSaveSession(user);
      onAuth(user);
    } catch {
      setMsg({ type:"error", text:_("authStorageError") });
    }
    setLoading(false);
  }

  async function handleRegister() {
    if (!validate(["name","email","password","confirm"])) return;
    setLoading(true); setMsg(null);
    try {
      const users = await dbGetUsers();
      if (users.find(u => u.email.toLowerCase() === form.email.toLowerCase().trim())) {
        setMsg({ type:"error", text:_("accountExists") }); setLoading(false); return;
      }
      const newUser = { id:Date.now(), name:form.name.trim(), email:form.email.toLowerCase().trim(), password:form.password, role:null };
      const saved = await dbSaveUsers([...users, newUser]);
      if (!saved) { setMsg({ type:"error", text:_("authStorageError") }); setLoading(false); return; }
      setMsg({ type:"success", text:_("accountReady") });
      setTab("login");
      setForm(f => ({ ...f, name:"", password:"", confirm:"" }));
    } catch {
      setMsg({ type:"error", text:_("authStorageError") });
    }
    setLoading(false);
  }

  function handleKeyDown(e) { if (e.key === "Enter") tab === "login" ? handleLogin() : handleRegister(); }

  return (
    <div className="center-page">
      <div className="bg-pattern" />
      <div className="card fade-up">
        <Logo />
        <p className="tagline">{_("tagline")}</p>

        <div className="lang-row">
          {[["en","EN"],["hi","HI"],["te","TE"]].map(([code, label]) => (
            <button key={code} className={"lang-pill" + (lang === code ? " active" : "")} onClick={() => setLang(code)}>{label}</button>
          ))}
        </div>

        <div className="tabs">
          <button className={"tab" + (tab === "login"    ? " active" : "")} onClick={() => { setTab("login");    setMsg(null); setErrors({}); }}>{_("signIn")}</button>
          <button className={"tab" + (tab === "register" ? " active" : "")} onClick={() => { setTab("register"); setMsg(null); setErrors({}); }}>{_("createAccount")}</button>
        </div>

        {tab === "login" ? (
          <div>
            <div className="field">
              <label>{_("emailAddress")}</label>
              <input type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} onKeyDown={handleKeyDown} style={errors.email ? { borderColor:"var(--danger)" } : {}} />
              {errors.email && <div style={{ fontSize:11, color:"var(--danger)", marginTop:3 }}>{errors.email}</div>}
            </div>
            <div className="field">
              <label>{_("password")}</label>
              <input type="password" placeholder="••••••" value={form.password} onChange={set("password")} onKeyDown={handleKeyDown} style={errors.password ? { borderColor:"var(--danger)" } : {}} />
              {errors.password && <div style={{ fontSize:11, color:"var(--danger)", marginTop:3 }}>{errors.password}</div>}
            </div>
            <button className="btn btn-primary" onClick={handleLogin} disabled={loading}>
              {loading ? _("signingIn") : _("signIn") + " →"}
            </button>
            <button className="btn btn-outline" onClick={async () => {
              setLoading(true);
              await dbSaveSession(DEMO_USER);
              onAuth(DEMO_USER);
              setLoading(false);
            }} disabled={loading}>{_("tryDemo")}</button>
            <p style={{ fontSize:11, color:"var(--muted)", textAlign:"center", marginTop:10 }}>{_("forgotNote")}</p>
          </div>
        ) : (
          <div>
            <div className="field">
              <label>{_("fullName")}</label>
              <input type="text" placeholder="Arjun Sharma" value={form.name} onChange={set("name")} onKeyDown={handleKeyDown} style={errors.name ? { borderColor:"var(--danger)" } : {}} />
              {errors.name && <div style={{ fontSize:11, color:"var(--danger)", marginTop:3 }}>{errors.name}</div>}
            </div>
            <div className="field">
              <label>{_("emailAddress")}</label>
              <input type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} onKeyDown={handleKeyDown} style={errors.email ? { borderColor:"var(--danger)" } : {}} />
              {errors.email && <div style={{ fontSize:11, color:"var(--danger)", marginTop:3 }}>{errors.email}</div>}
            </div>
            <div className="field">
              <label>{_("password")}</label>
              <input type="password" placeholder={_("strongPassword")} value={form.password} onChange={set("password")} onKeyDown={handleKeyDown} style={errors.password ? { borderColor:"var(--danger)" } : {}} />
              {errors.password && <div style={{ fontSize:11, color:"var(--danger)", marginTop:3 }}>{errors.password}</div>}
            </div>
            <div className="field">
              <label>{_("confirmPassword")}</label>
              <input type="password" placeholder="••••••" value={form.confirm} onChange={set("confirm")} onKeyDown={handleKeyDown} style={errors.confirm ? { borderColor:"var(--danger)" } : {}} />
              {errors.confirm && <div style={{ fontSize:11, color:"var(--danger)", marginTop:3 }}>{errors.confirm}</div>}
            </div>
            <button className="btn btn-primary" onClick={handleRegister} disabled={loading}>
              {loading ? _("creatingAccount") : _("createAccount") + " →"}
            </button>
          </div>
        )}

        {msg && <div className={"msg msg-" + msg.type}>{msg.text}</div>}
        <p className="disclaimer">{_("disclaimer")}</p>
      </div>
    </div>
  );
}


// ── Role Select ───────────────────────────────────────────────────────────────
function RoleSelectScreen({ user, onRoleSelected }) {
  const lang = useLang();
  const _ = (k) => L(lang, k);
  const [selected, setSelected] = useState(null);
  const [msg, setMsg] = useState(null);

  function confirm() {
    if (!selected) { setMsg(_("selectRole")); return; }
    const updated = { ...user, role: selected };
    onRoleSelected(updated);
    // persist in background — never blocks navigation
    dbGetUsers().then(users => {
      const newUsers = users.map(u => u.id === updated.id ? updated : u);
      return dbSaveUsers(newUsers);
    }).catch(() => {});
  }

  return (
    <div className="center-page" style={{ background:"var(--paper)" }}>
      <div className="card fade-up" style={{ maxWidth:480 }}>
        <Logo />
        <p className="tagline" style={{ marginBottom:6 }}>{_("welcomeUser")}, {user.name.split(" ")[0]}!</p>
        <p style={{ fontSize:14, color:"var(--muted)", marginBottom:28 }}>{_("howUsing")}</p>
        <div className="role-grid">
          <div className={"role-card" + (selected === "public" ? " selected" : "")} onClick={() => setSelected("public")}>
            <div className="role-icon">👤</div>
            <div className="role-name">{_("publicUser")}</div>
            <div className="role-desc">{_("publicDesc")}</div>
          </div>
          <div className={"role-card" + (selected === "lawyer" ? " selected" : "")} onClick={() => setSelected("lawyer")}>
            <div className="role-icon">⚖️</div>
            <div className="role-name">{_("advocate")}</div>
            <div className="role-desc">{_("advocateDesc")}</div>
          </div>
        </div>
        {msg && <div className="msg msg-error" style={{ marginBottom:12 }}>{msg}</div>}
        <button className="btn btn-primary" onClick={confirm}>{_("continueDashboard")} →</button>
        <p className="disclaimer">{_("disclaimerShort")}</p>
      </div>
    </div>
  );
}

// ── JurisBot ──────────────────────────────────────────────────────────────────

function parseResponse(text) {
  try {
    const m = text.match(/\{[\s\S]*\}/);
    if (m) return JSON.parse(m[0]);
  } catch (_) {}
  return { summary:text, act:null, coverage:null, nextSteps:null };
}

function JurisBot({ role }) {
  const lang = useLang();
  const _ = (k) => L(lang, k);
  const isLawyer = role === "lawyer";
  const CHIPS_PUBLIC = L(lang,'chipsPublic');
  const CHIPS_LAWYER = L(lang,'chipsLawyer');
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  async function ask(q) {
    const question = q || query;
    if (!question.trim()) return;
    setLoading(true); setResponse(null); setError(null);

    const sysPrompt = isLawyer
      ? `You are JurisBot, an advanced legal research assistant for qualified Indian advocates. Assist with precise legal research, procedural queries, drafting strategy, and case law references. Always respond in valid JSON: {"summary":"...","act":"...","actSection":"...","coverage":"...","rights":"...","nextSteps":"...","urgency":"low|medium|high","caseNote":"..."}`
      : `You are JurisBot, a legal awareness assistant for Indian citizens. Keep language simple and empathetic. Always respond in valid JSON: {"summary":"...","act":"...","actSection":"...","coverage":"...","rights":"...","nextSteps":"...","urgency":"low|medium|high"}`;

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:1000,
          system: sysPrompt,
          messages:[{ role:"user", content:question }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      setResponse(parseResponse(text));
      setHistory(h => [{ q:question, time:new Date().toLocaleTimeString() }, ...h.slice(0,4)]);
      setQuery("");
    } catch {
      setError(L(lang,"errorGeneric"));
    } finally {
      setLoading(false);
    }
  }

  const urgencyColor = { low:"ub-low", medium:"ub-med", high:"ub-high" };
  const chips = isLawyer ? CHIPS_LAWYER : CHIPS_PUBLIC;

  return (
    <div className="jurisbot-wrap fade-up">
      <h1 className="page-title">{_("jurisBotTitle")}</h1>
      <p className="page-subtitle">{_(isLawyer ? "jurisBotSubtitleLawyer" : "jurisBotSubtitlePublic")}</p>

      <div className="jurisbot-intro">
        <div className="jurisbot-avatar">{isLawyer ? "⚖️" : "🤖"}</div>
        <div>
          <h2>{_(isLawyer ? "advocateMode" : "jurisBotHelloPublic")}</h2>
          <p>{_(isLawyer ? "jurisBotDescLawyer" : "jurisBotDescPublic")}</p>
        </div>
      </div>

      <p style={{ fontSize:11, color:"var(--muted)", marginBottom:10, fontWeight:600, letterSpacing:".05em", textTransform:"uppercase" }}>{_("trySample")}</p>
      <div className="chips">
        {chips.map((q, i) => <div key={i} className="chip" onClick={() => ask(q)}>{q}</div>)}
      </div>

      <div className="query-box">
        <textarea rows={3} placeholder={_(isLawyer ? "jurisBotPlaceholderLawyer" : "jurisBotPlaceholderPublic")}
          value={query} onChange={e => setQuery(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); } }} />
        <button className="ask-btn" onClick={() => ask()} disabled={loading}>
          {loading ? _("thinking") : _("askJurisBot") + " →"}
        </button>
      </div>

      {loading && (
        <div className="response-card">
          <div className="response-header"><span className="response-header-title">{_("legalReport")}</span></div>
          <div className="thinking-dots"><div className="dot"/><div className="dot"/><div className="dot"/></div>
        </div>
      )}

      {error && <div className="msg msg-error">{error}</div>}

      {response && (
        <div className="response-card">
          <div className="response-header">
            <span className="response-header-title">{_("legalReport")}</span>
            {response.urgency && (
              <span className={"urgency-badge " + (urgencyColor[response.urgency] || "ub-low")}>
                {_(response.urgency === "low" ? "urgencyLow" : response.urgency === "medium" ? "urgencyMed" : "urgencyHigh")}
              </span>
            )}
          </div>
          <div className="response-body">
            {response.summary && (
              <div className="response-section">
                <div className="section-icon">📋</div>
                <div><div className="section-label">{_("situationSummary")}</div><div className="section-text">{response.summary}</div></div>
              </div>
            )}
            {response.act && (
              <div className="response-section">
                <div className="section-icon">📚</div>
                <div>
                  <div className="section-label">{_("relevantAct")}</div>
                  <div className="section-text" style={{ fontWeight:600 }}>{response.act}{response.actSection ? " — " + response.actSection : ""}</div>
                </div>
              </div>
            )}
            {response.coverage && (
              <div className="response-section">
                <div className="section-icon">🏛</div>
                <div><div className="section-label">{_("whatCovers")}</div><div className="section-text">{response.coverage}</div></div>
              </div>
            )}
            {response.rights && (
              <div className="response-section">
                <div className="section-icon">🛡</div>
                <div><div className="section-label">{_("yourRights")}</div><div className="section-text">{response.rights}</div></div>
              </div>
            )}
            {response.nextSteps && (
              <div className="response-section">
                <div className="section-icon">➡️</div>
                <div>
                  <div className="section-label">{_(isLawyer ? "proceduralSteps" : "suggestedSteps")}</div>
                  <div className="section-text">
                    {response.nextSteps.split("\n").filter(Boolean).map((s, i) => (
                      <div key={i} style={{ marginBottom:4 }}>{"- " + s.replace(/^[-*]\s*/, "")}</div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {response.caseNote && (
              <div className="response-section">
                <div className="section-icon">📜</div>
                <div><div className="section-label">{_("caseReference")}</div><div className="section-text" style={{ fontStyle:"italic" }}>{response.caseNote}</div></div>
              </div>
            )}
          </div>
          <div className="response-disclaimer">
            <span>⚠️</span>
            <span>{_(isLawyer ? "disclaimerLawyer" : "disclaimerPublic")}</span>
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div style={{ marginTop:28 }}>
          <div style={{ fontSize:10, color:"var(--muted)", letterSpacing:".07em", textTransform:"uppercase", fontWeight:700, marginBottom:10 }}>{_("recentQuestions")}</div>
          <div className="history-list">
            {history.map((h, i) => (
              <div key={i} className="history-item" onClick={() => setQuery(h.q)}>
                <span>"{h.q}"</span>
                <span style={{ fontSize:10, color:"var(--muted)", flexShrink:0, marginLeft:12 }}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Acts Library ──────────────────────────────────────────────────────────────
function Accordion({ icon, title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setOpen(o => !o)}>
        <span className="accordion-icon">{icon}</span>
        <span className="accordion-title">{title}</span>
        <span className={"accordion-chevron" + (open ? " open" : "")}>▼</span>
      </div>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
}

function ActsLibrary() {
  const lang = useLang();
  const _ = (k) => L(lang, k);
  const ACTS = L(lang,'acts');
  const CAT_COLORS = L(lang,'catColors');
  const ALL_CATS = [null, ...Array.from(new Set(ACTS.map(a => a.category)))];
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState(null);
  const [selected, setSelected] = useState(null);

  const filtered = ACTS.filter(a => {
    const q = search.toLowerCase();
    const matchSearch = !q || a.name.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q)) || a.overview.toLowerCase().includes(q);
    const matchCat = !cat || a.category === cat;
    return matchSearch && matchCat;
  });

  if (selected) {
    const color = CAT_COLORS[selected.category] || "#555";
    return (
      <div className="act-detail fade-up">
        <button className="back-btn" onClick={() => setSelected(null)}>← {_("backToActs")}</button>
        <div className="act-detail-header">
          <div className="act-detail-cat" style={{ color:color }}>{selected.category}</div>
          <div className="act-detail-title">{selected.name}</div>
          <div className="act-detail-year">{_("enacted")}: {selected.year}</div>
        </div>
        <Accordion icon="📋" title={_("overviewLabel")}><p>{selected.overview}</p></Accordion>
        <Accordion icon="👥" title={_("applicabilityLabel")}><p>{selected.applicability}</p></Accordion>
        <Accordion icon="🛡" title={_("rightsLabel")}><ul>{selected.rights.map((r,i) => <li key={i}>{r}</li>)}</ul></Accordion>
        <Accordion icon="⚠️" title={_("penaltiesLabel")}><ul>{selected.penalties.map((p,i) => <li key={i}>{p}</li>)}</ul></Accordion>
        <Accordion icon="➡️" title={_("stepsLabel")}><ul>{selected.steps.map((s,i) => <li key={i}>{s}</li>)}</ul></Accordion>
        <Accordion icon="❓" title={_("faqsLabel")}>{selected.faqs.map((f,i) => <div key={i} style={{ marginBottom:12 }}><strong>{f.q}</strong><p style={{ marginTop:6, color:"var(--muted)", fontSize:13, lineHeight:1.7 }}>{f.a}</p></div>)}</Accordion>
      </div>
    );
  }

  return (
    <div className="fade-up">
      <h1 className="page-title">{_("actsTitle")}</h1>
      <p className="page-subtitle">{_("actsSubtitle")}</p>
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input placeholder={_("searchActs")} value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <div className="cat-filters">
        {ALL_CATS.map(c => (
          <button key={c ?? "all"} className={"cat-btn" + (cat === c ? " active" : "")} onClick={() => setCat(c)}>
            {c === null ? _("allCategories") : c}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <div className="no-results"><div className="nr-icon">📭</div><p>{_("noResultsActs")} "{search}"</p><p style={{ fontSize:12, marginTop:4 }}>{_("tryDifferent")}</p></div>
      ) : (
        <div className="acts-grid">
          {filtered.map(act => {
            const color = CAT_COLORS[act.category] || "#555";
            return (
              <div key={act.id} className="act-card" onClick={() => setSelected(act)}>
                <div className="act-stripe" style={{ background:color }} />
                <div className="act-cat" style={{ color }}>{act.category}</div>
                <div className="act-name">{act.name}</div>
                <div className="act-year">{act.year}</div>
                <div className="act-desc">{act.overview.slice(0,90)}...</div>
                <div className="act-tags">{act.tags.map(t => <span key={t} className="act-tag">{t}</span>)}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── FIR Guide ─────────────────────────────────────────────────────────────────

const BLANK_FORM = {
  psName:"", psAddress:"", date:"",
  yourName:"", fatherName:"", age:"", yourAddress:"", yourPhone:"",
  subject:"", incidentDate:"", incidentTime:"", incidentLocation:"", incidentDesc:"",
  accusedName:"", accusedDesc:"", witnesses:"", evidence:"", lossDesc:"",
};

function buildLetter(f) {
  const v = (val, ph) => val.trim() ? val.trim() : ph;
  return `TO,
The Station House Officer,
${v(f.psName, "[Name of Police Station]")},
${v(f.psAddress, "[Address of Police Station]")}

Date: ${v(f.date, "[DD/MM/YYYY]")}

SUBJECT: First Information Report regarding ${v(f.subject, "[nature of offence]")}

Respected Sir/Madam,

I, ${v(f.yourName, "[Your Full Name]")}, son/daughter of ${v(f.fatherName, "[Father's/Mother's Name]")}, aged ${v(f.age, "[Age]")} years,
residing at ${v(f.yourAddress, "[Your Complete Address]")}, wish to bring to your notice the following:

1. INCIDENT:
   On ${v(f.incidentDate, "[Date of Incident]")} at approximately ${v(f.incidentTime, "[Time]")}, at ${v(f.incidentLocation, "[Location]")},
   ${v(f.incidentDesc, "[Describe what happened in clear, factual terms]")}

2. ACCUSED (if known):
   Name: ${v(f.accusedName, "[Name of Accused / Unknown Person]")}
   Description: ${v(f.accusedDesc, "[Physical features, vehicle number, etc.]")}

3. WITNESSES (if any):
   ${v(f.witnesses, "[Name and address of any witness]")}

4. EVIDENCE:
   ${v(f.evidence, "[Photos, videos, medical reports, documents, etc.]")}

5. LOSS/INJURY SUFFERED:
   ${v(f.lossDesc, "[Describe any loss, damage, or injury caused]")}

I request you to register an FIR and take necessary legal action against the accused.

Yours faithfully,
[Your Signature]
${v(f.yourName, "[Your Full Name]")}
${v(f.yourPhone, "[Your Contact Number]")}
${v(f.yourAddress, "[Your Address]")}`;
}

function FirFaq({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <div className="faq-q" onClick={() => setOpen(o => !o)}><span>{q}</span><span>{open ? "▲" : "▼"}</span></div>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

function FIRDraftForm() {
  const lang = useLang();
  const _ = (k) => L(lang, k);
  const [form, setForm] = useState(BLANK_FORM);
  const [copied, setCopied] = useState(false);
  const [aiDraft, setAiDraft] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);
  const set = k => e => setForm(f => ({ ...f, [k]:e.target.value }));
  const preview = aiDraft || buildLetter(form);

  const LANG_NAMES = { en:"English", hi:"Hindi", te:"Telugu" };

  async function generateAiDraft() {
    setAiLoading(true); setAiDraft(null); setAiError(null);
    const langName = LANG_NAMES[lang] || "English";
    const filled = Object.entries(form).filter(([,v]) => v && v.trim()).map(([k,v]) => k + ": " + v).join("\n");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:1200,
          system:"You are an expert Indian legal drafter. Draft a complete, formal FIR complaint letter. Use proper Indian legal language. Write the ENTIRE document in " + langName + " only. Use [PLACEHOLDER] for missing fields. Return ONLY the letter text — no explanations, no markdown.",
          messages:[{ role:"user", content:"Draft an FIR complaint letter in " + langName + " with these details:\n" + (filled || "Use generic placeholder values.") }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      if (!text) throw new Error("empty");
      setAiDraft(text);
    } catch {
      setAiError(L(lang,"aiDraftError"));
    } finally {
      setAiLoading(false);
    }
  }

  function copyText() {
    navigator.clipboard.writeText(preview).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  }

  function renderPreview(text) {
    return text.split(/(\[[^\]]+\])/g).map((part, i) =>
      part.startsWith("[") ? <span key={i} className="tpl-field">{part}</span> : <span key={i}>{part}</span>
    );
  }

  return (
    <div>
      <div style={{ marginBottom:18 }}>
        <div className="fir-section-title">{_('firFormTitle')}</div>
        <p style={{ fontSize:13, color:"var(--muted)" }}>{_("firFormHint")}</p>
      </div>
      <div className="fir-draft-layout">
        <div className="fir-form-panel">
          <div className="fir-form-section">
            <div className="fir-form-section-header">{_('firFormPS')}</div>
            <div className="fir-form-fields">
              <div className="fir-field"><label>{_('firFieldPS')}</label><input placeholder="e.g. Banjara Hills Police Station" value={form.psName} onChange={set("psName")} /></div>
              <div className="fir-field"><label>{_('firFieldPSAddr')}</label><input placeholder="Full address of police station" value={form.psAddress} onChange={set("psAddress")} /></div>
              <div className="fir-field"><label>{_('firFieldDate')}</label><input type="date" value={form.date} onChange={set("date")} /></div>
            </div>
          </div>
          <div className="fir-form-section">
            <div className="fir-form-section-header">{_('firFormPersonal')}</div>
            <div className="fir-form-fields">
              <div className="fir-field"><label>{_('firFieldName')}</label><input placeholder="As on Aadhaar / ID proof" value={form.yourName} onChange={set("yourName")} /></div>
              <div className="fir-field-row">
                <div className="fir-field"><label>{_('firFieldParent')}</label><input placeholder="Parent's name" value={form.fatherName} onChange={set("fatherName")} /></div>
                <div className="fir-field"><label>{_('firFieldAge')}</label><input type="number" placeholder="25" value={form.age} onChange={set("age")} /></div>
              </div>
              <div className="fir-field"><label>{_('firFieldAddr')}</label><textarea placeholder="Complete residential address" rows={2} value={form.yourAddress} onChange={set("yourAddress")} /></div>
              <div className="fir-field"><label>{_('firFieldPhone')}</label><input placeholder="10-digit mobile number" value={form.yourPhone} onChange={set("yourPhone")} /></div>
            </div>
          </div>
          <div className="fir-form-section">
            <div className="fir-form-section-header">{_('firFormIncident')}</div>
            <div className="fir-form-fields">
              <div className="fir-field"><label>{_('firFieldSubject')}</label><input placeholder="e.g. Theft, Assault, Online Fraud" value={form.subject} onChange={set("subject")} /></div>
              <div className="fir-field-row">
                <div className="fir-field"><label>{_('firFieldIncDate')}</label><input type="date" value={form.incidentDate} onChange={set("incidentDate")} /></div>
                <div className="fir-field"><label>{_('firFieldTime')}</label><input type="time" value={form.incidentTime} onChange={set("incidentTime")} /></div>
              </div>
              <div className="fir-field"><label>{_('firFieldLocation')}</label><input placeholder="Where did it happen?" value={form.incidentLocation} onChange={set("incidentLocation")} /></div>
              <div className="fir-field"><label>{_('firFieldDesc')}</label><textarea placeholder="Describe the incident clearly and factually." rows={4} value={form.incidentDesc} onChange={set("incidentDesc")} /></div>
            </div>
          </div>
          <div className="fir-form-section">
            <div className="fir-form-section-header">{_('firFormAccused')}</div>
            <div className="fir-form-fields">
              <div className="fir-field"><label>{_('firFieldAccused')}</label><input placeholder="Name or 'Unknown Person'" value={form.accusedName} onChange={set("accusedName")} /></div>
              <div className="fir-field"><label>{_('firFieldAccusedDesc')}</label><input placeholder="Physical features, vehicle number, etc." value={form.accusedDesc} onChange={set("accusedDesc")} /></div>
              <div className="fir-field"><label>{_('firFieldWitness')}</label><input placeholder="Name and contact of witnesses" value={form.witnesses} onChange={set("witnesses")} /></div>
              <div className="fir-field"><label>{_('firFieldEvidence')}</label><textarea placeholder="Photos, videos, screenshots, receipts, medical reports..." rows={2} value={form.evidence} onChange={set("evidence")} /></div>
              <div className="fir-field"><label>{_('firFieldLoss')}</label><textarea placeholder="Describe any physical, financial, or emotional harm caused." rows={2} value={form.lossDesc} onChange={set("lossDesc")} /></div>
            </div>
          </div>
          <p style={{ fontSize:11, color:"var(--muted)", lineHeight:1.6, padding:"8px 0" }}>⚠️ This form generates a complaint letter for guidance only. Verify details with a qualified advocate before filing.</p>
        </div>
        <div className="fir-preview-panel">
          <div className="fir-preview-header">
            <span style={{ fontSize:11, fontWeight:700, letterSpacing:".06em", textTransform:"uppercase" }}>{aiDraft ? "AI Draft (" + ({"en":"English","hi":"Hindi","te":"Telugu"}[lang] || lang) + ")" : "Live Preview"}</span>
            <span style={{ fontSize:10, color:"rgba(255,255,255,.4)" }}>{aiDraft ? _("aiGeneratedPreview") : _("livePreviewNote")}</span>
          </div>
          <div className="fir-preview-box">{renderPreview(preview)}</div>
          {aiError && <div className="msg msg-error" style={{ margin:"10px 0 0" }}>{aiError}</div>}
          <div className="fir-actions">
            <button className="fir-btn-primary" onClick={generateAiDraft} disabled={aiLoading} style={{ background:"var(--gold)", color:"var(--ink)" }}>
              {aiLoading ? "Generating..." : "AI Draft in " + ({"en":"English","hi":"Hindi","te":"Telugu"}[lang] || lang)}
            </button>
            <button className="fir-btn-primary" onClick={copyText}>{copied ? "Copied!" : "Copy"}</button>
            <button className="fir-btn-outline" onClick={() => { setForm(BLANK_FORM); setAiDraft(null); }}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FIRGuide() {
  const lang = useLang();
  const _ = (k) => L(lang, k);
  const FIR_STEPS  = L(lang,'firSteps');
  const FIR_DOCS   = L(lang,'firDocs');
  const FIR_RIGHTS = L(lang,'firRights');
  const FIR_FAQS   = L(lang,'firFaqs');
  const [tab, setTab] = useState("steps");

  const tabs = [
    ["steps", _("stepsTab")],
    ["docs",  _("docsTab")],
    ["rights",_("rightsTab")],
    ["draft", _("draftTab")],
    ["faqs",  _("faqsTab")],
  ];

  return (
    <div className="fir-wrap fade-up">
      <h1 className="page-title">{_("firTitle")}</h1>
      <p className="page-subtitle">{_("firSubtitle")}</p>

      <div className="fir-hero">
        <div>
          <h2>{_("whatIsFir")}</h2>
          <p>{_("firDesc")}</p>
        </div>
        <div className="fir-badge">
          <div className="fir-badge-num">154</div>
          <div className="fir-badge-label">{_("crpcSection")}</div>
        </div>
      </div>

      <div className="fir-tabs">
        {tabs.map(([id, label]) => (
          <button key={id} className={"fir-tab" + (tab === id ? " active" : "")} onClick={() => setTab(id)}>{label}</button>
        ))}
      </div>

      {tab === "steps" && (
        <div>
          <div className="fir-section-title">{_('firStepByStep')}</div>
          <div className="step-list">
            {FIR_STEPS.map((s, i) => (
              <div className="step-item" key={i}>
                <div className="step-left">
                  <div className="step-num">{s.num}</div>
                  <div className="step-connector" />
                </div>
                <div className="step-body">
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background:"#f0faf5", border:"1px solid #b8e4cd", borderRadius:3, padding:"13px 18px", fontSize:13, color:"var(--success)" }}>
            {_("firAlwaysAsk")}
          </div>
        </div>
      )}

      {tab === "docs" && (
        <div>
          <div className="fir-section-title">{_('firDocsTitle')}</div>
          <div className="docs-grid">
            {FIR_DOCS.map((d, i) => (
              <div className="doc-item" key={i}>
                <div className="doc-icon">{d.icon}</div>
                <div><div className="doc-name">{d.name}</div><div className="doc-note">{d.note}</div></div>
              </div>
            ))}
          </div>
          <div style={{ background:"#fffdf0", border:"1px solid #f0e0a8", borderRadius:3, padding:"13px 18px", fontSize:12, color:"#8a7030" }}>
            Carry originals AND photocopies. Police may retain copies. Keep your originals safe.
          </div>
        </div>
      )}

      {tab === "rights" && (
        <div>
          <div className="fir-section-title">{_('firRightsTitle')}</div>
          <div className="rights-grid">
            {FIR_RIGHTS.map((r, i) => (
              <div className="right-item" key={i}>
                <div className="right-title">{r.title}</div>
                <div className="right-desc">{r.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ background:"#fdf2f2", border:"1px solid #f5c6c6", borderRadius:3, padding:"13px 18px", fontSize:13, color:"var(--danger)" }}>
            If police refuse to file your FIR, approach the Superintendent of Police, file with a Magistrate under Section 156(3) CrPC, or use <strong>cybercrime.gov.in</strong> for online offences.
          </div>
        </div>
      )}

      {tab === "draft" && <FIRDraftForm />}

      {tab === "faqs" && (
        <div>
          <div className="fir-section-title">{_('faqsLabel')}</div>
          {FIR_FAQS.map((f, i) => <FirFaq key={i} q={f.q} a={f.a} />)}
        </div>
      )}

      <div style={{ marginTop:28, padding:"13px 18px", background:"#fffdf0", border:"1px solid #f0e0a8", borderRadius:3, fontSize:12, color:"#8a7030" }}>
        This guide is for legal awareness only. Always consult a qualified advocate for your specific situation.
      </div>
    </div>
  );
}

// ── Draft Generator ───────────────────────────────────────────────────────────

const FULL_WIDTH = new Set(["facts","prayer","relief","bailGrounds","stayGrounds","reply","charges","subject","clientAddress","opponentAddress","petitionerAddress","respondentAddress","deponentAddress","senderAddress","complainantAddress"]);

function DraftGenerator() {
  const lang = useLang();
  const _ = (k) => L(lang, k);
  const DRAFT_TYPES    = L(lang,'draftTypes');
  const DRAFT_SECTIONS = L(lang,'draftSections');
  const FIELD_META     = L(lang,'fieldMeta');
  const [step, setStep] = useState(1);
  const [draftType, setDraftType] = useState(null);
  const [fields, setFields] = useState({});
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const set = k => e => setFields(f => ({ ...f, [k]:e.target.value }));

  function chooseType(id) {
    setDraftType(id); setFields({}); setOutput(null); setError(null); setStep(2);
  }

  async function generate() {
    setLoading(true); setOutput(null); setError(null); setStep(3);
    const typeLabel = DRAFT_TYPES.find(d => d.id === draftType)?.name || draftType;
    const filled = Object.entries(fields).filter(([,v]) => v?.trim()).map(([k,v]) => `${FIELD_META[k]?.label || k}: ${v}`).join("\n");
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          model:"claude-sonnet-4-20250514", max_tokens:1500,
          system:`You are an expert Indian legal drafter. Generate a complete, professionally formatted ${typeLabel}. Write the ENTIRE document in ${{ en:"English", hi:"Hindi", te:"Telugu" }[lang] || "English"} only. Use proper Indian legal formatting, language, and structure. Include all standard sections. Reference correct Indian acts and sections. Add [ADVOCATE SIGNATURE] and [DATE] placeholders where needed. For missing details use sensible [PLACEHOLDER] in brackets. Return ONLY the document text. No explanations, no markdown.`,
          messages:[{ role:"user", content:`Draft a ${typeLabel} in ${{ en:"English", hi:"Hindi", te:"Telugu" }[lang] || "English"}:\n${filled || "Use generic placeholders for all fields."}` }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map(b => b.text || "").join("") || "";
      if (!text) throw new Error("empty");
      setOutput({ text, type:typeLabel, date:new Date().toLocaleDateString("en-IN") });
    } catch {
      setError(L(lang,"errorGeneric"));
      setStep(2);
    } finally {
      setLoading(false);
    }
  }

  function copyDraft() {
    navigator.clipboard.writeText(output.text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  }

  const selectedType = DRAFT_TYPES.find(d => d.id === draftType);
  const sections = draftType ? (DRAFT_SECTIONS[draftType] || []) : [];

  return (
    <div className="draft-wrap fade-up">
      <h1 className="page-title">{_("draftTitle")}</h1>
      <p className="page-subtitle">{_("draftSubtitle")}</p>

      <div className="draft-steps">
        {[[_("chooseType")],[_("fillDetails")],[_("yourDraft")]].map(([label], i) => (
          <div key={i} className="draft-step">
            {i > 0 && <div className="ds-line" />}
            <div className={"ds-num" + (step > i+1 ? " done" : step === i+1 ? " active" : "")}>{step > i+1 ? "✓" : i+1}</div>
            <div className={"ds-label" + (step === i+1 ? " active" : step > i+1 ? " done" : "")}>{label}</div>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div>
          <div style={{ fontSize:12, color:"var(--muted)", marginBottom:16 }}>{_("selectDocType")}</div>
          <div className="draft-type-grid">
            {DRAFT_TYPES.map(t => (
              <div key={t.id} className="draft-type-card" onClick={() => chooseType(t.id)}>
                <div className="dt-icon">{t.icon}</div>
                <div className="dt-name">{t.name}</div>
                <div className="dt-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 2 && selectedType && (
        <div className="draft-form-wrap">
          <div className="draft-form-banner">
            <div className="draft-form-banner-icon">{selectedType.icon}</div>
            <div>
              <h3>{selectedType.name}</h3>
              <p>{selectedType.desc} — {_("fillWhatYouKnow")}</p>
            </div>
          </div>
          <div className="draft-form-sections">
            {sections.map(sec => (
              <div key={sec.label}>
                <div className="draft-section-label">{sec.label}</div>
                <div className="draft-fields-grid">
                  {sec.fields.map(k => {
                    const meta = FIELD_META[k] || { label:k, placeholder:"" };
                    const full = FULL_WIDTH.has(k);
                    return (
                      <div key={k} className={"df" + (full ? " full-width" : "")}>
                        <label>{meta.label}</label>
                        {meta.multi
                          ? <textarea placeholder={meta.placeholder} rows={k === "facts" ? 5 : 3} value={fields[k] || ""} onChange={set(k)} />
                          : <input type={meta.type || "text"} placeholder={meta.placeholder} value={fields[k] || ""} onChange={set(k)} />
                        }
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          {error && <div className="msg msg-error" style={{ margin:"0 28px 16px" }}>{error}</div>}
          <div className="draft-form-actions">
            <button className="draft-back-btn" onClick={() => setStep(1)}>← {_("changeType")}</button>
            <button className="draft-gen-btn" onClick={generate} disabled={loading}>
              {loading ? _("generating") : _("generateDraft") + " — " + selectedType.name}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="draft-output-wrap">
          <div className="draft-output-topbar">
            <div>
              <div className="dot-label">{selectedType?.icon} {output?.type || "Generating..."}</div>
              <div className="dot-meta">{output ? "Generated " + output.date + " · Review before filing" : "Please wait..."}</div>
            </div>
            {output && (
              <div className="draft-output-btns">
                <button className="dob dob-copy" onClick={copyDraft}>{copied ? "Copied!" : _("copyDraft")}</button>
                <button className="dob dob-ghost" onClick={() => { setStep(2); setOutput(null); }}>{_("edit")}</button>
                <button className="dob dob-ghost" onClick={() => { setStep(1); setDraftType(null); setOutput(null); }}>+ {_("newDraft")}</button>
              </div>
            )}
          </div>
          {loading ? (
            <div className="draft-loading-box">
              <div className="thinking-dots"><div className="dot"/><div className="dot"/><div className="dot"/></div>
              <p>{_('draftingDoc')} {selectedType?.name}...</p>
            </div>
          ) : output ? (
            <>
              <div className="draft-output-doc">{output.text}</div>
              <div className="draft-output-footer">
                <span>⚠️ {_("reviewBeforeFiling")}</span>
                <span style={{ color:"var(--gold)", fontWeight:600 }}>{selectedType?.icon} {output.type}</span>
              </div>
            </>
          ) : (
            <div className="draft-empty-state"><div className="des-icon">📄</div><p>{_("generatingDraft")}</p></div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
// ── Admin Panel ───────────────────────────────────────────────────────────────
function AdminPanel() {
  const lang = useLang();
  const _ = (k) => L(lang, k);
  const [activeTab, setActiveTab] = useState("overview");
  const [actionDone, setActionDone] = useState({});

  const ACTS_COUNT = L("en","acts") ? 8 : 8;

  const STATS = [
    { val:"3", lbl:_("apTotalUsers"), trend:"↑ 2 this week", highlight:false },
    { val:"1", lbl:_("apActiveToday"), trend:"", highlight:false },
    { val:"24", lbl:_("apQueriesTotal"), trend:"↑ 8 today", highlight:true },
    { val:"7", lbl:_("apDraftsTotal"), trend:"↑ 3 today", highlight:false },
    { val:"3", lbl:_("apCasesTotal"), trend:"", highlight:false },
    { val:"8", lbl:_("apActsTotal"), trend:"", highlight:false },
  ];

  const HEALTH = [
    { name:_("apApiStatus"), val:"Claude API · " + _("apOperational"), ok:true },
    { name:_("apDbStatus"), val:_("apHealthy") + " · In-memory", ok:true },
    { name:_("apAvgResponse"), val:"1.4 " + _("apMs"), ok:true },
    { name:_("apUptime"), val:_("apPercent"), ok:true },
    { name:_("apLangCoverage"), val:"EN · HI · TE", ok:true },
    { name:"JurisBot", val:_("apOperational"), ok:true },
  ];

  const ACTIONS = [
    { icon:"🗑", id:"cache",   name:_("apClearCache"),   desc:"Flush in-memory session data" },
    { icon:"📤", id:"export",  name:_("apExportData"),   desc:"Download usage logs as JSON" },
    { icon:"📚", id:"addact",  name:_("apAddAct"),       desc:"Add an act to the library" },
    { icon:"👥", id:"users",   name:_("apManageUsers"),  desc:"View and manage user accounts" },
  ];

  const ACTIVITY = [
    { icon:"🤖", text:"JurisBot query — 'Section 498A IPC applicability'", time:"2 min ago" },
    { icon:"📝", text:"Draft generated — Legal Notice (Advocate: Demo User)", time:"11 min ago" },
    { icon:"📂", text:"New case added — Priya Sharma vs Ramesh Developers", time:"34 min ago" },
    { icon:"👤", text:"User login — demo@vakeelmate.in", time:"1 hr ago" },
    { icon:"📋", text:"FIR Draft completed — Hyderabad Jurisdiction", time:"2 hr ago" },
    { icon:"🔍", text:"Acts Library search — 'domestic violence'", time:"3 hr ago" },
    { icon:"🌐", text:"Language switched to Telugu by user", time:"4 hr ago" },
    { icon:"👤", text:"New account registered — advocate@vakeelmate.in", time:"Yesterday" },
  ];

  const USAGE_BARS = [
    { label:"JurisBot", pct:72 },
    { label:"Acts Library", pct:55 },
    { label:"Draft Generator", pct:40 },
    { label:"FIR Guide", pct:30 },
    { label:"Case Files", pct:18 },
  ];

  function doAction(id) {
    setActionDone(s => ({ ...s, [id]:true }));
    setTimeout(() => setActionDone(s => ({ ...s, [id]:false })), 2000);
  }

  return (
    <div className="ap-wrap fade-up">
      <div style={{ marginBottom:24 }}>
        <h1 className="page-title">{_("adminPanelTitle")}</h1>
        <p className="page-subtitle">{_("adminPanelSubtitle")}</p>
      </div>

      {/* Tabs */}
      <div className="ap-tabs">
        {[
          ["overview", _("apOverview")],
          ["activity", _("apActivity")],
          ["actions",  _("apQuickActions")],
          ["health",   _("apSystemHealth")],
        ].map(([id, lbl]) => (
          <button key={id} className={"ap-tab" + (activeTab === id ? " active" : "")}
            onClick={() => setActiveTab(id)}>{lbl}</button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div>
          <div className="ap-section-title">{_("apOverview")}</div>
          <div className="ap-grid">
            {STATS.map((s, i) => (
              <div key={i} className={"ap-stat" + (s.highlight ? " highlight" : "")}>
                <div className="ap-stat-val">{s.val}</div>
                <div className="ap-stat-lbl">{s.lbl}</div>
                {s.trend && <div className="ap-stat-trend">{s.trend}</div>}
              </div>
            ))}
          </div>

          <div className="ap-section-title" style={{ marginTop:8 }}>Feature Usage</div>
          {USAGE_BARS.map((b, i) => (
            <div key={i} className="ap-bar-row">
              <div className="ap-bar-label"><span>{b.label}</span><span>{b.pct}%</span></div>
              <div className="ap-bar-track">
                <div className="ap-bar-fill" style={{ width: b.pct + "%" }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Activity Tab */}
      {activeTab === "activity" && (
        <div>
          <div className="ap-section-title">{_("apActivityTitle")}</div>
          <div className="ap-activity-list">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="ap-activity-item">
                <div className="ap-activity-icon">{a.icon}</div>
                <div className="ap-activity-body">
                  <div className="ap-activity-text">{a.text}</div>
                  <div className="ap-activity-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick Actions Tab */}
      {activeTab === "actions" && (
        <div>
          <div className="ap-section-title">{_("apQuickActions")}</div>
          <div className="ap-actions-grid">
            {ACTIONS.map((a) => (
              <div key={a.id} className="ap-action-card" onClick={() => doAction(a.id)}>
                <div className="ap-action-icon">{a.icon}</div>
                <div>
                  <div className="ap-action-name">{a.name}</div>
                  <div className="ap-action-desc">{a.desc}</div>
                </div>
                {actionDone[a.id] && <div className="ap-action-done">✓ {_("apActionDone")}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* System Health Tab */}
      {activeTab === "health" && (
        <div>
          <div className="ap-section-title">{_("apSystemHealth")}</div>
          <div className="ap-health-grid">
            {HEALTH.map((h, i) => (
              <div key={i} className="ap-health-item">
                <div className={"ap-health-dot " + (h.ok ? "green" : "amber")} />
                <div>
                  <div className="ap-health-name">{h.name}</div>
                  <div className="ap-health-val">{h.val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


// ── Case Files ────────────────────────────────────────────────────────────────
const BLANK_CASE = {
  clientName:"", caseNo:"", court:"", caseType:"",
  opponent:"", fir:"", sections:"", status:"active",
  nextDate:"", notes:"", createdAt: new Date().toISOString().slice(0,10),
};

const STATUS_COLORS = {
  active:"#1d7a4f", hearing:"#e65100", judgment:"#1565c0",
  closed:"#666", stay:"#6a1b9a",
};

function CaseFiles() {
  const lang = useLang();
  const _ = (k) => L(lang, k);
  const [cases, setCases]       = useState([
    { id:1, clientName:"Priya Sharma", caseNo:"CS/1234/2024", court:"District Court, Hyderabad",
      caseType:"Civil Suit", opponent:"Ramesh Developers", fir:"", sections:"S.420 IPC",
      status:"hearing", nextDate:"2026-03-20", notes:"Evidence submitted. Awaiting cross-examination.", createdAt:"2024-08-15" },
    { id:2, clientName:"Mohammed Irfan", caseNo:"CrPC/482/2025", court:"Telangana High Court",
      caseType:"Quashing Petition", opponent:"State of Telangana", fir:"FIR No. 88/2025",
      sections:"S.482 CrPC", status:"active", nextDate:"2026-04-02", notes:"Filed quashing petition. Oral arguments pending.", createdAt:"2025-01-10" },
    { id:3, clientName:"Anita Verma", caseNo:"DVC/22/2023", court:"JFCM, Secunderabad",
      caseType:"Domestic Violence", opponent:"Suresh Verma", fir:"",
      sections:"PWDVA 2005", status:"judgment", nextDate:"", notes:"Final arguments done. Judgment reserved.", createdAt:"2023-11-02" },
  ]);
  const [search, setSearch]     = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const [showModal, setShowModal]       = useState(false);
  const [editingCase, setEditingCase]   = useState(null);
  const [viewingCase, setViewingCase]   = useState(null);
  const [formData, setFormData]         = useState(BLANK_CASE);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const STATUSES = [
    { id:"active",   label:_("statusActive"),   cls:"cf-badge-active"   },
    { id:"hearing",  label:_("statusHearing"),  cls:"cf-badge-hearing"  },
    { id:"judgment", label:_("statusJudgment"), cls:"cf-badge-judgment" },
    { id:"stay",     label:_("statusStay"),     cls:"cf-badge-stay"     },
    { id:"closed",   label:_("statusClosed"),   cls:"cf-badge-closed"   },
  ];

  const getStatusCls  = (s) => STATUSES.find(x => x.id === s)?.cls || "cf-badge-active";
  const getStatusLabel= (s) => STATUSES.find(x => x.id === s)?.label || s;

  const filtered = cases.filter(c => {
    const q = search.toLowerCase();
    const matchQ = !q || c.clientName.toLowerCase().includes(q) ||
                   c.caseNo.toLowerCase().includes(q) ||
                   c.court.toLowerCase().includes(q) ||
                   c.opponent.toLowerCase().includes(q);
    const matchS = !statusFilter || c.status === statusFilter;
    return matchQ && matchS;
  });

  const stats = {
    total:   cases.length,
    active:  cases.filter(c => c.status === "active").length,
    upcoming:cases.filter(c => c.nextDate && c.nextDate >= new Date().toISOString().slice(0,10)).length,
    closed:  cases.filter(c => c.status === "closed").length,
  };

  function openNew() {
    setFormData({ ...BLANK_CASE, createdAt: new Date().toISOString().slice(0,10) });
    setEditingCase(null);
    setShowModal(true);
  }
  function openEdit(c) {
    setFormData({ ...c });
    setEditingCase(c.id);
    setShowModal(true);
    setViewingCase(null);
  }
  function saveCase() {
    if (!formData.clientName.trim()) return;
    if (editingCase) {
      setCases(cs => cs.map(c => c.id === editingCase ? { ...formData, id:editingCase } : c));
    } else {
      setCases(cs => [...cs, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  }
  function deleteCase(id) {
    setCases(cs => cs.filter(c => c.id !== id));
    setConfirmDelete(null);
    if (viewingCase?.id === id) setViewingCase(null);
  }
  function daysOpen(createdAt) {
    const d = Math.floor((Date.now() - new Date(createdAt)) / 86400000);
    return d;
  }
  const setF = (k) => (e) => setFormData(f => ({ ...f, [k]: e.target.value }));

  // ── Detail View ─────────────────────────────────────────────────────────────
  if (viewingCase) {
    const c = viewingCase;
    const color = STATUS_COLORS[c.status] || "#555";
    return (
      <div className="cf-wrap fade-up">
        <button className="back-btn" onClick={() => setViewingCase(null)}>← {_("caseFiles")}</button>
        <div className="cf-detail" style={{ marginTop:16 }}>
          <div className="cf-detail-top">
            <div>
              <div className="cf-detail-title">{c.clientName}</div>
              <div style={{ marginTop:6, display:"flex", gap:8, alignItems:"center" }}>
                <span className={"cf-badge " + getStatusCls(c.status)}>{getStatusLabel(c.status)}</span>
                <span style={{ fontSize:12, color:"var(--muted)" }}>{c.caseNo}</span>
              </div>
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <button className="cf-action-btn" onClick={() => openEdit(c)}>✏️ {_("editCase")}</button>
              <button className="cf-action-btn danger" onClick={() => setConfirmDelete(c.id)}>🗑 {_("deleteCase")}</button>
            </div>
          </div>

          <div style={{ height:3, background: color, borderRadius:2, marginBottom:20 }} />

          <div className="cf-detail-grid">
            <div className="cf-detail-item"><label>{_("cfCourt")}</label><p>{c.court || "—"}</p></div>
            <div className="cf-detail-item"><label>{_("cfCaseType")}</label><p>{c.caseType || "—"}</p></div>
            <div className="cf-detail-item"><label>{_("cfOpponent")}</label><p>{c.opponent || "—"}</p></div>
            <div className="cf-detail-item"><label>{_("cfFir")}</label><p>{c.fir || "—"}</p></div>
            <div className="cf-detail-item"><label>{_("cfSection")}</label><p>{c.sections || "—"}</p></div>
            <div className="cf-detail-item"><label>{_("cfNextDate")}</label><p>{c.nextDate || _("cfNoDate")}</p></div>
            <div className="cf-detail-item"><label>{_("cfCreated")}</label><p>{c.createdAt} · {daysOpen(c.createdAt)} {_("cfDaysOpen")}</p></div>
          </div>

          {c.notes && (
            <div>
              <div style={{ fontSize:11, fontWeight:700, letterSpacing:".07em", textTransform:"uppercase", color:"var(--muted)", marginTop:20, marginBottom:8 }}>{_("cfNotes")}</div>
              <div className="cf-notes-box">{c.notes}</div>
            </div>
          )}
        </div>

        {confirmDelete === c.id && (
          <div className="cf-modal-overlay" onClick={() => setConfirmDelete(null)}>
            <div className="cf-modal" style={{ maxWidth:380 }} onClick={e => e.stopPropagation()}>
              <div className="cf-modal-header"><div className="cf-modal-title">⚠️ {_("deleteCase")}</div></div>
              <div style={{ padding:"20px 24px", fontSize:14 }}>{_("cfDeleteConfirm")}</div>
              <div className="cf-modal-footer">
                <button className="cf-action-btn" onClick={() => setConfirmDelete(null)}>{_("cancelBtn")}</button>
                <button className="cf-action-btn danger" onClick={() => deleteCase(c.id)}>{_("deleteCase")}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── List View ───────────────────────────────────────────────────────────────
  return (
    <div className="cf-wrap fade-up">
      {/* Header */}
      <div className="cf-topbar">
        <div>
          <h1 className="page-title">{_("caseFilesTitle")}</h1>
          <p className="page-subtitle">{_("caseFilesSubtitle")}</p>
        </div>
        <button className="btn btn-primary" onClick={openNew}>+ {_("newCase")}</button>
      </div>

      {/* Stats */}
      <div className="cf-stats">
        <div className="cf-stat"><div className="cf-stat-val">{stats.total}</div><div className="cf-stat-lbl">{_("totalCases")}</div></div>
        <div className="cf-stat accent"><div className="cf-stat-val">{stats.active}</div><div className="cf-stat-lbl">{_("activeCases")}</div></div>
        <div className="cf-stat"><div className="cf-stat-val">{stats.upcoming}</div><div className="cf-stat-lbl">{_("upcomingHearings")}</div></div>
        <div className="cf-stat"><div className="cf-stat-val">{stats.closed}</div><div className="cf-stat-lbl">{_("closedCases")}</div></div>
      </div>

      {/* Filters */}
      <div className="cf-filters">
        <div className="cf-search">
          <span className="cf-search-icon">🔍</span>
          <input placeholder={_("searchCases")} value={search} onChange={e => setSearch(e.target.value)} />
        </div>
        <div className="cf-status-pills">
          <button className={"cf-pill" + (!statusFilter ? " active" : "")} onClick={() => setStatusFilter(null)}>{_("allStatus")}</button>
          {STATUSES.map(s => (
            <button key={s.id} className={"cf-pill" + (statusFilter === s.id ? " active" : "")} onClick={() => setStatusFilter(s.id)}>{s.label}</button>
          ))}
        </div>
      </div>

      {/* Case List */}
      {filtered.length === 0 ? (
        <div className="cf-empty">
          <div className="cf-empty-icon">📂</div>
          <div style={{ fontWeight:600, marginBottom:6 }}>{_("noCases")}</div>
          <div style={{ fontSize:13 }}>{_("noCasesHint")}</div>
        </div>
      ) : (
        <div className="cf-list">
          {filtered.map(c => (
            <div key={c.id} className="cf-card" onClick={() => setViewingCase(c)}>
              <div className="cf-card-stripe" style={{ background: STATUS_COLORS[c.status] || "#ccc" }} />
              <div style={{ paddingLeft:12 }}>
                <div className="cf-card-top">
                  <div>
                    <div className="cf-card-client">{c.clientName}</div>
                    <div className="cf-card-caseno">{c.caseNo} {c.court ? "· " + c.court : ""}</div>
                  </div>
                  <div className="cf-card-badges">
                    <span className={"cf-badge " + getStatusCls(c.status)}>{getStatusLabel(c.status)}</span>
                  </div>
                </div>
                <div className="cf-card-meta">
                  {c.caseType && <span className="cf-meta-item"><span className="cf-meta-icon">⚖️</span>{c.caseType}</span>}
                  {c.opponent && <span className="cf-meta-item"><span className="cf-meta-icon">👤</span>{c.opponent}</span>}
                  {c.nextDate
                    ? <span className="cf-meta-item"><span className="cf-meta-icon">📅</span>{_("cfHearing")}: {c.nextDate}</span>
                    : <span className="cf-meta-item" style={{ opacity:.5 }}><span className="cf-meta-icon">📅</span>{_("cfNoDate")}</span>}
                  <span className="cf-meta-item"><span className="cf-meta-icon">🕐</span>{daysOpen(c.createdAt)} {_("cfDaysOpen")}</span>
                </div>
                <div className="cf-card-actions" onClick={e => e.stopPropagation()}>
                  <button className="cf-action-btn" onClick={() => setViewingCase(c)}>👁 View</button>
                  <button className="cf-action-btn" onClick={() => openEdit(c)}>✏️ {_("editCase")}</button>
                  <button className="cf-action-btn danger" onClick={() => setConfirmDelete(c.id)}>🗑</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirm */}
      {confirmDelete && (
        <div className="cf-modal-overlay" onClick={() => setConfirmDelete(null)}>
          <div className="cf-modal" style={{ maxWidth:380 }} onClick={e => e.stopPropagation()}>
            <div className="cf-modal-header"><div className="cf-modal-title">⚠️ {_("deleteCase")}</div></div>
            <div style={{ padding:"20px 24px", fontSize:14 }}>{_("cfDeleteConfirm")}</div>
            <div className="cf-modal-footer">
              <button className="cf-action-btn" onClick={() => setConfirmDelete(null)}>{_("cancelBtn")}</button>
              <button className="cf-action-btn danger" onClick={() => deleteCase(confirmDelete)}>{_("deleteCase")}</button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="cf-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="cf-modal" onClick={e => e.stopPropagation()}>
            <div className="cf-modal-header">
              <div className="cf-modal-title">{editingCase ? _("editCase") : _("addCase")}</div>
              <button className="cf-modal-close" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="cf-modal-body">
              <div className="cf-field">
                <label>{_("cfClientName")} *</label>
                <input value={formData.clientName} onChange={setF("clientName")} placeholder="e.g. Priya Sharma" />
              </div>
              <div className="cf-field">
                <label>{_("cfCaseNo")}</label>
                <input value={formData.caseNo} onChange={setF("caseNo")} placeholder="e.g. CS/1234/2024" />
              </div>
              <div className="cf-field cf-field-full">
                <label>{_("cfCourt")}</label>
                <input value={formData.court} onChange={setF("court")} placeholder="e.g. District Court, Hyderabad" />
              </div>
              <div className="cf-field">
                <label>{_("cfCaseType")}</label>
                <input value={formData.caseType} onChange={setF("caseType")} placeholder="e.g. Civil Suit" />
              </div>
              <div className="cf-field">
                <label>{_("cfOpponent")}</label>
                <input value={formData.opponent} onChange={setF("opponent")} placeholder="Opposite party name" />
              </div>
              <div className="cf-field">
                <label>{_("cfFir")}</label>
                <input value={formData.fir} onChange={setF("fir")} placeholder="e.g. FIR No. 45/2024" />
              </div>
              <div className="cf-field">
                <label>{_("cfSection")}</label>
                <input value={formData.sections} onChange={setF("sections")} placeholder="e.g. S.420 IPC, S.406 IPC" />
              </div>
              <div className="cf-field">
                <label>{_("cfStatus")}</label>
                <select value={formData.status} onChange={setF("status")}>
                  <option value="active">{_("statusActive")}</option>
                  <option value="hearing">{_("statusHearing")}</option>
                  <option value="judgment">{_("statusJudgment")}</option>
                  <option value="stay">{_("statusStay")}</option>
                  <option value="closed">{_("statusClosed")}</option>
                </select>
              </div>
              <div className="cf-field">
                <label>{_("cfNextDate")}</label>
                <input type="date" value={formData.nextDate} onChange={setF("nextDate")} />
              </div>
              <div className="cf-field cf-field-full">
                <label>{_("cfNotes")}</label>
                <textarea value={formData.notes} onChange={setF("notes")} placeholder="Case notes, observations, strategy…" />
              </div>
            </div>
            <div className="cf-modal-footer">
              <button className="cf-action-btn" onClick={() => setShowModal(false)}>{_("cancelBtn")}</button>
              <button className="btn btn-primary" onClick={saveCase}>{_("saveCase")}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


const PUBLIC_NAV = [
  { icon:"🏠", id:"overview" },
  { icon:"🤖", id:"jurisbot" },
  { icon:"📚", id:"acts" },
  { icon:"📋", id:"fir" },
];
const LAWYER_NAV = [
  { icon:"🏠", id:"overview" },
  { icon:"🤖", id:"jurisbot" },
  { icon:"📝", id:"draft" },
  { icon:"📂", id:"cases" },
  { icon:"📚", id:"acts" },
  { icon:"🛡", id:"admin" },
];

function Dashboard({ user, onLogout, lang: dashLang, setLang }) {
  const lang = dashLang;
  const _ = (k) => L(lang, k);
  const ACTS = L(lang, 'acts');
  const [activeNav, setActiveNav] = useState("overview");
  const isLawyer = user.role === "lawyer";
  const nav = isLawyer ? LAWYER_NAV : PUBLIC_NAV;

  const NAV_LABELS = {
    overview:_("overview"), jurisbot:_("jurisbot"), acts:_("actsLibrary"),
    fir:_("firGuide"), draft:_("draftGenerator"), cases:_("caseFiles"), admin:_("adminPanel"),
  };

  const publicFeatures = [
    { icon:"🤖", title:_("featureJurisTitle"), desc:_("featureJurisDesc"), nav:"jurisbot" },
    { icon:"📚", title:_("featureActsTitle"), desc:_("featureActsDesc"), nav:"acts" },
    { icon:"📋", title:_("featureFirTitle"), desc:_("featureFirDesc"), nav:"fir" },
    { icon:'🌐', title:_('multiLangTitle'), desc:_('multiLangDesc'), badge:'EN / HI / TE' },
  ];
  const lawyerFeatures = [
    { icon:"🤖", title:_("featureJurisTitle"), desc:_("featureJurisDesc"), nav:"jurisbot" },
    { icon:"📝", title:_("featureDraftTitle"), desc:_("featureDraftDesc"), nav:"draft" },
    { icon:"📂", title:_("caseFiles"), desc:_('caseFilesDesc'), nav:"cases" },
    { icon:"📚", title:_("featureActsTitle"), desc:_("featureActsDesc"), nav:"acts" },
  ];
  const features = isLawyer ? lawyerFeatures : publicFeatures;

  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-logo">
            <div className="sidebar-logo-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="#0f1117" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 2v20M3 7l9 5 9-5" stroke="#0f1117" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="sidebar-logo-text">VakeelMate</div>
          </div>
          <div className="sidebar-user">
            <div className="user-name">{user.name}</div>
            <div className="user-role-badge">{isLawyer ? _("advocateAccess") : _("publicAccess")}</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-label">{_('navigation')}</div>
          {nav.map(item => (
            <div key={item.id}
              className={"nav-item" + (activeNav === item.id ? " active" : "") + (item.soon ? " disabled" : "")}
              onClick={() => !item.soon && setActiveNav(item.id)}>
              <span className="nav-icon">{item.icon}</span>
              <span>{NAV_LABELS[item.id] || item.id}</span>
              {item.soon && <span className="soon-badge">{_("comingSoon")}</span>}
            </div>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="sb-lang-row">
            {[["en","EN"],["hi","HI"],["te","TE"]].map(([code,lbl]) => (
              <button key={code}
                className={"sb-lang-btn" + (lang === code ? " active" : "")}
                onClick={() => setLang(code)}>{lbl}</button>
            ))}
          </div>
          <div className="demo-badge">{_("demoTag")}</div>
          <button className="sidebar-signout" onClick={onLogout}>← {_("signOut")}</button>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        {activeNav === "jurisbot" ? <JurisBot role={user.role} /> :
         activeNav === "acts"    ? <ActsLibrary /> :
         activeNav === "fir"     ? <FIRGuide /> :
         activeNav === "draft"   ? <DraftGenerator /> :
         activeNav === "cases"   ? <CaseFiles /> :
         activeNav === "admin"   ? <AdminPanel /> : (

          <div className="fade-up">
            {/* Overview header */}
            <div className="overview-header">
              <div>
                <div className="oh-title">{isLawyer ? _("advocateDashboard") : _("legalHub")}</div>
                <div className="oh-sub">{isLawyer ? _("advocateSubtitle") : _("publicSubtitle")}</div>
                <div className="oh-version">{_("version")}</div>
              </div>
              <span className={"role-badge " + (isLawyer ? "badge-lawyer" : "badge-public")}>
                {isLawyer ? _("advocateAccess") : _("publicAccess")}
              </span>
            </div>

            {/* Stats */}
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-value">{ACTS.length}</div>
                <div className="stat-label">{_("actsAvailable")}</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{isLawyer ? "0" : "∞"}</div>
                <div className="stat-label">{isLawyer ? _("draftsGenerated") : _("jurisBotQueries")}</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">3</div>
                <div className="stat-label">{_("languagesSupported")}</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{ fontSize:16, fontFamily:"DM Sans, sans-serif", fontWeight:600, color:"var(--gold)" }}>EN / HI / TE</div>
                <div className="stat-label" style={{ marginTop:8 }}>{_("builtWith")}</div>
              </div>
            </div>

            {/* Features */}
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:".07em", textTransform:"uppercase", color:"var(--muted)", marginBottom:14 }}>
              {isLawyer ? _("yourTools") : _("exploreFeatures")}
            </div>
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i}
                  className={"feature-card" + (!f.nav ? " no-click" : "")}
                  onClick={() => f.nav && setActiveNav(f.nav)}>
                  <div className="fc-icon">{f.icon}</div>
                  <div className="fc-title">{f.title}</div>
                  <div className="fc-desc">{f.desc}</div>
                  {f.soon && <span className="fc-soon">{_("comingSoon")}</span>}
                  {f.badge && <span className="fc-soon" style={{ background:"rgba(201,168,76,.15)", color:"var(--gold)" }}>{f.badge}</span>}
                  {f.nav && <span className="fc-arrow">{_("openArrow")} →</span>}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div style={{ marginTop:40, paddingTop:24, borderTop:"1px solid var(--border)", fontSize:11, color:"var(--muted)", lineHeight:1.8 }}>
              <strong>VakeelMate</strong> — {_("builtWith")} · {_("disclaimerShort")}.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("loading");
  const [user, setUser]     = useState(null);
  const [lang, setLang]     = useState("en");

  // Restore session on mount
  useEffect(() => {
    dbGetSession().then(saved => {
      if (saved && saved.id && saved.email) {
        setUser(saved);
        setScreen(saved.role ? "dashboard" : "role");
      } else {
        setScreen("auth");
      }
    });
  }, []);

  function handleAuth(u)   { setUser(u);        setScreen(u.role ? "dashboard" : "role"); }
  function handleRole(u)   { const nu = {...u};  setUser(nu); dbSaveSession(nu); setScreen("dashboard"); }
  async function handleLogout() { await dbClearSession(); setUser(null); setScreen("auth"); }

  if (screen === "loading") return (
    <LangCtx.Provider value={lang}>
      <div className="center-page">
        <div className="bg-pattern" />
        <div style={{ textAlign:"center", color:"var(--muted)", fontSize:14 }}>
          <div style={{ fontSize:32, marginBottom:12 }}>⚖️</div>
          VakeelMate
        </div>
      </div>
    </LangCtx.Provider>
  );

  return (
    <LangCtx.Provider value={lang}>
      {screen === "auth"      && <AuthScreen onAuth={handleAuth} lang={lang} setLang={setLang} />}
      {screen === "role"      && user && <RoleSelectScreen user={user} onRoleSelected={handleRole} />}
      {screen === "dashboard" && user && <Dashboard user={user} onLogout={handleLogout} lang={lang} setLang={setLang} />}
    </LangCtx.Provider>
  );
}
