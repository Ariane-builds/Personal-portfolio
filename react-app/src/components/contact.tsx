import styles from "./contact.module.css";
import Swal from 'sweetalert2';
function Contact (){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "698a656a-3a83-4d0f-a7af-653e29c88686");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());

        if (res.success) {
        Swal.fire({
        title: "Good job!",
        text: "Message sent successfully!",
        icon: "success"
        });
    }
    };
    return(
        <div className={styles.contactform}>
            <form onSubmit={onSubmit}>
                <h2>Get in touch!</h2>
                <div>
                    <label htmlFor="">Full name</label>
                    <input type="text" placeholder='Enter your name' required />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' required />
                </div>
                <div>
                    <label htmlFor="">Your message</label>
                    <textarea name="" id="" placeholder='Enter your message' required></textarea>
                </div>
                <button>Send message</button>
            </form>
        </div>
    );
}

export default Contact;