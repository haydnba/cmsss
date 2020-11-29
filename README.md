

1. Run standalone instance of Netlify CMS as static site hosted on s3
2. Create preconfigured assets on build source repo
3. Assign webhooks to CMS repo asset events
4. Configure lambdas as asset event hook target
5. Lambda reads repo through graphQL Api
6. Lambda transforms content and stores in separate bucket
