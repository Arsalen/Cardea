# CARDEA

CARDEA
The CARDEA project has the potential to transform the health sector, placing the patient at the center of the ecosystem while increasing the security, privacy and interoperability of its data.
The goal is to provide a new model for health information exchange by making electronic medical records more efficient, disintermediated and secure, replacing the traditional model of a fragmented, dispersed and stored (in a variety of formats) medical records.

Blockchain offers the possibility of creating a reliable and robust information sharing space between various actors (Clinic, Physician, Laboratory, Patient ...) without being wary of security-related flaws. On the other hand, the technology presents an infrastructure adapted to take into load the life cycle of a medical record while offering:
Improved reliability and availability in a distributed network over centralized databases.
Empowering the patient as a true owner of its data.


The project was set up in the context of two weeks length national hackathon, we won the first prize.

It consists of a platform that enables its users to fully manage their medical data by giving them the exclusive read and write access to their records.

The application generates a pair of keys to each member who signs up:
- Pub-key: Used as identifier of the user.
- Priv-key: Used to write on the owned asset, or transfer the ownership of the asset to another user.

When a patient visits a hospital, he transfers the ownership of his asset to the doctor in order to update it then transfers it back to its original owner once he finishes.

Cardea also protects medical assets from being forged by their owners, every modification is stamped by the forger's public key beside the date, time and other parameters and embedded within the metadata of the assets.

The management of the assets mainly relies on BigchainDB: A blockchain based database built over MongoDB where entities are represented as decentralized identifiers(DID): Autonomous digital assets which can't be neither updated nor deleted (two basic characteristics of the blockchain), but instead append and burn.

The basic operations covered are much like standard databases operations, but with a blockchain tweak: CRAB(Create, Retrieve, Append, Burn).

Assets are defined by a set of parameters:
- Input: Who is the owner of the asset (Pub-key) + Must provide this signature to transfer the asset (Priv-key).
- Output: Who became the owner of the asset (Pub-key) + Must provide this signature to transfer the asset (Priv-key).
- Asset: Persistent data.
- Metadata: Intermittent data.
- TransactionID: Hash(Input,Output,Asset,Metadata) Will be used as a reference for the next transaction.

We used BigchainDB testnet API to create an application and generate the appID and the token.

We used BigchainDriver to authenticate the application within BigchainDB API, and to generate crypto-materials.

We used BigchainORM to define two types of DID within BigchainDB:
- UserDID: The owner of the asset.
- RecordDID: The asset.

For each DID, BigchainDB will generate an associated model, to define the asset within its ledger.

Models are registered under one schema.

Now we can interact with instances created within their respective models, via CRAB services.

We also used:
- Angular5 as a client side layer.
- NodeJS as a middleware to expose services to be consumed by client layer.
