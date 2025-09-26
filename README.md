# Stellar SDK — Dilithium2 Prototype

⚠️ **Disclaimer:** This is an **experimental fork** of the Stellar SDK.  
It replaces the default **Ed25519** signatures with **CRYSTALS-Dilithium2** (post-quantum).  
**Not compatible with the public Stellar network. Do not use in production.**

---

## Overview
This modified SDK enables developers to **generate keys, sign transactions, and verify signatures** using **Dilithium2** instead of Ed25519.  
It is intended for **research and testing** in post-quantum migration scenarios.

Main changes:
- New signature type `SIGNATURE_TYPE_DILITHIUM2`.  
- Updated keypair class to support Dilithium2 key generation and serialization.  
- Transaction signing updated to produce Dilithium2 signatures.  
- Verification functions integrated with a Dilithium2 library.  

---

## Key & Signature Sizes (Dilithium2)
- **Public key:** ~1,312 bytes  
- **Private key:** ~2,528 bytes  
- **Signature:** ~2,420 bytes  

> Compared to Ed25519 (32-byte public key, 64-byte signature), Dilithium2 requires **much larger objects**, which impacts transaction size, bandwidth, and storage.
