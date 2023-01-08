import { 
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs';


import './Thanks.css';

export default function Thanks() {
  return(
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>Sua opinião é muito importante, em breve você recebera um cupom de 10% de deeesconto para sua próxima compra.</p>
      <p>Para concluir sua valiação clique no botão de Enviar a baixo.</p>
      <h3>Aqui esta o resumo da sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:</span>
      </p>
      <p className="review-data">
        <span>Comentário:</span>
      </p>
    </div>
  )
}
