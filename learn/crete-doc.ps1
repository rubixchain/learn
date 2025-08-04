# PowerShell script to create dummy Markdown files for Rubix Learn Site in docs/ folder
# Run from project root: C:\Users\psy_k\OneDrive\Desktop\RubixGo\vaishnav\learnRubix\learn\learn
# Usage: .\create-docs.ps1

# Base directory for docs
$DocsDir = "docs"

# Function to create a Markdown file with placeholder content
function Create-MarkdownFile {
    param (
        [string]$FilePath,
        [string]$Title
    )
    # Create directory if it doesn't exist
    $Directory = Split-Path $FilePath -Parent
    if (-not (Test-Path $Directory)) {
        New-Item -ItemType Directory -Path $Directory -Force | Out-Null
    }
    # Create Markdown file
    $Content = @"
---
title: $Title
sidebar_label: $Title
---

<!-- File: $FilePath -->
# $Title

This is placeholder content for the Rubix Learn Site. Replace this with the actual content when ready.
"@
    Set-Content -Path $FilePath -Value $Content -Encoding UTF8
    Write-Host "Created $FilePath"
}

# Create docs/ folder if it doesn't exist
if (-not (Test-Path $DocsDir)) {
    New-Item -ItemType Directory -Path $DocsDir -Force | Out-Null
}

# Getting Started
Create-MarkdownFile "$DocsDir/getting-started/what-is-rubix.md" "What is Rubix?"
Create-MarkdownFile "$DocsDir/getting-started/why-rubix.md" "Why Rubix?"
Create-MarkdownFile "$DocsDir/getting-started/who-should-use.md" "Who Should Use This Site?"
Create-MarkdownFile "$DocsDir/getting-started/how-organized.md" "How This Site is Organized"
Create-MarkdownFile "$DocsDir/getting-started/quick-tour.md" "Quick Tour Video"

# Core Concepts
Create-MarkdownFile "$DocsDir/core-concepts/monolithic-vs-microchain.md" "Monolithic vs Microchain Architecture"
Create-MarkdownFile "$DocsDir/core-concepts/what-is-tokenchain.md" "What is a Tokenchain?"
Create-MarkdownFile "$DocsDir/core-concepts/tokenchain-vs-blockchain.md" "Tokenchain vs Blockchain"
Create-MarkdownFile "$DocsDir/core-concepts/proof-of-pledge.md" "Proof of Pledge (PoP)"
Create-MarkdownFile "$DocsDir/core-concepts/rubix-did.md" "Rubix DID"

# Developer Guides - Setup
Create-MarkdownFile "$DocsDir/developer-guides/setup/install-rubix.md" "Install Rubix"
Create-MarkdownFile "$DocsDir/developer-guides/setup/run-locally.md" "Run Rubix Locally"
Create-MarkdownFile "$DocsDir/developer-guides/setup/did-creation.md" "DID Creation & Key Management"
Create-MarkdownFile "$DocsDir/developer-guides/setup/testnet.md" "Connect to Rubix Testnet"
Create-MarkdownFile "$DocsDir/developer-guides/setup/mainnet.md" "Connect to Rubix Mainnet"
Create-MarkdownFile "$DocsDir/developer-guides/setup/subnet.md" "Set Up Your Subnet"

# Developer Guides - Smart Contracts
Create-MarkdownFile "$DocsDir/developer-guides/smart-contracts/overview.md" "Smart Contract Overview"
Create-MarkdownFile "$DocsDir/developer-guides/smart-contracts/write-deploy.md" "Write and Deploy a Contract"
Create-MarkdownFile "$DocsDir/developer-guides/smart-contracts/examples.md" "Example Smart Contracts"

# Xell Wallet
Create-MarkdownFile "$DocsDir/xell-wallet/what-is-xell.md" "What is Xell Wallet?"
Create-MarkdownFile "$DocsDir/xell-wallet/install-xell.md" "Installing Xell Extension"
Create-MarkdownFile "$DocsDir/xell-wallet/setup-wallet.md" "Setting Up Wallet"
Create-MarkdownFile "$DocsDir/xell-wallet/backup-restore.md" "Backing Up and Restoring Wallets"
Create-MarkdownFile "$DocsDir/xell-wallet/did-management.md" "DID Generation and Management"
Create-MarkdownFile "$DocsDir/xell-wallet/send-receive.md" "Sending and Receiving RBT/FTs"
Create-MarkdownFile "$DocsDir/xell-wallet/connect-dapps.md" "Connecting to Rubix dApps"
Create-MarkdownFile "$DocsDir/xell-wallet/view-tokenchains.md" "Viewing Tokenchains and Transactions"
Create-MarkdownFile "$DocsDir/xell-wallet/signing-security.md" "Signing Messages and Security"

