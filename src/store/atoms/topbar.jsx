import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key: "networkAtom",
    default: 102
})

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 12
})

export const allNotificationsAtom = selector({
    key: "allNotificationsAtom",
    get: ({get}) => {
        const myNetwork = get(networkAtom);
        const jobs = get(jobsAtom);
        const messages = get(messagingAtom);
        const notifications = get(notificationsAtom);
        const allNotifications = myNetwork + jobs + messages + notifications;
        return allNotifications;
    }
})