/* In this example of controlled components we created a feedback form.

In the handleSubmit we added a form validation that triggers if the user 
gives a score of 5 or lower and the comment is less than 10 characters

and then reset the values*/

import { useState } from "react";

const FeedbackForm = () => {
    const [score, setScore] = useState("10");
    const [comment, setComment ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) <= 5 && comment.length <= 10) {
            alert("Please provide a comment explaining why the experience was poor.")
            return;
        }

        console.log("Form submitted!");
        setComment("");
        setScore("10");
    }


    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback form</h2>
                <div className="Field">
                    <label htmlFor="user-score">Score: {score}⭐</label>
                    <input
                        id="user-score"
                        name="user-score"
                        type="range"
                        min={"0"}
                        max={"10"}
                        value={score}
                        onChange={(e) => setScore(e.target.value)} 
                    />
                </div>
                <div className="Field">
                    <label htmlFor="user-comment">Comment:</label>
                    <textarea
                        id="user-comment"
                        name="user-comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)} 
                    />
                </div>
                <button>Submit</button>

            </fieldset>
        </form>
    );
}

export default FeedbackForm;