import logo from '../assets/logo.png'
import pdf from '../assets/etiqueta.pdf'

export const ContractView = () => {
  const pdfUrl = {pdf};

  return (
    <>
      <header className='flex justify-between bg-[#F7D100] px-4 py-5'>
        <div>
          <img src={logo} alt="/assets/logo.png" />
        </div>
        <div>
          <h2 className="font-urban text-[#00486C] m-6">Voltar ao SARA</h2>
        </div>
      </header>
      <div className="flex justify-center items-center h-screen">
        <iframe
          src={pdfUrl}
          title="PDF Viewer"
          className="w-full h-full"
          style={{ height: '80vh', width: '80vw' }}
        ></iframe>
      </div>
      <section>
        <button className='bg-green-400'>Aceitar</button>
        <button className='bg-red-400'>Rejeitar</button>
      </section>
    </>
  )
}