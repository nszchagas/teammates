import { JsonHelper } from './json-helper'
import { FeedbackSessionLogEntry, FeedbackSessionLogType, JoinState, Student } from '../types/api-output';
import { InstructorPermissionSet } from '../types/api-request';

describe("JsonHelper", () => {

    it("Should parse student to JSON", () => {
        const input: Student = {
            name: "John Doe",
            courseId: "TESTES",
            email: "email@test.com.zt",
            teamName: "PassaNada",
            sectionName: "T01"
        };
        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })


    it("Should parse null values as null", () => {
        const input: Object = {
            name: "John Doe",
            email: null,
        }
        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })

    it("Shouldn't contain undefined values", () => {
        const input: Object = {
            name: "John Doe",
            age: undefined
        }
        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })


    it("Shouldn't quote numberic values", () => {
        const input: Object = {
            name: "John Doe",
            age: 25
        };
        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })

    it("Shouldn't quote float values", () => {
        const input: Object = {
            name: "John Doe",
            score: 50.2
        };
        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })


    it("Should quote string numbers", () => {
        const input: Object = {
            name: "John Doe",
            age: "25"
        };
        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })


    it("Should parse enum as string", () => {
        const input: Student = {
            name: "John Doe",
            courseId: "TESTES",
            email: "email@test.com.zt",
            teamName: "PassaNada",
            sectionName: "T01",
            joinState: JoinState.JOINED
        };

        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })


    it("Shouldn't quote boolean values", () => {
        const input: InstructorPermissionSet = {
            canModifyCourse: true,
            canModifyInstructor: true,
            canModifySession: true,
            canModifyStudent: true,
            canViewStudentInSections: false,
            canViewSessionInSections: false,
            canSubmitSessionInSections: true,
            canModifySessionCommentsInSections: true,
        };

        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })

    it("Should parse nested objects", () => {
        const input: FeedbackSessionLogEntry = {
            studentData: {
                name: "John Doe",
                courseId: "TESTES",
                email: "email@test.com.zt",
                teamName: "PassaNada",
                sectionName: "T01",
                joinState: JoinState.JOINED
            },
            feedbackSessionLogType: FeedbackSessionLogType.ACCESS,
            timestamp: 1688825313
        }

        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })


    it("Should parse nested objects with more levels", () => {
        const input: Object = {
            name: "John Doe",
            address: {
                country: {
                    code: "BR",
                    name: "Brazil"
                },
                city: {
                    state: "DF",
                    name: "Brasília"
                }
            }
        }

        expect(JsonHelper.parseObjectToJSON(input)).toEqual(JSON.stringify(input))
    })


})