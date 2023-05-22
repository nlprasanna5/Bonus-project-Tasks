export default function getContacts() {
    let users = localStorage.getItem('formData');
    try {
        if (users) {
            return JSON.parse(users)
        } else {
            return []
        }
    } catch (error) {
        console.log(error);
    }
}