"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultOptions = {
    exists: true,
    anyRole: true,
    inVoice: true,
};
const checkMemberExceptions = async (member, options = DefaultOptions) => {
    for (const key of Object.keys(options)) {
        if (options[key] === true) {
        }
    }
};
