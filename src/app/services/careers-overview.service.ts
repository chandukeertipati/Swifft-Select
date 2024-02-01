import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface JobDetail {
  id: number;
  positionOverview: string;
  responsibilities: string[];
  qualifications: string[];
  requirements: string[];
  keyCompetencies: string[];
}
@Injectable({
  providedIn: 'root'
})
export class CareersOverviewService {

  constructor() { }

  getJobDetailById(id: number): Observable<JobDetail> {
    // You can replace this with actual API call to fetch job detail data
    const jobDetails: { [key: number]: JobDetail } = {
      1: {
        id: 1,
        positionOverview: "The Software Engineer will be responsible for developing high-quality software.",
        responsibilities: [
          "Write clean, maintainable, and efficient code.",
          "Design robust, scalable, and secure features.",
          "Collaborate with cross-functional teams to define, design, and ship new features.",
        ],
        qualifications: [
          "Bachelor's degree in Computer Science or related field.",
          "2+ years of experience in software development.",
          "Proficiency in one or more programming languages (e.g., Java, Python, JavaScript).",
        ],
        requirements: [
          "Strong problem-solving skills.",
          "Ability to work independently and in a team environment.",
          "Excellent communication and interpersonal skills.",
        ],
        keyCompetencies: [
          "Software Development",
          "Problem-solving",
          "Teamwork",
          "Communication",
        ],
      },
      2: {
        id: 2,
        positionOverview: "The Data Scientist will analyze complex datasets to provide insights for business decisions.",
        responsibilities: [
          "Clean and preprocess data for analysis.",
          "Apply statistical and machine learning techniques to analyze data.",
          "Visualize and present findings to stakeholders.",
        ],
        qualifications: [
          "Master's degree or higher in Statistics, Mathematics, Computer Science, or related field.",
          "Proficiency in statistical software (e.g., R, Python).",
          "Experience with machine learning algorithms and techniques.",
        ],
        requirements: [
          "Strong analytical and problem-solving skills.",
          "Ability to communicate complex findings in a clear and understandable manner.",
          "Experience working with large datasets.",
        ],
        keyCompetencies: [
          "Data Analysis",
          "Statistical Modeling",
          "Machine Learning",
          "Communication",
        ],
      },
      3: {
        id: 3,
        positionOverview: "The UX/UI Designer will create intuitive and visually appealing user interfaces.",
        responsibilities: [
          "Create wireframes, prototypes, and mockups for user interfaces.",
          "Collaborate with product management and development teams to understand user needs.",
          "Conduct usability testing and gather feedback for iterative design improvements.",
        ],
        qualifications: [
          "Bachelor's degree in Design, HCI, or related field.",
          "Proficiency in design tools (e.g., Sketch, Adobe XD, Figma).",
          "Experience with user research and usability testing methods.",
        ],
        requirements: [
          "Strong portfolio showcasing design skills and previous work.",
          "Ability to work effectively in a collaborative environment.",
          "Excellent communication and presentation skills.",
        ],
        keyCompetencies: [
          "User Interface Design",
          "User Experience",
          "Prototyping",
          "Collaboration",
        ],
      },
    };

    return of(jobDetails[id]);
  }
}
