import React from 'react'
import { Component } from 'react'

class QuizQuestion extends Component {

    render() {
        return (
            <main>
            <section>
                    <p>{this.props.insructions_text}</p>
            </section>
            <section className="buttons">
                <ul>
                        <li>
                            {this.props.quiz_question.answer_options[0]}
                        </li>
                </ul>
            </section>
            </main>
        )
    }
    
   
}

export default QuizQuesiton