# Testing & Playground
Create-MarkdownFile "$DocsDir/testing-playground/overview.md" "Rubix Playground Overview"
Create-MarkdownFile "$DocsDir/testing-playground/pop-transaction.md" "Run a Simulated PoP Transaction"
Create-MarkdownFile "$DocsDir/testing-playground/test-contracts.md" "Deploy Test Smart Contracts"

# Validator Resources
Create-MarkdownFile "$DocsDir/validator-resources/become-validator.md" "Become a Validator"
Create-MarkdownFile "$DocsDir/validator-resources/lightweight-node.md" "Setting Up a Lightweight Validator Node"
Create-MarkdownFile "$DocsDir/validator-resources/validation-process.md" "Tokenchain Validation Process"
Create-MarkdownFile "$DocsDir/validator-resources/quorum-credits.md" "Validator Quorum and Credit Issuance"
Create-MarkdownFile "$DocsDir/validator-resources/slashing-risks.md" "Slashing Conditions and Staking Risk"
Create-MarkdownFile "$DocsDir/validator-resources/checklist.md" "Public Validator Checklist"

# Enterprise Onboarding
Create-MarkdownFile "$DocsDir/enterprise-onboarding/why-rubix.md" "Why Build on Rubix"
Create-MarkdownFile "$DocsDir/enterprise-onboarding/internal-tokenchains.md" "Internal Tokenchains"
Create-MarkdownFile "$DocsDir/enterprise-onboarding/integrity-access.md" "Integrity + Access Control"
Create-MarkdownFile "$DocsDir/enterprise-onboarding/api-integrations.md" "API Integrations"
Create-MarkdownFile "$DocsDir/enterprise-onboarding/compliance-dapps.md" "Launching Compliance-Friendly dApps"

# Explorer & Analytics
Create-MarkdownFile "$DocsDir/explorer-analytics/explorer-walkthrough.md" "Rubix Explorer Walkthrough"
Create-MarkdownFile "$DocsDir/explorer-analytics/query-tokenchains.md" "Querying Tokenchains"
Create-MarkdownFile "$DocsDir/explorer-analytics/validator-logs.md" "Validator Log Inspection"
Create-MarkdownFile "$DocsDir/explorer-analytics/did-event-chain.md" "DID Event Chain Viewer"
Create-MarkdownFile "$DocsDir/explorer-analytics/rbt-tracker.md" "RBT Credit Tracker"

# Tools & Downloads
Create-MarkdownFile "$DocsDir/tools-downloads/cli-binaries.md" "Rubix CLI Binaries"
Create-MarkdownFile "$DocsDir/tools-downloads/contract-templates.md" "Smart Contract Starter Templates"
Create-MarkdownFile "$DocsDir/tools-downloads/validator-script.md" "Validator Node Install Script"
Create-MarkdownFile "$DocsDir/tools-downloads/playground-snippets.md" "Playground Code Snippets"
Create-MarkdownFile "$DocsDir/tools-downloads/whitepaper.md" "Whitepaper PDF"
Create-MarkdownFile "$DocsDir/tools-downloads/tokenomics.md" "RBT Tokenomics Sheet"

# Community & Governance
Create-MarkdownFile "$DocsDir/community-governance/rubix-dao.md" "RubixDAO Introduction"
Create-MarkdownFile "$DocsDir/community-governance/submit-rep.md" "Submit a REP"
Create-MarkdownFile "$DocsDir/community-governance/community-channels.md" "Community Channels"
Create-MarkdownFile "$DocsDir/community-governance/events-webinars.md" "Events, Webinars"

# Get in Touch
Create-MarkdownFile "$DocsDir/get-in-touch/support.md" "General Support"
Create-MarkdownFile "$DocsDir/get-in-touch/grants-bounties.md" "Apply for Grants or Bounties"
Create-MarkdownFile "$DocsDir/get-in-touch/security-vulnerability.md" "Report a Security Vulnerability"

# Glossary
Create-MarkdownFile "$DocsDir/glossary/terms.md" "RBT, Tokenchain, PoP, Quorum, Credit, DID"

Write-Host "All dummy Markdown files created in $DocsDir/"