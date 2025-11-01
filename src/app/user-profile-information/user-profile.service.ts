import { Injectable } from "@angular/core";
import { UserTaskType } from "./user.model";
@Injectable({providedIn:'root'})
export class UserProfileService {
    private userTasks: UserTaskType[] = [
        {
            id: 1,
            userId: 1,
            title: "Implement Login API",
            description: "Develop the user authentication API and integrate with frontend.",
            status: "in-progress",
            dueDate: "2025-11-05"
        },
        {
            id: 2,
            userId: 2,
            title: "Design Dashboard UI",
            description: "Create responsive dashboard layout for the admin panel.",
            status: "pending",
            dueDate: "2025-11-07"
        },
        {
            id: 3,
            userId: 3,
            title: "Prepare Project Plan",
            description: "Outline the milestones, deliverables, and timeline for the project.",
            status: "completed",
            dueDate: "2025-10-25"
        },
        {
            id: 4,
            userId: 1,
            title: "Create API Endpoints",
            description: "Set up RESTful APIs for user and product management.",
            status: "in-progress",
            dueDate: "2025-11-02"
        },
        {
            id: 5,
            userId: 5,
            title: "Integrate Payment Gateway",
            description: "Integrate Razorpay for secure online payments.",
            status: "pending",
            dueDate: "2025-11-10"
        },
        {
            id: 6,
            userId: 6,
            title: "Perform QA Testing",
            description: "Run manual and automated tests for all main modules.",
            status: "in-progress",
            dueDate: "2025-11-04"
        },
        {
            id: 7,
            userId: 7,
            title: "Setup DevOps Pipeline",
            description: "Implement CI/CD pipeline using Jenkins and Docker.",
            status: "pending",
            dueDate: "2025-11-12"
        },
        {
            id: 8,
            userId: 8,
            title: "Recruit New Developer",
            description: "Conduct interviews and finalize a new frontend developer.",
            status: "completed",
            dueDate: "2025-10-27"
        },
        {
            id: 9,
            userId: 9,
            title: "Create Business Report",
            description: "Prepare Q4 performance and revenue analysis report.",
            status: "in-progress",
            dueDate: "2025-11-03"
        },
        {
            id: 10,
            userId: 10,
            title: "Build Data Dashboard",
            description: "Develop data visualization dashboard using Chart.js.",
            status: "pending",
            dueDate: "2025-11-09"
        }
    ];

    getUserTasks(userId: number): UserTaskType[] {
        return this.userTasks.filter((task) => task.userId == userId);
    }

    addUserTask(task: UserTaskType) {
        task.id = new Date().getTime();
        this.userTasks.unshift(task);
    }

    changeTaskStatus(id: number, status: string): { success: boolean, message?: string } {
        const index = this.userTasks.findIndex((task) => task.id === id);
        if (index !== -1) {
            this.userTasks[index].status = status;
            return {
                success: true,
                message: 'Status has been changed successfully.'
            }
        }
        return {
            success: false,
            message: 'Could not able to changes status of task.'
        }
    }
}