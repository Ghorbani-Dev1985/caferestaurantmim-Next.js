import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, Button} from "@nextui-org/react";
const ModalPlacement = ({children , title , icon , btnText}) => {
    const {isOpen, onOpen , onOpenChange} = useDisclosure();
    return (
        <>
        <Button onPress={onOpen} variant="bordered" startContent={icon} className="max-w-fit bg-sky-100 border-none">{btnText}</Button>
        <Modal 
        isOpen={isOpen} 
        placement="auto"
        onOpenChange={onOpenChange}
        backdrop="blur"
        size="4xl"
        scrollBehavior="inside" 
        className="overflow-hidden"
        classNames={{closeButton: "left-1 right-auto top-4"}}
        >
        <ModalContent>
          {(onClose) => (
              <>
              <ModalHeader className="flex-center bg-slate-50 border-b border-b-slate-200">{title}</ModalHeader>
              <ModalBody>
               {children}
              </ModalBody>
            
            </>
          )}
        </ModalContent>
      </Modal>
          </> 
     );
}
 
export default ModalPlacement;


