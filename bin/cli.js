#!/usr/bin/env node

/**
 * Boomlify Smart Inbox Preview CLI Demo
 * Experience the future of temporary email services
 */

const TempMailSmartInboxPreview = require('../dist/index.js');
const { exec } = require('child_process');

// Beautiful ASCII art
const logo = `
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║  ██████╗  ██████╗  ██████╗ ███╗   ███╗██╗     ██╗███████╗██╗   ██╗          ║
║  ██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║██║     ██║██╔════╝╚██╗ ██╔╝          ║
║  ██████╔╝██║   ██║██║   ██║██╔████╔██║██║     ██║█████╗   ╚████╔╝           ║
║  ██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║██║     ██║██╔══╝    ╚██╔╝            ║
║  ██████╔╝╚██████╔╝╚██████╔╝██║ ╚═╝ ██║███████╗██║██║        ██║             ║
║  ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝╚═╝        ╚═╝             ║
║                                                                              ║
║              🚀 SMART INBOX PREVIEW - TEMP MAIL REVOLUTION 🚀               ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
`;

// Demo functions
function showWelcome() {
  console.log(logo);
  console.log('');
  console.log('✨ Welcome to Boomlify Smart Inbox Preview SDK Demo!');
  console.log('');
  console.log('🌟 REVOLUTIONARY FEATURES:');
  console.log('   📧 Smart Inbox Preview - Monitor ALL temp emails at once');
  console.log('   ⏰ Extended Validity - 2+ months (vs minutes with others)');
  console.log('   🏢 Custom Domains - Professional temporary emails');
  console.log('   📨 Gmail Integration - Higher acceptance rates');
  console.log('   🔒 Enterprise Security - End-to-end encryption');
  console.log('   🌍 Multi-language - 16+ languages supported');
  console.log('   ⚡ Real-time Updates - WebSocket technology');
  console.log('   💼 Team Management - Business & enterprise features');
  console.log('');
}

function showSmartInboxDemo() {
  console.log('📬 SMART INBOX PREVIEW DEMO:');
  console.log('');
  console.log('   ┌─────────────────────────────────────────────────────────────┐');
  console.log('   │                   📧 UNIFIED DASHBOARD                      │');
  console.log('   ├─────────────────────────────────────────────────────────────┤');
  console.log('   │ 📮 temp1@boomlify.com    │ 📬 New: Welcome Email          │');
  console.log('   │ 📮 temp2@secure-mail.biz │ 📬 New: Verification Code      │');
  console.log('   │ 📮 temp3@disposable.me   │ 📬 New: Newsletter Signup       │');
  console.log('   │ 📮 custom@yourdomain.com │ 📬 New: Business Registration   │');
  console.log('   ├─────────────────────────────────────────────────────────────┤');
  console.log('   │ 🔄 Real-time updates • 🔒 Private • ⏰ 2+ months validity   │');
  console.log('   └─────────────────────────────────────────────────────────────┘');
  console.log('');
  console.log('   ✨ Monitor multiple temp emails WITHOUT clicking individual inboxes!');
  console.log('');
}

function showFeatureComparison() {
  console.log('📊 BOOMLIFY VS COMPETITORS:');
  console.log('');
  console.log('   ┌─────────────────────┬─────────────┬─────────────────────────┐');
  console.log('   │ FEATURE             │ OTHERS      │ BOOMLIFY                │');
  console.log('   ├─────────────────────┼─────────────┼─────────────────────────┤');
  console.log('   │ Email Validity      │ 10-60 min   │ 2+ months ✨           │');
  console.log('   │ Smart Preview       │ ❌ No       │ ✅ Yes - Revolutionary  │');
  console.log('   │ Custom Domains      │ ❌ No       │ ✅ Yes - Professional   │');
  console.log('   │ Gmail Integration   │ ❌ No       │ ✅ Yes - High Accept    │');
  console.log('   │ Team Features       │ ❌ No       │ ✅ Yes - Enterprise     │');
  console.log('   │ API Access          │ ❌ Limited  │ ✅ Full REST API        │');
  console.log('   │ Real-time Updates   │ ❌ Manual   │ ✅ WebSocket Tech       │');
  console.log('   │ Multi-language      │ ❌ 1-2      │ ✅ 16+ Languages        │');
  console.log('   └─────────────────────┴─────────────┴─────────────────────────┘');
  console.log('');
}

function showCallToAction() {
  console.log('🚀 READY TO EXPERIENCE THE FUTURE OF TEMP MAIL?');
  console.log('');
  console.log('   🌐 Visit: https://boomlify.com');
  console.log('   📚 Docs: https://boomlify.com/docs');
  console.log('   💼 Enterprise: https://boomlify.com/pricing');
  console.log('   🔧 API: https://boomlify.com/api');
  console.log('');
  console.log('   ⚡ Start using Smart Inbox Preview NOW!');
  console.log('   📧 Create unlimited temp emails with 2+ months validity');
  console.log('   🎯 Target: temp mail, temporary email, disposable email');
  console.log('');
  console.log('   🎉 NO REGISTRATION REQUIRED - START INSTANTLY!');
  console.log('');
}

// Main demo execution
function runDemo() {
  showWelcome();
  
  setTimeout(() => {
    showSmartInboxDemo();
    
    setTimeout(() => {
      showFeatureComparison();
      
      setTimeout(() => {
        showCallToAction();
        
        console.log('🔄 Redirecting to Boomlify in 3 seconds...');
        setTimeout(() => {
          const url = 'https://boomlify.com';
          const cmd = process.platform === 'win32'
            ? `start "" "${url}"`
            : process.platform === 'darwin'
              ? `open "${url}"`
              : `xdg-open "${url}"`;
          exec(cmd);
          console.log('🌐 Please visit: https://boomlify.com to start using temp mail!');
          process.exit(0);
        }, 3000);
      }, 2000);
    }, 2000);
  }, 1000);
}

// Start the demo
runDemo(); 