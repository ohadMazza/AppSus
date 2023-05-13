import { utilService } from '../../../services/util.service.js'
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { storageService } from '../../../services/storage.service.js'

const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getDefaultFilter,
}

function query(filterBy = {}, status) {
    return asyncStorageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => {
                    return regExp.test(mail.body) ||
                        regExp.test(mail.from) ||
                        regExp.test(mail.subject)
                })
            }

            mails = mails.filter(mail => mail.status === status)
            return mails
        })
}




function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return asyncStorageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return asyncStorageService.put(MAIL_KEY, mail)
    } else {
        return asyncStorageService.post(MAIL_KEY, mail)
    }
}

function getEmptyMail(subject = '', body = '', to = '') {
    return {
        id: '',
        subject,
        body,
        isRead: null,
        sentAt: Date.now(),
        from: 'user@appsus.com',
        to,
        status: 'sent'
    }
}

function getDefaultFilter() {
    return { txt: '' }
}

function _createMails() {
    let mails = storageService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [
            {
                id: utilService.makeId(),
                subject: 'Spring Sale is Here',
                body: 'Save 40% on amazing products! \nSpring has finally arrived with plenty of great deals! Save 40% on selected instruments, loops, SpectraLayers, Cubasis and more!',
                isRead: true,
                sentAt: 1683785111163,
                removedAt: null,
                from: 'info@news.steinberg.net',
                to: 'user@appsus.com',
                status: 'inbox'
            },
            {
                id: utilService.makeId(),
                subject: 'You sent an automatic payment to East West Communications, Inc.',
                body: 'Thank you for your payment to East West Communications, Inc.\nHere are the details about your automatic payment for EastWest ComposerCloud Subscription.',
                isRead: true,
                sentAt: 1683684049595,
                removedAt: null,
                from: 'service@paypal.co.il',
                to: 'user@appsus.com',
                status: 'inbox'
            }, {
                id: utilService.makeId(),
                subject: '4 days left to save 50%!',
                body: 'Our Birthday Sale comes to an end in just 4 days! Don’t miss out on your limited chance to save 50% on your next plugin',
                isRead: false,
                sentAt: 1683584049595,
                removedAt: null,
                from: 'network@neuraldsp.com',
                to: 'user@appsus.com',
                status: 'inbox'
            }, {
                id: utilService.makeId(),
                subject: 'Your Password Reset Request',
                body: 'Hello ohad mazza ! To reset your password, simply click on the link below or paste this link into the URL field of your favorite browser: f you have any other issues accessing your account, feel free to visit the iLok.com Support page for assistance.   /\nBest regards, \n--The iLok Team',
                isRead: false,
                sentAt: 1662584049595,
                removedAt: null,
                from: 'service@ilok.com',
                to: 'user@appsus.com',
                status: 'inbox'
            }, {
                id: utilService.makeId(),
                subject: 'CorOS 2.0.3 is now available',
                body: 'CorOS 2.0.3 is now available! Download it via Settings > Device Options > Device Updates on your Quad Cortex once connected to Wi-Fi. We recommend that you create a backup before updating your firmware.This is a high priority security update and we recommend you update as soon as possible. If you haven`t already, please read our recent statement regarding a security vulnerability found on Quad Cortex.',
                isRead: true,
                sentAt: 1662584049595,
                removedAt: null,
                from: '<network@neuraldsp.com',
                to: 'user@appsus.com',
                status: 'trash'
            }, {
                id: utilService.makeId(),
                subject: 'Help us protect your account',
                body: 'Hi ohad, It`s been more than a year since you last updated your personal info.Keeping your personal info up to date can help better protect your account.Sound like a good idea? All you have to do is go to eBay and take a look at your personal info to confirm that it`s still correct. If you updated your personal info recently, please ignore this reminder.',
                isRead: true,
                sentAt: 1662584049595,
                removedAt: 1664584049595,
                from: 'ebay@ebay.com',
                to: 'user@appsus.com',
                status: 'trash'
            },
        ]
        storageService.saveToStorage(MAIL_KEY, mails)
    }
}
