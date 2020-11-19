const event = {
    "Records": [
        {
            "messageId": "4645d744-c3c6-466b-847b-d16b64a2f8ec",
            "receiptHandle": "AQEB+6JYo72FMibGGHAz7ARyWSAWe8oERhgzzQ9bb0jvdant6GHESEk0ncluSZJG+OnY21hXG6ljy02643dEqdcA85bQwRcQy/IRKzUk+SeA1X86pTRKJrSQVZcSv+48qe/H3/N1cpobn3H+yIFLs/XP/7J+mI5E09y2y2qzPaNWDK1O4TdHqCUfUqKA9gPeWH2CEMrXLJ/5uaOtwPQ/qLaN32FzZDS7dGGyefnYEPSRvw+2/S9SNxt/b9aWz7FJaNjKLeQJBvzxGM+U/KPe0bBk2BCdZmmr665GL7q4cFdCLMJOBEEoYWdG3M8yLWzuleMk4HtXsf3lTf8zuV/bKXZQoziTk3JD9vx5gzlqAxGs+IlGH2hZyFhZhy9ErHspGvdu8eCA7adIRip7+G3+VkRxgA==",
            "body": "{\"notificationType\":\"ResourceUpdated\",\"projectKey\":\"presales-b2b\",\"resource\":{\"typeId\":\"key-value-document\",\"id\":\"92c86aa4-3833-4e6f-9a17-ce3c78ce4fdd\"},\"resourceUserProvidedIdentifiers\":{\"containerAndKey\":{\"container\":\"company\",\"key\":\"white-zemlak-and-kemmer\"}},\"version\":18,\"oldVersion\":17,\"modifiedAt\":\"2020-11-19T16:33:56.300Z\"}",
            "attributes": {
                "ApproximateReceiveCount": "20",
                "SentTimestamp": "1605803636979",
                "SenderId": "AIDATWZ2FNOYVSCXGOPDX",
                "ApproximateFirstReceiveTimestamp": "1605803636979"
            },
            "messageAttributes": {},
            "md5OfBody": "10b9568b4d7784dd6e03c5019fabe9c2",
            "eventSource": "aws:sqs",
            "eventSourceARN": "arn:aws:sqs:us-east-2:255135673265:custom-object",
            "awsRegion": "us-east-2"
        }
    ]
}

const i = require('./index')
i.handler(event)