export const articles = [
  {
    slug: 'how-to-create-an-account',
    category: 'Account & Registration',
    title: 'How to Create an Account',
    description: 'Learn how to create an account in just a few easy steps.',
    subtitle: 'A step-by-step guide on how to create a new account on our platform.',
    content: [
      {
        type: 'paragraph',
        text: 'Creating an account is a straightforward process that allows you to access exclusive features and personalized services. Follow these steps to get started:'
      },
      {
        type: 'step',
        title: 'Step 1: Visit our Website',
        text: 'Go to our website\'s homepage and locate the “Sign Up” or “Register” button. Click on it to initiate the account creation process.'
      },
      {
        type: 'step',
        title: 'Step 2: Fill Out the Registration Form',
        text: 'On the registration page, you\'ll be prompted to provide certain information. Typically, you\'ll need to enter your full name, email address, and a secure password. Make sure to choose a strong password that includes a combination of letters, numbers, and symbols.'
      },
      {
        type: 'step',
        title: 'Step 3: Verify Your Email Address',
        text: 'After completing the registration form, an email will be sent to the address you provided. Click on the verification link within the email to confirm your account. This step ensures that the email address you provided is valid and belongs to you.'
      },
      {
        type: 'step',
        title: 'Step 4: Complete Your Profile (Optional)',
        text: 'Some platforms may ask you to complete your profile by adding additional details such as your date of birth, location, or profile picture. This step enhances your user experience and allows you to connect with others more effectively.'
      },
      {
        type: 'step',
        title: 'Step 5: Explore and Enjoy!',
        text: 'Once your account is created and verified, you\'re all set to explore the platform\'s features. Log in using your registered email and password to access personalized content, preferences, and settings.'
      },
      {
        type: 'tips',
        title: 'Tips:',
        items: [
          'Keep your account information secure and avoid sharing your login credentials with others.',
          'If you encounter any issues during the registration process, reach out to our customer support for assistance.'
        ]
      }
    ]
  },
  {
    slug: 'common-technical-issues',
    category: 'Frequently Asked Questions',
    title: 'Common Technical Issues and Solutions',
    description: 'Resolve technical issues quickly with our handy guide.',
    subtitle: 'A guide to troubleshooting common technical problems.',
    content: [
      {
        type: 'paragraph',
        text: 'Encountering technical issues can be frustrating. This guide provides solutions to some of the most common problems our users face.'
      },
      {
        type: 'step',
        title: 'Problem: Page Not Loading Correctly',
        text: 'Solution: Try clearing your browser cache and cookies. If that doesn\'t work, ensure your internet connection is stable and try disabling any browser extensions.'
      },
      {
        type: 'step',
        title: 'Problem: Login Issues',
        text: 'Solution: Double-check your username and password. If you\'ve forgotten your password, use the “Forgot Password” link on the login page to reset it.'
      },
      {
        type: 'step',
        title: 'Problem: Slow Performance',
        text: 'Solution: A slow connection or outdated browser can affect performance. Ensure your browser is up-to-date and try accessing our platform from a different network if possible.'
      },
      {
        type: 'tips',
        title: 'Tips:',
        items: [
          'For persistent issues, please contact our support team with a description of the problem and any screenshots you can provide.'
        ]
      }
    ]
  },
  {
    slug: 'understanding-billing-statements',
    category: 'Billing & Payments',
    title: 'Understanding Billing Statements',
    description: 'Decode your billing statement with our comprehensive guide.',
    subtitle: 'Learn how to read and understand your billing statements.',
    content: [
      {
        type: 'paragraph',
        text: 'Our billing statements are designed to be clear and easy to understand. Here is a breakdown of the different sections.'
      },
      {
        type: 'step',
        title: 'Section 1: Summary',
        text: 'This section provides an overview of your charges for the billing period, including your plan details, total amount due, and payment due date.'
      },
      {
        type: 'step',
        title: 'Section 2: Detailed Charges',
        text: 'Here you will find an itemized list of all charges, including subscription fees, usage-based charges, and any applicable taxes.'
      },
      {
        type: 'step',
        title: 'Section 3: Payment History',
        text: 'This section shows a record of payments we have received from you, including the date and amount of each payment.'
      },
      {
        type: 'tips',
        title: 'Tips:',
        items: [
          'If you have any questions about a specific charge, please refer to the transaction ID and contact our billing department for clarification.'
        ]
      }
    ]
  },
  {
    slug: 'how-to-resolve-billing-issues',
    category: 'Billing & Payments',
    title: 'How to Resolve Billing Issues',
    description: 'Learn how to address billing issues with our helpful guide.',
    subtitle: 'A step-by-step guide to resolving common billing problems.',
    content: [
      {
        type: 'paragraph',
        text: 'We are here to help you resolve any billing issues you may encounter. Follow these steps to address common problems.'
      },
      {
        type: 'step',
        title: 'Issue: Unrecognized Charge',
        text: 'Solution: First, review your billing statement to match the charge with our services. If you still do not recognize it, please contact our support team immediately.'
      },
      {
        type: 'step',
        title: 'Issue: Payment Declined',
        text: 'Solution: Ensure your payment information is up-to-date and that your card has sufficient funds. You can update your payment method in the billing section of your account settings.'
      },
      {
        type: 'step',
        title: 'Issue: Requesting a Refund',
        text: 'Solution: Please review our refund policy in the Terms of Service. If you are eligible, contact our support team with your request and a reason for the refund.'
      },
      {
        type: 'tips',
        title: 'Tips:',
        items: [
          'To avoid service interruptions, please ensure your billing information is always current.'
        ]
      }
    ]
  },
];

export const otherArticles = articles.slice(1, 3); // For the sidebar
