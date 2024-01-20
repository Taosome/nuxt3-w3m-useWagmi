<template>
  <div>
    <button class="launch-btn" @click="handleOpen">
      <span>{{ btnText }}</span>
    </button>
  </div>
</template>
<script setup>
import { useWeb3Modal } from '@web3modal/wagmi/vue';
import { useWeb3ModalEvents } from '@web3modal/wagmi/vue';
const walletAccount = ref('');
const account = useAccount();
const btnText = computed(() =>
  walletAccount.value ? formatWallet(walletAccount.value) : 'Connect Wallet'
);
const modal = useWeb3Modal();
function handleOpen() {
  console.log('click');
  modal.open();
}
onMounted(() => {
  console.log('mount');
  walletAccount.value = account.address.value;
});
</script>
