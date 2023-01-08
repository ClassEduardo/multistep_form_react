import { 
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs';

import './Thanks.css';

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

export default function Thanks({ data }) {
  return(
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>Sua opinião é muito importante, em breve você recebera um cupom de 10% de deeesconto para sua próxima compra.</p>
      <p>Para concluir sua valiação clique no botão de Enviar a baixo.</p>
      <h3>Aqui esta o resumo da sua avaliação {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}
