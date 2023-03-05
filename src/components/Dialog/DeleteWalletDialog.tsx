import { DeleteDialog } from "./DeleteDialog";

export const DeleteWalletDialog = ({ walletName }: { walletName: string }) => (
  <DeleteDialog entityType="wallet" entityName={walletName} />
);
