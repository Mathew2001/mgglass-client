import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


const WhatsApp = ({ business }) => {
  const { i18n } = useTranslation()
  const dir = i18n.dir()
  if(!business?.businessWhatsapp) return null
  return (
    <>
   {business?.businessWhatsapp && (
    <Link
      to={business?.businessWhatsapp}
      
    >
    <i className="bi bi-whatsapp d-none d-sm-block" 
    style={{
    position:'fixed',
    bottom:'100px', 
    left: dir === 'rtl' ? '24px' : 'auto',
    right: dir === 'rtl' ? 'auto' : '24px',
    zIndex:9998, 
    width:'64px', 
    height:'64px', 
    borderRadius:'50%', 
    background:'#25D366', 
    color:'white',
    fontSize:'46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: '64px',
    }}></i>

<i className="bi bi-whatsapp d-block d-sm-none" 
    style={{
    position:'fixed',
    bottom:'176px', 
    left: dir === 'rtl' ? '24px' : 'auto',
    right: dir === 'rtl' ? 'auto' : '24px',
    zIndex:9998, 
    width:'64px', 
    height:'64px', 
    borderRadius:'50%', 
    background:'#25D366', 
    color:'white',
    fontSize:'46px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: '64px',
    }}></i>
    </Link>
  )}
  </>
  )
}

export default WhatsApp