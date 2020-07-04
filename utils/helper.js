import { Notifications } from 'expo'
import {Permissions} from 'expo-permissions'
import {AsyncStorage} from 'react-native'

const NOTIFICATION_KEY = 'FlashCards:Notifications'

export function clearLocalNotification(){
    AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then( Notifications.cancelAllScheduledNotificationsAsync())
}

export function createNotification(){
    return {
        title: 'Time to study',
        body: 'Do not be a lazy studen, let us go and study',
        ios:{
            sound:true
        },
        android:{
            sound:true,
            priority: 'high',
            sticky: false,
            vibrate: true,

        }

    }
}

export function setLocalNotification(){
    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data)=>{
        if (data === null){
            Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then((status)=>{
                if (status === 'granted'){
                    Notifications.cancelAllScheduledNotificationsAsync()
                    let tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    tomorrow.setHours(20)
                    tomorrow.setMinutes(0)

                    Notifications.scheduleLocalNotificationAsync(
                        createNotification(),
                        {
                            time: tomorrow,
                            repeat: 'day'
                        }
                    )
                    AsyncStorage.setItem(NOTIFICATION_KEY,JSON.stringify(true))
                }
            })
        }
    })
}