import Gun from "gun"
import 'gun/sea'
import 'gun/axe'

export const db = Gun()

export const user = db.user().recall({sessionStorage: true})
