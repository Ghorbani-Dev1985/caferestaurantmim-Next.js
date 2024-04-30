
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
const ConfirmModal = ({children , btnIcon , confirmBtnText , titleText ,confirmBtnHandler}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const handler = () => {
        confirmBtnHandler()
        onClose()
    }
    return ( 
        <>
        <Button  
        isIconOnly
        color="danger"
        variant="faded"
        className="border-slate-200" 
        onPress={onOpen}
        >
       {btnIcon}
      </Button>
       <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} classNames={{closeButton: "left-1 right-auto top-4"}}>
       <ModalContent>
         {(onClose) => (
           <>
             <ModalHeader className="flex-center bg-slate-50 border-b border-b-slate-200">{titleText}</ModalHeader>
             <ModalBody>
               <p className="flex-center p-4 font-extrabold"> 
                 {children}
               </p>
             </ModalBody>
             <ModalFooter>
               <Button color="primary" variant="light" onPress={onClose}>
                 انصراف
               </Button>
               <Button color="danger" onPress={handler}>
                  {confirmBtnText}
               </Button>
             </ModalFooter>
           </>
         )}
       </ModalContent>
     </Modal>
         </>
     );
}
 
export default ConfirmModal;