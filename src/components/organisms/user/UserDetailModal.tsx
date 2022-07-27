import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from '@chakra-ui/react'
import { FC, memo } from 'react'
import { User } from '../../../types/api/user';

type Props={
    isOpen:boolean;
    onClose:()=>void;
    user:User|null;
}

export const UserDetailModal:FC<Props> = memo((props) => {
    const {user,isOpen,onClose}=props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom' >
    <ModalOverlay>
      <ModalContent pb={6} >
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton/>
        <ModalBody mx={4} >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={user?.username} isReadOnly />
              <FormLabel>フルネーム</FormLabel>
              <Input value={user?.name} isReadOnly />
              <FormLabel>MAIL</FormLabel>
              <Input value={user?.email} isReadOnly />
              <FormLabel>TEL</FormLabel>
              <Input value={user?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  </Modal>
  )
})
