# FinTrack AI - Intelligent Personal Finance Management

![FinTrack AI](https://img.shields.io/badge/FinTrack%20AI-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

A modern, AI-powered personal finance management dashboard that helps users track expenses, manage budgets, and get intelligent financial insights.

## What FinTrack AI Does

FinTrack AI transforms personal finance management by combining intuitive tracking with artificial intelligence to provide actionable insights and budget recommendations.

### Key Features

- **Smart Transaction Tracking** - Categorize and monitor income, expenses, and savings
- **AI-Powered Insights** - Get personalized financial advice and spending analysis
- **Budget Management** - Set and track spending limits across categories
- **Interactive Dashboards** - Visual representation of financial health
- **Real-time Analytics** - Track spending patterns and financial trends
- **Secure Authentication** - JWT-based login with email verification
- **Responsive Design** - Seamless experience across all devices

## Why FinTrack AI is Useful

### For Users
- **Save Time** - Automated categorization and insights reduce manual tracking
- **Make Better Decisions** - AI recommendations help optimize spending
- **Achieve Goals** - Budget tracking and progress monitoring
- **Reduce Financial Stress** - Clear overview of financial health

### For Developers
- **Modern Tech Stack** - Built with latest frameworks and best practices
- **Type-Safe** - Full TypeScript implementation
- **Scalable Architecture** - Ready for production and growth
- **Well-Documented** - Clean code with comprehensive examples

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- PostgreSQL database (for backend)
- Google/Microsoft account (for OAuth integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdebimpeAbdulhamidEniola/personal_finance_ai.git
   cd personal_finance_ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/fintrack_db"

# Authentication
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="24h"

# Email (for notifications)
SENDGRID_API_KEY="your-sendgrid-api-key"
FROM_EMAIL="noreply@yourdomain.com"

# AI Services
OPENAI_API_KEY="your-openai-api-key"
GROQ_API_KEY="your-groq-api-key"


# Application
NEXT_PUBLIC_API_URL="http://localhost:3000"
BASE_URL="http://localhost:3000"
```

## Usage Examples

### Demo Account

For quick testing and demonstration, use these demo credentials:

**Email**: `user@hamid.com`  
**Password**: `password123`

This demo account is pre-populated with sample transactions and budget data to showcase all features.

### Basic Authentication

```typescript
// Sign up new user
const response = await fetch('/api/auth/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'securePassword123'
  })
});

// Sign in existing user
const loginResponse = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'securePassword123'
  })
});
```

### Transaction Management

```typescript
// Create new transaction
import { useCreateTransaction } from '@/hooks/query-hook';

const { mutateAsync: createTransaction } = useCreateTransaction();

const handleCreateTransaction = async (data) => {
  await createTransaction({
    amount: 150.00,
    category: 'Food',
    type: 'EXPENSE',
    description: 'Grocery shopping'
  });
};
```

### AI Insights

```typescript
// Get AI-powered insights
import { useAIInsights } from '@/hooks/use-ai';

const { data: insights } = useAIInsights();

// Insights include:
// - Spending patterns
// - Budget recommendations  
// - Financial tips
// - Category analysis
```

## Project Structure

```
personal_finance_ai/
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # Main dashboard
│   ├── signin/             # Authentication pages
│   ├── signup/             # Registration
│   └── layout.tsx          # Root layout
├── components/              # Reusable UI components
│   ├── ui/                 # Base UI components
│   ├── dashboard/           # Dashboard components
│   ├── signin/              # Auth components
│   └── signature.tsx        # Footer signature
├── hooks/                  # Custom React hooks
│   ├── use-ai.ts           # AI data fetching
│   └── query-hook.ts       # API queries
├── lib/                    # Utility libraries
├── public/                  # Static assets
├── store/                   # State management
└── types/                   # TypeScript definitions
```

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run type checking
npm run type-check

# Run linting
npm run lint
```

### Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: TailwindCSS, Framer Motion
- **State**: Zustand, React Query
- **Backend**: Express.js, Prisma, PostgreSQL
- **AI**: OpenAI, Groq
- **Auth**: JWT, bcryptjs
- **Deployment**: Vercel

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
# Install dependencies
npm install

# Set up database
npx prisma migrate dev

# Generate Prisma client
npx prisma generate

# Start development
npm run dev
```

## Where to Get Help

### Documentation
- [API Documentation](./docs/API.md) - Detailed API reference
- [Component Library](./docs/COMPONENTS.md) - UI component guide
- [Deployment Guide](./docs/DEPLOYMENT.md) - Production setup

### Support
- [GitHub Issues](https://github.com/AdebimpeAbdulhamidEniola/personal_finance_ai/issues) - Bug reports and feature requests
- [Discussions](https://github.com/AdebimpeAbdulhamidEniola/personal_finance_ai/discussions) - Community support
- [Wiki](https://github.com/AdebimpeAbdulhamidEniola/personal_finance_ai/wiki) - Additional documentation

### Community
- Join our [Discord Community](https://discord.gg/fintrack-ai) for real-time discussions
- Follow us on [Twitter](https://twitter.com/fintrack_ai) for updates

## Maintainers and Contributors

### Lead Maintainer
**Adebimpe Abdulhamid Eniola**
- GitHub: [@AdebimpeAbdulhamidEniola](https://github.com/AdebimpeAbdulhamidEniola)
- LinkedIn: [Adebimpe Abdulhamid Eniola](https://linkedin.com/in/adebimpe-abdulhamid-eniola)
- Email: [adebimpe@example.com](mailto:adebimpe@example.com)

### Active Contributors
Thanks to all the people who contribute to FinTrack AI! 

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<a href="https://github.com/AdebimpeAbdulhamidEniola/personal_finance_ai/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AdebimpeAbdulhamidEniola/personal_finance_ai" />
</a>
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Vercel](https://vercel.com/) - Hosting platform
- [OpenAI](https://openai.com/) - AI services provider

---

<div align="center">

**[⭐ Star this repo](https://github.com/AdebimpeAbdulhamidEniola/personal_finance_ai) if it helped you!**

Built with ❤️ by [Adebimpe Abdulhamid Eniola](https://linkedin.com/in/adebimpe-abdulhamid-eniola)

</div>
