// client/src/providers/modal/modal-providers.tsx
import { ConnectAccountModal } from "@/components/modals/connect-account-modal";
import { RegisterAccountModal } from "@/components/modals/register-account-modal";

export function ModalProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ConnectAccountModal />
      <RegisterAccountModal />
    </>
  );
}
