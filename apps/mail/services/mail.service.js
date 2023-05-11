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
    // getEmptyCar,
    getDefaultFilter,
}

function query() {
    // console.log('filterBy service:', filterBy)
    return asyncStorageService.query(MAIL_KEY)
        .then(mails => {
            // if (filterBy.txt) {
            //     const regExp = new RegExp(filterBy.txt, 'i')
            //     mails = mails.filter(mail => regExp.test(mail.txt))
            // }

            // if (filterBy.minSpeed) {
            //     mails = mails.filter(mail => mails.maxSpeed >= filterBy.minSpeed)
            // }
            return mails
        })
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
    // return axios.get(CAR_KEY, carId)
}

function remove(mailId) {
    return asyncStorageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

// function getEmptyCar(vendor = '', maxSpeed = '') {
//     return { id: '', vendor, maxSpeed }
// }

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
                isRead: false,
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
                isRead: false,
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
            },
        ]
        storageService.saveToStorage(MAIL_KEY, mails)
    }
}
