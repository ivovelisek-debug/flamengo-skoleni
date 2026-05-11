import { useState } from 'react'

export default function QuizView({ module, progress, onComplete, onBack, onHome }) {
  const questions = module.quiz
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)

  const q = questions[current]
  const isAnswered = selected !== null
  const isCorrect = selected === q?.correct

  function handleSelect(idx) {
    if (isAnswered) return
    setSelected(idx)
  }

  function handleNext() {
    const newAnswers = [...answers, selected]
    if (current + 1 < questions.length) {
      setAnswers(newAnswers)
      setSelected(null)
      setCurrent(c => c + 1)
      window.scrollTo(0, 0)
    } else {
      const score = newAnswers.filter((a, i) => a === questions[i].correct).length
      setAnswers(newAnswers)
      onComplete(score, questions.length)
      setShowResult(true)
    }
  }

  function handleRetry() {
    setCurrent(0)
    setSelected(null)
    setAnswers([])
    setShowResult(false)
    window.scrollTo(0, 0)
  }

  if (showResult) {
    const score = answers.filter((a, i) => a === questions[i].correct).length
    const percent = Math.round((score / questions.length) * 100)
    const isPerfect = score === questions.length
    const isPassing = score >= Math.ceil(questions.length * 0.8)

    return (
      <div className="quiz-view">
        <div className="quiz-topbar" style={{ background: module.accentColor }}>
          <button className="back-btn" onClick={onBack}>← Obsah</button>
          <div className="module-topbar-title">{module.emoji} {module.title}</div>
          <div />
        </div>

        <div className="quiz-result">
          <div className={`result-icon ${isPerfect ? 'result-perfect' : isPassing ? 'result-pass' : 'result-fail'}`}>
            {isPerfect ? '🏆' : isPassing ? '✅' : '📚'}
          </div>
          <h2 className="result-title">
            {isPerfect ? 'Perfektní výsledek!' : isPassing ? 'Úspěšně dokončeno!' : 'Zkus to ještě jednou'}
          </h2>
          <div className="result-score">
            <span className="score-num">{score}</span>
            <span className="score-sep">/</span>
            <span className="score-total">{questions.length}</span>
          </div>
          <div className="result-percent">{percent} %</div>
          <p className="result-msg">
            {isPerfect
              ? 'Všechny otázky správně! Výborná znalost modulu.'
              : isPassing
              ? 'Modul zvládnut. Případné chyby si zopakuj v obsahu.'
              : 'Méně než 80 % správných odpovědí. Doporučujeme zopakovat obsah a zkusit znovu.'}
          </p>

          <div className="result-answers">
            {questions.map((q, i) => {
              const wasCorrect = answers[i] === q.correct
              return (
                <div key={i} className={`result-answer-item ${wasCorrect ? 'answer-correct' : 'answer-wrong'}`}>
                  <div className="answer-indicator">{wasCorrect ? '✓' : '✗'}</div>
                  <div className="answer-details">
                    <div className="answer-question">{q.question}</div>
                    {!wasCorrect && (
                      <div className="answer-explanation">
                        <strong>Správně:</strong> {q.options[q.correct]}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="result-actions">
            <button className="btn btn-ghost" onClick={handleRetry}>🔄 Zkusit znovu</button>
            <button className="btn btn-primary" onClick={onHome}>🏠 Na hlavní stránku</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-view">
      <div className="quiz-topbar" style={{ background: module.accentColor }}>
        <button className="back-btn" onClick={onBack}>← Obsah</button>
        <div className="module-topbar-title">{module.emoji} Kvíz</div>
        <div className="section-counter">{current + 1}/{questions.length}</div>
      </div>

      <div className="progress-bar-wrap">
        <div
          className="progress-bar-fill"
          style={{
            width: `${((current + 1) / questions.length) * 100}%`,
            background: module.accentColor,
          }}
        />
      </div>

      <div className="quiz-content">
        <div className="quiz-question-num">Otázka {current + 1} z {questions.length}</div>
        <h2 className="quiz-question">{q.question}</h2>

        <div className="quiz-options">
          {q.options.map((option, idx) => {
            let optClass = 'quiz-option'
            if (isAnswered) {
              if (idx === q.correct) optClass += ' option-correct'
              else if (idx === selected) optClass += ' option-wrong'
              else optClass += ' option-dimmed'
            } else {
              optClass += ' option-selectable'
            }
            return (
              <button
                key={idx}
                className={optClass}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
              >
                <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="option-text">{option}</span>
                {isAnswered && idx === q.correct && <span className="option-check">✓</span>}
                {isAnswered && idx === selected && idx !== q.correct && <span className="option-check">✗</span>}
              </button>
            )
          })}
        </div>

        {isAnswered && (
          <div className={`quiz-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
            <div className="feedback-header">
              {isCorrect ? '✓ Správně!' : '✗ Špatně'}
            </div>
            <p className="feedback-text">{q.explanation}</p>
          </div>
        )}

        {isAnswered && (
          <button className="btn btn-primary btn-next" onClick={handleNext}>
            {current + 1 < questions.length ? 'Další otázka →' : 'Zobrazit výsledky →'}
          </button>
        )}
      </div>
    </div>
  )
}
