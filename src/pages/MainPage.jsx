import { useState } from "react"
import logo from '../assets/logo.png'
import { BsSearch } from "react-icons/bs";
import { productsList } from "../mocks/products"
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  const [total, setTotal] = useState(10)
  const [concluídos, setConcluídos] = useState(5)
  const [agendados, setAgendados] = useState(2)
  const [negados, setNegados] = useState(1)
  // const [active, setActive] = useState(true)


  const handleColors = (status) => {
    switch (status) {
      case "CONCLUÍDO":
        return (
          <div style={{ backgroundColor: "#55FB45", width: "25px", height: "25px", borderRadius: "100%" }}></div>
        )
      case "AGENDADO":
        return (
          <div style={{ backgroundColor: "#F7D100", width: "25px", height: "25px", borderRadius: "100%" }}></div>
        )
      case "NEGADO":
        return (
          <div style={{ backgroundColor: "#F7D100", width: "25px", height: "25px", borderRadius: "100%" }}></div>
        )
    }
  }


  // const Modal = (data, isActive) => {
  //   if (isActive){
  //     return(
  //       <div style={{zIndex:999}}>
  //         <h1>{data.nomeRemetente}</h1>
  //         <iframe></iframe>
  //         <div>
  //           <button>Aceitar</button>
  //           <button>Rejeitar</button>
  //         </div>
  //       </div>
  //     )
  //   }
  //   return null
  // }

  return (
    <>
      {/* <Modal isActive={active}/> */}
      <header className='flex justify-between bg-[#F7D100] px-4 py-5'>
        <div>
          <img src={logo} alt="/assets/logo.png" />
        </div>
        <div>
          <h2 className="font-urban text-[#00486C] m-6">Voltar ao SARA</h2>
        </div>
      </header>
      <section className="flex justify-between p-12">
        <div>
          <h2 className="font-urban text-[#00486C] text-2xl">
            Gerenciamento de processos formalizados
          </h2>
          
        </div>
        <div className="font-urban text-[#00486C]">
          <ul className="">
            <li>Total hoje: {total}</li>
            <li>Concluídos: {concluídos} </li>
            <li>Agendados: {agendados}</li>
            <li>Negados: {negados}</li>
          </ul>
        </div>
      </section>
      <section className="px-12 pb-8">
        <div type="text" className="p-2 w-1/2 border-2 border-[#00486C] rounded-full"><BsSearch className="size-6"></BsSearch></div>
      </section>
      <div className="px-12 grid grid-cols-4 gap-4 text-white">
        {productsList.map((value) => {
          return (
            <button onClick={() => navigate("/userContractView")} className="bg-[#00486C] rounded p-4 relative" key={value}>
              <div className="absolute top-4 right-4">{handleColors(value.status)}</div>
              <img className="w-36 mx-auto rounded-full mb-4" src={value.fotoDoProduto} />
              <h5 className="font-bold">{value.nomeRemetente}</h5>
              <p>{value.nomeEDescricaoProduto}</p>
            </button>
          )
        })}
      </div>
      <div></div>
    </>
  )
}