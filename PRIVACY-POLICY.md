# Privacy Policy — AMU STORE

**Last Updated:** August 27, 2026

## Introduction

AMU STORE ("we", "our", "the app") is a premium Ethiopian furniture retail application operated by Amu Furnishings. This privacy policy describes how we collect, use, and protect your information when you use our mobile application and web services.

## Information We Collect

### Account Information
When you create an account, we collect:
- **Email address or phone number** — used as your login identifier
- **Full name** — used for order personalization and display
- **Password** — stored securely using bcrypt hashing (we never see or store your plaintext password)

### Authentication Data
- Session tokens stored in secure HTTP-only cookies
- Admin PIN verification for administrative access (development mode only; production uses role-based authentication)

### Product and Order Data
- Products you browse, add to cart, or purchase
- Order information including delivery details
- Products and quantities in your shopping cart

### CMS / Content Data (Administrators Only)
When an administrator edits website content (text, images):
- Text content changes in English, Amharic, and Afaan Oromo
- Image uploads and replacements
- Content modification timestamps and admin identifiers

### Device and Usage Information
- Standard web server logs (IP address, browser type, pages accessed)
- Session duration and navigation patterns within the app

## How We Use Your Information

| Purpose | Data Used | Legal Basis |
|---------|-----------|-------------|
| Account creation and authentication | Email/phone, name, password hash | Contract performance |
| Processing orders | Order details, delivery info | Contract performance |
| Personalizing your experience | Browsing history, preferences | Legitimate interest |
| Admin content management | CMS changes, admin identity | Legitimate interest |
| Security and fraud prevention | Session data, IP logs | Legitimate interest |
| Improving our services | Usage analytics | Legitimate interest |

## Data Storage and Security

### Supabase PostgreSQL Database
- All user accounts, products, and CMS content are stored in Supabase PostgreSQL
- Data is encrypted at rest and in transit (TLS/SSL)
- Row Level Security (RLS) policies restrict data access by role

### Supabase Storage
- Product images are stored in Supabase Storage buckets
- Images in the `product-images` bucket are publicly accessible
- Video and attachment uploads require authenticated access

### Password Security
- Passwords are hashed using bcrypt with a salt factor of 10
- We cannot recover or view your password
- Admin accounts are created with temporary credentials that should be changed after first login

### Session Management
- Sessions are managed via secure, HTTP-only cookies
- Sessions expire after a period of inactivity
- Admin sessions require PIN verification

## Data Sharing

We do **not** sell, trade, or share your personal information with third parties, except:

- **Service Providers:** Supabase (database and storage hosting), which processes data on our behalf under strict data processing agreements
- **Legal Requirements:** When required by law, regulation, or valid legal process
- **Business Transfers:** In the event of a merger, acquisition, or sale of assets (with prior notice)

## Third-Party Services

| Service | Purpose | Data Processed |
|---------|---------|----------------|
| Supabase | Database hosting, authentication, file storage | Account data, products, CMS content, uploaded files |
| Google Fonts | Font rendering | None (fonts loaded from Google CDN) |
| Unsplash | Seed product images (admin may replace) | None (images loaded directly from Unsplash CDN) |

## Your Rights

You have the right to:

1. **Access** your personal data — request a copy of all data we hold about you
2. **Correct** inaccurate data — update your profile information
3. **Delete** your account and associated data — request permanent removal
4. **Export** your data — receive your data in a portable format
5. **Withdraw consent** — opt out of non-essential data processing

To exercise any of these rights, contact us using the information below.

## Account Deletion

You may delete your account at any time by:
1. Logging into your account
2. Contacting us at the email address below

Upon deletion:
- Your account information is permanently removed from our database
- Your session tokens are invalidated
- Product reviews or ratings may remain anonymized in the system
- Order history may be retained for legal/business purposes as required by Ethiopian law

## Children's Privacy

AMU STORE is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take steps to delete it promptly.

## International Data Transfers

Your data may be processed in countries outside Ethiopia where Supabase's infrastructure is located (currently hosted in the European Union). We ensure appropriate safeguards are in place for international data transfers.

## Changes to This Policy

We may update this privacy policy from time to time. We will notify you of significant changes by:
- Posting the updated policy in the application
- Updating the "Last Updated" date at the top of this page

## Contact Information

If you have questions about this privacy policy or your personal data:

**Amu Furnishings**
- Email: privacy@amustore.com
- Location: Addis Ababa, Ethiopia

## Ethiopian Data Protection Compliance

This policy is designed to comply with the Ethiopian Data Protection Proclamation (No. 1262/2021) and applicable data protection regulations.

---

*This privacy policy is effective as of August 27, 2026.*
