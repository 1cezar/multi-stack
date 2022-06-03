import { 
    CabecalhoConteiner,
    Logo
} from './Cabecalho.style'

export default function Cabecalho(){
    return (
        <CabecalhoConteiner>
            <Logo src="/imagens/logo.png" alt="Adote um Pet" />
        </CabecalhoConteiner>
    )
}