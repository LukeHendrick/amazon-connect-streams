// AWS SDK for JavaScript v2.553.0
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "version": "2.0",
  "metadata": {
    "apiVersion": "2014-06-30",
    "endpointPrefix": "cognito-identity",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Amazon Cognito Identity",
    "serviceId": "Cognito Identity",
    "signatureVersion": "v4",
    "targetPrefix": "AWSCognitoIdentityService",
    "uid": "cognito-identity-2014-06-30"
  },
  "operations": {
    "CreateIdentityPool": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolName",
          "AllowUnauthenticatedIdentities"
        ],
        "members": {
          "IdentityPoolName": {},
          "AllowUnauthenticatedIdentities": {
            "type": "boolean"
          },
          "SupportedLoginProviders": {
            "shape": "S4"
          },
          "DeveloperProviderName": {},
          "OpenIdConnectProviderARNs": {
            "shape": "S8"
          },
          "CognitoIdentityProviders": {
            "shape": "Sa"
          },
          "SamlProviderARNs": {
            "shape": "Sf"
          },
          "IdentityPoolTags": {
            "shape": "Sg"
          }
        }
      },
      "output": {
        "shape": "Sj"
      }
    },
    "DeleteIdentities": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityIdsToDelete"
        ],
        "members": {
          "IdentityIdsToDelete": {
            "type": "list",
            "member": {}
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "UnprocessedIdentityIds": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "IdentityId": {},
                "ErrorCode": {}
              }
            }
          }
        }
      }
    },
    "DeleteIdentityPool": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "IdentityPoolId": {}
        }
      }
    },
    "DescribeIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId"
        ],
        "members": {
          "IdentityId": {}
        }
      },
      "output": {
        "shape": "Su"
      }
    },
    "DescribeIdentityPool": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "IdentityPoolId": {}
        }
      },
      "output": {
        "shape": "Sj"
      }
    },
    "GetCredentialsForIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId"
        ],
        "members": {
          "IdentityId": {},
          "Logins": {
            "shape": "Sz"
          },
          "CustomRoleArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {},
          "Credentials": {
            "type": "structure",
            "members": {
              "AccessKeyId": {},
              "SecretKey": {},
              "SessionToken": {},
              "Expiration": {
                "type": "timestamp"
              }
            }
          }
        }
      }
    },
    "GetId": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "AccountId": {},
          "IdentityPoolId": {},
          "Logins": {
            "shape": "Sz"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {}
        }
      }
    },
    "GetIdentityPoolRoles": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "IdentityPoolId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityPoolId": {},
          "Roles": {
            "shape": "S1b"
          },
          "RoleMappings": {
            "shape": "S1d"
          }
        }
      }
    },
    "GetOpenIdToken": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId"
        ],
        "members": {
          "IdentityId": {},
          "Logins": {
            "shape": "Sz"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {},
          "Token": {}
        }
      }
    },
    "GetOpenIdTokenForDeveloperIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId",
          "Logins"
        ],
        "members": {
          "IdentityPoolId": {},
          "IdentityId": {},
          "Logins": {
            "shape": "Sz"
          },
          "TokenDuration": {
            "type": "long"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {},
          "Token": {}
        }
      }
    },
    "ListIdentities": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId",
          "MaxResults"
        ],
        "members": {
          "IdentityPoolId": {},
          "MaxResults": {
            "type": "integer"
          },
          "NextToken": {},
          "HideDisabled": {
            "type": "boolean"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityPoolId": {},
          "Identities": {
            "type": "list",
            "member": {
              "shape": "Su"
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListIdentityPools": {
      "input": {
        "type": "structure",
        "required": [
          "MaxResults"
        ],
        "members": {
          "MaxResults": {
            "type": "integer"
          },
          "NextToken": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityPools": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "IdentityPoolId": {},
                "IdentityPoolName": {}
              }
            }
          },
          "NextToken": {}
        }
      }
    },
    "ListTagsForResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArn"
        ],
        "members": {
          "ResourceArn": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "Tags": {
            "shape": "Sg"
          }
        }
      }
    },
    "LookupDeveloperIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId"
        ],
        "members": {
          "IdentityPoolId": {},
          "IdentityId": {},
          "DeveloperUserIdentifier": {},
          "MaxResults": {
            "type": "integer"
          },
          "NextToken": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {},
          "DeveloperUserIdentifierList": {
            "type": "list",
            "member": {}
          },
          "NextToken": {}
        }
      }
    },
    "MergeDeveloperIdentities": {
      "input": {
        "type": "structure",
        "required": [
          "SourceUserIdentifier",
          "DestinationUserIdentifier",
          "DeveloperProviderName",
          "IdentityPoolId"
        ],
        "members": {
          "SourceUserIdentifier": {},
          "DestinationUserIdentifier": {},
          "DeveloperProviderName": {},
          "IdentityPoolId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "IdentityId": {}
        }
      }
    },
    "SetIdentityPoolRoles": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityPoolId",
          "Roles"
        ],
        "members": {
          "IdentityPoolId": {},
          "Roles": {
            "shape": "S1b"
          },
          "RoleMappings": {
            "shape": "S1d"
          }
        }
      }
    },
    "TagResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArn"
        ],
        "members": {
          "ResourceArn": {},
          "Tags": {
            "shape": "Sg"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UnlinkDeveloperIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId",
          "IdentityPoolId",
          "DeveloperProviderName",
          "DeveloperUserIdentifier"
        ],
        "members": {
          "IdentityId": {},
          "IdentityPoolId": {},
          "DeveloperProviderName": {},
          "DeveloperUserIdentifier": {}
        }
      }
    },
    "UnlinkIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "IdentityId",
          "Logins",
          "LoginsToRemove"
        ],
        "members": {
          "IdentityId": {},
          "Logins": {
            "shape": "Sz"
          },
          "LoginsToRemove": {
            "shape": "Sv"
          }
        }
      }
    },
    "UntagResource": {
      "input": {
        "type": "structure",
        "required": [
          "ResourceArn"
        ],
        "members": {
          "ResourceArn": {},
          "TagKeys": {
            "type": "list",
            "member": {}
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UpdateIdentityPool": {
      "input": {
        "shape": "Sj"
      },
      "output": {
        "shape": "Sj"
      }
    }
  },
  "shapes": {
    "S4": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S8": {
      "type": "list",
      "member": {}
    },
    "Sa": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "ProviderName": {},
          "ClientId": {},
          "ServerSideTokenCheck": {
            "type": "boolean"
          }
        }
      }
    },
    "Sf": {
      "type": "list",
      "member": {}
    },
    "Sg": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "Sj": {
      "type": "structure",
      "required": [
        "IdentityPoolId",
        "IdentityPoolName",
        "AllowUnauthenticatedIdentities"
      ],
      "members": {
        "IdentityPoolId": {},
        "IdentityPoolName": {},
        "AllowUnauthenticatedIdentities": {
          "type": "boolean"
        },
        "SupportedLoginProviders": {
          "shape": "S4"
        },
        "DeveloperProviderName": {},
        "OpenIdConnectProviderARNs": {
          "shape": "S8"
        },
        "CognitoIdentityProviders": {
          "shape": "Sa"
        },
        "SamlProviderARNs": {
          "shape": "Sf"
        },
        "IdentityPoolTags": {
          "shape": "Sg"
        }
      }
    },
    "Su": {
      "type": "structure",
      "members": {
        "IdentityId": {},
        "Logins": {
          "shape": "Sv"
        },
        "CreationDate": {
          "type": "timestamp"
        },
        "LastModifiedDate": {
          "type": "timestamp"
        }
      }
    },
    "Sv": {
      "type": "list",
      "member": {}
    },
    "Sz": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S1b": {
      "type": "map",
      "key": {},
      "value": {}
    },
    "S1d": {
      "type": "map",
      "key": {},
      "value": {
        "type": "structure",
        "required": [
          "Type"
        ],
        "members": {
          "Type": {},
          "AmbiguousRoleResolution": {},
          "RulesConfiguration": {
            "type": "structure",
            "required": [
              "Rules"
            ],
            "members": {
              "Rules": {
                "type": "list",
                "member": {
                  "type": "structure",
                  "required": [
                    "Claim",
                    "MatchType",
                    "Value",
                    "RoleARN"
                  ],
                  "members": {
                    "Claim": {},
                    "MatchType": {},
                    "Value": {},
                    "RoleARN": {}
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
},{}],2:[function(require,module,exports){
module.exports={
  "pagination": {
  }
}

},{}],3:[function(require,module,exports){
module.exports={
  "version": "2.0",
  "metadata": {
    "apiVersion": "2017-02-15",
    "endpointPrefix": "connect",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceAbbreviation": "Connect",
    "serviceFullName": "AmazonConnectCTIService",
    "signatureVersion": "",
    "targetPrefix": "AmazonConnectCTIService",
    "uid": "connect-2017-02-15"
  },
  "operations": {
    "AcceptContact": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "CompleteContact": {
      "input": {
        "type": "structure",
        "required": [
          "contactId"
        ],
        "members": {
          "contactId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "ConferenceConnections": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "CreateAdditionalConnection": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId",
          "endpoint"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "endpoint": {
            "shape": "Sc"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "CreateOutboundContact": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "endpoint"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "endpoint": {
            "shape": "Sc"
          },
          "queueARN": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "CreateTransport": {
      "input": {
        "type": "structure",
        "required": [
          "transportType",
          "authentication"
        ],
        "members": {
          "transportType": {},
          "participantId": {},
          "contactId": {},
          "softphoneClientId": {},
          "authentication": {
            "shape": "S2"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "webSocketTransport": {
            "type": "structure",
            "required": [
              "url",
              "transportLifeTimeInSeconds"
            ],
            "members": {
              "url": {},
              "transportLifeTimeInSeconds": {
                "type": "long"
              }
            }
          },
          "chatTokenTransport": {
            "type": "structure",
            "required": [
              "participantToken",
              "expiry"
            ],
            "members": {
              "participantToken": {},
              "expiry": {}
            }
          },
          "softphoneTransport": {
            "type": "structure",
            "required": [
              "softphoneMediaConnections"
            ],
            "members": {
              "softphoneMediaConnections": {
                "type": "list",
                "member": {
                  "type": "structure",
                  "required": [
                    "username",
                    "credential",
                    "urls"
                  ],
                  "members": {
                    "username": {},
                    "credential": {},
                    "urls": {
                      "type": "list",
                      "member": {}
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "DestroyConnection": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId",
          "connectionId"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "connectionId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "GetAgentConfiguration": {
      "input": {
        "type": "structure",
        "required": [
          "authentication"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "configuration"
        ],
        "members": {
          "configuration": {
            "shape": "S19"
          }
        }
      }
    },
    "GetAgentPermissions": {
      "input": {
        "type": "structure",
        "required": [
          "authentication"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "permissions"
        ],
        "members": {
          "permissions": {
            "type": "list",
            "member": {}
          },
          "nextToken": {}
        }
      }
    },
    "GetAgentSnapshot": {
      "input": {
        "type": "structure",
        "required": [
          "authentication"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "nextToken": {},
          "timeout": {
            "type": "long"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "snapshot",
          "nextToken"
        ],
        "members": {
          "snapshot": {
            "type": "structure",
            "required": [
              "state",
              "contacts",
              "snapshotTimestamp"
            ],
            "members": {
              "state": {
                "shape": "S1s"
              },
              "contacts": {
                "type": "list",
                "member": {
                  "type": "structure",
                  "required": [
                    "contactId",
                    "type",
                    "state",
                    "queueTimestamp",
                    "connections",
                    "attributes"
                  ],
                  "members": {
                    "contactId": {},
                    "initialContactId": {},
                    "type": {},
                    "state": {
                      "type": "structure",
                      "required": [
                        "type",
                        "timestamp"
                      ],
                      "members": {
                        "type": {},
                        "timestamp": {
                          "type": "timestamp"
                        }
                      }
                    },
                    "queue": {
                      "shape": "Si"
                    },
                    "queueTimestamp": {
                      "type": "timestamp"
                    },
                    "connections": {
                      "type": "list",
                      "member": {
                        "type": "structure",
                        "required": [
                          "connectionId",
                          "state",
                          "type",
                          "initial"
                        ],
                        "members": {
                          "connectionId": {},
                          "endpoint": {
                            "shape": "Sc"
                          },
                          "state": {
                            "type": "structure",
                            "required": [
                              "type",
                              "timestamp"
                            ],
                            "members": {
                              "type": {},
                              "timestamp": {
                                "type": "timestamp"
                              }
                            }
                          },
                          "type": {},
                          "initial": {
                            "type": "boolean"
                          },
                          "softphoneMediaInfo": {
                            "type": "structure",
                            "members": {
                              "callType": {},
                              "autoAccept": {
                                "type": "boolean"
                              },
                              "mediaLegContextToken": {},
                              "callContextToken": {},
                              "callConfigJson": {}
                            }
                          },
                          "chatMediaInfo": {
                            "type": "structure",
                            "members": {
                              "chatAutoAccept": {
                                "type": "boolean"
                              },
                              "connectionData": {},
                              "customerName": {}
                            }
                          },
                          "monitoringInfo": {
                            "type": "structure",
                            "members": {
                              "agent": {
                                "type": "structure",
                                "members": {
                                  "agentName": {}
                                }
                              },
                              "joinTimeStamp": {
                                "type": "timestamp"
                              }
                            }
                          }
                        }
                      }
                    },
                    "attributes": {
                      "shape": "S2c"
                    }
                  }
                }
              },
              "snapshotTimestamp": {
                "type": "timestamp"
              }
            }
          },
          "nextToken": {}
        }
      }
    },
    "GetAgentStates": {
      "input": {
        "type": "structure",
        "required": [
          "authentication"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "states"
        ],
        "members": {
          "states": {
            "type": "list",
            "member": {
              "shape": "S1s"
            }
          },
          "nextToken": {}
        }
      }
    },
    "GetDialableCountryCodes": {
      "input": {
        "type": "structure",
        "required": [
          "authentication"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "countryCodes"
        ],
        "members": {
          "countryCodes": {
            "type": "list",
            "member": {}
          },
          "nextToken": {}
        }
      }
    },
    "GetEndpoints": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "queueARNs"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "queueARNs": {
            "type": "list",
            "member": {}
          },
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "endpoints": {
            "type": "list",
            "member": {
              "shape": "Sc"
            }
          },
          "nextToken": {}
        }
      }
    },
    "GetNewAuthToken": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "refreshToken"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "refreshToken": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {
          "newAuthToken": {},
          "expirationDateTime": {
            "type": "timestamp"
          }
        }
      }
    },
    "GetRoutingProfileQueues": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "routingProfileARN"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "routingProfileARN": {},
          "nextToken": {},
          "maxResults": {
            "type": "integer"
          }
        }
      },
      "output": {
        "type": "structure",
        "required": [
          "queues"
        ],
        "members": {
          "queues": {
            "type": "list",
            "member": {
              "shape": "Si"
            }
          },
          "nextToken": {}
        }
      }
    },
    "HoldConnection": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId",
          "connectionId"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "connectionId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "NotifyContactIssue": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "issueCode": {},
          "description": {},
          "clientLogs": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "PutAgentState": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "state"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "state": {
            "shape": "S1s"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "ResumeConnection": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId",
          "connectionId"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "connectionId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "SendClientLogs": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "logEvents"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "logEvents": {
            "type": "list",
            "member": {
              "type": "structure",
              "members": {
                "timestamp": {
                  "type": "timestamp"
                },
                "component": {},
                "message": {}
              }
            }
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "SendDigits": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId",
          "connectionId",
          "digits"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "connectionId": {},
          "digits": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "SendSoftphoneCallMetrics": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId",
          "softphoneStreamStatistics"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "softphoneStreamStatistics": {
            "shape": "S3b"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "SendSoftphoneCallReport": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId",
          "report"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "report": {
            "type": "structure",
            "members": {
              "callStartTime": {
                "type": "timestamp"
              },
              "callEndTime": {
                "type": "timestamp"
              },
              "softphoneStreamStatistics": {
                "shape": "S3b"
              },
              "gumTimeMillis": {
                "type": "long"
              },
              "initializationTimeMillis": {
                "type": "long"
              },
              "iceCollectionTimeMillis": {
                "type": "long"
              },
              "signallingConnectTimeMillis": {
                "type": "long"
              },
              "handshakeTimeMillis": {
                "type": "long"
              },
              "preTalkTimeMillis": {
                "type": "long"
              },
              "talkTimeMillis": {
                "type": "long"
              },
              "cleanupTimeMillis": {
                "type": "long"
              },
              "iceCollectionFailure": {
                "type": "boolean"
              },
              "signallingConnectionFailure": {
                "type": "boolean"
              },
              "handshakeFailure": {
                "type": "boolean"
              },
              "gumOtherFailure": {
                "type": "boolean"
              },
              "gumTimeoutFailure": {
                "type": "boolean"
              },
              "createOfferFailure": {
                "type": "boolean"
              },
              "setLocalDescriptionFailure": {
                "type": "boolean"
              },
              "userBusyFailure": {
                "type": "boolean"
              },
              "invalidRemoteSDPFailure": {
                "type": "boolean"
              },
              "noRemoteIceCandidateFailure": {
                "type": "boolean"
              },
              "setRemoteDescriptionFailure": {
                "type": "boolean"
              }
            }
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "ToggleActiveConnections": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId",
          "connectionId"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "connectionId": {}
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UpdateAgentConfiguration": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "configuration"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "configuration": {
            "shape": "S19"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    },
    "UpdateContactAttributes": {
      "input": {
        "type": "structure",
        "required": [
          "authentication",
          "contactId",
          "attributes"
        ],
        "members": {
          "authentication": {
            "shape": "S2"
          },
          "contactId": {},
          "attributes": {
            "shape": "S2c"
          }
        }
      },
      "output": {
        "type": "structure",
        "members": {}
      }
    }
  },
  "shapes": {
    "S2": {
      "type": "structure",
      "members": {
        "agentARN": {},
        "authToken": {}
      }
    },
    "Sc": {
      "type": "structure",
      "required": [
        "type"
      ],
      "members": {
        "endpointARN": {},
        "type": {},
        "name": {},
        "phoneNumber": {},
        "agentLogin": {},
        "queue": {
          "shape": "Si"
        }
      }
    },
    "Si": {
      "type": "structure",
      "members": {
        "queueARN": {},
        "name": {}
      }
    },
    "S19": {
      "type": "structure",
      "required": [
        "name",
        "softphoneEnabled",
        "softphoneAutoAccept",
        "extension",
        "routingProfile"
      ],
      "members": {
        "name": {},
        "username": {},
        "softphoneEnabled": {
          "type": "boolean"
        },
        "softphoneAutoAccept": {
          "type": "boolean"
        },
        "extension": {},
        "routingProfile": {
          "type": "structure",
          "members": {
            "name": {},
            "routingProfileARN": {},
            "defaultOutboundQueue": {
              "shape": "Si"
            },
            "channelConcurrencyMap": {
              "type": "map",
              "key": {},
              "value": {
                "type": "long"
              }
            }
          }
        },
        "agentPreferences": {
          "type": "map",
          "key": {},
          "value": {}
        }
      }
    },
    "S1s": {
      "type": "structure",
      "required": [
        "type",
        "name"
      ],
      "members": {
        "agentStateARN": {},
        "type": {},
        "name": {},
        "startTimestamp": {
          "type": "timestamp"
        }
      }
    },
    "S2c": {
      "type": "map",
      "key": {},
      "value": {
        "type": "structure",
        "required": [
          "name"
        ],
        "members": {
          "name": {},
          "value": {}
        }
      }
    },
    "S3b": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "timestamp": {
            "type": "timestamp"
          },
          "softphoneStreamType": {},
          "packetCount": {
            "type": "long"
          },
          "packetsLost": {
            "type": "long"
          },
          "audioLevel": {
            "type": "double"
          },
          "jitterBufferMillis": {
            "type": "long"
          },
          "roundTripTimeMillis": {
            "type": "long"
          }
        }
      }
    }
  }
}
},{}],4:[function(require,module,exports){
module.exports={
  "acm": {
    "name": "ACM",
    "cors": true
  },
  "apigateway": {
    "name": "APIGateway",
    "cors": true
  },
  "applicationautoscaling": {
    "prefix": "application-autoscaling",
    "name": "ApplicationAutoScaling",
    "cors": true
  },
  "appstream": {
    "name": "AppStream"
  },
  "autoscaling": {
    "name": "AutoScaling",
    "cors": true
  },
  "batch": {
    "name": "Batch"
  },
  "budgets": {
    "name": "Budgets"
  },
  "clouddirectory": {
    "name": "CloudDirectory",
    "versions": [
      "2016-05-10*"
    ]
  },
  "cloudformation": {
    "name": "CloudFormation",
    "cors": true
  },
  "cloudfront": {
    "name": "CloudFront",
    "versions": [
      "2013-05-12*",
      "2013-11-11*",
      "2014-05-31*",
      "2014-10-21*",
      "2014-11-06*",
      "2015-04-17*",
      "2015-07-27*",
      "2015-09-17*",
      "2016-01-13*",
      "2016-01-28*",
      "2016-08-01*",
      "2016-08-20*",
      "2016-09-07*",
      "2016-09-29*",
      "2016-11-25*",
      "2017-03-25*",
      "2017-10-30*",
      "2018-06-18*",
      "2018-11-05*"
    ],
    "cors": true
  },
  "cloudhsm": {
    "name": "CloudHSM",
    "cors": true
  },
  "cloudsearch": {
    "name": "CloudSearch"
  },
  "cloudsearchdomain": {
    "name": "CloudSearchDomain"
  },
  "cloudtrail": {
    "name": "CloudTrail",
    "cors": true
  },
  "cloudwatch": {
    "prefix": "monitoring",
    "name": "CloudWatch",
    "cors": true
  },
  "cloudwatchevents": {
    "prefix": "events",
    "name": "CloudWatchEvents",
    "versions": [
      "2014-02-03*"
    ],
    "cors": true
  },
  "cloudwatchlogs": {
    "prefix": "logs",
    "name": "CloudWatchLogs",
    "cors": true
  },
  "codebuild": {
    "name": "CodeBuild",
    "cors": true
  },
  "codecommit": {
    "name": "CodeCommit",
    "cors": true
  },
  "codedeploy": {
    "name": "CodeDeploy",
    "cors": true
  },
  "codepipeline": {
    "name": "CodePipeline",
    "cors": true
  },
  "cognitoidentity": {
    "prefix": "cognito-identity",
    "name": "CognitoIdentity",
    "cors": true
  },
  "cognitoidentityserviceprovider": {
    "prefix": "cognito-idp",
    "name": "CognitoIdentityServiceProvider",
    "cors": true
  },
  "cognitosync": {
    "prefix": "cognito-sync",
    "name": "CognitoSync",
    "cors": true
  },
  "configservice": {
    "prefix": "config",
    "name": "ConfigService",
    "cors": true
  },
  "connect": {
    "name": "Connect",
    "cors": true
  },
  "cur": {
    "name": "CUR",
    "cors": true
  },
  "datapipeline": {
    "name": "DataPipeline"
  },
  "devicefarm": {
    "name": "DeviceFarm",
    "cors": true
  },
  "directconnect": {
    "name": "DirectConnect",
    "cors": true
  },
  "directoryservice": {
    "prefix": "ds",
    "name": "DirectoryService"
  },
  "discovery": {
    "name": "Discovery"
  },
  "dms": {
    "name": "DMS"
  },
  "dynamodb": {
    "name": "DynamoDB",
    "cors": true
  },
  "dynamodbstreams": {
    "prefix": "streams.dynamodb",
    "name": "DynamoDBStreams",
    "cors": true
  },
  "ec2": {
    "name": "EC2",
    "versions": [
      "2013-06-15*",
      "2013-10-15*",
      "2014-02-01*",
      "2014-05-01*",
      "2014-06-15*",
      "2014-09-01*",
      "2014-10-01*",
      "2015-03-01*",
      "2015-04-15*",
      "2015-10-01*",
      "2016-04-01*",
      "2016-09-15*"
    ],
    "cors": true
  },
  "ecr": {
    "name": "ECR",
    "cors": true
  },
  "ecs": {
    "name": "ECS",
    "cors": true
  },
  "efs": {
    "prefix": "elasticfilesystem",
    "name": "EFS",
    "cors": true
  },
  "elasticache": {
    "name": "ElastiCache",
    "versions": [
      "2012-11-15*",
      "2014-03-24*",
      "2014-07-15*",
      "2014-09-30*"
    ],
    "cors": true
  },
  "elasticbeanstalk": {
    "name": "ElasticBeanstalk",
    "cors": true
  },
  "elb": {
    "prefix": "elasticloadbalancing",
    "name": "ELB",
    "cors": true
  },
  "elbv2": {
    "prefix": "elasticloadbalancingv2",
    "name": "ELBv2",
    "cors": true
  },
  "emr": {
    "prefix": "elasticmapreduce",
    "name": "EMR",
    "cors": true
  },
  "es": {
    "name": "ES"
  },
  "elastictranscoder": {
    "name": "ElasticTranscoder",
    "cors": true
  },
  "firehose": {
    "name": "Firehose",
    "cors": true
  },
  "gamelift": {
    "name": "GameLift",
    "cors": true
  },
  "glacier": {
    "name": "Glacier"
  },
  "health": {
    "name": "Health"
  },
  "iam": {
    "name": "IAM",
    "cors": true
  },
  "importexport": {
    "name": "ImportExport"
  },
  "inspector": {
    "name": "Inspector",
    "versions": [
      "2015-08-18*"
    ],
    "cors": true
  },
  "iot": {
    "name": "Iot",
    "cors": true
  },
  "iotdata": {
    "prefix": "iot-data",
    "name": "IotData",
    "cors": true
  },
  "kinesis": {
    "name": "Kinesis",
    "cors": true
  },
  "kinesisanalytics": {
    "name": "KinesisAnalytics"
  },
  "kms": {
    "name": "KMS",
    "cors": true
  },
  "lambda": {
    "name": "Lambda",
    "cors": true
  },
  "lexruntime": {
    "prefix": "runtime.lex",
    "name": "LexRuntime",
    "cors": true
  },
  "lightsail": {
    "name": "Lightsail"
  },
  "machinelearning": {
    "name": "MachineLearning",
    "cors": true
  },
  "marketplacecommerceanalytics": {
    "name": "MarketplaceCommerceAnalytics",
    "cors": true
  },
  "marketplacemetering": {
    "prefix": "meteringmarketplace",
    "name": "MarketplaceMetering"
  },
  "mturk": {
    "prefix": "mturk-requester",
    "name": "MTurk",
    "cors": true
  },
  "mobileanalytics": {
    "name": "MobileAnalytics",
    "cors": true
  },
  "opsworks": {
    "name": "OpsWorks",
    "cors": true
  },
  "opsworkscm": {
    "name": "OpsWorksCM"
  },
  "organizations": {
    "name": "Organizations"
  },
  "pinpoint": {
    "name": "Pinpoint"
  },
  "polly": {
    "name": "Polly",
    "cors": true
  },
  "rds": {
    "name": "RDS",
    "versions": [
      "2014-09-01*"
    ],
    "cors": true
  },
  "redshift": {
    "name": "Redshift",
    "cors": true
  },
  "rekognition": {
    "name": "Rekognition",
    "cors": true
  },
  "resourcegroupstaggingapi": {
    "name": "ResourceGroupsTaggingAPI"
  },
  "route53": {
    "name": "Route53",
    "cors": true
  },
  "route53domains": {
    "name": "Route53Domains",
    "cors": true
  },
  "s3": {
    "name": "S3",
    "dualstackAvailable": true,
    "cors": true
  },
  "s3control": {
    "name": "S3Control",
    "dualstackAvailable": true
  },
  "servicecatalog": {
    "name": "ServiceCatalog",
    "cors": true
  },
  "ses": {
    "prefix": "email",
    "name": "SES",
    "cors": true
  },
  "shield": {
    "name": "Shield"
  },
  "simpledb": {
    "prefix": "sdb",
    "name": "SimpleDB"
  },
  "sms": {
    "name": "SMS"
  },
  "snowball": {
    "name": "Snowball"
  },
  "sns": {
    "name": "SNS",
    "cors": true
  },
  "sqs": {
    "name": "SQS",
    "cors": true
  },
  "ssm": {
    "name": "SSM",
    "cors": true
  },
  "storagegateway": {
    "name": "StorageGateway",
    "cors": true
  },
  "stepfunctions": {
    "prefix": "states",
    "name": "StepFunctions"
  },
  "sts": {
    "name": "STS",
    "cors": true
  },
  "support": {
    "name": "Support"
  },
  "swf": {
    "name": "SWF"
  },
  "xray": {
    "name": "XRay",
    "cors": true
  },
  "waf": {
    "name": "WAF",
    "cors": true
  },
  "wafregional": {
    "prefix": "waf-regional",
    "name": "WAFRegional"
  },
  "workdocs": {
    "name": "WorkDocs",
    "cors": true
  },
  "workspaces": {
    "name": "WorkSpaces"
  },
  "codestar": {
    "name": "CodeStar"
  },
  "lexmodelbuildingservice": {
    "prefix": "lex-models",
    "name": "LexModelBuildingService",
    "cors": true
  },
  "marketplaceentitlementservice": {
    "prefix": "entitlement.marketplace",
    "name": "MarketplaceEntitlementService"
  },
  "athena": {
    "name": "Athena"
  },
  "greengrass": {
    "name": "Greengrass"
  },
  "dax": {
    "name": "DAX"
  },
  "migrationhub": {
    "prefix": "AWSMigrationHub",
    "name": "MigrationHub"
  },
  "cloudhsmv2": {
    "name": "CloudHSMV2"
  },
  "glue": {
    "name": "Glue"
  },
  "mobile": {
    "name": "Mobile"
  },
  "pricing": {
    "name": "Pricing",
    "cors": true
  },
  "costexplorer": {
    "prefix": "ce",
    "name": "CostExplorer",
    "cors": true
  },
  "mediaconvert": {
    "name": "MediaConvert"
  },
  "medialive": {
    "name": "MediaLive"
  },
  "mediapackage": {
    "name": "MediaPackage"
  },
  "mediastore": {
    "name": "MediaStore"
  },
  "mediastoredata": {
    "prefix": "mediastore-data",
    "name": "MediaStoreData",
    "cors": true
  },
  "appsync": {
    "name": "AppSync"
  },
  "guardduty": {
    "name": "GuardDuty"
  },
  "mq": {
    "name": "MQ"
  },
  "comprehend": {
    "name": "Comprehend",
    "cors": true
  },
  "iotjobsdataplane": {
    "prefix": "iot-jobs-data",
    "name": "IoTJobsDataPlane"
  },
  "kinesisvideoarchivedmedia": {
    "prefix": "kinesis-video-archived-media",
    "name": "KinesisVideoArchivedMedia",
    "cors": true
  },
  "kinesisvideomedia": {
    "prefix": "kinesis-video-media",
    "name": "KinesisVideoMedia",
    "cors": true
  },
  "kinesisvideo": {
    "name": "KinesisVideo",
    "cors": true
  },
  "sagemakerruntime": {
    "prefix": "runtime.sagemaker",
    "name": "SageMakerRuntime"
  },
  "sagemaker": {
    "name": "SageMaker"
  },
  "translate": {
    "name": "Translate",
    "cors": true
  },
  "resourcegroups": {
    "prefix": "resource-groups",
    "name": "ResourceGroups",
    "cors": true
  },
  "alexaforbusiness": {
    "name": "AlexaForBusiness"
  },
  "cloud9": {
    "name": "Cloud9"
  },
  "serverlessapplicationrepository": {
    "prefix": "serverlessrepo",
    "name": "ServerlessApplicationRepository"
  },
  "servicediscovery": {
    "name": "ServiceDiscovery"
  },
  "workmail": {
    "name": "WorkMail"
  },
  "autoscalingplans": {
    "prefix": "autoscaling-plans",
    "name": "AutoScalingPlans"
  },
  "transcribeservice": {
    "prefix": "transcribe",
    "name": "TranscribeService"
  },
  "connect": {
    "name": "Connect"
  },
  "acmpca": {
    "prefix": "acm-pca",
    "name": "ACMPCA"
  },
  "fms": {
    "name": "FMS"
  },
  "secretsmanager": {
    "name": "SecretsManager",
    "cors": true
  },
  "iotanalytics": {
    "name": "IoTAnalytics",
    "cors": true	
  },
  "iot1clickdevicesservice": {
    "prefix": "iot1click-devices",
    "name": "IoT1ClickDevicesService"
  },
  "iot1clickprojects": {
    "prefix": "iot1click-projects",
    "name": "IoT1ClickProjects"
  },
  "pi": {
    "name": "PI"
  },
  "neptune": {
    "name": "Neptune"
  },
  "mediatailor": {
    "name": "MediaTailor"
  },
  "eks": {
    "name": "EKS"
  },
  "macie": {
    "name": "Macie"
  },
  "dlm": {
    "name": "DLM"
  },
  "signer": {
    "name": "Signer"
  },
  "chime": {
    "name": "Chime"
  },
  "pinpointemail": {
    "prefix": "pinpoint-email",
    "name": "PinpointEmail"
  },
  "ram": {
    "name": "RAM"
  },
  "route53resolver": {
    "name": "Route53Resolver"
  },
  "pinpointsmsvoice": {
    "prefix": "sms-voice",
    "name": "PinpointSMSVoice"
  },
  "quicksight": {
    "name": "QuickSight"
  },
  "rdsdataservice": {
    "prefix": "rds-data",
    "name": "RDSDataService"
  },
  "amplify": {
    "name": "Amplify"
  },
  "datasync": {
    "name": "DataSync"
  },
  "robomaker": {
    "name": "RoboMaker"
  },
  "transfer": {
    "name": "Transfer"
  },
  "globalaccelerator": {
    "name": "GlobalAccelerator"
  },
  "comprehendmedical": {
    "name": "ComprehendMedical",
    "cors": true
  },
  "kinesisanalyticsv2": {
    "name": "KinesisAnalyticsV2"
  },
  "mediaconnect": {
    "name": "MediaConnect"
  },
  "fsx": {
    "name": "FSx"
  },
  "securityhub": {
    "name": "SecurityHub"
  },
  "appmesh": {
    "name": "AppMesh",
    "versions": [
      "2018-10-01*"
    ]
  },
  "licensemanager": {
    "prefix": "license-manager",
    "name": "LicenseManager"
  },
  "kafka": {
    "name": "Kafka"
  },
  "apigatewaymanagementapi": {
    "name": "ApiGatewayManagementApi"
  },
  "apigatewayv2": {
    "name": "ApiGatewayV2"
  },
  "docdb": {
    "name": "DocDB"
  },
  "backup": {
    "name": "Backup"
  },
  "worklink": {
    "name": "WorkLink"
  },
  "textract": {
    "name": "Textract"
  },
  "managedblockchain": {
    "name": "ManagedBlockchain"
  },
  "mediapackagevod": {
    "prefix": "mediapackage-vod",
    "name": "MediaPackageVod"
  },
  "groundstation": {
    "name": "GroundStation"
  },
  "iotthingsgraph": {
    "name": "IoTThingsGraph"
  },
  "iotevents": {
    "name": "IoTEvents"
  },
  "ioteventsdata": {
    "prefix": "iotevents-data",
    "name": "IoTEventsData"
  },
  "personalize": {
    "name": "Personalize",
    "cors": true
  },
  "personalizeevents": {
    "prefix": "personalize-events",
    "name": "PersonalizeEvents",
    "cors": true
  },
  "personalizeruntime": {
    "prefix": "personalize-runtime",
    "name": "PersonalizeRuntime",
    "cors": true
  },
  "applicationinsights": {
    "prefix": "application-insights",
    "name": "ApplicationInsights"
  },
  "servicequotas": {
    "prefix": "service-quotas",
    "name": "ServiceQuotas"
  },
  "ec2instanceconnect": {
    "prefix": "ec2-instance-connect",
    "name": "EC2InstanceConnect"
  },
  "eventbridge": {
    "name": "EventBridge"
  },
  "lakeformation": {
    "name": "LakeFormation"
  },
  "forecastservice": {
    "prefix": "forecast",
    "name": "ForecastService",
    "cors": true
  },
  "forecastqueryservice": {
    "prefix": "forecastquery",
    "name": "ForecastQueryService",
    "cors": true
  },
  "qldb": {
    "name": "QLDB"
  },
  "qldbsession": {
    "prefix": "qldb-session",
    "name": "QLDBSession"
  },
  "workmailmessageflow": {
    "name": "WorkMailMessageFlow"
  }
}

},{}],5:[function(require,module,exports){
module.exports={
  "version": "2.0",
  "metadata": {
    "apiVersion": "2011-06-15",
    "endpointPrefix": "sts",
    "globalEndpoint": "sts.amazonaws.com",
    "protocol": "query",
    "serviceAbbreviation": "AWS STS",
    "serviceFullName": "AWS Security Token Service",
    "serviceId": "STS",
    "signatureVersion": "v4",
    "uid": "sts-2011-06-15",
    "xmlNamespace": "https://sts.amazonaws.com/doc/2011-06-15/"
  },
  "operations": {
    "AssumeRole": {
      "input": {
        "type": "structure",
        "required": [
          "RoleArn",
          "RoleSessionName"
        ],
        "members": {
          "RoleArn": {},
          "RoleSessionName": {},
          "PolicyArns": {
            "shape": "S4"
          },
          "Policy": {},
          "DurationSeconds": {
            "type": "integer"
          },
          "ExternalId": {},
          "SerialNumber": {},
          "TokenCode": {}
        }
      },
      "output": {
        "resultWrapper": "AssumeRoleResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sc"
          },
          "AssumedRoleUser": {
            "shape": "Sh"
          },
          "PackedPolicySize": {
            "type": "integer"
          }
        }
      }
    },
    "AssumeRoleWithSAML": {
      "input": {
        "type": "structure",
        "required": [
          "RoleArn",
          "PrincipalArn",
          "SAMLAssertion"
        ],
        "members": {
          "RoleArn": {},
          "PrincipalArn": {},
          "SAMLAssertion": {},
          "PolicyArns": {
            "shape": "S4"
          },
          "Policy": {},
          "DurationSeconds": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "AssumeRoleWithSAMLResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sc"
          },
          "AssumedRoleUser": {
            "shape": "Sh"
          },
          "PackedPolicySize": {
            "type": "integer"
          },
          "Subject": {},
          "SubjectType": {},
          "Issuer": {},
          "Audience": {},
          "NameQualifier": {}
        }
      }
    },
    "AssumeRoleWithWebIdentity": {
      "input": {
        "type": "structure",
        "required": [
          "RoleArn",
          "RoleSessionName",
          "WebIdentityToken"
        ],
        "members": {
          "RoleArn": {},
          "RoleSessionName": {},
          "WebIdentityToken": {},
          "ProviderId": {},
          "PolicyArns": {
            "shape": "S4"
          },
          "Policy": {},
          "DurationSeconds": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "AssumeRoleWithWebIdentityResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sc"
          },
          "SubjectFromWebIdentityToken": {},
          "AssumedRoleUser": {
            "shape": "Sh"
          },
          "PackedPolicySize": {
            "type": "integer"
          },
          "Provider": {},
          "Audience": {}
        }
      }
    },
    "DecodeAuthorizationMessage": {
      "input": {
        "type": "structure",
        "required": [
          "EncodedMessage"
        ],
        "members": {
          "EncodedMessage": {}
        }
      },
      "output": {
        "resultWrapper": "DecodeAuthorizationMessageResult",
        "type": "structure",
        "members": {
          "DecodedMessage": {}
        }
      }
    },
    "GetAccessKeyInfo": {
      "input": {
        "type": "structure",
        "required": [
          "AccessKeyId"
        ],
        "members": {
          "AccessKeyId": {}
        }
      },
      "output": {
        "resultWrapper": "GetAccessKeyInfoResult",
        "type": "structure",
        "members": {
          "Account": {}
        }
      }
    },
    "GetCallerIdentity": {
      "input": {
        "type": "structure",
        "members": {}
      },
      "output": {
        "resultWrapper": "GetCallerIdentityResult",
        "type": "structure",
        "members": {
          "UserId": {},
          "Account": {},
          "Arn": {}
        }
      }
    },
    "GetFederationToken": {
      "input": {
        "type": "structure",
        "required": [
          "Name"
        ],
        "members": {
          "Name": {},
          "Policy": {},
          "PolicyArns": {
            "shape": "S4"
          },
          "DurationSeconds": {
            "type": "integer"
          }
        }
      },
      "output": {
        "resultWrapper": "GetFederationTokenResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sc"
          },
          "FederatedUser": {
            "type": "structure",
            "required": [
              "FederatedUserId",
              "Arn"
            ],
            "members": {
              "FederatedUserId": {},
              "Arn": {}
            }
          },
          "PackedPolicySize": {
            "type": "integer"
          }
        }
      }
    },
    "GetSessionToken": {
      "input": {
        "type": "structure",
        "members": {
          "DurationSeconds": {
            "type": "integer"
          },
          "SerialNumber": {},
          "TokenCode": {}
        }
      },
      "output": {
        "resultWrapper": "GetSessionTokenResult",
        "type": "structure",
        "members": {
          "Credentials": {
            "shape": "Sc"
          }
        }
      }
    }
  },
  "shapes": {
    "S4": {
      "type": "list",
      "member": {
        "type": "structure",
        "members": {
          "arn": {}
        }
      }
    },
    "Sc": {
      "type": "structure",
      "required": [
        "AccessKeyId",
        "SecretAccessKey",
        "SessionToken",
        "Expiration"
      ],
      "members": {
        "AccessKeyId": {},
        "SecretAccessKey": {},
        "SessionToken": {},
        "Expiration": {
          "type": "timestamp"
        }
      }
    },
    "Sh": {
      "type": "structure",
      "required": [
        "AssumedRoleId",
        "Arn"
      ],
      "members": {
        "AssumedRoleId": {},
        "Arn": {}
      }
    }
  }
}
},{}],6:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],7:[function(require,module,exports){
require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['cognitoidentity'] = {};
AWS.CognitoIdentity = Service.defineService('cognitoidentity', ['2014-06-30']);
require('../lib/services/cognitoidentity');
Object.defineProperty(apiLoader.services['cognitoidentity'], '2014-06-30', {
  get: function get() {
    var model = require('../apis/cognito-identity-2014-06-30.min.json');
    model.paginators = require('../apis/cognito-identity-2014-06-30.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CognitoIdentity;

},{"../apis/cognito-identity-2014-06-30.min.json":1,"../apis/cognito-identity-2014-06-30.paginators.json":2,"../lib/core":18,"../lib/node_loader":16,"../lib/services/cognitoidentity":60}],8:[function(require,module,exports){
require('../lib/node_loader');
var AWS = require('../lib/core');
var Service = AWS.Service;
var apiLoader = AWS.apiLoader;

apiLoader.services['sts'] = {};
AWS.STS = Service.defineService('sts', ['2011-06-15']);
require('../lib/services/sts');
Object.defineProperty(apiLoader.services['sts'], '2011-06-15', {
  get: function get() {
    var model = require('../apis/sts-2011-06-15.min.json');
    model.paginators = require('../apis/sts-2011-06-15.paginators.json').pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.STS;

},{"../apis/sts-2011-06-15.min.json":5,"../apis/sts-2011-06-15.paginators.json":6,"../lib/core":18,"../lib/node_loader":16,"../lib/services/sts":61}],9:[function(require,module,exports){
function apiLoader(svc, version) {
  if (!apiLoader.services.hasOwnProperty(svc)) {
    throw new Error('InvalidService: Failed to load api for ' + svc);
  }
  return apiLoader.services[svc][version];
}

/**
 * @api private
 *
 * This member of AWS.apiLoader is private, but changing it will necessitate a
 * change to ../scripts/services-table-generator.ts
 */
apiLoader.services = {};

/**
 * @api private
 */
module.exports = apiLoader;

},{}],10:[function(require,module,exports){
var Hmac = require('./browserHmac');
var Md5 = require('./browserMd5');
var Sha1 = require('./browserSha1');
var Sha256 = require('./browserSha256');

/**
 * @api private
 */
module.exports = exports = {
    createHash: function createHash(alg) {
      alg = alg.toLowerCase();
      if (alg === 'md5') {
        return new Md5();
      } else if (alg === 'sha256') {
        return new Sha256();
      } else if (alg === 'sha1') {
        return new Sha1();
      }

      throw new Error('Hash algorithm ' + alg + ' is not supported in the browser SDK');
    },
    createHmac: function createHmac(alg, key) {
      alg = alg.toLowerCase();
      if (alg === 'md5') {
        return new Hmac(Md5, key);
      } else if (alg === 'sha256') {
        return new Hmac(Sha256, key);
      } else if (alg === 'sha1') {
        return new Hmac(Sha1, key);
      }

      throw new Error('HMAC algorithm ' + alg + ' is not supported in the browser SDK');
    },
    createSign: function() {
      throw new Error('createSign is not implemented in the browser');
    }
  };

},{"./browserHmac":12,"./browserMd5":13,"./browserSha1":14,"./browserSha256":15}],11:[function(require,module,exports){
var Buffer = require('buffer/').Buffer;

/**
 * This is a polyfill for the static method `isView` of `ArrayBuffer`, which is
 * e.g. missing in IE 10.
 *
 * @api private
 */
if (
    typeof ArrayBuffer !== 'undefined' &&
    typeof ArrayBuffer.isView === 'undefined'
) {
    ArrayBuffer.isView = function(arg) {
        return viewStrings.indexOf(Object.prototype.toString.call(arg)) > -1;
    };
}

/**
 * @api private
 */
var viewStrings = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]',
    '[object DataView]',
];

/**
 * @api private
 */
function isEmptyData(data) {
    if (typeof data === 'string') {
        return data.length === 0;
    }
    return data.byteLength === 0;
}

/**
 * @api private
 */
function convertToBuffer(data) {
    if (typeof data === 'string') {
        data = new Buffer(data, 'utf8');
    }

    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }

    return new Uint8Array(data);
}

/**
 * @api private
 */
module.exports = exports = {
    isEmptyData: isEmptyData,
    convertToBuffer: convertToBuffer,
};

},{"buffer/":83}],12:[function(require,module,exports){
var hashUtils = require('./browserHashUtils');

/**
 * @api private
 */
function Hmac(hashCtor, secret) {
    this.hash = new hashCtor();
    this.outer = new hashCtor();

    var inner = bufferFromSecret(hashCtor, secret);
    var outer = new Uint8Array(hashCtor.BLOCK_SIZE);
    outer.set(inner);

    for (var i = 0; i < hashCtor.BLOCK_SIZE; i++) {
        inner[i] ^= 0x36;
        outer[i] ^= 0x5c;
    }

    this.hash.update(inner);
    this.outer.update(outer);

    // Zero out the copied key buffer.
    for (var i = 0; i < inner.byteLength; i++) {
        inner[i] = 0;
    }
}

/**
 * @api private
 */
module.exports = exports = Hmac;

Hmac.prototype.update = function (toHash) {
    if (hashUtils.isEmptyData(toHash) || this.error) {
        return this;
    }

    try {
        this.hash.update(hashUtils.convertToBuffer(toHash));
    } catch (e) {
        this.error = e;
    }

    return this;
};

Hmac.prototype.digest = function (encoding) {
    if (!this.outer.finished) {
        this.outer.update(this.hash.digest());
    }

    return this.outer.digest(encoding);
};

function bufferFromSecret(hashCtor, secret) {
    var input = hashUtils.convertToBuffer(secret);
    if (input.byteLength > hashCtor.BLOCK_SIZE) {
        var bufferHash = new hashCtor;
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    var buffer = new Uint8Array(hashCtor.BLOCK_SIZE);
    buffer.set(input);
    return buffer;
}

},{"./browserHashUtils":11}],13:[function(require,module,exports){
var hashUtils = require('./browserHashUtils');
var Buffer = require('buffer/').Buffer;

var BLOCK_SIZE = 64;

var DIGEST_LENGTH = 16;

var INIT = [
    0x67452301,
    0xefcdab89,
    0x98badcfe,
    0x10325476,
];

/**
 * @api private
 */
function Md5() {
    this.state = [
        0x67452301,
        0xefcdab89,
        0x98badcfe,
        0x10325476,
    ];
    this.buffer = new DataView(new ArrayBuffer(BLOCK_SIZE));
    this.bufferLength = 0;
    this.bytesHashed = 0;
    this.finished = false;
}

/**
 * @api private
 */
module.exports = exports = Md5;

Md5.BLOCK_SIZE = BLOCK_SIZE;

Md5.prototype.update = function (sourceData) {
    if (hashUtils.isEmptyData(sourceData)) {
        return this;
    } else if (this.finished) {
        throw new Error('Attempted to update an already finished hash.');
    }

    var data = hashUtils.convertToBuffer(sourceData);
    var position = 0;
    var byteLength = data.byteLength;
    this.bytesHashed += byteLength;
    while (byteLength > 0) {
        this.buffer.setUint8(this.bufferLength++, data[position++]);
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE) {
            this.hashBuffer();
            this.bufferLength = 0;
        }
    }

    return this;
};

Md5.prototype.digest = function (encoding) {
    if (!this.finished) {
        var _a = this, buffer = _a.buffer, undecoratedLength = _a.bufferLength, bytesHashed = _a.bytesHashed;
        var bitsHashed = bytesHashed * 8;
        buffer.setUint8(this.bufferLength++, 128);
        // Ensure the final block has enough room for the hashed length
        if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
            for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
                buffer.setUint8(i, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
            buffer.setUint8(i, 0);
        }
        buffer.setUint32(BLOCK_SIZE - 8, bitsHashed >>> 0, true);
        buffer.setUint32(BLOCK_SIZE - 4, Math.floor(bitsHashed / 0x100000000), true);
        this.hashBuffer();
        this.finished = true;
    }
    var out = new DataView(new ArrayBuffer(DIGEST_LENGTH));
    for (var i = 0; i < 4; i++) {
        out.setUint32(i * 4, this.state[i], true);
    }
    var buff = new Buffer(out.buffer, out.byteOffset, out.byteLength);
    return encoding ? buff.toString(encoding) : buff;
};

Md5.prototype.hashBuffer = function () {
    var _a = this, buffer = _a.buffer, state = _a.state;
    var a = state[0], b = state[1], c = state[2], d = state[3];
    a = ff(a, b, c, d, buffer.getUint32(0, true), 7, 0xd76aa478);
    d = ff(d, a, b, c, buffer.getUint32(4, true), 12, 0xe8c7b756);
    c = ff(c, d, a, b, buffer.getUint32(8, true), 17, 0x242070db);
    b = ff(b, c, d, a, buffer.getUint32(12, true), 22, 0xc1bdceee);
    a = ff(a, b, c, d, buffer.getUint32(16, true), 7, 0xf57c0faf);
    d = ff(d, a, b, c, buffer.getUint32(20, true), 12, 0x4787c62a);
    c = ff(c, d, a, b, buffer.getUint32(24, true), 17, 0xa8304613);
    b = ff(b, c, d, a, buffer.getUint32(28, true), 22, 0xfd469501);
    a = ff(a, b, c, d, buffer.getUint32(32, true), 7, 0x698098d8);
    d = ff(d, a, b, c, buffer.getUint32(36, true), 12, 0x8b44f7af);
    c = ff(c, d, a, b, buffer.getUint32(40, true), 17, 0xffff5bb1);
    b = ff(b, c, d, a, buffer.getUint32(44, true), 22, 0x895cd7be);
    a = ff(a, b, c, d, buffer.getUint32(48, true), 7, 0x6b901122);
    d = ff(d, a, b, c, buffer.getUint32(52, true), 12, 0xfd987193);
    c = ff(c, d, a, b, buffer.getUint32(56, true), 17, 0xa679438e);
    b = ff(b, c, d, a, buffer.getUint32(60, true), 22, 0x49b40821);
    a = gg(a, b, c, d, buffer.getUint32(4, true), 5, 0xf61e2562);
    d = gg(d, a, b, c, buffer.getUint32(24, true), 9, 0xc040b340);
    c = gg(c, d, a, b, buffer.getUint32(44, true), 14, 0x265e5a51);
    b = gg(b, c, d, a, buffer.getUint32(0, true), 20, 0xe9b6c7aa);
    a = gg(a, b, c, d, buffer.getUint32(20, true), 5, 0xd62f105d);
    d = gg(d, a, b, c, buffer.getUint32(40, true), 9, 0x02441453);
    c = gg(c, d, a, b, buffer.getUint32(60, true), 14, 0xd8a1e681);
    b = gg(b, c, d, a, buffer.getUint32(16, true), 20, 0xe7d3fbc8);
    a = gg(a, b, c, d, buffer.getUint32(36, true), 5, 0x21e1cde6);
    d = gg(d, a, b, c, buffer.getUint32(56, true), 9, 0xc33707d6);
    c = gg(c, d, a, b, buffer.getUint32(12, true), 14, 0xf4d50d87);
    b = gg(b, c, d, a, buffer.getUint32(32, true), 20, 0x455a14ed);
    a = gg(a, b, c, d, buffer.getUint32(52, true), 5, 0xa9e3e905);
    d = gg(d, a, b, c, buffer.getUint32(8, true), 9, 0xfcefa3f8);
    c = gg(c, d, a, b, buffer.getUint32(28, true), 14, 0x676f02d9);
    b = gg(b, c, d, a, buffer.getUint32(48, true), 20, 0x8d2a4c8a);
    a = hh(a, b, c, d, buffer.getUint32(20, true), 4, 0xfffa3942);
    d = hh(d, a, b, c, buffer.getUint32(32, true), 11, 0x8771f681);
    c = hh(c, d, a, b, buffer.getUint32(44, true), 16, 0x6d9d6122);
    b = hh(b, c, d, a, buffer.getUint32(56, true), 23, 0xfde5380c);
    a = hh(a, b, c, d, buffer.getUint32(4, true), 4, 0xa4beea44);
    d = hh(d, a, b, c, buffer.getUint32(16, true), 11, 0x4bdecfa9);
    c = hh(c, d, a, b, buffer.getUint32(28, true), 16, 0xf6bb4b60);
    b = hh(b, c, d, a, buffer.getUint32(40, true), 23, 0xbebfbc70);
    a = hh(a, b, c, d, buffer.getUint32(52, true), 4, 0x289b7ec6);
    d = hh(d, a, b, c, buffer.getUint32(0, true), 11, 0xeaa127fa);
    c = hh(c, d, a, b, buffer.getUint32(12, true), 16, 0xd4ef3085);
    b = hh(b, c, d, a, buffer.getUint32(24, true), 23, 0x04881d05);
    a = hh(a, b, c, d, buffer.getUint32(36, true), 4, 0xd9d4d039);
    d = hh(d, a, b, c, buffer.getUint32(48, true), 11, 0xe6db99e5);
    c = hh(c, d, a, b, buffer.getUint32(60, true), 16, 0x1fa27cf8);
    b = hh(b, c, d, a, buffer.getUint32(8, true), 23, 0xc4ac5665);
    a = ii(a, b, c, d, buffer.getUint32(0, true), 6, 0xf4292244);
    d = ii(d, a, b, c, buffer.getUint32(28, true), 10, 0x432aff97);
    c = ii(c, d, a, b, buffer.getUint32(56, true), 15, 0xab9423a7);
    b = ii(b, c, d, a, buffer.getUint32(20, true), 21, 0xfc93a039);
    a = ii(a, b, c, d, buffer.getUint32(48, true), 6, 0x655b59c3);
    d = ii(d, a, b, c, buffer.getUint32(12, true), 10, 0x8f0ccc92);
    c = ii(c, d, a, b, buffer.getUint32(40, true), 15, 0xffeff47d);
    b = ii(b, c, d, a, buffer.getUint32(4, true), 21, 0x85845dd1);
    a = ii(a, b, c, d, buffer.getUint32(32, true), 6, 0x6fa87e4f);
    d = ii(d, a, b, c, buffer.getUint32(60, true), 10, 0xfe2ce6e0);
    c = ii(c, d, a, b, buffer.getUint32(24, true), 15, 0xa3014314);
    b = ii(b, c, d, a, buffer.getUint32(52, true), 21, 0x4e0811a1);
    a = ii(a, b, c, d, buffer.getUint32(16, true), 6, 0xf7537e82);
    d = ii(d, a, b, c, buffer.getUint32(44, true), 10, 0xbd3af235);
    c = ii(c, d, a, b, buffer.getUint32(8, true), 15, 0x2ad7d2bb);
    b = ii(b, c, d, a, buffer.getUint32(36, true), 21, 0xeb86d391);
    state[0] = (a + state[0]) & 0xFFFFFFFF;
    state[1] = (b + state[1]) & 0xFFFFFFFF;
    state[2] = (c + state[2]) & 0xFFFFFFFF;
    state[3] = (d + state[3]) & 0xFFFFFFFF;
};

function cmn(q, a, b, x, s, t) {
    a = (((a + q) & 0xFFFFFFFF) + ((x + t) & 0xFFFFFFFF)) & 0xFFFFFFFF;
    return (((a << s) | (a >>> (32 - s))) + b) & 0xFFFFFFFF;
}

function ff(a, b, c, d, x, s, t) {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

},{"./browserHashUtils":11,"buffer/":83}],14:[function(require,module,exports){
var Buffer = require('buffer/').Buffer;
var hashUtils = require('./browserHashUtils');

var BLOCK_SIZE = 64;

var DIGEST_LENGTH = 20;

var KEY = new Uint32Array([
    0x5a827999,
    0x6ed9eba1,
    0x8f1bbcdc | 0,
    0xca62c1d6 | 0
]);

var INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19,
];

var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

/**
 * @api private
 */
function Sha1() {
    this.h0 = 0x67452301;
    this.h1 = 0xEFCDAB89;
    this.h2 = 0x98BADCFE;
    this.h3 = 0x10325476;
    this.h4 = 0xC3D2E1F0;
    // The first 64 bytes (16 words) is the data chunk
    this.block = new Uint32Array(80);
    this.offset = 0;
    this.shift = 24;
    this.totalLength = 0;
}

/**
 * @api private
 */
module.exports = exports = Sha1;

Sha1.BLOCK_SIZE = BLOCK_SIZE;

Sha1.prototype.update = function (data) {
    if (this.finished) {
        throw new Error('Attempted to update an already finished hash.');
    }

    if (hashUtils.isEmptyData(data)) {
        return this;
    }

    data = hashUtils.convertToBuffer(data);

    var length = data.length;
    this.totalLength += length * 8;
    for (var i = 0; i < length; i++) {
        this.write(data[i]);
    }

    return this;
};

Sha1.prototype.write = function write(byte) {
    this.block[this.offset] |= (byte & 0xff) << this.shift;
    if (this.shift) {
        this.shift -= 8;
    } else {
        this.offset++;
        this.shift = 24;
    }

    if (this.offset === 16) this.processBlock();
};

Sha1.prototype.digest = function (encoding) {
    // Pad
    this.write(0x80);
    if (this.offset > 14 || (this.offset === 14 && this.shift < 24)) {
      this.processBlock();
    }
    this.offset = 14;
    this.shift = 24;

    // 64-bit length big-endian
    this.write(0x00); // numbers this big aren't accurate in javascript anyway
    this.write(0x00); // ..So just hard-code to zero.
    this.write(this.totalLength > 0xffffffffff ? this.totalLength / 0x10000000000 : 0x00);
    this.write(this.totalLength > 0xffffffff ? this.totalLength / 0x100000000 : 0x00);
    for (var s = 24; s >= 0; s -= 8) {
        this.write(this.totalLength >> s);
    }
    // The value in state is little-endian rather than big-endian, so flip
    // each word into a new Uint8Array
    var out = new Buffer(DIGEST_LENGTH);
    var outView = new DataView(out.buffer);
    outView.setUint32(0, this.h0, false);
    outView.setUint32(4, this.h1, false);
    outView.setUint32(8, this.h2, false);
    outView.setUint32(12, this.h3, false);
    outView.setUint32(16, this.h4, false);

    return encoding ? out.toString(encoding) : out;
};

Sha1.prototype.processBlock = function processBlock() {
    // Extend the sixteen 32-bit words into eighty 32-bit words:
    for (var i = 16; i < 80; i++) {
      var w = this.block[i - 3] ^ this.block[i - 8] ^ this.block[i - 14] ^ this.block[i - 16];
      this.block[i] = (w << 1) | (w >>> 31);
    }

    // Initialize hash value for this chunk:
    var a = this.h0;
    var b = this.h1;
    var c = this.h2;
    var d = this.h3;
    var e = this.h4;
    var f, k;

    // Main loop:
    for (i = 0; i < 80; i++) {
      if (i < 20) {
        f = d ^ (b & (c ^ d));
        k = 0x5A827999;
      }
      else if (i < 40) {
        f = b ^ c ^ d;
        k = 0x6ED9EBA1;
      }
      else if (i < 60) {
        f = (b & c) | (d & (b | c));
        k = 0x8F1BBCDC;
      }
      else {
        f = b ^ c ^ d;
        k = 0xCA62C1D6;
      }
      var temp = (a << 5 | a >>> 27) + f + e + k + (this.block[i]|0);
      e = d;
      d = c;
      c = (b << 30 | b >>> 2);
      b = a;
      a = temp;
    }

    // Add this chunk's hash to result so far:
    this.h0 = (this.h0 + a) | 0;
    this.h1 = (this.h1 + b) | 0;
    this.h2 = (this.h2 + c) | 0;
    this.h3 = (this.h3 + d) | 0;
    this.h4 = (this.h4 + e) | 0;

    // The block is now reusable.
    this.offset = 0;
    for (i = 0; i < 16; i++) {
        this.block[i] = 0;
    }
};

},{"./browserHashUtils":11,"buffer/":83}],15:[function(require,module,exports){
var Buffer = require('buffer/').Buffer;
var hashUtils = require('./browserHashUtils');

var BLOCK_SIZE = 64;

var DIGEST_LENGTH = 32;

var KEY = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);

var INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19,
];

var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

/**
 * @private
 */
function Sha256() {
    this.state = [
        0x6a09e667,
        0xbb67ae85,
        0x3c6ef372,
        0xa54ff53a,
        0x510e527f,
        0x9b05688c,
        0x1f83d9ab,
        0x5be0cd19,
    ];
    this.temp = new Int32Array(64);
    this.buffer = new Uint8Array(64);
    this.bufferLength = 0;
    this.bytesHashed = 0;
    /**
     * @private
     */
    this.finished = false;
}

/**
 * @api private
 */
module.exports = exports = Sha256;

Sha256.BLOCK_SIZE = BLOCK_SIZE;

Sha256.prototype.update = function (data) {
    if (this.finished) {
        throw new Error('Attempted to update an already finished hash.');
    }

    if (hashUtils.isEmptyData(data)) {
        return this;
    }

    data = hashUtils.convertToBuffer(data);

    var position = 0;
    var byteLength = data.byteLength;
    this.bytesHashed += byteLength;
    if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
        throw new Error('Cannot hash more than 2^53 - 1 bits');
    }

    while (byteLength > 0) {
        this.buffer[this.bufferLength++] = data[position++];
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE) {
            this.hashBuffer();
            this.bufferLength = 0;
        }
    }

    return this;
};

Sha256.prototype.digest = function (encoding) {
    if (!this.finished) {
        var bitsHashed = this.bytesHashed * 8;
        var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        var undecoratedLength = this.bufferLength;
        bufferView.setUint8(this.bufferLength++, 0x80);
        // Ensure the final block has enough room for the hashed length
        if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
            for (var i = this.bufferLength; i < BLOCK_SIZE; i++) {
                bufferView.setUint8(i, 0);
            }
            this.hashBuffer();
            this.bufferLength = 0;
        }
        for (var i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
            bufferView.setUint8(i, 0);
        }
        bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);
        bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
        this.hashBuffer();
        this.finished = true;
    }
    // The value in state is little-endian rather than big-endian, so flip
    // each word into a new Uint8Array
    var out = new Buffer(DIGEST_LENGTH);
    for (var i = 0; i < 8; i++) {
        out[i * 4] = (this.state[i] >>> 24) & 0xff;
        out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
        out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
        out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
    }
    return encoding ? out.toString(encoding) : out;
};

Sha256.prototype.hashBuffer = function () {
    var _a = this,
        buffer = _a.buffer,
        state = _a.state;
    var state0 = state[0],
        state1 = state[1],
        state2 = state[2],
        state3 = state[3],
        state4 = state[4],
        state5 = state[5],
        state6 = state[6],
        state7 = state[7];
    for (var i = 0; i < BLOCK_SIZE; i++) {
        if (i < 16) {
            this.temp[i] = (((buffer[i * 4] & 0xff) << 24) |
                ((buffer[(i * 4) + 1] & 0xff) << 16) |
                ((buffer[(i * 4) + 2] & 0xff) << 8) |
                (buffer[(i * 4) + 3] & 0xff));
        }
        else {
            var u = this.temp[i - 2];
            var t1_1 = (u >>> 17 | u << 15) ^
                (u >>> 19 | u << 13) ^
                (u >>> 10);
            u = this.temp[i - 15];
            var t2_1 = (u >>> 7 | u << 25) ^
                (u >>> 18 | u << 14) ^
                (u >>> 3);
            this.temp[i] = (t1_1 + this.temp[i - 7] | 0) +
                (t2_1 + this.temp[i - 16] | 0);
        }
        var t1 = (((((state4 >>> 6 | state4 << 26) ^
            (state4 >>> 11 | state4 << 21) ^
            (state4 >>> 25 | state4 << 7))
            + ((state4 & state5) ^ (~state4 & state6))) | 0)
            + ((state7 + ((KEY[i] + this.temp[i]) | 0)) | 0)) | 0;
        var t2 = (((state0 >>> 2 | state0 << 30) ^
            (state0 >>> 13 | state0 << 19) ^
            (state0 >>> 22 | state0 << 10)) + ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) | 0;
        state7 = state6;
        state6 = state5;
        state5 = state4;
        state4 = (state3 + t1) | 0;
        state3 = state2;
        state2 = state1;
        state1 = state0;
        state0 = (t1 + t2) | 0;
    }
    state[0] += state0;
    state[1] += state1;
    state[2] += state2;
    state[3] += state3;
    state[4] += state4;
    state[5] += state5;
    state[6] += state6;
    state[7] += state7;
};

},{"./browserHashUtils":11,"buffer/":83}],16:[function(require,module,exports){
(function (process){
var util = require('./util');

// browser specific modules
util.crypto.lib = require('./browserCryptoLib');
util.Buffer = require('buffer/').Buffer;
util.url = require('url/');
util.querystring = require('querystring/');
util.realClock = require('./realclock/browserClock');
util.environment = 'js';
util.createEventStream = require('./event-stream/buffered-create-event-stream').createEventStream;
util.isBrowser = function() { return true; };
util.isNode = function() { return false; };

var AWS = require('./core');

/**
 * @api private
 */
module.exports = AWS;

require('./credentials');
require('./credentials/credential_provider_chain');
require('./credentials/temporary_credentials');
require('./credentials/chainable_temporary_credentials');
require('./credentials/web_identity_credentials');
require('./credentials/cognito_identity_credentials');
require('./credentials/saml_credentials');

// Load the DOMParser XML parser
AWS.XML.Parser = require('./xml/browser_parser');

// Load the XHR HttpClient
require('./http/xhr');

if (typeof process === 'undefined') {
  var process = {
    browser: true
  };
}

}).call(this,require('_process'))
},{"./browserCryptoLib":10,"./core":18,"./credentials":19,"./credentials/chainable_temporary_credentials":20,"./credentials/cognito_identity_credentials":21,"./credentials/credential_provider_chain":22,"./credentials/saml_credentials":23,"./credentials/temporary_credentials":24,"./credentials/web_identity_credentials":25,"./event-stream/buffered-create-event-stream":27,"./http/xhr":35,"./realclock/browserClock":52,"./util":71,"./xml/browser_parser":72,"_process":87,"buffer/":83,"querystring/":94,"url/":96}],17:[function(require,module,exports){
var AWS = require('./core');
require('./credentials');
require('./credentials/credential_provider_chain');
var PromisesDependency;

/**
 * The main configuration class used by all service objects to set
 * the region, credentials, and other options for requests.
 *
 * By default, credentials and region settings are left unconfigured.
 * This should be configured by the application before using any
 * AWS service APIs.
 *
 * In order to set global configuration options, properties should
 * be assigned to the global {AWS.config} object.
 *
 * @see AWS.config
 *
 * @!group General Configuration Options
 *
 * @!attribute credentials
 *   @return [AWS.Credentials] the AWS credentials to sign requests with.
 *
 * @!attribute region
 *   @example Set the global region setting to us-west-2
 *     AWS.config.update({region: 'us-west-2'});
 *   @return [AWS.Credentials] The region to send service requests to.
 *   @see http://docs.amazonwebservices.com/general/latest/gr/rande.html
 *     A list of available endpoints for each AWS service
 *
 * @!attribute maxRetries
 *   @return [Integer] the maximum amount of retries to perform for a
 *     service request. By default this value is calculated by the specific
 *     service object that the request is being made to.
 *
 * @!attribute maxRedirects
 *   @return [Integer] the maximum amount of redirects to follow for a
 *     service request. Defaults to 10.
 *
 * @!attribute paramValidation
 *   @return [Boolean|map] whether input parameters should be validated against
 *     the operation description before sending the request. Defaults to true.
 *     Pass a map to enable any of the following specific validation features:
 *
 *     * **min** [Boolean] &mdash; Validates that a value meets the min
 *       constraint. This is enabled by default when paramValidation is set
 *       to `true`.
 *     * **max** [Boolean] &mdash; Validates that a value meets the max
 *       constraint.
 *     * **pattern** [Boolean] &mdash; Validates that a string value matches a
 *       regular expression.
 *     * **enum** [Boolean] &mdash; Validates that a string value matches one
 *       of the allowable enum values.
 *
 * @!attribute computeChecksums
 *   @return [Boolean] whether to compute checksums for payload bodies when
 *     the service accepts it (currently supported in S3 only).
 *
 * @!attribute convertResponseTypes
 *   @return [Boolean] whether types are converted when parsing response data.
 *     Currently only supported for JSON based services. Turning this off may
 *     improve performance on large response payloads. Defaults to `true`.
 *
 * @!attribute correctClockSkew
 *   @return [Boolean] whether to apply a clock skew correction and retry
 *     requests that fail because of an skewed client clock. Defaults to
 *     `false`.
 *
 * @!attribute sslEnabled
 *   @return [Boolean] whether SSL is enabled for requests
 *
 * @!attribute s3ForcePathStyle
 *   @return [Boolean] whether to force path style URLs for S3 objects
 *
 * @!attribute s3BucketEndpoint
 *   @note Setting this configuration option requires an `endpoint` to be
 *     provided explicitly to the service constructor.
 *   @return [Boolean] whether the provided endpoint addresses an individual
 *     bucket (false if it addresses the root API endpoint).
 *
 * @!attribute s3DisableBodySigning
 *   @return [Boolean] whether to disable S3 body signing when using signature version `v4`.
 *     Body signing can only be disabled when using https. Defaults to `true`.
 *
 * @!attribute useAccelerateEndpoint
 *   @note This configuration option is only compatible with S3 while accessing
 *     dns-compatible buckets.
 *   @return [Boolean] Whether to use the Accelerate endpoint with the S3 service.
 *     Defaults to `false`.
 *
 * @!attribute retryDelayOptions
 *   @example Set the base retry delay for all services to 300 ms
 *     AWS.config.update({retryDelayOptions: {base: 300}});
 *     // Delays with maxRetries = 3: 300, 600, 1200
 *   @example Set a custom backoff function to provide delay values on retries
 *     AWS.config.update({retryDelayOptions: {customBackoff: function(retryCount) {
 *       // returns delay in ms
 *     }}});
 *   @return [map] A set of options to configure the retry delay on retryable errors.
 *     Currently supported options are:
 *
 *     * **base** [Integer] &mdash; The base number of milliseconds to use in the
 *       exponential backoff for operation retries. Defaults to 100 ms for all services except
 *       DynamoDB, where it defaults to 50ms.
 *     * **customBackoff ** [function] &mdash; A custom function that accepts a retry count
 *       and returns the amount of time to delay in milliseconds. The `base` option will be
 *       ignored if this option is supplied.
 *
 * @!attribute httpOptions
 *   @return [map] A set of options to pass to the low-level HTTP request.
 *     Currently supported options are:
 *
 *     * **proxy** [String] &mdash; the URL to proxy requests through
 *     * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
 *       HTTP requests with. Used for connection pooling. Note that for
 *       SSL connections, a special Agent object is used in order to enable
 *       peer certificate verification. This feature is only supported in the
 *       Node.js environment.
 *     * **connectTimeout** [Integer] &mdash; Sets the socket to timeout after
 *       failing to establish a connection with the server after
 *       `connectTimeout` milliseconds. This timeout has no effect once a socket
 *       connection has been established.
 *     * **timeout** [Integer] &mdash; Sets the socket to timeout after timeout
 *       milliseconds of inactivity on the socket. Defaults to two minutes
 *       (120000)
 *     * **xhrAsync** [Boolean] &mdash; Whether the SDK will send asynchronous
 *       HTTP requests. Used in the browser environment only. Set to false to
 *       send requests synchronously. Defaults to true (async on).
 *     * **xhrWithCredentials** [Boolean] &mdash; Sets the "withCredentials"
 *       property of an XMLHttpRequest object. Used in the browser environment
 *       only. Defaults to false.
 * @!attribute logger
 *   @return [#write,#log] an object that responds to .write() (like a stream)
 *     or .log() (like the console object) in order to log information about
 *     requests
 *
 * @!attribute systemClockOffset
 *   @return [Number] an offset value in milliseconds to apply to all signing
 *     times. Use this to compensate for clock skew when your system may be
 *     out of sync with the service time. Note that this configuration option
 *     can only be applied to the global `AWS.config` object and cannot be
 *     overridden in service-specific configuration. Defaults to 0 milliseconds.
 *
 * @!attribute signatureVersion
 *   @return [String] the signature version to sign requests with (overriding
 *     the API configuration). Possible values are: 'v2', 'v3', 'v4'.
 *
 * @!attribute signatureCache
 *   @return [Boolean] whether the signature to sign requests with (overriding
 *     the API configuration) is cached. Only applies to the signature version 'v4'.
 *     Defaults to `true`.
 *
 * @!attribute endpointDiscoveryEnabled
 *   @return [Boolean] whether to enable endpoint discovery for operations that
 *     allow optionally using an endpoint returned by the service.
 *     Defaults to 'false'
 *
 * @!attribute endpointCacheSize
 *   @return [Number] the size of the global cache storing endpoints from endpoint
 *     discovery operations. Once endpoint cache is created, updating this setting
 *     cannot change existing cache size.
 *     Defaults to 1000
 *
 * @!attribute hostPrefixEnabled
 *   @return [Boolean] whether to marshal request parameters to the prefix of
 *     hostname. Defaults to `true`.
 *
 * @!attribute stsRegionalEndpoints
 *   @return ['legacy'|'regional'] whether to send sts request to global endpoints or
 *     regional endpoints.
 *     Defaults to 'legacy'
 */
AWS.Config = AWS.util.inherit({
  /**
   * @!endgroup
   */

  /**
   * Creates a new configuration object. This is the object that passes
   * option data along to service requests, including credentials, security,
   * region information, and some service specific settings.
   *
   * @example Creating a new configuration object with credentials and region
   *   var config = new AWS.Config({
   *     accessKeyId: 'AKID', secretAccessKey: 'SECRET', region: 'us-west-2'
   *   });
   * @option options accessKeyId [String] your AWS access key ID.
   * @option options secretAccessKey [String] your AWS secret access key.
   * @option options sessionToken [AWS.Credentials] the optional AWS
   *   session token to sign requests with.
   * @option options credentials [AWS.Credentials] the AWS credentials
   *   to sign requests with. You can either specify this object, or
   *   specify the accessKeyId and secretAccessKey options directly.
   * @option options credentialProvider [AWS.CredentialProviderChain] the
   *   provider chain used to resolve credentials if no static `credentials`
   *   property is set.
   * @option options region [String] the region to send service requests to.
   *   See {region} for more information.
   * @option options maxRetries [Integer] the maximum amount of retries to
   *   attempt with a request. See {maxRetries} for more information.
   * @option options maxRedirects [Integer] the maximum amount of redirects to
   *   follow with a request. See {maxRedirects} for more information.
   * @option options sslEnabled [Boolean] whether to enable SSL for
   *   requests.
   * @option options paramValidation [Boolean|map] whether input parameters
   *   should be validated against the operation description before sending
   *   the request. Defaults to true. Pass a map to enable any of the
   *   following specific validation features:
   *
   *   * **min** [Boolean] &mdash; Validates that a value meets the min
   *     constraint. This is enabled by default when paramValidation is set
   *     to `true`.
   *   * **max** [Boolean] &mdash; Validates that a value meets the max
   *     constraint.
   *   * **pattern** [Boolean] &mdash; Validates that a string value matches a
   *     regular expression.
   *   * **enum** [Boolean] &mdash; Validates that a string value matches one
   *     of the allowable enum values.
   * @option options computeChecksums [Boolean] whether to compute checksums
   *   for payload bodies when the service accepts it (currently supported
   *   in S3 only)
   * @option options convertResponseTypes [Boolean] whether types are converted
   *     when parsing response data. Currently only supported for JSON based
   *     services. Turning this off may improve performance on large response
   *     payloads. Defaults to `true`.
   * @option options correctClockSkew [Boolean] whether to apply a clock skew
   *     correction and retry requests that fail because of an skewed client
   *     clock. Defaults to `false`.
   * @option options s3ForcePathStyle [Boolean] whether to force path
   *   style URLs for S3 objects.
   * @option options s3BucketEndpoint [Boolean] whether the provided endpoint
   *   addresses an individual bucket (false if it addresses the root API
   *   endpoint). Note that setting this configuration option requires an
   *   `endpoint` to be provided explicitly to the service constructor.
   * @option options s3DisableBodySigning [Boolean] whether S3 body signing
   *   should be disabled when using signature version `v4`. Body signing
   *   can only be disabled when using https. Defaults to `true`.
   *
   * @option options retryDelayOptions [map] A set of options to configure
   *   the retry delay on retryable errors. Currently supported options are:
   *
   *   * **base** [Integer] &mdash; The base number of milliseconds to use in the
   *     exponential backoff for operation retries. Defaults to 100 ms for all
   *     services except DynamoDB, where it defaults to 50ms.
   *   * **customBackoff ** [function] &mdash; A custom function that accepts a retry count
   *     and returns the amount of time to delay in milliseconds. The `base` option will be
   *     ignored if this option is supplied.
   * @option options httpOptions [map] A set of options to pass to the low-level
   *   HTTP request. Currently supported options are:
   *
   *   * **proxy** [String] &mdash; the URL to proxy requests through
   *   * **agent** [http.Agent, https.Agent] &mdash; the Agent object to perform
   *     HTTP requests with. Used for connection pooling. Defaults to the global
   *     agent (`http.globalAgent`) for non-SSL connections. Note that for
   *     SSL connections, a special Agent object is used in order to enable
   *     peer certificate verification. This feature is only available in the
   *     Node.js environment.
   *   * **connectTimeout** [Integer] &mdash; Sets the socket to timeout after
   *     failing to establish a connection with the server after
   *     `connectTimeout` milliseconds. This timeout has no effect once a socket
   *     connection has been established.
   *   * **timeout** [Integer] &mdash; Sets the socket to timeout after timeout
   *     milliseconds of inactivity on the socket. Defaults to two minutes
   *     (120000).
   *   * **xhrAsync** [Boolean] &mdash; Whether the SDK will send asynchronous
   *     HTTP requests. Used in the browser environment only. Set to false to
   *     send requests synchronously. Defaults to true (async on).
   *   * **xhrWithCredentials** [Boolean] &mdash; Sets the "withCredentials"
   *     property of an XMLHttpRequest object. Used in the browser environment
   *     only. Defaults to false.
   * @option options apiVersion [String, Date] a String in YYYY-MM-DD format
   *   (or a date) that represents the latest possible API version that can be
   *   used in all services (unless overridden by `apiVersions`). Specify
   *   'latest' to use the latest possible version.
   * @option options apiVersions [map<String, String|Date>] a map of service
   *   identifiers (the lowercase service class name) with the API version to
   *   use when instantiating a service. Specify 'latest' for each individual
   *   that can use the latest available version.
   * @option options logger [#write,#log] an object that responds to .write()
   *   (like a stream) or .log() (like the console object) in order to log
   *   information about requests
   * @option options systemClockOffset [Number] an offset value in milliseconds
   *   to apply to all signing times. Use this to compensate for clock skew
   *   when your system may be out of sync with the service time. Note that
   *   this configuration option can only be applied to the global `AWS.config`
   *   object and cannot be overridden in service-specific configuration.
   *   Defaults to 0 milliseconds.
   * @option options signatureVersion [String] the signature version to sign
   *   requests with (overriding the API configuration). Possible values are:
   *   'v2', 'v3', 'v4'.
   * @option options signatureCache [Boolean] whether the signature to sign
   *   requests with (overriding the API configuration) is cached. Only applies
   *   to the signature version 'v4'. Defaults to `true`.
   * @option options dynamoDbCrc32 [Boolean] whether to validate the CRC32
   *   checksum of HTTP response bodies returned by DynamoDB. Default: `true`.
   * @option options useAccelerateEndpoint [Boolean] Whether to use the
   *   S3 Transfer Acceleration endpoint with the S3 service. Default: `false`.
   * @option options clientSideMonitoring [Boolean] whether to collect and
   *   publish this client's performance metrics of all its API requests.
   * @option options endpointDiscoveryEnabled [Boolean] whether to enable endpoint
   *   discovery for operations that allow optionally using an endpoint returned by
   *   the service.
   *   Defaults to 'false'
   * @option options endpointCacheSize [Number] the size of the global cache storing
   *   endpoints from endpoint discovery operations. Once endpoint cache is created,
   *   updating this setting cannot change existing cache size.
   *   Defaults to 1000
   * @option options hostPrefixEnabled [Boolean] whether to marshal request
   *   parameters to the prefix of hostname.
   *   Defaults to `true`.
   * @option options stsRegionalEndpoints ['legacy'|'regional'] whether to send sts request
   *   to global endpoints or regional endpoints.
   *   Defaults to 'legacy'.
   */
  constructor: function Config(options) {
    if (options === undefined) options = {};
    options = this.extractCredentials(options);

    AWS.util.each.call(this, this.keys, function (key, value) {
      this.set(key, options[key], value);
    });
  },

  /**
   * @!group Managing Credentials
   */

  /**
   * Loads credentials from the configuration object. This is used internally
   * by the SDK to ensure that refreshable {Credentials} objects are properly
   * refreshed and loaded when sending a request. If you want to ensure that
   * your credentials are loaded prior to a request, you can use this method
   * directly to provide accurate credential data stored in the object.
   *
   * @note If you configure the SDK with static or environment credentials,
   *   the credential data should already be present in {credentials} attribute.
   *   This method is primarily necessary to load credentials from asynchronous
   *   sources, or sources that can refresh credentials periodically.
   * @example Getting your access key
   *   AWS.config.getCredentials(function(err) {
   *     if (err) console.log(err.stack); // credentials not loaded
   *     else console.log("Access Key:", AWS.config.credentials.accessKeyId);
   *   })
   * @callback callback function(err)
   *   Called when the {credentials} have been properly set on the configuration
   *   object.
   *
   *   @param err [Error] if this is set, credentials were not successfully
   *     loaded and this error provides information why.
   * @see credentials
   * @see Credentials
   */
  getCredentials: function getCredentials(callback) {
    var self = this;

    function finish(err) {
      callback(err, err ? null : self.credentials);
    }

    function credError(msg, err) {
      return new AWS.util.error(err || new Error(), {
        code: 'CredentialsError',
        message: msg,
        name: 'CredentialsError'
      });
    }

    function getAsyncCredentials() {
      self.credentials.get(function(err) {
        if (err) {
          var msg = 'Could not load credentials from ' +
            self.credentials.constructor.name;
          err = credError(msg, err);
        }
        finish(err);
      });
    }

    function getStaticCredentials() {
      var err = null;
      if (!self.credentials.accessKeyId || !self.credentials.secretAccessKey) {
        err = credError('Missing credentials');
      }
      finish(err);
    }

    if (self.credentials) {
      if (typeof self.credentials.get === 'function') {
        getAsyncCredentials();
      } else { // static credentials
        getStaticCredentials();
      }
    } else if (self.credentialProvider) {
      self.credentialProvider.resolve(function(err, creds) {
        if (err) {
          err = credError('Could not load credentials from any providers', err);
        }
        self.credentials = creds;
        finish(err);
      });
    } else {
      finish(credError('No credentials to load'));
    }
  },

  /**
   * @!group Loading and Setting Configuration Options
   */

  /**
   * @overload update(options, allowUnknownKeys = false)
   *   Updates the current configuration object with new options.
   *
   *   @example Update maxRetries property of a configuration object
   *     config.update({maxRetries: 10});
   *   @param [Object] options a map of option keys and values.
   *   @param [Boolean] allowUnknownKeys whether unknown keys can be set on
   *     the configuration object. Defaults to `false`.
   *   @see constructor
   */
  update: function update(options, allowUnknownKeys) {
    allowUnknownKeys = allowUnknownKeys || false;
    options = this.extractCredentials(options);
    AWS.util.each.call(this, options, function (key, value) {
      if (allowUnknownKeys || Object.prototype.hasOwnProperty.call(this.keys, key) ||
          AWS.Service.hasService(key)) {
        this.set(key, value);
      }
    });
  },

  /**
   * Loads configuration data from a JSON file into this config object.
   * @note Loading configuration will reset all existing configuration
   *   on the object.
   * @!macro nobrowser
   * @param path [String] the path relative to your process's current
   *    working directory to load configuration from.
   * @return [AWS.Config] the same configuration object
   */
  loadFromPath: function loadFromPath(path) {
    this.clear();

    var options = JSON.parse(AWS.util.readFileSync(path));
    var fileSystemCreds = new AWS.FileSystemCredentials(path);
    var chain = new AWS.CredentialProviderChain();
    chain.providers.unshift(fileSystemCreds);
    chain.resolve(function (err, creds) {
      if (err) throw err;
      else options.credentials = creds;
    });

    this.constructor(options);

    return this;
  },

  /**
   * Clears configuration data on this object
   *
   * @api private
   */
  clear: function clear() {
    /*jshint forin:false */
    AWS.util.each.call(this, this.keys, function (key) {
      delete this[key];
    });

    // reset credential provider
    this.set('credentials', undefined);
    this.set('credentialProvider', undefined);
  },

  /**
   * Sets a property on the configuration object, allowing for a
   * default value
   * @api private
   */
  set: function set(property, value, defaultValue) {
    if (value === undefined) {
      if (defaultValue === undefined) {
        defaultValue = this.keys[property];
      }
      if (typeof defaultValue === 'function') {
        this[property] = defaultValue.call(this);
      } else {
        this[property] = defaultValue;
      }
    } else if (property === 'httpOptions' && this[property]) {
      // deep merge httpOptions
      this[property] = AWS.util.merge(this[property], value);
    } else {
      this[property] = value;
    }
  },

  /**
   * All of the keys with their default values.
   *
   * @constant
   * @api private
   */
  keys: {
    credentials: null,
    credentialProvider: null,
    region: null,
    logger: null,
    apiVersions: {},
    apiVersion: null,
    endpoint: undefined,
    httpOptions: {
      timeout: 120000
    },
    maxRetries: undefined,
    maxRedirects: 10,
    paramValidation: true,
    sslEnabled: true,
    s3ForcePathStyle: false,
    s3BucketEndpoint: false,
    s3DisableBodySigning: true,
    computeChecksums: true,
    convertResponseTypes: true,
    correctClockSkew: false,
    customUserAgent: null,
    dynamoDbCrc32: true,
    systemClockOffset: 0,
    signatureVersion: null,
    signatureCache: true,
    retryDelayOptions: {},
    useAccelerateEndpoint: false,
    clientSideMonitoring: false,
    endpointDiscoveryEnabled: false,
    endpointCacheSize: 1000,
    hostPrefixEnabled: true,
    stsRegionalEndpoints: null
  },

  /**
   * Extracts accessKeyId, secretAccessKey and sessionToken
   * from a configuration hash.
   *
   * @api private
   */
  extractCredentials: function extractCredentials(options) {
    if (options.accessKeyId && options.secretAccessKey) {
      options = AWS.util.copy(options);
      options.credentials = new AWS.Credentials(options);
    }
    return options;
  },

  /**
   * Sets the promise dependency the SDK will use wherever Promises are returned.
   * Passing `null` will force the SDK to use native Promises if they are available.
   * If native Promises are not available, passing `null` will have no effect.
   * @param [Constructor] dep A reference to a Promise constructor
   */
  setPromisesDependency: function setPromisesDependency(dep) {
    PromisesDependency = dep;
    // if null was passed in, we should try to use native promises
    if (dep === null && typeof Promise === 'function') {
      PromisesDependency = Promise;
    }
    var constructors = [AWS.Request, AWS.Credentials, AWS.CredentialProviderChain];
    if (AWS.S3) {
      constructors.push(AWS.S3);
      if (AWS.S3.ManagedUpload) {
        constructors.push(AWS.S3.ManagedUpload);
      }
    }
    AWS.util.addPromises(constructors, PromisesDependency);
  },

  /**
   * Gets the promise dependency set by `AWS.config.setPromisesDependency`.
   */
  getPromisesDependency: function getPromisesDependency() {
    return PromisesDependency;
  }
});

/**
 * @return [AWS.Config] The global configuration object singleton instance
 * @readonly
 * @see AWS.Config
 */
AWS.config = new AWS.Config();

},{"./core":18,"./credentials":19,"./credentials/credential_provider_chain":22}],18:[function(require,module,exports){
/**
 * The main AWS namespace
 */
var AWS = { util: require('./util') };

/**
 * @api private
 * @!macro [new] nobrowser
 *   @note This feature is not supported in the browser environment of the SDK.
 */
var _hidden = {}; _hidden.toString(); // hack to parse macro

/**
 * @api private
 */
module.exports = AWS;

AWS.util.update(AWS, {

  /**
   * @constant
   */
  VERSION: '2.553.0',

  /**
   * @api private
   */
  Signers: {},

  /**
   * @api private
   */
  Protocol: {
    Json: require('./protocol/json'),
    Query: require('./protocol/query'),
    Rest: require('./protocol/rest'),
    RestJson: require('./protocol/rest_json'),
    RestXml: require('./protocol/rest_xml')
  },

  /**
   * @api private
   */
  XML: {
    Builder: require('./xml/builder'),
    Parser: null // conditionally set based on environment
  },

  /**
   * @api private
   */
  JSON: {
    Builder: require('./json/builder'),
    Parser: require('./json/parser')
  },

  /**
   * @api private
   */
  Model: {
    Api: require('./model/api'),
    Operation: require('./model/operation'),
    Shape: require('./model/shape'),
    Paginator: require('./model/paginator'),
    ResourceWaiter: require('./model/resource_waiter')
  },

  /**
   * @api private
   */
  apiLoader: require('./api_loader'),

  /**
   * @api private
   */
  EndpointCache: require('../vendor/endpoint-cache').EndpointCache
});
require('./sequential_executor');
require('./service');
require('./config');
require('./http');
require('./event_listeners');
require('./request');
require('./response');
require('./resource_waiter');
require('./signers/request_signer');
require('./param_validator');

/**
 * @readonly
 * @return [AWS.SequentialExecutor] a collection of global event listeners that
 *   are attached to every sent request.
 * @see AWS.Request AWS.Request for a list of events to listen for
 * @example Logging the time taken to send a request
 *   AWS.events.on('send', function startSend(resp) {
 *     resp.startTime = new Date().getTime();
 *   }).on('complete', function calculateTime(resp) {
 *     var time = (new Date().getTime() - resp.startTime) / 1000;
 *     console.log('Request took ' + time + ' seconds');
 *   });
 *
 *   new AWS.S3().listBuckets(); // prints 'Request took 0.285 seconds'
 */
AWS.events = new AWS.SequentialExecutor();

//create endpoint cache lazily
AWS.util.memoizedProperty(AWS, 'endpointCache', function() {
  return new AWS.EndpointCache(AWS.config.endpointCacheSize);
}, true);

},{"../vendor/endpoint-cache":105,"./api_loader":9,"./config":17,"./event_listeners":33,"./http":34,"./json/builder":36,"./json/parser":37,"./model/api":38,"./model/operation":40,"./model/paginator":41,"./model/resource_waiter":42,"./model/shape":43,"./param_validator":44,"./protocol/json":46,"./protocol/query":47,"./protocol/rest":48,"./protocol/rest_json":49,"./protocol/rest_xml":50,"./request":55,"./resource_waiter":56,"./response":57,"./sequential_executor":58,"./service":59,"./signers/request_signer":63,"./util":71,"./xml/builder":73}],19:[function(require,module,exports){
var AWS = require('./core');

/**
 * Represents your AWS security credentials, specifically the
 * {accessKeyId}, {secretAccessKey}, and optional {sessionToken}.
 * Creating a `Credentials` object allows you to pass around your
 * security information to configuration and service objects.
 *
 * Note that this class typically does not need to be constructed manually,
 * as the {AWS.Config} and {AWS.Service} classes both accept simple
 * options hashes with the three keys. These structures will be converted
 * into Credentials objects automatically.
 *
 * ## Expiring and Refreshing Credentials
 *
 * Occasionally credentials can expire in the middle of a long-running
 * application. In this case, the SDK will automatically attempt to
 * refresh the credentials from the storage location if the Credentials
 * class implements the {refresh} method.
 *
 * If you are implementing a credential storage location, you
 * will want to create a subclass of the `Credentials` class and
 * override the {refresh} method. This method allows credentials to be
 * retrieved from the backing store, be it a file system, database, or
 * some network storage. The method should reset the credential attributes
 * on the object.
 *
 * @!attribute expired
 *   @return [Boolean] whether the credentials have been expired and
 *     require a refresh. Used in conjunction with {expireTime}.
 * @!attribute expireTime
 *   @return [Date] a time when credentials should be considered expired. Used
 *     in conjunction with {expired}.
 * @!attribute accessKeyId
 *   @return [String] the AWS access key ID
 * @!attribute secretAccessKey
 *   @return [String] the AWS secret access key
 * @!attribute sessionToken
 *   @return [String] an optional AWS session token
 */
AWS.Credentials = AWS.util.inherit({
  /**
   * A credentials object can be created using positional arguments or an options
   * hash.
   *
   * @overload AWS.Credentials(accessKeyId, secretAccessKey, sessionToken=null)
   *   Creates a Credentials object with a given set of credential information
   *   as positional arguments.
   *   @param accessKeyId [String] the AWS access key ID
   *   @param secretAccessKey [String] the AWS secret access key
   *   @param sessionToken [String] the optional AWS session token
   *   @example Create a credentials object with AWS credentials
   *     var creds = new AWS.Credentials('akid', 'secret', 'session');
   * @overload AWS.Credentials(options)
   *   Creates a Credentials object with a given set of credential information
   *   as an options hash.
   *   @option options accessKeyId [String] the AWS access key ID
   *   @option options secretAccessKey [String] the AWS secret access key
   *   @option options sessionToken [String] the optional AWS session token
   *   @example Create a credentials object with AWS credentials
   *     var creds = new AWS.Credentials({
   *       accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'session'
   *     });
   */
  constructor: function Credentials() {
    // hide secretAccessKey from being displayed with util.inspect
    AWS.util.hideProperties(this, ['secretAccessKey']);

    this.expired = false;
    this.expireTime = null;
    this.refreshCallbacks = [];
    if (arguments.length === 1 && typeof arguments[0] === 'object') {
      var creds = arguments[0].credentials || arguments[0];
      this.accessKeyId = creds.accessKeyId;
      this.secretAccessKey = creds.secretAccessKey;
      this.sessionToken = creds.sessionToken;
    } else {
      this.accessKeyId = arguments[0];
      this.secretAccessKey = arguments[1];
      this.sessionToken = arguments[2];
    }
  },

  /**
   * @return [Integer] the number of seconds before {expireTime} during which
   *   the credentials will be considered expired.
   */
  expiryWindow: 15,

  /**
   * @return [Boolean] whether the credentials object should call {refresh}
   * @note Subclasses should override this method to provide custom refresh
   *   logic.
   */
  needsRefresh: function needsRefresh() {
    var currentTime = AWS.util.date.getDate().getTime();
    var adjustedTime = new Date(currentTime + this.expiryWindow * 1000);

    if (this.expireTime && adjustedTime > this.expireTime) {
      return true;
    } else {
      return this.expired || !this.accessKeyId || !this.secretAccessKey;
    }
  },

  /**
   * Gets the existing credentials, refreshing them if they are not yet loaded
   * or have expired. Users should call this method before using {refresh},
   * as this will not attempt to reload credentials when they are already
   * loaded into the object.
   *
   * @callback callback function(err)
   *   When this callback is called with no error, it means either credentials
   *   do not need to be refreshed or refreshed credentials information has
   *   been loaded into the object (as the `accessKeyId`, `secretAccessKey`,
   *   and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   */
  get: function get(callback) {
    var self = this;
    if (this.needsRefresh()) {
      this.refresh(function(err) {
        if (!err) self.expired = false; // reset expired flag
        if (callback) callback(err);
      });
    } else if (callback) {
      callback();
    }
  },

  /**
   * @!method  getPromise()
   *   Returns a 'thenable' promise.
   *   Gets the existing credentials, refreshing them if they are not yet loaded
   *   or have expired. Users should call this method before using {refresh},
   *   as this will not attempt to reload credentials when they are already
   *   loaded into the object.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function()
   *     Called if the promise is fulfilled. When this callback is called, it
   *     means either credentials do not need to be refreshed or refreshed
   *     credentials information has been loaded into the object (as the
   *     `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
   *   @callback rejectedCallback function(err)
   *     Called if the promise is rejected.
   *     @param err [Error] if an error occurred, this value will be filled
   *   @return [Promise] A promise that represents the state of the `get` call.
   *   @example Calling the `getPromise` method.
   *     var promise = credProvider.getPromise();
   *     promise.then(function() { ... }, function(err) { ... });
   */

  /**
   * @!method  refreshPromise()
   *   Returns a 'thenable' promise.
   *   Refreshes the credentials. Users should call {get} before attempting
   *   to forcibly refresh credentials.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function()
   *     Called if the promise is fulfilled. When this callback is called, it
   *     means refreshed credentials information has been loaded into the object
   *     (as the `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
   *   @callback rejectedCallback function(err)
   *     Called if the promise is rejected.
   *     @param err [Error] if an error occurred, this value will be filled
   *   @return [Promise] A promise that represents the state of the `refresh` call.
   *   @example Calling the `refreshPromise` method.
   *     var promise = credProvider.refreshPromise();
   *     promise.then(function() { ... }, function(err) { ... });
   */

  /**
   * Refreshes the credentials. Users should call {get} before attempting
   * to forcibly refresh credentials.
   *
   * @callback callback function(err)
   *   When this callback is called with no error, it means refreshed
   *   credentials information has been loaded into the object (as the
   *   `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @note Subclasses should override this class to reset the
   *   {accessKeyId}, {secretAccessKey} and optional {sessionToken}
   *   on the credentials object and then call the callback with
   *   any error information.
   * @see get
   */
  refresh: function refresh(callback) {
    this.expired = false;
    callback();
  },

  /**
   * @api private
   * @param callback
   */
  coalesceRefresh: function coalesceRefresh(callback, sync) {
    var self = this;
    if (self.refreshCallbacks.push(callback) === 1) {
      self.load(function onLoad(err) {
        AWS.util.arrayEach(self.refreshCallbacks, function(callback) {
          if (sync) {
            callback(err);
          } else {
            // callback could throw, so defer to ensure all callbacks are notified
            AWS.util.defer(function () {
              callback(err);
            });
          }
        });
        self.refreshCallbacks.length = 0;
      });
    }
  },

  /**
   * @api private
   * @param callback
   */
  load: function load(callback) {
    callback();
  }
});

/**
 * @api private
 */
AWS.Credentials.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.getPromise = AWS.util.promisifyMethod('get', PromiseDependency);
  this.prototype.refreshPromise = AWS.util.promisifyMethod('refresh', PromiseDependency);
};

/**
 * @api private
 */
AWS.Credentials.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.getPromise;
  delete this.prototype.refreshPromise;
};

AWS.util.addPromises(AWS.Credentials);

},{"./core":18}],20:[function(require,module,exports){
var AWS = require('../core');
var STS = require('../../clients/sts');

/**
 * Represents temporary credentials retrieved from {AWS.STS}. Without any
 * extra parameters, credentials will be fetched from the
 * {AWS.STS.getSessionToken} operation. If an IAM role is provided, the
 * {AWS.STS.assumeRole} operation will be used to fetch credentials for the
 * role instead.
 *
 * AWS.ChainableTemporaryCredentials differs from AWS.TemporaryCredentials in
 * the way masterCredentials and refreshes are handled.
 * AWS.ChainableTemporaryCredentials refreshes expired credentials using the
 * masterCredentials passed by the user to support chaining of STS credentials.
 * However, AWS.TemporaryCredentials recursively collapses the masterCredentials
 * during instantiation, precluding the ability to refresh credentials which
 * require intermediate, temporary credentials.
 *
 * For example, if the application should use RoleA, which must be assumed from
 * RoleB, and the environment provides credentials which can assume RoleB, then
 * AWS.ChainableTemporaryCredentials must be used to support refreshing the
 * temporary credentials for RoleA:
 *
 * ```javascript
 * var roleACreds = new AWS.ChainableTemporaryCredentials({
 *   params: {RoleArn: 'RoleA'},
 *   masterCredentials: new AWS.ChainableTemporaryCredentials({
 *     params: {RoleArn: 'RoleB'},
 *     masterCredentials: new AWS.EnvironmentCredentials('AWS')
 *   })
 * });
 * ```
 *
 * If AWS.TemporaryCredentials had been used in the previous example,
 * `roleACreds` would fail to refresh because `roleACreds` would
 * use the environment credentials for the AssumeRole request.
 *
 * Another difference is that AWS.ChainableTemporaryCredentials creates the STS
 * service instance during instantiation while AWS.TemporaryCredentials creates
 * the STS service instance during the first refresh. Creating the service
 * instance during instantiation effectively captures the master credentials
 * from the global config, so that subsequent changes to the global config do
 * not affect the master credentials used to refresh the temporary credentials.
 *
 * This allows an instance of AWS.ChainableTemporaryCredentials to be assigned
 * to AWS.config.credentials:
 *
 * ```javascript
 * var envCreds = new AWS.EnvironmentCredentials('AWS');
 * AWS.config.credentials = envCreds;
 * // masterCredentials will be envCreds
 * AWS.config.credentials = new AWS.ChainableTemporaryCredentials({
 *   params: {RoleArn: '...'}
 * });
 * ```
 *
 * Similarly, to use the CredentialProviderChain's default providers as the
 * master credentials, simply create a new instance of
 * AWS.ChainableTemporaryCredentials:
 *
 * ```javascript
 * AWS.config.credentials = new ChainableTemporaryCredentials({
 *   params: {RoleArn: '...'}
 * });
 * ```
 *
 * @!attribute service
 *   @return [AWS.STS] the STS service instance used to
 *     get and refresh temporary credentials from AWS STS.
 * @note (see constructor)
 */
AWS.ChainableTemporaryCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new temporary credentials object.
   *
   * @param options [map] a set of options
   * @option options params [map] ({}) a map of options that are passed to the
   *   {AWS.STS.assumeRole} or {AWS.STS.getSessionToken} operations.
   *   If a `RoleArn` parameter is passed in, credentials will be based on the
   *   IAM role. If a `SerialNumber` parameter is passed in, {tokenCodeFn} must
   *   also be passed in or an error will be thrown.
   * @option options masterCredentials [AWS.Credentials] the master credentials
   *   used to get and refresh temporary credentials from AWS STS. By default,
   *   AWS.config.credentials or AWS.config.credentialProvider will be used.
   * @option options tokenCodeFn [Function] (null) Function to provide
   *   `TokenCode`, if `SerialNumber` is provided for profile in {params}. Function
   *   is called with value of `SerialNumber` and `callback`, and should provide
   *   the `TokenCode` or an error to the callback in the format
   *   `callback(err, token)`.
   * @example Creating a new credentials object for generic temporary credentials
   *   AWS.config.credentials = new AWS.ChainableTemporaryCredentials();
   * @example Creating a new credentials object for an IAM role
   *   AWS.config.credentials = new AWS.ChainableTemporaryCredentials({
   *     params: {
   *       RoleArn: 'arn:aws:iam::1234567890:role/TemporaryCredentials'
   *     }
   *   });
   * @see AWS.STS.assumeRole
   * @see AWS.STS.getSessionToken
   */
  constructor: function ChainableTemporaryCredentials(options) {
    AWS.Credentials.call(this);
    options = options || {};
    this.errorCode = 'ChainableTemporaryCredentialsProviderFailure';
    this.expired = true;
    this.tokenCodeFn = null;

    var params = AWS.util.copy(options.params) || {};
    if (params.RoleArn) {
      params.RoleSessionName = params.RoleSessionName || 'temporary-credentials';
    }
    if (params.SerialNumber) {
      if (!options.tokenCodeFn || (typeof options.tokenCodeFn !== 'function')) {
        throw new AWS.util.error(
          new Error('tokenCodeFn must be a function when params.SerialNumber is given'),
          {code: this.errorCode}
        );
      } else {
        this.tokenCodeFn = options.tokenCodeFn;
      }
    }
    var config = AWS.util.merge(
      {
        params: params,
        credentials: options.masterCredentials || AWS.config.credentials
      },
      options.stsConfig || {}
    );
    this.service = new STS(config);
  },

  /**
   * Refreshes credentials using {AWS.STS.assumeRole} or
   * {AWS.STS.getSessionToken}, depending on whether an IAM role ARN was passed
   * to the credentials {constructor}.
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see AWS.Credentials.get
   */
  refresh: function refresh(callback) {
    this.coalesceRefresh(callback || AWS.util.fn.callback);
  },

  /**
   * @api private
   * @param callback
   */
  load: function load(callback) {
    var self = this;
    var operation = self.service.config.params.RoleArn ? 'assumeRole' : 'getSessionToken';
    this.getTokenCode(function (err, tokenCode) {
      var params = {};
      if (err) {
        callback(err);
        return;
      }
      if (tokenCode) {
        params.TokenCode = tokenCode;
      }
      self.service[operation](params, function (err, data) {
        if (!err) {
          self.service.credentialsFrom(data, self);
        }
        callback(err);
      });
    });
  },

  /**
   * @api private
   */
  getTokenCode: function getTokenCode(callback) {
    var self = this;
    if (this.tokenCodeFn) {
      this.tokenCodeFn(this.service.config.params.SerialNumber, function (err, token) {
        if (err) {
          var message = err;
          if (err instanceof Error) {
            message = err.message;
          }
          callback(
            AWS.util.error(
              new Error('Error fetching MFA token: ' + message),
              { code: self.errorCode}
            )
          );
          return;
        }
        callback(null, token);
      });
    } else {
      callback(null);
    }
  }
});

},{"../../clients/sts":8,"../core":18}],21:[function(require,module,exports){
var AWS = require('../core');
var CognitoIdentity = require('../../clients/cognitoidentity');
var STS = require('../../clients/sts');

/**
 * Represents credentials retrieved from STS Web Identity Federation using
 * the Amazon Cognito Identity service.
 *
 * By default this provider gets credentials using the
 * {AWS.CognitoIdentity.getCredentialsForIdentity} service operation, which
 * requires either an `IdentityId` or an `IdentityPoolId` (Amazon Cognito
 * Identity Pool ID), which is used to call {AWS.CognitoIdentity.getId} to
 * obtain an `IdentityId`. If the identity or identity pool is not configured in
 * the Amazon Cognito Console to use IAM roles with the appropriate permissions,
 * then additionally a `RoleArn` is required containing the ARN of the IAM trust
 * policy for the Amazon Cognito role that the user will log into. If a `RoleArn`
 * is provided, then this provider gets credentials using the
 * {AWS.STS.assumeRoleWithWebIdentity} service operation, after first getting an
 * Open ID token from {AWS.CognitoIdentity.getOpenIdToken}.
 *
 * In addition, if this credential provider is used to provide authenticated
 * login, the `Logins` map may be set to the tokens provided by the respective
 * identity providers. See {constructor} for an example on creating a credentials
 * object with proper property values.
 *
 * ## Refreshing Credentials from Identity Service
 *
 * In addition to AWS credentials expiring after a given amount of time, the
 * login token from the identity provider will also expire. Once this token
 * expires, it will not be usable to refresh AWS credentials, and another
 * token will be needed. The SDK does not manage refreshing of the token value,
 * but this can be done through a "refresh token" supported by most identity
 * providers. Consult the documentation for the identity provider for refreshing
 * tokens. Once the refreshed token is acquired, you should make sure to update
 * this new token in the credentials object's {params} property. The following
 * code will update the WebIdentityToken, assuming you have retrieved an updated
 * token from the identity provider:
 *
 * ```javascript
 * AWS.config.credentials.params.Logins['graph.facebook.com'] = updatedToken;
 * ```
 *
 * Future calls to `credentials.refresh()` will now use the new token.
 *
 * @!attribute params
 *   @return [map] the map of params passed to
 *     {AWS.CognitoIdentity.getId},
 *     {AWS.CognitoIdentity.getOpenIdToken}, and
 *     {AWS.STS.assumeRoleWithWebIdentity}. To update the token, set the
 *     `params.WebIdentityToken` property.
 * @!attribute data
 *   @return [map] the raw data response from the call to
 *     {AWS.CognitoIdentity.getCredentialsForIdentity}, or
 *     {AWS.STS.assumeRoleWithWebIdentity}. Use this if you want to get
 *     access to other properties from the response.
 * @!attribute identityId
 *   @return [String] the Cognito ID returned by the last call to
 *     {AWS.CognitoIdentity.getOpenIdToken}. This ID represents the actual
 *     final resolved identity ID from Amazon Cognito.
 */
AWS.CognitoIdentityCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * @api private
   */
  localStorageKey: {
    id: 'aws.cognito.identity-id.',
    providers: 'aws.cognito.identity-providers.'
  },

  /**
   * Creates a new credentials object.
   * @example Creating a new credentials object
   *   AWS.config.credentials = new AWS.CognitoIdentityCredentials({
   *
   *     // either IdentityPoolId or IdentityId is required
   *     // See the IdentityPoolId param for AWS.CognitoIdentity.getID (linked below)
   *     // See the IdentityId param for AWS.CognitoIdentity.getCredentialsForIdentity
   *     // or AWS.CognitoIdentity.getOpenIdToken (linked below)
   *     IdentityPoolId: 'us-east-1:1699ebc0-7900-4099-b910-2df94f52a030',
   *     IdentityId: 'us-east-1:128d0a74-c82f-4553-916d-90053e4a8b0f'
   *
   *     // optional, only necessary when the identity pool is not configured
   *     // to use IAM roles in the Amazon Cognito Console
   *     // See the RoleArn param for AWS.STS.assumeRoleWithWebIdentity (linked below)
   *     RoleArn: 'arn:aws:iam::1234567890:role/MYAPP-CognitoIdentity',
   *
   *     // optional tokens, used for authenticated login
   *     // See the Logins param for AWS.CognitoIdentity.getID (linked below)
   *     Logins: {
   *       'graph.facebook.com': 'FBTOKEN',
   *       'www.amazon.com': 'AMAZONTOKEN',
   *       'accounts.google.com': 'GOOGLETOKEN',
   *       'api.twitter.com': 'TWITTERTOKEN',
   *       'www.digits.com': 'DIGITSTOKEN'
   *     },
   *
   *     // optional name, defaults to web-identity
   *     // See the RoleSessionName param for AWS.STS.assumeRoleWithWebIdentity (linked below)
   *     RoleSessionName: 'web',
   *
   *     // optional, only necessary when application runs in a browser
   *     // and multiple users are signed in at once, used for caching
   *     LoginId: 'example@gmail.com'
   *
   *   }, {
   *      // optionally provide configuration to apply to the underlying service clients
   *      // if configuration is not provided, then configuration will be pulled from AWS.config
   *
   *      // region should match the region your identity pool is located in
   *      region: 'us-east-1',
   *
   *      // specify timeout options
   *      httpOptions: {
   *        timeout: 100
   *      }
   *   });
   * @see AWS.CognitoIdentity.getId
   * @see AWS.CognitoIdentity.getCredentialsForIdentity
   * @see AWS.STS.assumeRoleWithWebIdentity
   * @see AWS.CognitoIdentity.getOpenIdToken
   * @see AWS.Config
   * @note If a region is not provided in the global AWS.config, or
   *   specified in the `clientConfig` to the CognitoIdentityCredentials
   *   constructor, you may encounter a 'Missing credentials in config' error
   *   when calling making a service call.
   */
  constructor: function CognitoIdentityCredentials(params, clientConfig) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
    this.data = null;
    this._identityId = null;
    this._clientConfig = AWS.util.copy(clientConfig || {});
    this.loadCachedId();
    var self = this;
    Object.defineProperty(this, 'identityId', {
      get: function() {
        self.loadCachedId();
        return self._identityId || self.params.IdentityId;
      },
      set: function(identityId) {
        self._identityId = identityId;
      }
    });
  },

  /**
   * Refreshes credentials using {AWS.CognitoIdentity.getCredentialsForIdentity},
   * or {AWS.STS.assumeRoleWithWebIdentity}.
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see AWS.Credentials.get
   */
  refresh: function refresh(callback) {
    this.coalesceRefresh(callback || AWS.util.fn.callback);
  },

  /**
   * @api private
   * @param callback
   */
  load: function load(callback) {
    var self = this;
    self.createClients();
    self.data = null;
    self._identityId = null;
    self.getId(function(err) {
      if (!err) {
        if (!self.params.RoleArn) {
          self.getCredentialsForIdentity(callback);
        } else {
          self.getCredentialsFromSTS(callback);
        }
      } else {
        self.clearIdOnNotAuthorized(err);
        callback(err);
      }
    });
  },

  /**
   * Clears the cached Cognito ID associated with the currently configured
   * identity pool ID. Use this to manually invalidate your cache if
   * the identity pool ID was deleted.
   */
  clearCachedId: function clearCache() {
    this._identityId = null;
    delete this.params.IdentityId;

    var poolId = this.params.IdentityPoolId;
    var loginId = this.params.LoginId || '';
    delete this.storage[this.localStorageKey.id + poolId + loginId];
    delete this.storage[this.localStorageKey.providers + poolId + loginId];
  },

  /**
   * @api private
   */
  clearIdOnNotAuthorized: function clearIdOnNotAuthorized(err) {
    var self = this;
    if (err.code == 'NotAuthorizedException') {
      self.clearCachedId();
    }
  },

  /**
   * Retrieves a Cognito ID, loading from cache if it was already retrieved
   * on this device.
   *
   * @callback callback function(err, identityId)
   *   @param err [Error, null] an error object if the call failed or null if
   *     it succeeded.
   *   @param identityId [String, null] if successful, the callback will return
   *     the Cognito ID.
   * @note If not loaded explicitly, the Cognito ID is loaded and stored in
   *   localStorage in the browser environment of a device.
   * @api private
   */
  getId: function getId(callback) {
    var self = this;
    if (typeof self.params.IdentityId === 'string') {
      return callback(null, self.params.IdentityId);
    }

    self.cognito.getId(function(err, data) {
      if (!err && data.IdentityId) {
        self.params.IdentityId = data.IdentityId;
        callback(null, data.IdentityId);
      } else {
        callback(err);
      }
    });
  },


  /**
   * @api private
   */
  loadCredentials: function loadCredentials(data, credentials) {
    if (!data || !credentials) return;
    credentials.expired = false;
    credentials.accessKeyId = data.Credentials.AccessKeyId;
    credentials.secretAccessKey = data.Credentials.SecretKey;
    credentials.sessionToken = data.Credentials.SessionToken;
    credentials.expireTime = data.Credentials.Expiration;
  },

  /**
   * @api private
   */
  getCredentialsForIdentity: function getCredentialsForIdentity(callback) {
    var self = this;
    self.cognito.getCredentialsForIdentity(function(err, data) {
      if (!err) {
        self.cacheId(data);
        self.data = data;
        self.loadCredentials(self.data, self);
      } else {
        self.clearIdOnNotAuthorized(err);
      }
      callback(err);
    });
  },

  /**
   * @api private
   */
  getCredentialsFromSTS: function getCredentialsFromSTS(callback) {
    var self = this;
    self.cognito.getOpenIdToken(function(err, data) {
      if (!err) {
        self.cacheId(data);
        self.params.WebIdentityToken = data.Token;
        self.webIdentityCredentials.refresh(function(webErr) {
          if (!webErr) {
            self.data = self.webIdentityCredentials.data;
            self.sts.credentialsFrom(self.data, self);
          }
          callback(webErr);
        });
      } else {
        self.clearIdOnNotAuthorized(err);
        callback(err);
      }
    });
  },

  /**
   * @api private
   */
  loadCachedId: function loadCachedId() {
    var self = this;

    // in the browser we source default IdentityId from localStorage
    if (AWS.util.isBrowser() && !self.params.IdentityId) {
      var id = self.getStorage('id');
      if (id && self.params.Logins) {
        var actualProviders = Object.keys(self.params.Logins);
        var cachedProviders =
          (self.getStorage('providers') || '').split(',');

        // only load ID if at least one provider used this ID before
        var intersect = cachedProviders.filter(function(n) {
          return actualProviders.indexOf(n) !== -1;
        });
        if (intersect.length !== 0) {
          self.params.IdentityId = id;
        }
      } else if (id) {
        self.params.IdentityId = id;
      }
    }
  },

  /**
   * @api private
   */
  createClients: function() {
    var clientConfig = this._clientConfig;
    this.webIdentityCredentials = this.webIdentityCredentials ||
      new AWS.WebIdentityCredentials(this.params, clientConfig);
    if (!this.cognito) {
      var cognitoConfig = AWS.util.merge({}, clientConfig);
      cognitoConfig.params = this.params;
      this.cognito = new CognitoIdentity(cognitoConfig);
    }
    this.sts = this.sts || new STS(clientConfig);
  },

  /**
   * @api private
   */
  cacheId: function cacheId(data) {
    this._identityId = data.IdentityId;
    this.params.IdentityId = this._identityId;

    // cache this IdentityId in browser localStorage if possible
    if (AWS.util.isBrowser()) {
      this.setStorage('id', data.IdentityId);

      if (this.params.Logins) {
        this.setStorage('providers', Object.keys(this.params.Logins).join(','));
      }
    }
  },

  /**
   * @api private
   */
  getStorage: function getStorage(key) {
    return this.storage[this.localStorageKey[key] + this.params.IdentityPoolId + (this.params.LoginId || '')];
  },

  /**
   * @api private
   */
  setStorage: function setStorage(key, val) {
    try {
      this.storage[this.localStorageKey[key] + this.params.IdentityPoolId + (this.params.LoginId || '')] = val;
    } catch (_) {}
  },

  /**
   * @api private
   */
  storage: (function() {
    try {
      var storage = AWS.util.isBrowser() && window.localStorage !== null && typeof window.localStorage === 'object' ?
          window.localStorage : {};

      // Test set/remove which would throw an error in Safari's private browsing
      storage['aws.test-storage'] = 'foobar';
      delete storage['aws.test-storage'];

      return storage;
    } catch (_) {
      return {};
    }
  })()
});

},{"../../clients/cognitoidentity":7,"../../clients/sts":8,"../core":18}],22:[function(require,module,exports){
var AWS = require('../core');

/**
 * Creates a credential provider chain that searches for AWS credentials
 * in a list of credential providers specified by the {providers} property.
 *
 * By default, the chain will use the {defaultProviders} to resolve credentials.
 * These providers will look in the environment using the
 * {AWS.EnvironmentCredentials} class with the 'AWS' and 'AMAZON' prefixes.
 *
 * ## Setting Providers
 *
 * Each provider in the {providers} list should be a function that returns
 * a {AWS.Credentials} object, or a hardcoded credentials object. The function
 * form allows for delayed execution of the credential construction.
 *
 * ## Resolving Credentials from a Chain
 *
 * Call {resolve} to return the first valid credential object that can be
 * loaded by the provider chain.
 *
 * For example, to resolve a chain with a custom provider that checks a file
 * on disk after the set of {defaultProviders}:
 *
 * ```javascript
 * var diskProvider = new AWS.FileSystemCredentials('./creds.json');
 * var chain = new AWS.CredentialProviderChain();
 * chain.providers.push(diskProvider);
 * chain.resolve();
 * ```
 *
 * The above code will return the `diskProvider` object if the
 * file contains credentials and the `defaultProviders` do not contain
 * any credential settings.
 *
 * @!attribute providers
 *   @return [Array<AWS.Credentials, Function>]
 *     a list of credentials objects or functions that return credentials
 *     objects. If the provider is a function, the function will be
 *     executed lazily when the provider needs to be checked for valid
 *     credentials. By default, this object will be set to the
 *     {defaultProviders}.
 *   @see defaultProviders
 */
AWS.CredentialProviderChain = AWS.util.inherit(AWS.Credentials, {

  /**
   * Creates a new CredentialProviderChain with a default set of providers
   * specified by {defaultProviders}.
   */
  constructor: function CredentialProviderChain(providers) {
    if (providers) {
      this.providers = providers;
    } else {
      this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
    }
    this.resolveCallbacks = [];
  },

  /**
   * @!method  resolvePromise()
   *   Returns a 'thenable' promise.
   *   Resolves the provider chain by searching for the first set of
   *   credentials in {providers}.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function(credentials)
   *     Called if the promise is fulfilled and the provider resolves the chain
   *     to a credentials object
   *     @param credentials [AWS.Credentials] the credentials object resolved
   *       by the provider chain.
   *   @callback rejectedCallback function(error)
   *     Called if the promise is rejected.
   *     @param err [Error] the error object returned if no credentials are found.
   *   @return [Promise] A promise that represents the state of the `resolve` method call.
   *   @example Calling the `resolvePromise` method.
   *     var promise = chain.resolvePromise();
   *     promise.then(function(credentials) { ... }, function(err) { ... });
   */

  /**
   * Resolves the provider chain by searching for the first set of
   * credentials in {providers}.
   *
   * @callback callback function(err, credentials)
   *   Called when the provider resolves the chain to a credentials object
   *   or null if no credentials can be found.
   *
   *   @param err [Error] the error object returned if no credentials are
   *     found.
   *   @param credentials [AWS.Credentials] the credentials object resolved
   *     by the provider chain.
   * @return [AWS.CredentialProviderChain] the provider, for chaining.
   */
  resolve: function resolve(callback) {
    var self = this;
    if (self.providers.length === 0) {
      callback(new Error('No providers'));
      return self;
    }

    if (self.resolveCallbacks.push(callback) === 1) {
      var index = 0;
      var providers = self.providers.slice(0);

      function resolveNext(err, creds) {
        if ((!err && creds) || index === providers.length) {
          AWS.util.arrayEach(self.resolveCallbacks, function (callback) {
            callback(err, creds);
          });
          self.resolveCallbacks.length = 0;
          return;
        }

        var provider = providers[index++];
        if (typeof provider === 'function') {
          creds = provider.call();
        } else {
          creds = provider;
        }

        if (creds.get) {
          creds.get(function (getErr) {
            resolveNext(getErr, getErr ? null : creds);
          });
        } else {
          resolveNext(null, creds);
        }
      }

      resolveNext();
    }

    return self;
  }
});

/**
 * The default set of providers used by a vanilla CredentialProviderChain.
 *
 * In the browser:
 *
 * ```javascript
 * AWS.CredentialProviderChain.defaultProviders = []
 * ```
 *
 * In Node.js:
 *
 * ```javascript
 * AWS.CredentialProviderChain.defaultProviders = [
 *   function () { return new AWS.EnvironmentCredentials('AWS'); },
 *   function () { return new AWS.EnvironmentCredentials('AMAZON'); },
 *   function () { return new AWS.SharedIniFileCredentials(); },
 *   function () { return new AWS.ECSCredentials(); },
 *   function () { return new AWS.ProcessCredentials(); },
 *   function () { return new AWS.TokenFileWebIdentityCredentials(); },
 *   function () { return new AWS.EC2MetadataCredentials() }
 * ]
 * ```
 */
AWS.CredentialProviderChain.defaultProviders = [];

/**
 * @api private
 */
AWS.CredentialProviderChain.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.resolvePromise = AWS.util.promisifyMethod('resolve', PromiseDependency);
};

/**
 * @api private
 */
AWS.CredentialProviderChain.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.resolvePromise;
};

AWS.util.addPromises(AWS.CredentialProviderChain);

},{"../core":18}],23:[function(require,module,exports){
var AWS = require('../core');
var STS = require('../../clients/sts');

/**
 * Represents credentials retrieved from STS SAML support.
 *
 * By default this provider gets credentials using the
 * {AWS.STS.assumeRoleWithSAML} service operation. This operation
 * requires a `RoleArn` containing the ARN of the IAM trust policy for the
 * application for which credentials will be given, as well as a `PrincipalArn`
 * representing the ARN for the SAML identity provider. In addition, the
 * `SAMLAssertion` must be set to the token provided by the identity
 * provider. See {constructor} for an example on creating a credentials
 * object with proper `RoleArn`, `PrincipalArn`, and `SAMLAssertion` values.
 *
 * ## Refreshing Credentials from Identity Service
 *
 * In addition to AWS credentials expiring after a given amount of time, the
 * login token from the identity provider will also expire. Once this token
 * expires, it will not be usable to refresh AWS credentials, and another
 * token will be needed. The SDK does not manage refreshing of the token value,
 * but this can be done through a "refresh token" supported by most identity
 * providers. Consult the documentation for the identity provider for refreshing
 * tokens. Once the refreshed token is acquired, you should make sure to update
 * this new token in the credentials object's {params} property. The following
 * code will update the SAMLAssertion, assuming you have retrieved an updated
 * token from the identity provider:
 *
 * ```javascript
 * AWS.config.credentials.params.SAMLAssertion = updatedToken;
 * ```
 *
 * Future calls to `credentials.refresh()` will now use the new token.
 *
 * @!attribute params
 *   @return [map] the map of params passed to
 *     {AWS.STS.assumeRoleWithSAML}. To update the token, set the
 *     `params.SAMLAssertion` property.
 */
AWS.SAMLCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new credentials object.
   * @param (see AWS.STS.assumeRoleWithSAML)
   * @example Creating a new credentials object
   *   AWS.config.credentials = new AWS.SAMLCredentials({
   *     RoleArn: 'arn:aws:iam::1234567890:role/SAMLRole',
   *     PrincipalArn: 'arn:aws:iam::1234567890:role/SAMLPrincipal',
   *     SAMLAssertion: 'base64-token', // base64-encoded token from IdP
   *   });
   * @see AWS.STS.assumeRoleWithSAML
   */
  constructor: function SAMLCredentials(params) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
  },

  /**
   * Refreshes credentials using {AWS.STS.assumeRoleWithSAML}
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    this.coalesceRefresh(callback || AWS.util.fn.callback);
  },

  /**
   * @api private
   */
  load: function load(callback) {
    var self = this;
    self.createClients();
    self.service.assumeRoleWithSAML(function (err, data) {
      if (!err) {
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  },

  /**
   * @api private
   */
  createClients: function() {
    this.service = this.service || new STS({params: this.params});
  }

});

},{"../../clients/sts":8,"../core":18}],24:[function(require,module,exports){
var AWS = require('../core');
var STS = require('../../clients/sts');

/**
 * Represents temporary credentials retrieved from {AWS.STS}. Without any
 * extra parameters, credentials will be fetched from the
 * {AWS.STS.getSessionToken} operation. If an IAM role is provided, the
 * {AWS.STS.assumeRole} operation will be used to fetch credentials for the
 * role instead.
 *
 * @note AWS.TemporaryCredentials is deprecated, but remains available for
 *   backwards compatibility. {AWS.ChainableTemporaryCredentials} is the
 *   preferred class for temporary credentials.
 *
 * To setup temporary credentials, configure a set of master credentials
 * using the standard credentials providers (environment, EC2 instance metadata,
 * or from the filesystem), then set the global credentials to a new
 * temporary credentials object:
 *
 * ```javascript
 * // Note that environment credentials are loaded by default,
 * // the following line is shown for clarity:
 * AWS.config.credentials = new AWS.EnvironmentCredentials('AWS');
 *
 * // Now set temporary credentials seeded from the master credentials
 * AWS.config.credentials = new AWS.TemporaryCredentials();
 *
 * // subsequent requests will now use temporary credentials from AWS STS.
 * new AWS.S3().listBucket(function(err, data) { ... });
 * ```
 *
 * @!attribute masterCredentials
 *   @return [AWS.Credentials] the master (non-temporary) credentials used to
 *     get and refresh temporary credentials from AWS STS.
 * @note (see constructor)
 */
AWS.TemporaryCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new temporary credentials object.
   *
   * @note In order to create temporary credentials, you first need to have
   *   "master" credentials configured in {AWS.Config.credentials}. These
   *   master credentials are necessary to retrieve the temporary credentials,
   *   as well as refresh the credentials when they expire.
   * @param params [map] a map of options that are passed to the
   *   {AWS.STS.assumeRole} or {AWS.STS.getSessionToken} operations.
   *   If a `RoleArn` parameter is passed in, credentials will be based on the
   *   IAM role.
   * @param masterCredentials [AWS.Credentials] the master (non-temporary) credentials
   *  used to get and refresh temporary credentials from AWS STS.
   * @example Creating a new credentials object for generic temporary credentials
   *   AWS.config.credentials = new AWS.TemporaryCredentials();
   * @example Creating a new credentials object for an IAM role
   *   AWS.config.credentials = new AWS.TemporaryCredentials({
   *     RoleArn: 'arn:aws:iam::1234567890:role/TemporaryCredentials',
   *   });
   * @see AWS.STS.assumeRole
   * @see AWS.STS.getSessionToken
   */
  constructor: function TemporaryCredentials(params, masterCredentials) {
    AWS.Credentials.call(this);
    this.loadMasterCredentials(masterCredentials);
    this.expired = true;

    this.params = params || {};
    if (this.params.RoleArn) {
      this.params.RoleSessionName =
        this.params.RoleSessionName || 'temporary-credentials';
    }
  },

  /**
   * Refreshes credentials using {AWS.STS.assumeRole} or
   * {AWS.STS.getSessionToken}, depending on whether an IAM role ARN was passed
   * to the credentials {constructor}.
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh (callback) {
    this.coalesceRefresh(callback || AWS.util.fn.callback);
  },

  /**
   * @api private
   */
  load: function load (callback) {
    var self = this;
    self.createClients();
    self.masterCredentials.get(function () {
      self.service.config.credentials = self.masterCredentials;
      var operation = self.params.RoleArn ?
        self.service.assumeRole : self.service.getSessionToken;
      operation.call(self.service, function (err, data) {
        if (!err) {
          self.service.credentialsFrom(data, self);
        }
        callback(err);
      });
    });
  },

  /**
   * @api private
   */
  loadMasterCredentials: function loadMasterCredentials (masterCredentials) {
    this.masterCredentials = masterCredentials || AWS.config.credentials;
    while (this.masterCredentials.masterCredentials) {
      this.masterCredentials = this.masterCredentials.masterCredentials;
    }

    if (typeof this.masterCredentials.get !== 'function') {
      this.masterCredentials = new AWS.Credentials(this.masterCredentials);
    }
  },

  /**
   * @api private
   */
  createClients: function () {
    this.service = this.service || new STS({params: this.params});
  }

});

},{"../../clients/sts":8,"../core":18}],25:[function(require,module,exports){
var AWS = require('../core');
var STS = require('../../clients/sts');

/**
 * Represents credentials retrieved from STS Web Identity Federation support.
 *
 * By default this provider gets credentials using the
 * {AWS.STS.assumeRoleWithWebIdentity} service operation. This operation
 * requires a `RoleArn` containing the ARN of the IAM trust policy for the
 * application for which credentials will be given. In addition, the
 * `WebIdentityToken` must be set to the token provided by the identity
 * provider. See {constructor} for an example on creating a credentials
 * object with proper `RoleArn` and `WebIdentityToken` values.
 *
 * ## Refreshing Credentials from Identity Service
 *
 * In addition to AWS credentials expiring after a given amount of time, the
 * login token from the identity provider will also expire. Once this token
 * expires, it will not be usable to refresh AWS credentials, and another
 * token will be needed. The SDK does not manage refreshing of the token value,
 * but this can be done through a "refresh token" supported by most identity
 * providers. Consult the documentation for the identity provider for refreshing
 * tokens. Once the refreshed token is acquired, you should make sure to update
 * this new token in the credentials object's {params} property. The following
 * code will update the WebIdentityToken, assuming you have retrieved an updated
 * token from the identity provider:
 *
 * ```javascript
 * AWS.config.credentials.params.WebIdentityToken = updatedToken;
 * ```
 *
 * Future calls to `credentials.refresh()` will now use the new token.
 *
 * @!attribute params
 *   @return [map] the map of params passed to
 *     {AWS.STS.assumeRoleWithWebIdentity}. To update the token, set the
 *     `params.WebIdentityToken` property.
 * @!attribute data
 *   @return [map] the raw data response from the call to
 *     {AWS.STS.assumeRoleWithWebIdentity}. Use this if you want to get
 *     access to other properties from the response.
 */
AWS.WebIdentityCredentials = AWS.util.inherit(AWS.Credentials, {
  /**
   * Creates a new credentials object.
   * @param (see AWS.STS.assumeRoleWithWebIdentity)
   * @example Creating a new credentials object
   *   AWS.config.credentials = new AWS.WebIdentityCredentials({
   *     RoleArn: 'arn:aws:iam::1234567890:role/WebIdentity',
   *     WebIdentityToken: 'ABCDEFGHIJKLMNOP', // token from identity service
   *     RoleSessionName: 'web' // optional name, defaults to web-identity
   *   }, {
   *     // optionally provide configuration to apply to the underlying AWS.STS service client
   *     // if configuration is not provided, then configuration will be pulled from AWS.config
   *
   *     // specify timeout options
   *     httpOptions: {
   *       timeout: 100
   *     }
   *   });
   * @see AWS.STS.assumeRoleWithWebIdentity
   * @see AWS.Config
   */
  constructor: function WebIdentityCredentials(params, clientConfig) {
    AWS.Credentials.call(this);
    this.expired = true;
    this.params = params;
    this.params.RoleSessionName = this.params.RoleSessionName || 'web-identity';
    this.data = null;
    this._clientConfig = AWS.util.copy(clientConfig || {});
  },

  /**
   * Refreshes credentials using {AWS.STS.assumeRoleWithWebIdentity}
   *
   * @callback callback function(err)
   *   Called when the STS service responds (or fails). When
   *   this callback is called with no error, it means that the credentials
   *   information has been loaded into the object (as the `accessKeyId`,
   *   `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @see get
   */
  refresh: function refresh(callback) {
    this.coalesceRefresh(callback || AWS.util.fn.callback);
  },

  /**
   * @api private
   */
  load: function load(callback) {
    var self = this;
    self.createClients();
    self.service.assumeRoleWithWebIdentity(function (err, data) {
      self.data = null;
      if (!err) {
        self.data = data;
        self.service.credentialsFrom(data, self);
      }
      callback(err);
    });
  },

  /**
   * @api private
   */
  createClients: function() {
    if (!this.service) {
      var stsConfig = AWS.util.merge({}, this._clientConfig);
      stsConfig.params = this.params;
      this.service = new STS(stsConfig);
    }
  }

});

},{"../../clients/sts":8,"../core":18}],26:[function(require,module,exports){
(function (process){
var AWS = require('./core');
var util = require('./util');
var endpointDiscoveryEnabledEnvs = ['AWS_ENABLE_ENDPOINT_DISCOVERY', 'AWS_ENDPOINT_DISCOVERY_ENABLED'];

/**
 * Generate key (except resources and operation part) to index the endpoints in the cache
 * If input shape has endpointdiscoveryid trait then use
 *   accessKey + operation + resources + region + service as cache key
 * If input shape doesn't have endpointdiscoveryid trait then use
 *   accessKey + region + service as cache key
 * @return [map<String,String>] object with keys to index endpoints.
 * @api private
 */
function getCacheKey(request) {
  var service = request.service;
  var api = service.api || {};
  var operations = api.operations;
  var identifiers = {};
  if (service.config.region) {
    identifiers.region = service.config.region;
  }
  if (api.serviceId) {
    identifiers.serviceId = api.serviceId;
  }
  if (service.config.credentials.accessKeyId) {
    identifiers.accessKeyId = service.config.credentials.accessKeyId;
  }
  return identifiers;
}

/**
 * Recursive helper for marshallCustomIdentifiers().
 * Looks for required string input members that have 'endpointdiscoveryid' trait.
 * @api private
 */
function marshallCustomIdentifiersHelper(result, params, shape) {
  if (!shape || params === undefined || params === null) return;
  if (shape.type === 'structure' && shape.required && shape.required.length > 0) {
    util.arrayEach(shape.required, function(name) {
      var memberShape = shape.members[name];
      if (memberShape.endpointDiscoveryId === true) {
        var locationName = memberShape.isLocationName ? memberShape.name : name;
        result[locationName] = String(params[name]);
      } else {
        marshallCustomIdentifiersHelper(result, params[name], memberShape);
      }
    });
  }
}

/**
 * Get custom identifiers for cache key.
 * Identifies custom identifiers by checking each shape's `endpointDiscoveryId` trait.
 * @param [object] request object
 * @param [object] input shape of the given operation's api
 * @api private
 */
function marshallCustomIdentifiers(request, shape) {
  var identifiers = {};
  marshallCustomIdentifiersHelper(identifiers, request.params, shape);
  return identifiers;
}

/**
 * Call endpoint discovery operation when it's optional.
 * When endpoint is available in cache then use the cached endpoints. If endpoints
 * are unavailable then use regional endpoints and call endpoint discovery operation
 * asynchronously. This is turned off by default.
 * @param [object] request object
 * @api private
 */
function optionalDiscoverEndpoint(request) {
  var service = request.service;
  var api = service.api;
  var operationModel = api.operations ? api.operations[request.operation] : undefined;
  var inputShape = operationModel ? operationModel.input : undefined;

  var identifiers = marshallCustomIdentifiers(request, inputShape);
  var cacheKey = getCacheKey(request);
  if (Object.keys(identifiers).length > 0) {
    cacheKey = util.update(cacheKey, identifiers);
    if (operationModel) cacheKey.operation = operationModel.name;
  }
  var endpoints = AWS.endpointCache.get(cacheKey);
  if (endpoints && endpoints.length === 1 && endpoints[0].Address === '') {
    //endpoint operation is being made but response not yet received
    //or endpoint operation just failed in 1 minute
    return;
  } else if (endpoints && endpoints.length > 0) {
    //found endpoint record from cache
    request.httpRequest.updateEndpoint(endpoints[0].Address);
  } else {
    //endpoint record not in cache or outdated. make discovery operation
    var endpointRequest = service.makeRequest(api.endpointOperation, {
      Operation: operationModel.name,
      Identifiers: identifiers,
    });
    addApiVersionHeader(endpointRequest);
    endpointRequest.removeListener('validate', AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    endpointRequest.removeListener('retry', AWS.EventListeners.Core.RETRY_CHECK);
    //put in a placeholder for endpoints already requested, prevent
    //too much in-flight calls
    AWS.endpointCache.put(cacheKey, [{
      Address: '',
      CachePeriodInMinutes: 1
    }]);
    endpointRequest.send(function(err, data) {
      if (data && data.Endpoints) {
        AWS.endpointCache.put(cacheKey, data.Endpoints);
      } else if (err) {
        AWS.endpointCache.put(cacheKey, [{
          Address: '',
          CachePeriodInMinutes: 1 //not to make more endpoint operation in next 1 minute
        }]);
      }
    });
  }
}

var requestQueue = {};

/**
 * Call endpoint discovery operation when it's required.
 * When endpoint is available in cache then use cached ones. If endpoints are
 * unavailable then SDK should call endpoint operation then use returned new
 * endpoint for the api call. SDK will automatically attempt to do endpoint
 * discovery. This is turned off by default
 * @param [object] request object
 * @api private
 */
function requiredDiscoverEndpoint(request, done) {
  var service = request.service;
  var api = service.api;
  var operationModel = api.operations ? api.operations[request.operation] : undefined;
  var inputShape = operationModel ? operationModel.input : undefined;

  var identifiers = marshallCustomIdentifiers(request, inputShape);
  var cacheKey = getCacheKey(request);
  if (Object.keys(identifiers).length > 0) {
    cacheKey = util.update(cacheKey, identifiers);
    if (operationModel) cacheKey.operation = operationModel.name;
  }
  var cacheKeyStr = AWS.EndpointCache.getKeyString(cacheKey);
  var endpoints = AWS.endpointCache.get(cacheKeyStr); //endpoint cache also accepts string keys
  if (endpoints && endpoints.length === 1 && endpoints[0].Address === '') {
    //endpoint operation is being made but response not yet received
    //push request object to a pending queue
    if (!requestQueue[cacheKeyStr]) requestQueue[cacheKeyStr] = [];
    requestQueue[cacheKeyStr].push({request: request, callback: done});
    return;
  } else if (endpoints && endpoints.length > 0) {
    request.httpRequest.updateEndpoint(endpoints[0].Address);
    done();
  } else {
    var endpointRequest = service.makeRequest(api.endpointOperation, {
      Operation: operationModel.name,
      Identifiers: identifiers,
    });
    endpointRequest.removeListener('validate', AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    addApiVersionHeader(endpointRequest);

    //put in a placeholder for endpoints already requested, prevent
    //too much in-flight calls
    AWS.endpointCache.put(cacheKeyStr, [{
      Address: '',
      CachePeriodInMinutes: 60 //long-live cache
    }]);
    endpointRequest.send(function(err, data) {
      if (err) {
        var errorParams = {
          code: 'EndpointDiscoveryException',
          message: 'Request cannot be fulfilled without specifying an endpoint',
          retryable: false
        };
        request.response.error = util.error(err, errorParams);
        AWS.endpointCache.remove(cacheKey);

        //fail all the pending requests in batch
        if (requestQueue[cacheKeyStr]) {
          var pendingRequests = requestQueue[cacheKeyStr];
          util.arrayEach(pendingRequests, function(requestContext) {
            requestContext.request.response.error = util.error(err, errorParams);
            requestContext.callback();
          });
          delete requestQueue[cacheKeyStr];
        }
      } else if (data) {
        AWS.endpointCache.put(cacheKeyStr, data.Endpoints);
        request.httpRequest.updateEndpoint(data.Endpoints[0].Address);

        //update the endpoint for all the pending requests in batch
        if (requestQueue[cacheKeyStr]) {
          var pendingRequests = requestQueue[cacheKeyStr];
          util.arrayEach(pendingRequests, function(requestContext) {
            requestContext.request.httpRequest.updateEndpoint(data.Endpoints[0].Address);
            requestContext.callback();
          });
          delete requestQueue[cacheKeyStr];
        }
      }
      done();
    });
  }
}

/**
 * add api version header to endpoint operation
 * @api private
 */
function addApiVersionHeader(endpointRequest) {
  var api = endpointRequest.service.api;
  var apiVersion = api.apiVersion;
  if (apiVersion && !endpointRequest.httpRequest.headers['x-amz-api-version']) {
    endpointRequest.httpRequest.headers['x-amz-api-version'] = apiVersion;
  }
}

/**
 * If api call gets invalid endpoint exception, SDK should attempt to remove the invalid
 * endpoint from cache.
 * @api private
 */
function invalidateCachedEndpoints(response) {
  var error = response.error;
  var httpResponse = response.httpResponse;
  if (error &&
    (error.code === 'InvalidEndpointException' || httpResponse.statusCode === 421)
  ) {
    var request = response.request;
    var operations = request.service.api.operations || {};
    var inputShape = operations[request.operation] ? operations[request.operation].input : undefined;
    var identifiers = marshallCustomIdentifiers(request, inputShape);
    var cacheKey = getCacheKey(request);
    if (Object.keys(identifiers).length > 0) {
      cacheKey = util.update(cacheKey, identifiers);
      if (operations[request.operation]) cacheKey.operation = operations[request.operation].name;
    }
    AWS.endpointCache.remove(cacheKey);
  }
}

/**
 * If endpoint is explicitly configured, SDK should not do endpoint discovery in anytime.
 * @param [object] client Service client object.
 * @api private
 */
function hasCustomEndpoint(client) {
  //if set endpoint is set for specific client, enable endpoint discovery will raise an error.
  if (client._originalConfig && client._originalConfig.endpoint && client._originalConfig.endpointDiscoveryEnabled === true) {
    throw util.error(new Error(), {
      code: 'ConfigurationException',
      message: 'Custom endpoint is supplied; endpointDiscoveryEnabled must not be true.'
    });
  };
  var svcConfig = AWS.config[client.serviceIdentifier] || {};
  return Boolean(AWS.config.endpoint || svcConfig.endpoint || (client._originalConfig && client._originalConfig.endpoint));
}

/**
 * @api private
 */
function isFalsy(value) {
  return ['false', '0'].indexOf(value) >= 0;
}

/**
 * If endpoint discovery should perform for this request when endpoint discovery is optional.
 * SDK performs config resolution in order like below:
 * 1. If turned on client configuration(default to off) then turn on endpoint discovery.
 * 2. If turned on in env AWS_ENABLE_ENDPOINT_DISCOVERY then turn on endpoint discovery.
 * 3. If turned on in shared ini config file with key 'endpoint_discovery_enabled', then
 *   turn on endpoint discovery.
 * @param [object] request request object.
 * @api private
 */
function isEndpointDiscoveryApplicable(request) {
  var service = request.service || {};
  if (service.config.endpointDiscoveryEnabled === true) return true;

  //shared ini file is only available in Node
  //not to check env in browser
  if (util.isBrowser()) return false;

  for (var i = 0; i < endpointDiscoveryEnabledEnvs.length; i++) {
    var env = endpointDiscoveryEnabledEnvs[i];
    if (Object.prototype.hasOwnProperty.call(process.env, env)) {
      if (process.env[env] === '' || process.env[env] === undefined) {
        throw util.error(new Error(), {
          code: 'ConfigurationException',
          message: 'environmental variable ' + env + ' cannot be set to nothing'
        });
      }
      if (!isFalsy(process.env[env])) return true;
    }
  }

  var configFile = {};
  try {
    configFile = AWS.util.iniLoader ? AWS.util.iniLoader.loadFrom({
      isConfig: true,
      filename: process.env[AWS.util.sharedConfigFileEnv]
    }) : {};
  } catch (e) {}
  var sharedFileConfig = configFile[
    process.env.AWS_PROFILE || AWS.util.defaultProfile
  ] || {};
  if (Object.prototype.hasOwnProperty.call(sharedFileConfig, 'endpoint_discovery_enabled')) {
    if (sharedFileConfig.endpoint_discovery_enabled === undefined) {
      throw util.error(new Error(), {
        code: 'ConfigurationException',
        message: 'config file entry \'endpoint_discovery_enabled\' cannot be set to nothing'
      });
    }
    if (!isFalsy(sharedFileConfig.endpoint_discovery_enabled)) return true;
  }
  return false;
}

/**
 * attach endpoint discovery logic to request object
 * @param [object] request
 * @api private
 */
function discoverEndpoint(request, done) {
  var service = request.service || {};
  if (hasCustomEndpoint(service) || request.isPresigned()) return done();

  if (!isEndpointDiscoveryApplicable(request)) return done();

  request.httpRequest.appendToUserAgent('endpoint-discovery');

  var operations = service.api.operations || {};
  var operationModel = operations[request.operation];
  var isEndpointDiscoveryRequired = operationModel ? operationModel.endpointDiscoveryRequired : 'NULL';
  switch (isEndpointDiscoveryRequired) {
    case 'OPTIONAL':
      optionalDiscoverEndpoint(request);
      request.addNamedListener('INVALIDATE_CACHED_ENDPOINTS', 'extractError', invalidateCachedEndpoints);
      done();
      break;
    case 'REQUIRED':
      request.addNamedListener('INVALIDATE_CACHED_ENDPOINTS', 'extractError', invalidateCachedEndpoints);
      requiredDiscoverEndpoint(request, done);
      break;
    case 'NULL':
    default:
      done();
      break;
  }
}

module.exports = {
  discoverEndpoint: discoverEndpoint,
  requiredDiscoverEndpoint: requiredDiscoverEndpoint,
  optionalDiscoverEndpoint: optionalDiscoverEndpoint,
  marshallCustomIdentifiers: marshallCustomIdentifiers,
  getCacheKey: getCacheKey,
  invalidateCachedEndpoint: invalidateCachedEndpoints,
};

}).call(this,require('_process'))
},{"./core":18,"./util":71,"_process":87}],27:[function(require,module,exports){
var eventMessageChunker = require('../event-stream/event-message-chunker').eventMessageChunker;
var parseEvent = require('./parse-event').parseEvent;

function createEventStream(body, parser, model) {
    var eventMessages = eventMessageChunker(body);

    var events = [];

    for (var i = 0; i < eventMessages.length; i++) {
        events.push(parseEvent(parser, eventMessages[i], model));
    }

    return events;
}

/**
 * @api private
 */
module.exports = {
    createEventStream: createEventStream
};

},{"../event-stream/event-message-chunker":28,"./parse-event":30}],28:[function(require,module,exports){
/**
 * Takes in a buffer of event messages and splits them into individual messages.
 * @param {Buffer} buffer
 * @api private
 */
function eventMessageChunker(buffer) {
    /** @type Buffer[] */
    var messages = [];
    var offset = 0;

    while (offset < buffer.length) {
        var totalLength = buffer.readInt32BE(offset);

        // create new buffer for individual message (shares memory with original)
        var message = buffer.slice(offset, totalLength + offset);
        // increment offset to it starts at the next message
        offset += totalLength;

        messages.push(message);
    }

    return messages;
}

/**
 * @api private
 */
module.exports = {
    eventMessageChunker: eventMessageChunker
};

},{}],29:[function(require,module,exports){
var util = require('../core').util;
var toBuffer = util.buffer.toBuffer;

/**
 * A lossless representation of a signed, 64-bit integer. Instances of this
 * class may be used in arithmetic expressions as if they were numeric
 * primitives, but the binary representation will be preserved unchanged as the
 * `bytes` property of the object. The bytes should be encoded as big-endian,
 * two's complement integers.
 * @param {Buffer} bytes
 *
 * @api private
 */
function Int64(bytes) {
    if (bytes.length !== 8) {
        throw new Error('Int64 buffers must be exactly 8 bytes');
    }
    if (!util.Buffer.isBuffer(bytes)) bytes = toBuffer(bytes);

    this.bytes = bytes;
}

/**
 * @param {number} number
 * @returns {Int64}
 *
 * @api private
 */
Int64.fromNumber = function(number) {
    if (number > 9223372036854775807 || number < -9223372036854775808) {
        throw new Error(
            number + ' is too large (or, if negative, too small) to represent as an Int64'
        );
    }

    var bytes = new Uint8Array(8);
    for (
        var i = 7, remaining = Math.abs(Math.round(number));
        i > -1 && remaining > 0;
        i--, remaining /= 256
    ) {
        bytes[i] = remaining;
    }

    if (number < 0) {
        negate(bytes);
    }

    return new Int64(bytes);
};

/**
 * @returns {number}
 *
 * @api private
 */
Int64.prototype.valueOf = function() {
    var bytes = this.bytes.slice(0);
    var negative = bytes[0] & 128;
    if (negative) {
        negate(bytes);
    }

    return parseInt(bytes.toString('hex'), 16) * (negative ? -1 : 1);
};

Int64.prototype.toString = function() {
    return String(this.valueOf());
};

/**
 * @param {Buffer} bytes
 *
 * @api private
 */
function negate(bytes) {
    for (var i = 0; i < 8; i++) {
        bytes[i] ^= 0xFF;
    }
    for (var i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0) {
            break;
        }
    }
}

/**
 * @api private
 */
module.exports = {
    Int64: Int64
};

},{"../core":18}],30:[function(require,module,exports){
var parseMessage = require('./parse-message').parseMessage;

/**
 *
 * @param {*} parser
 * @param {Buffer} message
 * @param {*} shape
 * @api private
 */
function parseEvent(parser, message, shape) {
    var parsedMessage = parseMessage(message);

    // check if message is an event or error
    var messageType = parsedMessage.headers[':message-type'];
    if (messageType) {
        if (messageType.value === 'error') {
            throw parseError(parsedMessage);
        } else if (messageType.value !== 'event') {
            // not sure how to parse non-events/non-errors, ignore for now
            return;
        }
    }

    // determine event type
    var eventType = parsedMessage.headers[':event-type'];
    // check that the event type is modeled
    var eventModel = shape.members[eventType.value];
    if (!eventModel) {
        return;
    }

    var result = {};
    // check if an event payload exists
    var eventPayloadMemberName = eventModel.eventPayloadMemberName;
    if (eventPayloadMemberName) {
        var payloadShape = eventModel.members[eventPayloadMemberName];
        // if the shape is binary, return the byte array
        if (payloadShape.type === 'binary') {
            result[eventPayloadMemberName] = parsedMessage.body;
        } else {
            result[eventPayloadMemberName] = parser.parse(parsedMessage.body.toString(), payloadShape);
        }
    }

    // read event headers
    var eventHeaderNames = eventModel.eventHeaderMemberNames;
    for (var i = 0; i < eventHeaderNames.length; i++) {
        var name = eventHeaderNames[i];
        if (parsedMessage.headers[name]) {
            // parse the header!
            result[name] = eventModel.members[name].toType(parsedMessage.headers[name].value);
        }
    }

    var output = {};
    output[eventType.value] = result;
    return output;
}

function parseError(message) {
    var errorCode = message.headers[':error-code'];
    var errorMessage = message.headers[':error-message'];
    var error = new Error(errorMessage.value || errorMessage);
    error.code = error.name = errorCode.value || errorCode;
    return error;
}

/**
 * @api private
 */
module.exports = {
    parseEvent: parseEvent
};

},{"./parse-message":31}],31:[function(require,module,exports){
var Int64 = require('./int64').Int64;

var splitMessage = require('./split-message').splitMessage;

var BOOLEAN_TAG = 'boolean';
var BYTE_TAG = 'byte';
var SHORT_TAG = 'short';
var INT_TAG = 'integer';
var LONG_TAG = 'long';
var BINARY_TAG = 'binary';
var STRING_TAG = 'string';
var TIMESTAMP_TAG = 'timestamp';
var UUID_TAG = 'uuid';

/**
 * @api private
 *
 * @param {Buffer} headers
 */
function parseHeaders(headers) {
    var out = {};
    var position = 0;
    while (position < headers.length) {
        var nameLength = headers.readUInt8(position++);
        var name = headers.slice(position, position + nameLength).toString();
        position += nameLength;
        switch (headers.readUInt8(position++)) {
            case 0 /* boolTrue */:
                out[name] = {
                    type: BOOLEAN_TAG,
                    value: true
                };
                break;
            case 1 /* boolFalse */:
                out[name] = {
                    type: BOOLEAN_TAG,
                    value: false
                };
                break;
            case 2 /* byte */:
                out[name] = {
                    type: BYTE_TAG,
                    value: headers.readInt8(position++)
                };
                break;
            case 3 /* short */:
                out[name] = {
                    type: SHORT_TAG,
                    value: headers.readInt16BE(position)
                };
                position += 2;
                break;
            case 4 /* integer */:
                out[name] = {
                    type: INT_TAG,
                    value: headers.readInt32BE(position)
                };
                position += 4;
                break;
            case 5 /* long */:
                out[name] = {
                    type: LONG_TAG,
                    value: new Int64(headers.slice(position, position + 8))
                };
                position += 8;
                break;
            case 6 /* byteArray */:
                var binaryLength = headers.readUInt16BE(position);
                position += 2;
                out[name] = {
                    type: BINARY_TAG,
                    value: headers.slice(position, position + binaryLength)
                };
                position += binaryLength;
                break;
            case 7 /* string */:
                var stringLength = headers.readUInt16BE(position);
                position += 2;
                out[name] = {
                    type: STRING_TAG,
                    value: headers.slice(
                        position,
                        position + stringLength
                    ).toString()
                };
                position += stringLength;
                break;
            case 8 /* timestamp */:
                out[name] = {
                    type: TIMESTAMP_TAG,
                    value: new Date(
                        new Int64(headers.slice(position, position + 8))
                            .valueOf()
                    )
                };
                position += 8;
                break;
            case 9 /* uuid */:
                var uuidChars = headers.slice(position, position + 16)
                    .toString('hex');
                position += 16;
                out[name] = {
                    type: UUID_TAG,
                    value: uuidChars.substr(0, 8) + '-' +
                        uuidChars.substr(8, 4) + '-' +
                        uuidChars.substr(12, 4) + '-' +
                        uuidChars.substr(16, 4) + '-' +
                        uuidChars.substr(20)
                };
                break;
            default:
                throw new Error('Unrecognized header type tag');
        }
    }
    return out;
}

function parseMessage(message) {
    var parsed = splitMessage(message);
    return { headers: parseHeaders(parsed.headers), body: parsed.body };
}

/**
 * @api private
 */
module.exports = {
    parseMessage: parseMessage
};

},{"./int64":29,"./split-message":32}],32:[function(require,module,exports){
var util = require('../core').util;
var toBuffer = util.buffer.toBuffer;

// All prelude components are unsigned, 32-bit integers
var PRELUDE_MEMBER_LENGTH = 4;
// The prelude consists of two components
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
// Checksums are always CRC32 hashes.
var CHECKSUM_LENGTH = 4;
// Messages must include a full prelude, a prelude checksum, and a message checksum
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;

/**
 * @api private
 *
 * @param {Buffer} message
 */
function splitMessage(message) {
    if (!util.Buffer.isBuffer(message)) message = toBuffer(message);

    if (message.length < MINIMUM_MESSAGE_LENGTH) {
        throw new Error('Provided message too short to accommodate event stream message overhead');
    }

    if (message.length !== message.readUInt32BE(0)) {
        throw new Error('Reported message length does not match received message length');
    }

    var expectedPreludeChecksum = message.readUInt32BE(PRELUDE_LENGTH);

    if (
        expectedPreludeChecksum !== util.crypto.crc32(
            message.slice(0, PRELUDE_LENGTH)
        )
    ) {
        throw new Error(
            'The prelude checksum specified in the message (' +
            expectedPreludeChecksum +
            ') does not match the calculated CRC32 checksum.'
        );
    }

    var expectedMessageChecksum = message.readUInt32BE(message.length - CHECKSUM_LENGTH);

    if (
        expectedMessageChecksum !== util.crypto.crc32(
            message.slice(0, message.length - CHECKSUM_LENGTH)
        )
    ) {
        throw new Error(
            'The message checksum did not match the expected value of ' +
                expectedMessageChecksum
        );
    }

    var headersStart = PRELUDE_LENGTH + CHECKSUM_LENGTH;
    var headersEnd = headersStart + message.readUInt32BE(PRELUDE_MEMBER_LENGTH);

    return {
        headers: message.slice(headersStart, headersEnd),
        body: message.slice(headersEnd, message.length - CHECKSUM_LENGTH),
    };
}

/**
 * @api private
 */
module.exports = {
    splitMessage: splitMessage
};

},{"../core":18}],33:[function(require,module,exports){
var AWS = require('./core');
var SequentialExecutor = require('./sequential_executor');
var DISCOVER_ENDPOINT = require('./discover_endpoint').discoverEndpoint;
/**
 * The namespace used to register global event listeners for request building
 * and sending.
 */
AWS.EventListeners = {
  /**
   * @!attribute VALIDATE_CREDENTIALS
   *   A request listener that validates whether the request is being
   *   sent with credentials.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating credentials
   *     var listener = AWS.EventListeners.Core.VALIDATE_CREDENTIALS;
   *     request.removeListener('validate', listener);
   *   @readonly
   *   @return [Function]
   * @!attribute VALIDATE_REGION
   *   A request listener that validates whether the region is set
   *   for a request.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating region configuration
   *     var listener = AWS.EventListeners.Core.VALIDATE_REGION;
   *     request.removeListener('validate', listener);
   *   @readonly
   *   @return [Function]
   * @!attribute VALIDATE_PARAMETERS
   *   A request listener that validates input parameters in a request.
   *   Handles the {AWS.Request~validate 'validate' Request event}
   *   @example Sending a request without validating parameters
   *     var listener = AWS.EventListeners.Core.VALIDATE_PARAMETERS;
   *     request.removeListener('validate', listener);
   *   @example Disable parameter validation globally
   *     AWS.EventListeners.Core.removeListener('validate',
   *       AWS.EventListeners.Core.VALIDATE_REGION);
   *   @readonly
   *   @return [Function]
   * @!attribute SEND
   *   A request listener that initiates the HTTP connection for a
   *   request being sent. Handles the {AWS.Request~send 'send' Request event}
   *   @example Replacing the HTTP handler
   *     var listener = AWS.EventListeners.Core.SEND;
   *     request.removeListener('send', listener);
   *     request.on('send', function(response) {
   *       customHandler.send(response);
   *     });
   *   @return [Function]
   *   @readonly
   * @!attribute HTTP_DATA
   *   A request listener that reads data from the HTTP connection in order
   *   to build the response data.
   *   Handles the {AWS.Request~httpData 'httpData' Request event}.
   *   Remove this handler if you are overriding the 'httpData' event and
   *   do not want extra data processing and buffering overhead.
   *   @example Disabling default data processing
   *     var listener = AWS.EventListeners.Core.HTTP_DATA;
   *     request.removeListener('httpData', listener);
   *   @return [Function]
   *   @readonly
   */
  Core: {} /* doc hack */
};

/**
 * @api private
 */
function getOperationAuthtype(req) {
  if (!req.service.api.operations) {
    return '';
  }
  var operation = req.service.api.operations[req.operation];
  return operation ? operation.authtype : '';
}

AWS.EventListeners = {
  Core: new SequentialExecutor().addNamedListeners(function(add, addAsync) {
    addAsync('VALIDATE_CREDENTIALS', 'validate',
        function VALIDATE_CREDENTIALS(req, done) {
      if (!req.service.api.signatureVersion && !req.service.config.signatureVersion) return done(); // none
      req.service.config.getCredentials(function(err) {
        if (err) {
          req.response.error = AWS.util.error(err,
            {code: 'CredentialsError', message: 'Missing credentials in config'});
        }
        done();
      });
    });

    add('VALIDATE_REGION', 'validate', function VALIDATE_REGION(req) {
      if (!req.service.config.region && !req.service.isGlobalEndpoint) {
        req.response.error = AWS.util.error(new Error(),
          {code: 'ConfigError', message: 'Missing region in config'});
      }
    });

    add('BUILD_IDEMPOTENCY_TOKENS', 'validate', function BUILD_IDEMPOTENCY_TOKENS(req) {
      if (!req.service.api.operations) {
        return;
      }
      var operation = req.service.api.operations[req.operation];
      if (!operation) {
        return;
      }
      var idempotentMembers = operation.idempotentMembers;
      if (!idempotentMembers.length) {
        return;
      }
      // creates a copy of params so user's param object isn't mutated
      var params = AWS.util.copy(req.params);
      for (var i = 0, iLen = idempotentMembers.length; i < iLen; i++) {
        if (!params[idempotentMembers[i]]) {
          // add the member
          params[idempotentMembers[i]] = AWS.util.uuid.v4();
        }
      }
      req.params = params;
    });

    add('VALIDATE_PARAMETERS', 'validate', function VALIDATE_PARAMETERS(req) {
      if (!req.service.api.operations) {
        return;
      }
      var rules = req.service.api.operations[req.operation].input;
      var validation = req.service.config.paramValidation;
      new AWS.ParamValidator(validation).validate(rules, req.params);
    });

    addAsync('COMPUTE_SHA256', 'afterBuild', function COMPUTE_SHA256(req, done) {
      req.haltHandlersOnError();
      if (!req.service.api.operations) {
        return;
      }
      var operation = req.service.api.operations[req.operation];
      var authtype = operation ? operation.authtype : '';
      if (!req.service.api.signatureVersion && !authtype && !req.service.config.signatureVersion) return done(); // none
      if (req.service.getSignerClass(req) === AWS.Signers.V4) {
        var body = req.httpRequest.body || '';
        if (authtype.indexOf('unsigned-body') >= 0) {
          req.httpRequest.headers['X-Amz-Content-Sha256'] = 'UNSIGNED-PAYLOAD';
          return done();
        }
        AWS.util.computeSha256(body, function(err, sha) {
          if (err) {
            done(err);
          }
          else {
            req.httpRequest.headers['X-Amz-Content-Sha256'] = sha;
            done();
          }
        });
      } else {
        done();
      }
    });

    add('SET_CONTENT_LENGTH', 'afterBuild', function SET_CONTENT_LENGTH(req) {
      var authtype = getOperationAuthtype(req);
      var payloadMember = AWS.util.getRequestPayloadShape(req);
      if (req.httpRequest.headers['Content-Length'] === undefined) {
        try {
          var length = AWS.util.string.byteLength(req.httpRequest.body);
          req.httpRequest.headers['Content-Length'] = length;
        } catch (err) {
          if (payloadMember && payloadMember.isStreaming) {
            if (payloadMember.requiresLength) {
              //streaming payload requires length(s3, glacier)
              throw err;
            } else if (authtype.indexOf('unsigned-body') >= 0) {
              //unbounded streaming payload(lex, mediastore)
              req.httpRequest.headers['Transfer-Encoding'] = 'chunked';
              return;
            } else {
              throw err;
            }
          }
          throw err;
        }
      }
    });

    add('SET_HTTP_HOST', 'afterBuild', function SET_HTTP_HOST(req) {
      req.httpRequest.headers['Host'] = req.httpRequest.endpoint.host;
    });

    add('RESTART', 'restart', function RESTART() {
      var err = this.response.error;
      if (!err || !err.retryable) return;

      this.httpRequest = new AWS.HttpRequest(
        this.service.endpoint,
        this.service.region
      );

      if (this.response.retryCount < this.service.config.maxRetries) {
        this.response.retryCount++;
      } else {
        this.response.error = null;
      }
    });

    var addToHead = true;
    addAsync('DISCOVER_ENDPOINT', 'sign', DISCOVER_ENDPOINT, addToHead);

    addAsync('SIGN', 'sign', function SIGN(req, done) {
      var service = req.service;
      var operations = req.service.api.operations || {};
      var operation = operations[req.operation];
      var authtype = operation ? operation.authtype : '';
      if (!service.api.signatureVersion && !authtype && !service.config.signatureVersion) return done(); // none

      service.config.getCredentials(function (err, credentials) {
        if (err) {
          req.response.error = err;
          return done();
        }

        try {
          var date = service.getSkewCorrectedDate();
          var SignerClass = service.getSignerClass(req);
          var signer = new SignerClass(req.httpRequest,
            service.api.signingName || service.api.endpointPrefix,
            {
              signatureCache: service.config.signatureCache,
              operation: operation,
              signatureVersion: service.api.signatureVersion
            });
          signer.setServiceClientId(service._clientId);

          // clear old authorization headers
          delete req.httpRequest.headers['Authorization'];
          delete req.httpRequest.headers['Date'];
          delete req.httpRequest.headers['X-Amz-Date'];

          // add new authorization
          signer.addAuthorization(credentials, date);
          req.signedAt = date;
        } catch (e) {
          req.response.error = e;
        }
        done();
      });
    });

    add('VALIDATE_RESPONSE', 'validateResponse', function VALIDATE_RESPONSE(resp) {
      if (this.service.successfulResponse(resp, this)) {
        resp.data = {};
        resp.error = null;
      } else {
        resp.data = null;
        resp.error = AWS.util.error(new Error(),
          {code: 'UnknownError', message: 'An unknown error occurred.'});
      }
    });

    addAsync('SEND', 'send', function SEND(resp, done) {
      resp.httpResponse._abortCallback = done;
      resp.error = null;
      resp.data = null;

      function callback(httpResp) {
        resp.httpResponse.stream = httpResp;
        var stream = resp.request.httpRequest.stream;
        var service = resp.request.service;
        var api = service.api;
        var operationName = resp.request.operation;
        var operation = api.operations[operationName] || {};

        httpResp.on('headers', function onHeaders(statusCode, headers, statusMessage) {
          resp.request.emit(
            'httpHeaders',
            [statusCode, headers, resp, statusMessage]
          );

          if (!resp.httpResponse.streaming) {
            if (AWS.HttpClient.streamsApiVersion === 2) { // streams2 API check
              // if we detect event streams, we're going to have to
              // return the stream immediately
              if (operation.hasEventOutput && service.successfulResponse(resp)) {
                // skip reading the IncomingStream
                resp.request.emit('httpDone');
                done();
                return;
              }

              httpResp.on('readable', function onReadable() {
                var data = httpResp.read();
                if (data !== null) {
                  resp.request.emit('httpData', [data, resp]);
                }
              });
            } else { // legacy streams API
              httpResp.on('data', function onData(data) {
                resp.request.emit('httpData', [data, resp]);
              });
            }
          }
        });

        httpResp.on('end', function onEnd() {
          if (!stream || !stream.didCallback) {
            if (AWS.HttpClient.streamsApiVersion === 2 && (operation.hasEventOutput && service.successfulResponse(resp))) {
              // don't concatenate response chunks when streaming event stream data when response is successful
              return;
            }
            resp.request.emit('httpDone');
            done();
          }
        });
      }

      function progress(httpResp) {
        httpResp.on('sendProgress', function onSendProgress(value) {
          resp.request.emit('httpUploadProgress', [value, resp]);
        });

        httpResp.on('receiveProgress', function onReceiveProgress(value) {
          resp.request.emit('httpDownloadProgress', [value, resp]);
        });
      }

      function error(err) {
        if (err.code !== 'RequestAbortedError') {
          var errCode = err.code === 'TimeoutError' ? err.code : 'NetworkingError';
          err = AWS.util.error(err, {
            code: errCode,
            region: resp.request.httpRequest.region,
            hostname: resp.request.httpRequest.endpoint.hostname,
            retryable: true
          });
        }
        resp.error = err;
        resp.request.emit('httpError', [resp.error, resp], function() {
          done();
        });
      }

      function executeSend() {
        var http = AWS.HttpClient.getInstance();
        var httpOptions = resp.request.service.config.httpOptions || {};
        try {
          var stream = http.handleRequest(resp.request.httpRequest, httpOptions,
                                          callback, error);
          progress(stream);
        } catch (err) {
          error(err);
        }
      }
      var timeDiff = (resp.request.service.getSkewCorrectedDate() - this.signedAt) / 1000;
      if (timeDiff >= 60 * 10) { // if we signed 10min ago, re-sign
        this.emit('sign', [this], function(err) {
          if (err) done(err);
          else executeSend();
        });
      } else {
        executeSend();
      }
    });

    add('HTTP_HEADERS', 'httpHeaders',
        function HTTP_HEADERS(statusCode, headers, resp, statusMessage) {
      resp.httpResponse.statusCode = statusCode;
      resp.httpResponse.statusMessage = statusMessage;
      resp.httpResponse.headers = headers;
      resp.httpResponse.body = AWS.util.buffer.toBuffer('');
      resp.httpResponse.buffers = [];
      resp.httpResponse.numBytes = 0;
      var dateHeader = headers.date || headers.Date;
      var service = resp.request.service;
      if (dateHeader) {
        var serverTime = Date.parse(dateHeader);
        if (service.config.correctClockSkew
            && service.isClockSkewed(serverTime)) {
          service.applyClockOffset(serverTime);
        }
      }
    });

    add('HTTP_DATA', 'httpData', function HTTP_DATA(chunk, resp) {
      if (chunk) {
        if (AWS.util.isNode()) {
          resp.httpResponse.numBytes += chunk.length;

          var total = resp.httpResponse.headers['content-length'];
          var progress = { loaded: resp.httpResponse.numBytes, total: total };
          resp.request.emit('httpDownloadProgress', [progress, resp]);
        }

        resp.httpResponse.buffers.push(AWS.util.buffer.toBuffer(chunk));
      }
    });

    add('HTTP_DONE', 'httpDone', function HTTP_DONE(resp) {
      // convert buffers array into single buffer
      if (resp.httpResponse.buffers && resp.httpResponse.buffers.length > 0) {
        var body = AWS.util.buffer.concat(resp.httpResponse.buffers);
        resp.httpResponse.body = body;
      }
      delete resp.httpResponse.numBytes;
      delete resp.httpResponse.buffers;
    });

    add('FINALIZE_ERROR', 'retry', function FINALIZE_ERROR(resp) {
      if (resp.httpResponse.statusCode) {
        resp.error.statusCode = resp.httpResponse.statusCode;
        if (resp.error.retryable === undefined) {
          resp.error.retryable = this.service.retryableError(resp.error, this);
        }
      }
    });

    add('INVALIDATE_CREDENTIALS', 'retry', function INVALIDATE_CREDENTIALS(resp) {
      if (!resp.error) return;
      switch (resp.error.code) {
        case 'RequestExpired': // EC2 only
        case 'ExpiredTokenException':
        case 'ExpiredToken':
          resp.error.retryable = true;
          resp.request.service.config.credentials.expired = true;
      }
    });

    add('EXPIRED_SIGNATURE', 'retry', function EXPIRED_SIGNATURE(resp) {
      var err = resp.error;
      if (!err) return;
      if (typeof err.code === 'string' && typeof err.message === 'string') {
        if (err.code.match(/Signature/) && err.message.match(/expired/)) {
          resp.error.retryable = true;
        }
      }
    });

    add('CLOCK_SKEWED', 'retry', function CLOCK_SKEWED(resp) {
      if (!resp.error) return;
      if (this.service.clockSkewError(resp.error)
          && this.service.config.correctClockSkew) {
        resp.error.retryable = true;
      }
    });

    add('REDIRECT', 'retry', function REDIRECT(resp) {
      if (resp.error && resp.error.statusCode >= 300 &&
          resp.error.statusCode < 400 && resp.httpResponse.headers['location']) {
        this.httpRequest.endpoint =
          new AWS.Endpoint(resp.httpResponse.headers['location']);
        this.httpRequest.headers['Host'] = this.httpRequest.endpoint.host;
        resp.error.redirect = true;
        resp.error.retryable = true;
      }
    });

    add('RETRY_CHECK', 'retry', function RETRY_CHECK(resp) {
      if (resp.error) {
        if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
          resp.error.retryDelay = 0;
        } else if (resp.retryCount < resp.maxRetries) {
          resp.error.retryDelay = this.service.retryDelays(resp.retryCount) || 0;
        }
      }
    });

    addAsync('RESET_RETRY_STATE', 'afterRetry', function RESET_RETRY_STATE(resp, done) {
      var delay, willRetry = false;

      if (resp.error) {
        delay = resp.error.retryDelay || 0;
        if (resp.error.retryable && resp.retryCount < resp.maxRetries) {
          resp.retryCount++;
          willRetry = true;
        } else if (resp.error.redirect && resp.redirectCount < resp.maxRedirects) {
          resp.redirectCount++;
          willRetry = true;
        }
      }

      if (willRetry) {
        resp.error = null;
        setTimeout(done, delay);
      } else {
        done();
      }
    });
  }),

  CorePost: new SequentialExecutor().addNamedListeners(function(add) {
    add('EXTRACT_REQUEST_ID', 'extractData', AWS.util.extractRequestId);
    add('EXTRACT_REQUEST_ID', 'extractError', AWS.util.extractRequestId);

    add('ENOTFOUND_ERROR', 'httpError', function ENOTFOUND_ERROR(err) {
      if (err.code === 'NetworkingError' && err.errno === 'ENOTFOUND') {
        var message = 'Inaccessible host: `' + err.hostname +
          '\'. This service may not be available in the `' + err.region +
          '\' region.';
        this.response.error = AWS.util.error(new Error(message), {
          code: 'UnknownEndpoint',
          region: err.region,
          hostname: err.hostname,
          retryable: true,
          originalError: err
        });
      }
    });
  }),

  Logger: new SequentialExecutor().addNamedListeners(function(add) {
    add('LOG_REQUEST', 'complete', function LOG_REQUEST(resp) {
      var req = resp.request;
      var logger = req.service.config.logger;
      if (!logger) return;
      function filterSensitiveLog(inputShape, shape) {
        if (!shape) {
          return shape;
        }
        switch (inputShape.type) {
          case 'structure':
            var struct = {};
            AWS.util.each(shape, function(subShapeName, subShape) {
              if (Object.prototype.hasOwnProperty.call(inputShape.members, subShapeName)) {
                struct[subShapeName] = filterSensitiveLog(inputShape.members[subShapeName], subShape);
              } else {
                struct[subShapeName] = subShape;
              }
            });
            return struct;
          case 'list':
            var list = [];
            AWS.util.arrayEach(shape, function(subShape, index) {
              list.push(filterSensitiveLog(inputShape.member, subShape));
            });
            return list;
          case 'map':
            var map = {};
            AWS.util.each(shape, function(key, value) {
              map[key] = filterSensitiveLog(inputShape.value, value);
            });
            return map;
          default:
            if (inputShape.isSensitive) {
              return '***SensitiveInformation***';
            } else {
              return shape;
            }
        }
      }

      function buildMessage() {
        var time = resp.request.service.getSkewCorrectedDate().getTime();
        var delta = (time - req.startTime.getTime()) / 1000;
        var ansi = logger.isTTY ? true : false;
        var status = resp.httpResponse.statusCode;
        var censoredParams = req.params;
        if (
          req.service.api.operations &&
              req.service.api.operations[req.operation] &&
              req.service.api.operations[req.operation].input
        ) {
          var inputShape = req.service.api.operations[req.operation].input;
          censoredParams = filterSensitiveLog(inputShape, req.params);
        }
        var params = require('util').inspect(censoredParams, true, null);
        var message = '';
        if (ansi) message += '\x1B[33m';
        message += '[AWS ' + req.service.serviceIdentifier + ' ' + status;
        message += ' ' + delta.toString() + 's ' + resp.retryCount + ' retries]';
        if (ansi) message += '\x1B[0;1m';
        message += ' ' + AWS.util.string.lowerFirst(req.operation);
        message += '(' + params + ')';
        if (ansi) message += '\x1B[0m';
        return message;
      }

      var line = buildMessage();
      if (typeof logger.log === 'function') {
        logger.log(line);
      } else if (typeof logger.write === 'function') {
        logger.write(line + '\n');
      }
    });
  }),

  Json: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/json');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Rest: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/rest');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestJson: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/rest_json');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  RestXml: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/rest_xml');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  }),

  Query: new SequentialExecutor().addNamedListeners(function(add) {
    var svc = require('./protocol/query');
    add('BUILD', 'build', svc.buildRequest);
    add('EXTRACT_DATA', 'extractData', svc.extractData);
    add('EXTRACT_ERROR', 'extractError', svc.extractError);
  })
};

},{"./core":18,"./discover_endpoint":26,"./protocol/json":46,"./protocol/query":47,"./protocol/rest":48,"./protocol/rest_json":49,"./protocol/rest_xml":50,"./sequential_executor":58,"util":99}],34:[function(require,module,exports){
var AWS = require('./core');
var inherit = AWS.util.inherit;

/**
 * The endpoint that a service will talk to, for example,
 * `'https://ec2.ap-southeast-1.amazonaws.com'`. If
 * you need to override an endpoint for a service, you can
 * set the endpoint on a service by passing the endpoint
 * object with the `endpoint` option key:
 *
 * ```javascript
 * var ep = new AWS.Endpoint('awsproxy.example.com');
 * var s3 = new AWS.S3({endpoint: ep});
 * s3.service.endpoint.hostname == 'awsproxy.example.com'
 * ```
 *
 * Note that if you do not specify a protocol, the protocol will
 * be selected based on your current {AWS.config} configuration.
 *
 * @!attribute protocol
 *   @return [String] the protocol (http or https) of the endpoint
 *     URL
 * @!attribute hostname
 *   @return [String] the host portion of the endpoint, e.g.,
 *     example.com
 * @!attribute host
 *   @return [String] the host portion of the endpoint including
 *     the port, e.g., example.com:80
 * @!attribute port
 *   @return [Integer] the port of the endpoint
 * @!attribute href
 *   @return [String] the full URL of the endpoint
 */
AWS.Endpoint = inherit({

  /**
   * @overload Endpoint(endpoint)
   *   Constructs a new endpoint given an endpoint URL. If the
   *   URL omits a protocol (http or https), the default protocol
   *   set in the global {AWS.config} will be used.
   *   @param endpoint [String] the URL to construct an endpoint from
   */
  constructor: function Endpoint(endpoint, config) {
    AWS.util.hideProperties(this, ['slashes', 'auth', 'hash', 'search', 'query']);

    if (typeof endpoint === 'undefined' || endpoint === null) {
      throw new Error('Invalid endpoint: ' + endpoint);
    } else if (typeof endpoint !== 'string') {
      return AWS.util.copy(endpoint);
    }

    if (!endpoint.match(/^http/)) {
      var useSSL = config && config.sslEnabled !== undefined ?
        config.sslEnabled : AWS.config.sslEnabled;
      endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
    }

    AWS.util.update(this, AWS.util.urlParse(endpoint));

    // Ensure the port property is set as an integer
    if (this.port) {
      this.port = parseInt(this.port, 10);
    } else {
      this.port = this.protocol === 'https:' ? 443 : 80;
    }
  }

});

/**
 * The low level HTTP request object, encapsulating all HTTP header
 * and body data sent by a service request.
 *
 * @!attribute method
 *   @return [String] the HTTP method of the request
 * @!attribute path
 *   @return [String] the path portion of the URI, e.g.,
 *     "/list/?start=5&num=10"
 * @!attribute headers
 *   @return [map<String,String>]
 *     a map of header keys and their respective values
 * @!attribute body
 *   @return [String] the request body payload
 * @!attribute endpoint
 *   @return [AWS.Endpoint] the endpoint for the request
 * @!attribute region
 *   @api private
 *   @return [String] the region, for signing purposes only.
 */
AWS.HttpRequest = inherit({

  /**
   * @api private
   */
  constructor: function HttpRequest(endpoint, region) {
    endpoint = new AWS.Endpoint(endpoint);
    this.method = 'POST';
    this.path = endpoint.path || '/';
    this.headers = {};
    this.body = '';
    this.endpoint = endpoint;
    this.region = region;
    this._userAgent = '';
    this.setUserAgent();
  },

  /**
   * @api private
   */
  setUserAgent: function setUserAgent() {
    this._userAgent = this.headers[this.getUserAgentHeaderName()] = AWS.util.userAgent();
  },

  getUserAgentHeaderName: function getUserAgentHeaderName() {
    var prefix = AWS.util.isBrowser() ? 'X-Amz-' : '';
    return prefix + 'User-Agent';
  },

  /**
   * @api private
   */
  appendToUserAgent: function appendToUserAgent(agentPartial) {
    if (typeof agentPartial === 'string' && agentPartial) {
      this._userAgent += ' ' + agentPartial;
    }
    this.headers[this.getUserAgentHeaderName()] = this._userAgent;
  },

  /**
   * @api private
   */
  getUserAgent: function getUserAgent() {
    return this._userAgent;
  },

  /**
   * @return [String] the part of the {path} excluding the
   *   query string
   */
  pathname: function pathname() {
    return this.path.split('?', 1)[0];
  },

  /**
   * @return [String] the query string portion of the {path}
   */
  search: function search() {
    var query = this.path.split('?', 2)[1];
    if (query) {
      query = AWS.util.queryStringParse(query);
      return AWS.util.queryParamsToString(query);
    }
    return '';
  },

  /**
   * @api private
   * update httpRequest endpoint with endpoint string
   */
  updateEndpoint: function updateEndpoint(endpointStr) {
    var newEndpoint = new AWS.Endpoint(endpointStr);
    this.endpoint = newEndpoint;
    this.path = newEndpoint.path || '/';
  }
});

/**
 * The low level HTTP response object, encapsulating all HTTP header
 * and body data returned from the request.
 *
 * @!attribute statusCode
 *   @return [Integer] the HTTP status code of the response (e.g., 200, 404)
 * @!attribute headers
 *   @return [map<String,String>]
 *      a map of response header keys and their respective values
 * @!attribute body
 *   @return [String] the response body payload
 * @!attribute [r] streaming
 *   @return [Boolean] whether this response is being streamed at a low-level.
 *     Defaults to `false` (buffered reads). Do not modify this manually, use
 *     {createUnbufferedStream} to convert the stream to unbuffered mode
 *     instead.
 */
AWS.HttpResponse = inherit({

  /**
   * @api private
   */
  constructor: function HttpResponse() {
    this.statusCode = undefined;
    this.headers = {};
    this.body = undefined;
    this.streaming = false;
    this.stream = null;
  },

  /**
   * Disables buffering on the HTTP response and returns the stream for reading.
   * @return [Stream, XMLHttpRequest, null] the underlying stream object.
   *   Use this object to directly read data off of the stream.
   * @note This object is only available after the {AWS.Request~httpHeaders}
   *   event has fired. This method must be called prior to
   *   {AWS.Request~httpData}.
   * @example Taking control of a stream
   *   request.on('httpHeaders', function(statusCode, headers) {
   *     if (statusCode < 300) {
   *       if (headers.etag === 'xyz') {
   *         // pipe the stream, disabling buffering
   *         var stream = this.response.httpResponse.createUnbufferedStream();
   *         stream.pipe(process.stdout);
   *       } else { // abort this request and set a better error message
   *         this.abort();
   *         this.response.error = new Error('Invalid ETag');
   *       }
   *     }
   *   }).send(console.log);
   */
  createUnbufferedStream: function createUnbufferedStream() {
    this.streaming = true;
    return this.stream;
  }
});


AWS.HttpClient = inherit({});

/**
 * @api private
 */
AWS.HttpClient.getInstance = function getInstance() {
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
};

},{"./core":18}],35:[function(require,module,exports){
var AWS = require('../core');
var EventEmitter = require('events').EventEmitter;
require('../http');

/**
 * @api private
 */
AWS.XHRClient = AWS.util.inherit({
  handleRequest: function handleRequest(httpRequest, httpOptions, callback, errCallback) {
    var self = this;
    var endpoint = httpRequest.endpoint;
    var emitter = new EventEmitter();
    var href = endpoint.protocol + '//' + endpoint.hostname;
    if (endpoint.port !== 80 && endpoint.port !== 443) {
      href += ':' + endpoint.port;
    }
    href += httpRequest.path;

    var xhr = new XMLHttpRequest(), headersEmitted = false;
    httpRequest.stream = xhr;

    xhr.addEventListener('readystatechange', function() {
      try {
        if (xhr.status === 0) return; // 0 code is invalid
      } catch (e) { return; }

      if (this.readyState >= this.HEADERS_RECEIVED && !headersEmitted) {
        emitter.statusCode = xhr.status;
        emitter.headers = self.parseHeaders(xhr.getAllResponseHeaders());
        emitter.emit(
          'headers',
          emitter.statusCode,
          emitter.headers,
          xhr.statusText
        );
        headersEmitted = true;
      }
      if (this.readyState === this.DONE) {
        self.finishRequest(xhr, emitter);
      }
    }, false);
    xhr.upload.addEventListener('progress', function (evt) {
      emitter.emit('sendProgress', evt);
    });
    xhr.addEventListener('progress', function (evt) {
      emitter.emit('receiveProgress', evt);
    }, false);
    xhr.addEventListener('timeout', function () {
      errCallback(AWS.util.error(new Error('Timeout'), {code: 'TimeoutError'}));
    }, false);
    xhr.addEventListener('error', function () {
      errCallback(AWS.util.error(new Error('Network Failure'), {
        code: 'NetworkingError'
      }));
    }, false);
    xhr.addEventListener('abort', function () {
      errCallback(AWS.util.error(new Error('Request aborted'), {
        code: 'RequestAbortedError'
      }));
    }, false);

    callback(emitter);
    xhr.open(httpRequest.method, href, httpOptions.xhrAsync !== false);
    AWS.util.each(httpRequest.headers, function (key, value) {
      if (key !== 'Content-Length' && key !== 'User-Agent' && key !== 'Host') {
        xhr.setRequestHeader(key, value);
      }
    });

    if (httpOptions.timeout && httpOptions.xhrAsync !== false) {
      xhr.timeout = httpOptions.timeout;
    }

    if (httpOptions.xhrWithCredentials) {
      xhr.withCredentials = true;
    }
    try { xhr.responseType = 'arraybuffer'; } catch (e) {}

    try {
      if (httpRequest.body) {
        xhr.send(httpRequest.body);
      } else {
        xhr.send();
      }
    } catch (err) {
      if (httpRequest.body && typeof httpRequest.body.buffer === 'object') {
        xhr.send(httpRequest.body.buffer); // send ArrayBuffer directly
      } else {
        throw err;
      }
    }

    return emitter;
  },

  parseHeaders: function parseHeaders(rawHeaders) {
    var headers = {};
    AWS.util.arrayEach(rawHeaders.split(/\r?\n/), function (line) {
      var key = line.split(':', 1)[0];
      var value = line.substring(key.length + 2);
      if (key.length > 0) headers[key.toLowerCase()] = value;
    });
    return headers;
  },

  finishRequest: function finishRequest(xhr, emitter) {
    var buffer;
    if (xhr.responseType === 'arraybuffer' && xhr.response) {
      var ab = xhr.response;
      buffer = new AWS.util.Buffer(ab.byteLength);
      var view = new Uint8Array(ab);
      for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
      }
    }

    try {
      if (!buffer && typeof xhr.responseText === 'string') {
        buffer = new AWS.util.Buffer(xhr.responseText);
      }
    } catch (e) {}

    if (buffer) emitter.emit('data', buffer);
    emitter.emit('end');
  }
});

/**
 * @api private
 */
AWS.HttpClient.prototype = AWS.XHRClient.prototype;

/**
 * @api private
 */
AWS.HttpClient.streamsApiVersion = 1;

},{"../core":18,"../http":34,"events":81}],36:[function(require,module,exports){
var util = require('../util');

function JsonBuilder() { }

JsonBuilder.prototype.build = function(value, shape) {
  return JSON.stringify(translate(value, shape));
};

function translate(value, shape) {
  if (!shape || value === undefined || value === null) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  var struct = {};
  util.each(structure, function(name, value) {
    var memberShape = shape.members[name];
    if (memberShape) {
      if (memberShape.location !== 'body') return;
      var locationName = memberShape.isLocationName ? memberShape.name : name;
      var result = translate(value, memberShape);
      if (result !== undefined) struct[locationName] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result !== undefined) out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result !== undefined) out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toWireFormat(value);
}

/**
 * @api private
 */
module.exports = JsonBuilder;

},{"../util":71}],37:[function(require,module,exports){
var util = require('../util');

function JsonParser() { }

JsonParser.prototype.parse = function(value, shape) {
  return translate(JSON.parse(value), shape);
};

function translate(value, shape) {
  if (!shape || value === undefined) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  if (structure == null) return undefined;

  var struct = {};
  var shapeMembers = shape.members;
  util.each(shapeMembers, function(name, memberShape) {
    var locationName = memberShape.isLocationName ? memberShape.name : name;
    if (Object.prototype.hasOwnProperty.call(structure, locationName)) {
      var value = structure[locationName];
      var result = translate(value, memberShape);
      if (result !== undefined) struct[name] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  if (list == null) return undefined;

  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result === undefined) out.push(null);
    else out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  if (map == null) return undefined;

  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result === undefined) out[key] = null;
    else out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toType(value);
}

/**
 * @api private
 */
module.exports = JsonParser;

},{"../util":71}],38:[function(require,module,exports){
var Collection = require('./collection');
var Operation = require('./operation');
var Shape = require('./shape');
var Paginator = require('./paginator');
var ResourceWaiter = require('./resource_waiter');

var util = require('../util');
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Api(api, options) {
  var self = this;
  api = api || {};
  options = options || {};
  options.api = this;

  api.metadata = api.metadata || {};

  property(this, 'isApi', true, false);
  property(this, 'apiVersion', api.metadata.apiVersion);
  property(this, 'endpointPrefix', api.metadata.endpointPrefix);
  property(this, 'signingName', api.metadata.signingName);
  property(this, 'globalEndpoint', api.metadata.globalEndpoint);
  property(this, 'signatureVersion', api.metadata.signatureVersion);
  property(this, 'jsonVersion', api.metadata.jsonVersion);
  property(this, 'targetPrefix', api.metadata.targetPrefix);
  property(this, 'protocol', api.metadata.protocol);
  property(this, 'timestampFormat', api.metadata.timestampFormat);
  property(this, 'xmlNamespaceUri', api.metadata.xmlNamespace);
  property(this, 'abbreviation', api.metadata.serviceAbbreviation);
  property(this, 'fullName', api.metadata.serviceFullName);
  property(this, 'serviceId', api.metadata.serviceId);

  memoizedProperty(this, 'className', function() {
    var name = api.metadata.serviceAbbreviation || api.metadata.serviceFullName;
    if (!name) return null;

    name = name.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, '');
    if (name === 'ElasticLoadBalancing') name = 'ELB';
    return name;
  });

  function addEndpointOperation(name, operation) {
    if (operation.endpointoperation === true) {
      property(self, 'endpointOperation', util.string.lowerFirst(name));
    }
  }

  property(this, 'operations', new Collection(api.operations, options, function(name, operation) {
    return new Operation(name, operation, options);
  }, util.string.lowerFirst, addEndpointOperation));

  property(this, 'shapes', new Collection(api.shapes, options, function(name, shape) {
    return Shape.create(shape, options);
  }));

  property(this, 'paginators', new Collection(api.paginators, options, function(name, paginator) {
    return new Paginator(name, paginator, options);
  }));

  property(this, 'waiters', new Collection(api.waiters, options, function(name, waiter) {
    return new ResourceWaiter(name, waiter, options);
  }, util.string.lowerFirst));

  if (options.documentation) {
    property(this, 'documentation', api.documentation);
    property(this, 'documentationUrl', api.documentationUrl);
  }
}

/**
 * @api private
 */
module.exports = Api;

},{"../util":71,"./collection":39,"./operation":40,"./paginator":41,"./resource_waiter":42,"./shape":43}],39:[function(require,module,exports){
var memoizedProperty = require('../util').memoizedProperty;

function memoize(name, value, factory, nameTr) {
  memoizedProperty(this, nameTr(name), function() {
    return factory(name, value);
  });
}

function Collection(iterable, options, factory, nameTr, callback) {
  nameTr = nameTr || String;
  var self = this;

  for (var id in iterable) {
    if (Object.prototype.hasOwnProperty.call(iterable, id)) {
      memoize.call(self, id, iterable[id], factory, nameTr);
      if (callback) callback(id, iterable[id]);
    }
  }
}

/**
 * @api private
 */
module.exports = Collection;

},{"../util":71}],40:[function(require,module,exports){
var Shape = require('./shape');

var util = require('../util');
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Operation(name, operation, options) {
  var self = this;
  options = options || {};

  property(this, 'name', operation.name || name);
  property(this, 'api', options.api, false);

  operation.http = operation.http || {};
  property(this, 'endpoint', operation.endpoint);
  property(this, 'httpMethod', operation.http.method || 'POST');
  property(this, 'httpPath', operation.http.requestUri || '/');
  property(this, 'authtype', operation.authtype || '');
  property(
    this,
    'endpointDiscoveryRequired',
    operation.endpointdiscovery ?
      (operation.endpointdiscovery.required ? 'REQUIRED' : 'OPTIONAL') :
    'NULL'
  );

  memoizedProperty(this, 'input', function() {
    if (!operation.input) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.input, options);
  });

  memoizedProperty(this, 'output', function() {
    if (!operation.output) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.output, options);
  });

  memoizedProperty(this, 'errors', function() {
    var list = [];
    if (!operation.errors) return null;

    for (var i = 0; i < operation.errors.length; i++) {
      list.push(Shape.create(operation.errors[i], options));
    }

    return list;
  });

  memoizedProperty(this, 'paginator', function() {
    return options.api.paginators[name];
  });

  if (options.documentation) {
    property(this, 'documentation', operation.documentation);
    property(this, 'documentationUrl', operation.documentationUrl);
  }

  // idempotentMembers only tracks top-level input shapes
  memoizedProperty(this, 'idempotentMembers', function() {
    var idempotentMembers = [];
    var input = self.input;
    var members = input.members;
    if (!input.members) {
      return idempotentMembers;
    }
    for (var name in members) {
      if (!members.hasOwnProperty(name)) {
        continue;
      }
      if (members[name].isIdempotent === true) {
        idempotentMembers.push(name);
      }
    }
    return idempotentMembers;
  });

  memoizedProperty(this, 'hasEventOutput', function() {
    var output = self.output;
    return hasEventStream(output);
  });
}

function hasEventStream(topLevelShape) {
  var members = topLevelShape.members;
  var payload = topLevelShape.payload;

  if (!topLevelShape.members) {
    return false;
  }

  if (payload) {
    var payloadMember = members[payload];
    return payloadMember.isEventStream;
  }

  // check if any member is an event stream
  for (var name in members) {
    if (!members.hasOwnProperty(name)) {
      if (members[name].isEventStream === true) {
        return true;
      }
    }
  }
  return false;
}

/**
 * @api private
 */
module.exports = Operation;

},{"../util":71,"./shape":43}],41:[function(require,module,exports){
var property = require('../util').property;

function Paginator(name, paginator) {
  property(this, 'inputToken', paginator.input_token);
  property(this, 'limitKey', paginator.limit_key);
  property(this, 'moreResults', paginator.more_results);
  property(this, 'outputToken', paginator.output_token);
  property(this, 'resultKey', paginator.result_key);
}

/**
 * @api private
 */
module.exports = Paginator;

},{"../util":71}],42:[function(require,module,exports){
var util = require('../util');
var property = util.property;

function ResourceWaiter(name, waiter, options) {
  options = options || {};
  property(this, 'name', name);
  property(this, 'api', options.api, false);

  if (waiter.operation) {
    property(this, 'operation', util.string.lowerFirst(waiter.operation));
  }

  var self = this;
  var keys = [
    'type',
    'description',
    'delay',
    'maxAttempts',
    'acceptors'
  ];

  keys.forEach(function(key) {
    var value = waiter[key];
    if (value) {
      property(self, key, value);
    }
  });
}

/**
 * @api private
 */
module.exports = ResourceWaiter;

},{"../util":71}],43:[function(require,module,exports){
var Collection = require('./collection');

var util = require('../util');

function property(obj, name, value) {
  if (value !== null && value !== undefined) {
    util.property.apply(this, arguments);
  }
}

function memoizedProperty(obj, name) {
  if (!obj.constructor.prototype[name]) {
    util.memoizedProperty.apply(this, arguments);
  }
}

function Shape(shape, options, memberName) {
  options = options || {};

  property(this, 'shape', shape.shape);
  property(this, 'api', options.api, false);
  property(this, 'type', shape.type);
  property(this, 'enum', shape.enum);
  property(this, 'min', shape.min);
  property(this, 'max', shape.max);
  property(this, 'pattern', shape.pattern);
  property(this, 'location', shape.location || this.location || 'body');
  property(this, 'name', this.name || shape.xmlName || shape.queryName ||
    shape.locationName || memberName);
  property(this, 'isStreaming', shape.streaming || this.isStreaming || false);
  property(this, 'requiresLength', shape.requiresLength, false);
  property(this, 'isComposite', shape.isComposite || false);
  property(this, 'isShape', true, false);
  property(this, 'isQueryName', Boolean(shape.queryName), false);
  property(this, 'isLocationName', Boolean(shape.locationName), false);
  property(this, 'isIdempotent', shape.idempotencyToken === true);
  property(this, 'isJsonValue', shape.jsonvalue === true);
  property(this, 'isSensitive', shape.sensitive === true || shape.prototype && shape.prototype.sensitive === true);
  property(this, 'isEventStream', Boolean(shape.eventstream), false);
  property(this, 'isEvent', Boolean(shape.event), false);
  property(this, 'isEventPayload', Boolean(shape.eventpayload), false);
  property(this, 'isEventHeader', Boolean(shape.eventheader), false);
  property(this, 'isTimestampFormatSet', Boolean(shape.timestampFormat) || shape.prototype && shape.prototype.isTimestampFormatSet === true, false);
  property(this, 'endpointDiscoveryId', Boolean(shape.endpointdiscoveryid), false);
  property(this, 'hostLabel', Boolean(shape.hostLabel), false);

  if (options.documentation) {
    property(this, 'documentation', shape.documentation);
    property(this, 'documentationUrl', shape.documentationUrl);
  }

  if (shape.xmlAttribute) {
    property(this, 'isXmlAttribute', shape.xmlAttribute || false);
  }

  // type conversion and parsing
  property(this, 'defaultValue', null);
  this.toWireFormat = function(value) {
    if (value === null || value === undefined) return '';
    return value;
  };
  this.toType = function(value) { return value; };
}

/**
 * @api private
 */
Shape.normalizedTypes = {
  character: 'string',
  double: 'float',
  long: 'integer',
  short: 'integer',
  biginteger: 'integer',
  bigdecimal: 'float',
  blob: 'binary'
};

/**
 * @api private
 */
Shape.types = {
  'structure': StructureShape,
  'list': ListShape,
  'map': MapShape,
  'boolean': BooleanShape,
  'timestamp': TimestampShape,
  'float': FloatShape,
  'integer': IntegerShape,
  'string': StringShape,
  'base64': Base64Shape,
  'binary': BinaryShape
};

Shape.resolve = function resolve(shape, options) {
  if (shape.shape) {
    var refShape = options.api.shapes[shape.shape];
    if (!refShape) {
      throw new Error('Cannot find shape reference: ' + shape.shape);
    }

    return refShape;
  } else {
    return null;
  }
};

Shape.create = function create(shape, options, memberName) {
  if (shape.isShape) return shape;

  var refShape = Shape.resolve(shape, options);
  if (refShape) {
    var filteredKeys = Object.keys(shape);
    if (!options.documentation) {
      filteredKeys = filteredKeys.filter(function(name) {
        return !name.match(/documentation/);
      });
    }

    // create an inline shape with extra members
    var InlineShape = function() {
      refShape.constructor.call(this, shape, options, memberName);
    };
    InlineShape.prototype = refShape;
    return new InlineShape();
  } else {
    // set type if not set
    if (!shape.type) {
      if (shape.members) shape.type = 'structure';
      else if (shape.member) shape.type = 'list';
      else if (shape.key) shape.type = 'map';
      else shape.type = 'string';
    }

    // normalize types
    var origType = shape.type;
    if (Shape.normalizedTypes[shape.type]) {
      shape.type = Shape.normalizedTypes[shape.type];
    }

    if (Shape.types[shape.type]) {
      return new Shape.types[shape.type](shape, options, memberName);
    } else {
      throw new Error('Unrecognized shape type: ' + origType);
    }
  }
};

function CompositeShape(shape) {
  Shape.apply(this, arguments);
  property(this, 'isComposite', true);

  if (shape.flattened) {
    property(this, 'flattened', shape.flattened || false);
  }
}

function StructureShape(shape, options) {
  var self = this;
  var requiredMap = null, firstInit = !this.isShape;

  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'members', {});
    property(this, 'memberNames', []);
    property(this, 'required', []);
    property(this, 'isRequired', function() { return false; });
  }

  if (shape.members) {
    property(this, 'members', new Collection(shape.members, options, function(name, member) {
      return Shape.create(member, options, name);
    }));
    memoizedProperty(this, 'memberNames', function() {
      return shape.xmlOrder || Object.keys(shape.members);
    });

    if (shape.event) {
      memoizedProperty(this, 'eventPayloadMemberName', function() {
        var members = self.members;
        var memberNames = self.memberNames;
        // iterate over members to find ones that are event payloads
        for (var i = 0, iLen = memberNames.length; i < iLen; i++) {
          if (members[memberNames[i]].isEventPayload) {
            return memberNames[i];
          }
        }
      });

      memoizedProperty(this, 'eventHeaderMemberNames', function() {
        var members = self.members;
        var memberNames = self.memberNames;
        var eventHeaderMemberNames = [];
        // iterate over members to find ones that are event headers
        for (var i = 0, iLen = memberNames.length; i < iLen; i++) {
          if (members[memberNames[i]].isEventHeader) {
            eventHeaderMemberNames.push(memberNames[i]);
          }
        }
        return eventHeaderMemberNames;
      });
    }
  }

  if (shape.required) {
    property(this, 'required', shape.required);
    property(this, 'isRequired', function(name) {
      if (!requiredMap) {
        requiredMap = {};
        for (var i = 0; i < shape.required.length; i++) {
          requiredMap[shape.required[i]] = true;
        }
      }

      return requiredMap[name];
    }, false, true);
  }

  property(this, 'resultWrapper', shape.resultWrapper || null);

  if (shape.payload) {
    property(this, 'payload', shape.payload);
  }

  if (typeof shape.xmlNamespace === 'string') {
    property(this, 'xmlNamespaceUri', shape.xmlNamespace);
  } else if (typeof shape.xmlNamespace === 'object') {
    property(this, 'xmlNamespacePrefix', shape.xmlNamespace.prefix);
    property(this, 'xmlNamespaceUri', shape.xmlNamespace.uri);
  }
}

function ListShape(shape, options) {
  var self = this, firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return []; });
  }

  if (shape.member) {
    memoizedProperty(this, 'member', function() {
      return Shape.create(shape.member, options);
    });
  }

  if (this.flattened) {
    var oldName = this.name;
    memoizedProperty(this, 'name', function() {
      return self.member.name || oldName;
    });
  }
}

function MapShape(shape, options) {
  var firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'key', Shape.create({type: 'string'}, options));
    property(this, 'value', Shape.create({type: 'string'}, options));
  }

  if (shape.key) {
    memoizedProperty(this, 'key', function() {
      return Shape.create(shape.key, options);
    });
  }
  if (shape.value) {
    memoizedProperty(this, 'value', function() {
      return Shape.create(shape.value, options);
    });
  }
}

function TimestampShape(shape) {
  var self = this;
  Shape.apply(this, arguments);

  if (shape.timestampFormat) {
    property(this, 'timestampFormat', shape.timestampFormat);
  } else if (self.isTimestampFormatSet && this.timestampFormat) {
    property(this, 'timestampFormat', this.timestampFormat);
  } else if (this.location === 'header') {
    property(this, 'timestampFormat', 'rfc822');
  } else if (this.location === 'querystring') {
    property(this, 'timestampFormat', 'iso8601');
  } else if (this.api) {
    switch (this.api.protocol) {
      case 'json':
      case 'rest-json':
        property(this, 'timestampFormat', 'unixTimestamp');
        break;
      case 'rest-xml':
      case 'query':
      case 'ec2':
        property(this, 'timestampFormat', 'iso8601');
        break;
    }
  }

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    if (typeof value.toUTCString === 'function') return value;
    return typeof value === 'string' || typeof value === 'number' ?
           util.date.parseTimestamp(value) : null;
  };

  this.toWireFormat = function(value) {
    return util.date.format(value, self.timestampFormat);
  };
}

function StringShape() {
  Shape.apply(this, arguments);

  var nullLessProtocols = ['rest-xml', 'query', 'ec2'];
  this.toType = function(value) {
    value = this.api && nullLessProtocols.indexOf(this.api.protocol) > -1 ?
      value || '' : value;
    if (this.isJsonValue) {
      return JSON.parse(value);
    }

    return value && typeof value.toString === 'function' ?
      value.toString() : value;
  };

  this.toWireFormat = function(value) {
    return this.isJsonValue ? JSON.stringify(value) : value;
  };
}

function FloatShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseFloat(value);
  };
  this.toWireFormat = this.toType;
}

function IntegerShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseInt(value, 10);
  };
  this.toWireFormat = this.toType;
}

function BinaryShape() {
  Shape.apply(this, arguments);
  this.toType = function(value) {
    var buf = util.base64.decode(value);
    if (this.isSensitive && util.isNode() && typeof util.Buffer.alloc === 'function') {
  /* Node.js can create a Buffer that is not isolated.
   * i.e. buf.byteLength !== buf.buffer.byteLength
   * This means that the sensitive data is accessible to anyone with access to buf.buffer.
   * If this is the node shared Buffer, then other code within this process _could_ find this secret.
   * Copy sensitive data to an isolated Buffer and zero the sensitive data.
   * While this is safe to do here, copying this code somewhere else may produce unexpected results.
   */
      var secureBuf = util.Buffer.alloc(buf.length, buf);
      buf.fill(0);
      buf = secureBuf;
    }
    return buf;
  };
  this.toWireFormat = util.base64.encode;
}

function Base64Shape() {
  BinaryShape.apply(this, arguments);
}

function BooleanShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (typeof value === 'boolean') return value;
    if (value === null || value === undefined) return null;
    return value === 'true';
  };
}

/**
 * @api private
 */
Shape.shapes = {
  StructureShape: StructureShape,
  ListShape: ListShape,
  MapShape: MapShape,
  StringShape: StringShape,
  BooleanShape: BooleanShape,
  Base64Shape: Base64Shape
};

/**
 * @api private
 */
module.exports = Shape;

},{"../util":71,"./collection":39}],44:[function(require,module,exports){
var AWS = require('./core');

/**
 * @api private
 */
AWS.ParamValidator = AWS.util.inherit({
  /**
   * Create a new validator object.
   *
   * @param validation [Boolean|map] whether input parameters should be
   *     validated against the operation description before sending the
   *     request. Pass a map to enable any of the following specific
   *     validation features:
   *
   *     * **min** [Boolean] &mdash; Validates that a value meets the min
   *       constraint. This is enabled by default when paramValidation is set
   *       to `true`.
   *     * **max** [Boolean] &mdash; Validates that a value meets the max
   *       constraint.
   *     * **pattern** [Boolean] &mdash; Validates that a string value matches a
   *       regular expression.
   *     * **enum** [Boolean] &mdash; Validates that a string value matches one
   *       of the allowable enum values.
   */
  constructor: function ParamValidator(validation) {
    if (validation === true || validation === undefined) {
      validation = {'min': true};
    }
    this.validation = validation;
  },

  validate: function validate(shape, params, context) {
    this.errors = [];
    this.validateMember(shape, params || {}, context || 'params');

    if (this.errors.length > 1) {
      var msg = this.errors.join('\n* ');
      msg = 'There were ' + this.errors.length +
        ' validation errors:\n* ' + msg;
      throw AWS.util.error(new Error(msg),
        {code: 'MultipleValidationErrors', errors: this.errors});
    } else if (this.errors.length === 1) {
      throw this.errors[0];
    } else {
      return true;
    }
  },

  fail: function fail(code, message) {
    this.errors.push(AWS.util.error(new Error(message), {code: code}));
  },

  validateStructure: function validateStructure(shape, params, context) {
    this.validateType(params, context, ['object'], 'structure');

    var paramName;
    for (var i = 0; shape.required && i < shape.required.length; i++) {
      paramName = shape.required[i];
      var value = params[paramName];
      if (value === undefined || value === null) {
        this.fail('MissingRequiredParameter',
          'Missing required key \'' + paramName + '\' in ' + context);
      }
    }

    // validate hash members
    for (paramName in params) {
      if (!Object.prototype.hasOwnProperty.call(params, paramName)) continue;

      var paramValue = params[paramName],
          memberShape = shape.members[paramName];

      if (memberShape !== undefined) {
        var memberContext = [context, paramName].join('.');
        this.validateMember(memberShape, paramValue, memberContext);
      } else {
        this.fail('UnexpectedParameter',
          'Unexpected key \'' + paramName + '\' found in ' + context);
      }
    }

    return true;
  },

  validateMember: function validateMember(shape, param, context) {
    switch (shape.type) {
      case 'structure':
        return this.validateStructure(shape, param, context);
      case 'list':
        return this.validateList(shape, param, context);
      case 'map':
        return this.validateMap(shape, param, context);
      default:
        return this.validateScalar(shape, param, context);
    }
  },

  validateList: function validateList(shape, params, context) {
    if (this.validateType(params, context, [Array])) {
      this.validateRange(shape, params.length, context, 'list member count');
      // validate array members
      for (var i = 0; i < params.length; i++) {
        this.validateMember(shape.member, params[i], context + '[' + i + ']');
      }
    }
  },

  validateMap: function validateMap(shape, params, context) {
    if (this.validateType(params, context, ['object'], 'map')) {
      // Build up a count of map members to validate range traits.
      var mapCount = 0;
      for (var param in params) {
        if (!Object.prototype.hasOwnProperty.call(params, param)) continue;
        // Validate any map key trait constraints
        this.validateMember(shape.key, param,
                            context + '[key=\'' + param + '\']');
        this.validateMember(shape.value, params[param],
                            context + '[\'' + param + '\']');
        mapCount++;
      }
      this.validateRange(shape, mapCount, context, 'map member count');
    }
  },

  validateScalar: function validateScalar(shape, value, context) {
    switch (shape.type) {
      case null:
      case undefined:
      case 'string':
        return this.validateString(shape, value, context);
      case 'base64':
      case 'binary':
        return this.validatePayload(value, context);
      case 'integer':
      case 'float':
        return this.validateNumber(shape, value, context);
      case 'boolean':
        return this.validateType(value, context, ['boolean']);
      case 'timestamp':
        return this.validateType(value, context, [Date,
          /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z$/, 'number'],
          'Date object, ISO-8601 string, or a UNIX timestamp');
      default:
        return this.fail('UnkownType', 'Unhandled type ' +
                         shape.type + ' for ' + context);
    }
  },

  validateString: function validateString(shape, value, context) {
    var validTypes = ['string'];
    if (shape.isJsonValue) {
      validTypes = validTypes.concat(['number', 'object', 'boolean']);
    }
    if (value !== null && this.validateType(value, context, validTypes)) {
      this.validateEnum(shape, value, context);
      this.validateRange(shape, value.length, context, 'string length');
      this.validatePattern(shape, value, context);
      this.validateUri(shape, value, context);
    }
  },

  validateUri: function validateUri(shape, value, context) {
    if (shape['location'] === 'uri') {
      if (value.length === 0) {
        this.fail('UriParameterError', 'Expected uri parameter to have length >= 1,'
          + ' but found "' + value +'" for ' + context);
      }
    }
  },

  validatePattern: function validatePattern(shape, value, context) {
    if (this.validation['pattern'] && shape['pattern'] !== undefined) {
      if (!(new RegExp(shape['pattern'])).test(value)) {
        this.fail('PatternMatchError', 'Provided value "' + value + '" '
          + 'does not match regex pattern /' + shape['pattern'] + '/ for '
          + context);
      }
    }
  },

  validateRange: function validateRange(shape, value, context, descriptor) {
    if (this.validation['min']) {
      if (shape['min'] !== undefined && value < shape['min']) {
        this.fail('MinRangeError', 'Expected ' + descriptor + ' >= '
          + shape['min'] + ', but found ' + value + ' for ' + context);
      }
    }
    if (this.validation['max']) {
      if (shape['max'] !== undefined && value > shape['max']) {
        this.fail('MaxRangeError', 'Expected ' + descriptor + ' <= '
          + shape['max'] + ', but found ' + value + ' for ' + context);
      }
    }
  },

  validateEnum: function validateRange(shape, value, context) {
    if (this.validation['enum'] && shape['enum'] !== undefined) {
      // Fail if the string value is not present in the enum list
      if (shape['enum'].indexOf(value) === -1) {
        this.fail('EnumError', 'Found string value of ' + value + ', but '
          + 'expected ' + shape['enum'].join('|') + ' for ' + context);
      }
    }
  },

  validateType: function validateType(value, context, acceptedTypes, type) {
    // We will not log an error for null or undefined, but we will return
    // false so that callers know that the expected type was not strictly met.
    if (value === null || value === undefined) return false;

    var foundInvalidType = false;
    for (var i = 0; i < acceptedTypes.length; i++) {
      if (typeof acceptedTypes[i] === 'string') {
        if (typeof value === acceptedTypes[i]) return true;
      } else if (acceptedTypes[i] instanceof RegExp) {
        if ((value || '').toString().match(acceptedTypes[i])) return true;
      } else {
        if (value instanceof acceptedTypes[i]) return true;
        if (AWS.util.isType(value, acceptedTypes[i])) return true;
        if (!type && !foundInvalidType) acceptedTypes = acceptedTypes.slice();
        acceptedTypes[i] = AWS.util.typeName(acceptedTypes[i]);
      }
      foundInvalidType = true;
    }

    var acceptedType = type;
    if (!acceptedType) {
      acceptedType = acceptedTypes.join(', ').replace(/,([^,]+)$/, ', or$1');
    }

    var vowel = acceptedType.match(/^[aeiou]/i) ? 'n' : '';
    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a' +
              vowel + ' ' + acceptedType);
    return false;
  },

  validateNumber: function validateNumber(shape, value, context) {
    if (value === null || value === undefined) return;
    if (typeof value === 'string') {
      var castedValue = parseFloat(value);
      if (castedValue.toString() === value) value = castedValue;
    }
    if (this.validateType(value, context, ['number'])) {
      this.validateRange(shape, value, context, 'numeric value');
    }
  },

  validatePayload: function validatePayload(value, context) {
    if (value === null || value === undefined) return;
    if (typeof value === 'string') return;
    if (value && typeof value.byteLength === 'number') return; // typed arrays
    if (AWS.util.isNode()) { // special check for buffer/stream in Node.js
      var Stream = AWS.util.stream.Stream;
      if (AWS.util.Buffer.isBuffer(value) || value instanceof Stream) return;
    } else {
      if (typeof Blob !== void 0 && value instanceof Blob) return;
    }

    var types = ['Buffer', 'Stream', 'File', 'Blob', 'ArrayBuffer', 'DataView'];
    if (value) {
      for (var i = 0; i < types.length; i++) {
        if (AWS.util.isType(value, types[i])) return;
        if (AWS.util.typeName(value.constructor) === types[i]) return;
      }
    }

    this.fail('InvalidParameterType', 'Expected ' + context + ' to be a ' +
      'string, Buffer, Stream, Blob, or typed array object');
  }
});

},{"./core":18}],45:[function(require,module,exports){
var util =  require('../util');
var AWS = require('../core');

/**
 * Prepend prefix defined by API model to endpoint that's already
 * constructed. This feature does not apply to operations using
 * endpoint discovery and can be disabled.
 * @api private
 */
function populateHostPrefix(request)  {
  var enabled = request.service.config.hostPrefixEnabled;
  if (!enabled) return request;
  var operationModel = request.service.api.operations[request.operation];
  //don't marshal host prefix when operation has endpoint discovery traits
  if (hasEndpointDiscover(request)) return request;
  if (operationModel.endpoint && operationModel.endpoint.hostPrefix) {
    var hostPrefixNotation = operationModel.endpoint.hostPrefix;
    var hostPrefix = expandHostPrefix(hostPrefixNotation, request.params, operationModel.input);
    prependEndpointPrefix(request.httpRequest.endpoint, hostPrefix);
    validateHostname(request.httpRequest.endpoint.hostname);
  }
  return request;
}

/**
 * @api private
 */
function hasEndpointDiscover(request) {
  var api = request.service.api;
  var operationModel = api.operations[request.operation];
  var isEndpointOperation = api.endpointOperation && (api.endpointOperation === util.string.lowerFirst(operationModel.name));
  return (operationModel.endpointDiscoveryRequired !== 'NULL' || isEndpointOperation === true);
}

/**
 * @api private
 */
function expandHostPrefix(hostPrefixNotation, params, shape) {
  util.each(shape.members, function(name, member) {
    if (member.hostLabel === true) {
      if (typeof params[name] !== 'string' || params[name] === '') {
        throw util.error(new Error(), {
          message: 'Parameter ' + name + ' should be a non-empty string.',
          code: 'InvalidParameter'
        });
      }
      var regex = new RegExp('\\{' + name + '\\}', 'g');
      hostPrefixNotation = hostPrefixNotation.replace(regex, params[name]);
    }
  });
  return hostPrefixNotation;
}

/**
 * @api private
 */
function prependEndpointPrefix(endpoint, prefix) {
  if (endpoint.host) {
    endpoint.host = prefix + endpoint.host;
  }
  if (endpoint.hostname) {
    endpoint.hostname = prefix + endpoint.hostname;
  }
}

/**
 * @api private
 */
function validateHostname(hostname) {
  var labels = hostname.split('.');
  //Reference: https://tools.ietf.org/html/rfc1123#section-2
  var hostPattern = /^[a-zA-Z0-9]{1}$|^[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]$/;
  util.arrayEach(labels, function(label) {
    if (!label.length || label.length < 1 || label.length > 63) {
      throw util.error(new Error(), {
        code: 'ValidationError',
        message: 'Hostname label length should be between 1 to 63 characters, inclusive.'
      });
    }
    if (!hostPattern.test(label)) {
      throw AWS.util.error(new Error(),
        {code: 'ValidationError', message: label + ' is not hostname compatible.'});
    }
  });
}

module.exports = {
  populateHostPrefix: populateHostPrefix
};

},{"../core":18,"../util":71}],46:[function(require,module,exports){
var util = require('../util');
var JsonBuilder = require('../json/builder');
var JsonParser = require('../json/parser');
var populateHostPrefix = require('./helpers').populateHostPrefix;

function buildRequest(req) {
  var httpRequest = req.httpRequest;
  var api = req.service.api;
  var target = api.targetPrefix + '.' + api.operations[req.operation].name;
  var version = api.jsonVersion || '1.0';
  var input = api.operations[req.operation].input;
  var builder = new JsonBuilder();

  if (version === 1) version = '1.0';
  httpRequest.body = builder.build(req.params || {}, input);
  httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
  httpRequest.headers['X-Amz-Target'] = target;

  populateHostPrefix(req);
}

function extractError(resp) {
  var error = {};
  var httpResponse = resp.httpResponse;

  error.code = httpResponse.headers['x-amzn-errortype'] || 'UnknownError';
  if (typeof error.code === 'string') {
    error.code = error.code.split(':')[0];
  }

  if (httpResponse.body.length > 0) {
    try {
      var e = JSON.parse(httpResponse.body.toString());
      if (e.__type || e.code) {
        error.code = (e.__type || e.code).split('#').pop();
      }
      if (error.code === 'RequestEntityTooLarge') {
        error.message = 'Request body must be less than 1 MB';
      } else {
        error.message = (e.message || e.Message || null);
      }
    } catch (e) {
      error.statusCode = httpResponse.statusCode;
      error.message = httpResponse.statusMessage;
    }
  } else {
    error.statusCode = httpResponse.statusCode;
    error.message = httpResponse.statusCode.toString();
  }

  resp.error = util.error(new Error(), error);
}

function extractData(resp) {
  var body = resp.httpResponse.body.toString() || '{}';
  if (resp.request.service.config.convertResponseTypes === false) {
    resp.data = JSON.parse(body);
  } else {
    var operation = resp.request.service.api.operations[resp.request.operation];
    var shape = operation.output || {};
    var parser = new JsonParser();
    resp.data = parser.parse(body, shape);
  }
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../json/builder":36,"../json/parser":37,"../util":71,"./helpers":45}],47:[function(require,module,exports){
var AWS = require('../core');
var util = require('../util');
var QueryParamSerializer = require('../query/query_param_serializer');
var Shape = require('../model/shape');
var populateHostPrefix = require('./helpers').populateHostPrefix;

function buildRequest(req) {
  var operation = req.service.api.operations[req.operation];
  var httpRequest = req.httpRequest;
  httpRequest.headers['Content-Type'] =
    'application/x-www-form-urlencoded; charset=utf-8';
  httpRequest.params = {
    Version: req.service.api.apiVersion,
    Action: operation.name
  };

  // convert the request parameters into a list of query params,
  // e.g. Deeply.NestedParam.0.Name=value
  var builder = new QueryParamSerializer();
  builder.serialize(req.params, operation.input, function(name, value) {
    httpRequest.params[name] = value;
  });
  httpRequest.body = util.queryParamsToString(httpRequest.params);

  populateHostPrefix(req);
}

function extractError(resp) {
  var data, body = resp.httpResponse.body.toString();
  if (body.match('<UnknownOperationException')) {
    data = {
      Code: 'UnknownOperation',
      Message: 'Unknown operation ' + resp.request.operation
    };
  } else {
    try {
      data = new AWS.XML.Parser().parse(body);
    } catch (e) {
      data = {
        Code: resp.httpResponse.statusCode,
        Message: resp.httpResponse.statusMessage
      };
    }
  }

  if (data.requestId && !resp.requestId) resp.requestId = data.requestId;
  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  var req = resp.request;
  var operation = req.service.api.operations[req.operation];
  var shape = operation.output || {};
  var origRules = shape;

  if (origRules.resultWrapper) {
    var tmp = Shape.create({type: 'structure'});
    tmp.members[origRules.resultWrapper] = shape;
    tmp.memberNames = [origRules.resultWrapper];
    util.property(shape, 'name', shape.resultWrapper);
    shape = tmp;
  }

  var parser = new AWS.XML.Parser();

  // TODO: Refactor XML Parser to parse RequestId from response.
  if (shape && shape.members && !shape.members._XAMZRequestId) {
    var requestIdShape = Shape.create(
      { type: 'string' },
      { api: { protocol: 'query' } },
      'requestId'
    );
    shape.members._XAMZRequestId = requestIdShape;
  }

  var data = parser.parse(resp.httpResponse.body.toString(), shape);
  resp.requestId = data._XAMZRequestId || data.requestId;

  if (data._XAMZRequestId) delete data._XAMZRequestId;

  if (origRules.resultWrapper) {
    if (data[origRules.resultWrapper]) {
      util.update(data, data[origRules.resultWrapper]);
      delete data[origRules.resultWrapper];
    }
  }

  resp.data = data;
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../core":18,"../model/shape":43,"../query/query_param_serializer":51,"../util":71,"./helpers":45}],48:[function(require,module,exports){
var util = require('../util');
var populateHostPrefix = require('./helpers').populateHostPrefix;

function populateMethod(req) {
  req.httpRequest.method = req.service.api.operations[req.operation].httpMethod;
}

function generateURI(endpointPath, operationPath, input, params) {
  var uri = [endpointPath, operationPath].join('/');
  uri = uri.replace(/\/+/g, '/');

  var queryString = {}, queryStringSet = false;
  util.each(input.members, function (name, member) {
    var paramValue = params[name];
    if (paramValue === null || paramValue === undefined) return;
    if (member.location === 'uri') {
      var regex = new RegExp('\\{' + member.name + '(\\+)?\\}');
      uri = uri.replace(regex, function(_, plus) {
        var fn = plus ? util.uriEscapePath : util.uriEscape;
        return fn(String(paramValue));
      });
    } else if (member.location === 'querystring') {
      queryStringSet = true;

      if (member.type === 'list') {
        queryString[member.name] = paramValue.map(function(val) {
          return util.uriEscape(member.member.toWireFormat(val).toString());
        });
      } else if (member.type === 'map') {
        util.each(paramValue, function(key, value) {
          if (Array.isArray(value)) {
            queryString[key] = value.map(function(val) {
              return util.uriEscape(String(val));
            });
          } else {
            queryString[key] = util.uriEscape(String(value));
          }
        });
      } else {
        queryString[member.name] = util.uriEscape(member.toWireFormat(paramValue).toString());
      }
    }
  });

  if (queryStringSet) {
    uri += (uri.indexOf('?') >= 0 ? '&' : '?');
    var parts = [];
    util.arrayEach(Object.keys(queryString).sort(), function(key) {
      if (!Array.isArray(queryString[key])) {
        queryString[key] = [queryString[key]];
      }
      for (var i = 0; i < queryString[key].length; i++) {
        parts.push(util.uriEscape(String(key)) + '=' + queryString[key][i]);
      }
    });
    uri += parts.join('&');
  }

  return uri;
}

function populateURI(req) {
  var operation = req.service.api.operations[req.operation];
  var input = operation.input;

  var uri = generateURI(req.httpRequest.endpoint.path, operation.httpPath, input, req.params);
  req.httpRequest.path = uri;
}

function populateHeaders(req) {
  var operation = req.service.api.operations[req.operation];
  util.each(operation.input.members, function (name, member) {
    var value = req.params[name];
    if (value === null || value === undefined) return;

    if (member.location === 'headers' && member.type === 'map') {
      util.each(value, function(key, memberValue) {
        req.httpRequest.headers[member.name + key] = memberValue;
      });
    } else if (member.location === 'header') {
      value = member.toWireFormat(value).toString();
      if (member.isJsonValue) {
        value = util.base64.encode(value);
      }
      req.httpRequest.headers[member.name] = value;
    }
  });
}

function buildRequest(req) {
  populateMethod(req);
  populateURI(req);
  populateHeaders(req);
  populateHostPrefix(req);
}

function extractError() {
}

function extractData(resp) {
  var req = resp.request;
  var data = {};
  var r = resp.httpResponse;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  // normalize headers names to lower-cased keys for matching
  var headers = {};
  util.each(r.headers, function (k, v) {
    headers[k.toLowerCase()] = v;
  });

  util.each(output.members, function(name, member) {
    var header = (member.name || name).toLowerCase();
    if (member.location === 'headers' && member.type === 'map') {
      data[name] = {};
      var location = member.isLocationName ? member.name : '';
      var pattern = new RegExp('^' + location + '(.+)', 'i');
      util.each(r.headers, function (k, v) {
        var result = k.match(pattern);
        if (result !== null) {
          data[name][result[1]] = v;
        }
      });
    } else if (member.location === 'header') {
      if (headers[header] !== undefined) {
        var value = member.isJsonValue ?
          util.base64.decode(headers[header]) :
          headers[header];
        data[name] = member.toType(value);
      }
    } else if (member.location === 'statusCode') {
      data[name] = parseInt(r.statusCode, 10);
    }
  });

  resp.data = data;
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData,
  generateURI: generateURI
};

},{"../util":71,"./helpers":45}],49:[function(require,module,exports){
var util = require('../util');
var Rest = require('./rest');
var Json = require('./json');
var JsonBuilder = require('../json/builder');
var JsonParser = require('../json/parser');

function populateBody(req) {
  var builder = new JsonBuilder();
  var input = req.service.api.operations[req.operation].input;

  if (input.payload) {
    var params = {};
    var payloadShape = input.members[input.payload];
    params = req.params[input.payload];
    if (params === undefined) return;

    if (payloadShape.type === 'structure') {
      req.httpRequest.body = builder.build(params, payloadShape);
      applyContentTypeHeader(req);
    } else { // non-JSON payload
      req.httpRequest.body = params;
      if (payloadShape.type === 'binary' || payloadShape.isStreaming) {
        applyContentTypeHeader(req, true);
      }
    }
  } else {
    var body = builder.build(req.params, input);
    if (body !== '{}' || req.httpRequest.method !== 'GET') { //don't send empty body for GET method
      req.httpRequest.body = body;
    }
    applyContentTypeHeader(req);
  }
}

function applyContentTypeHeader(req, isBinary) {
  var operation = req.service.api.operations[req.operation];
  var input = operation.input;

  if (!req.httpRequest.headers['Content-Type']) {
    var type = isBinary ? 'binary/octet-stream' : 'application/json';
    req.httpRequest.headers['Content-Type'] = type;
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  // never send body payload on HEAD/DELETE
  if (['HEAD', 'DELETE'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Json.extractError(resp);
}

function extractData(resp) {
  Rest.extractData(resp);

  var req = resp.request;
  var operation = req.service.api.operations[req.operation];
  var rules = req.service.api.operations[req.operation].output || {};
  var parser;
  var hasEventOutput = operation.hasEventOutput;

  if (rules.payload) {
    var payloadMember = rules.members[rules.payload];
    var body = resp.httpResponse.body;
    if (payloadMember.isEventStream) {
      parser = new JsonParser();
      resp.data[payload] = util.createEventStream(
        AWS.HttpClient.streamsApiVersion === 2 ? resp.httpResponse.stream : body,
        parser,
        payloadMember
      );
    } else if (payloadMember.type === 'structure' || payloadMember.type === 'list') {
      var parser = new JsonParser();
      resp.data[rules.payload] = parser.parse(body, payloadMember);
    } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
      resp.data[rules.payload] = body;
    } else {
      resp.data[rules.payload] = payloadMember.toType(body);
    }
  } else {
    var data = resp.data;
    Json.extractData(resp);
    resp.data = util.merge(data, resp.data);
  }
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../json/builder":36,"../json/parser":37,"../util":71,"./json":46,"./rest":48}],50:[function(require,module,exports){
var AWS = require('../core');
var util = require('../util');
var Rest = require('./rest');

function populateBody(req) {
  var input = req.service.api.operations[req.operation].input;
  var builder = new AWS.XML.Builder();
  var params = req.params;

  var payload = input.payload;
  if (payload) {
    var payloadMember = input.members[payload];
    params = params[payload];
    if (params === undefined) return;

    if (payloadMember.type === 'structure') {
      var rootElement = payloadMember.name;
      req.httpRequest.body = builder.toXML(params, payloadMember, rootElement, true);
    } else { // non-xml payload
      req.httpRequest.body = params;
    }
  } else {
    req.httpRequest.body = builder.toXML(params, input, input.name ||
      input.shape || util.string.upperFirst(req.operation) + 'Request');
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  // never send body payload on GET/HEAD
  if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Rest.extractError(resp);

  var data;
  try {
    data = new AWS.XML.Parser().parse(resp.httpResponse.body.toString());
  } catch (e) {
    data = {
      Code: resp.httpResponse.statusCode,
      Message: resp.httpResponse.statusMessage
    };
  }

  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  Rest.extractData(resp);

  var parser;
  var req = resp.request;
  var body = resp.httpResponse.body;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  var hasEventOutput = operation.hasEventOutput;

  var payload = output.payload;
  if (payload) {
    var payloadMember = output.members[payload];
    if (payloadMember.isEventStream) {
      parser = new AWS.XML.Parser();
      resp.data[payload] = util.createEventStream(
        AWS.HttpClient.streamsApiVersion === 2 ? resp.httpResponse.stream : resp.httpResponse.body,
        parser,
        payloadMember
      );
    } else if (payloadMember.type === 'structure') {
      parser = new AWS.XML.Parser();
      resp.data[payload] = parser.parse(body.toString(), payloadMember);
    } else if (payloadMember.type === 'binary' || payloadMember.isStreaming) {
      resp.data[payload] = body;
    } else {
      resp.data[payload] = payloadMember.toType(body);
    }
  } else if (body.length > 0) {
    parser = new AWS.XML.Parser();
    var data = parser.parse(body.toString(), output);
    util.update(resp.data, data);
  }
}

/**
 * @api private
 */
module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};

},{"../core":18,"../util":71,"./rest":48}],51:[function(require,module,exports){
var util = require('../util');

function QueryParamSerializer() {
}

QueryParamSerializer.prototype.serialize = function(params, shape, fn) {
  serializeStructure('', params, shape, fn);
};

function ucfirst(shape) {
  if (shape.isQueryName || shape.api.protocol !== 'ec2') {
    return shape.name;
  } else {
    return shape.name[0].toUpperCase() + shape.name.substr(1);
  }
}

function serializeStructure(prefix, struct, rules, fn) {
  util.each(rules.members, function(name, member) {
    var value = struct[name];
    if (value === null || value === undefined) return;

    var memberName = ucfirst(member);
    memberName = prefix ? prefix + '.' + memberName : memberName;
    serializeMember(memberName, value, member, fn);
  });
}

function serializeMap(name, map, rules, fn) {
  var i = 1;
  util.each(map, function (key, value) {
    var prefix = rules.flattened ? '.' : '.entry.';
    var position = prefix + (i++) + '.';
    var keyName = position + (rules.key.name || 'key');
    var valueName = position + (rules.value.name || 'value');
    serializeMember(name + keyName, key, rules.key, fn);
    serializeMember(name + valueName, value, rules.value, fn);
  });
}

function serializeList(name, list, rules, fn) {
  var memberRules = rules.member || {};

  if (list.length === 0) {
    fn.call(this, name, null);
    return;
  }

  util.arrayEach(list, function (v, n) {
    var suffix = '.' + (n + 1);
    if (rules.api.protocol === 'ec2') {
      // Do nothing for EC2
      suffix = suffix + ''; // make linter happy
    } else if (rules.flattened) {
      if (memberRules.name) {
        var parts = name.split('.');
        parts.pop();
        parts.push(ucfirst(memberRules));
        name = parts.join('.');
      }
    } else {
      suffix = '.' + (memberRules.name ? memberRules.name : 'member') + suffix;
    }
    serializeMember(name + suffix, v, memberRules, fn);
  });
}

function serializeMember(name, value, rules, fn) {
  if (value === null || value === undefined) return;
  if (rules.type === 'structure') {
    serializeStructure(name, value, rules, fn);
  } else if (rules.type === 'list') {
    serializeList(name, value, rules, fn);
  } else if (rules.type === 'map') {
    serializeMap(name, value, rules, fn);
  } else {
    fn(name, rules.toWireFormat(value).toString());
  }
}

/**
 * @api private
 */
module.exports = QueryParamSerializer;

},{"../util":71}],52:[function(require,module,exports){
module.exports = {
  //provide realtime clock for performance measurement
  now: function now() {
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      return performance.now();
    }
    return Date.now();
  }
};

},{}],53:[function(require,module,exports){
var util = require('./util');
var regionConfig = require('./region_config_data.json');

function generateRegionPrefix(region) {
  if (!region) return null;

  var parts = region.split('-');
  if (parts.length < 3) return null;
  return parts.slice(0, parts.length - 2).join('-') + '-*';
}

function derivedKeys(service) {
  var region = service.config.region;
  var regionPrefix = generateRegionPrefix(region);
  var endpointPrefix = service.api.endpointPrefix;

  return [
    [region, endpointPrefix],
    [regionPrefix, endpointPrefix],
    [region, '*'],
    [regionPrefix, '*'],
    ['*', endpointPrefix],
    ['*', '*']
  ].map(function(item) {
    return item[0] && item[1] ? item.join('/') : null;
  });
}

function applyConfig(service, config) {
  util.each(config, function(key, value) {
    if (key === 'globalEndpoint') return;
    if (service.config[key] === undefined || service.config[key] === null) {
      service.config[key] = value;
    }
  });
}

function configureEndpoint(service) {
  var keys = derivedKeys(service);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!key) continue;

    if (Object.prototype.hasOwnProperty.call(regionConfig.rules, key)) {
      var config = regionConfig.rules[key];
      if (typeof config === 'string') {
        config = regionConfig.patterns[config];
      }

      // set dualstack endpoint
      if (service.config.useDualstack && util.isDualstackAvailable(service)) {
        config = util.copy(config);
        config.endpoint = '{service}.dualstack.{region}.amazonaws.com';
      }

      // set global endpoint
      service.isGlobalEndpoint = !!config.globalEndpoint;

      // signature version
      if (!config.signatureVersion) config.signatureVersion = 'v4';

      // merge config
      applyConfig(service, config);
      return;
    }
  }
}

/**
 * @api private
 */
module.exports = configureEndpoint;

},{"./region_config_data.json":54,"./util":71}],54:[function(require,module,exports){
module.exports={
  "rules": {
    "*/*": {
      "endpoint": "{service}.{region}.amazonaws.com"
    },
    "cn-*/*": {
      "endpoint": "{service}.{region}.amazonaws.com.cn"
    },
    "*/budgets": "globalSSL",
    "*/cloudfront": "globalSSL",
    "*/iam": "globalSSL",
    "*/sts": "globalSSL",
    "*/importexport": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "v2",
      "globalEndpoint": true
    },
    "*/route53": {
      "endpoint": "https://{service}.amazonaws.com",
      "signatureVersion": "v3https",
      "globalEndpoint": true
    },
    "*/waf": "globalSSL",
    "us-gov-*/iam": "globalGovCloud",
    "us-gov-*/sts": {
      "endpoint": "{service}.{region}.amazonaws.com"
    },
    "us-gov-west-1/s3": "s3signature",
    "us-west-1/s3": "s3signature",
    "us-west-2/s3": "s3signature",
    "eu-west-1/s3": "s3signature",
    "ap-southeast-1/s3": "s3signature",
    "ap-southeast-2/s3": "s3signature",
    "ap-northeast-1/s3": "s3signature",
    "sa-east-1/s3": "s3signature",
    "us-east-1/s3": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "s3"
    },
    "us-east-1/sdb": {
      "endpoint": "{service}.amazonaws.com",
      "signatureVersion": "v2"
    },
    "*/sdb": {
      "endpoint": "{service}.{region}.amazonaws.com",
      "signatureVersion": "v2"
    }
  },

  "patterns": {
    "globalSSL": {
      "endpoint": "https://{service}.amazonaws.com",
      "globalEndpoint": true
    },
    "globalGovCloud": {
      "endpoint": "{service}.us-gov.amazonaws.com"
    },
    "s3signature": {
      "endpoint": "{service}.{region}.amazonaws.com",
      "signatureVersion": "s3"
    }
  }
}

},{}],55:[function(require,module,exports){
(function (process){
var AWS = require('./core');
var AcceptorStateMachine = require('./state_machine');
var inherit = AWS.util.inherit;
var domain = AWS.util.domain;
var jmespath = require('jmespath');

/**
 * @api private
 */
var hardErrorStates = {success: 1, error: 1, complete: 1};

function isTerminalState(machine) {
  return Object.prototype.hasOwnProperty.call(hardErrorStates, machine._asm.currentState);
}

var fsm = new AcceptorStateMachine();
fsm.setupStates = function() {
  var transition = function(_, done) {
    var self = this;
    self._haltHandlersOnError = false;

    self.emit(self._asm.currentState, function(err) {
      if (err) {
        if (isTerminalState(self)) {
          if (domain && self.domain instanceof domain.Domain) {
            err.domainEmitter = self;
            err.domain = self.domain;
            err.domainThrown = false;
            self.domain.emit('error', err);
          } else {
            throw err;
          }
        } else {
          self.response.error = err;
          done(err);
        }
      } else {
        done(self.response.error);
      }
    });

  };

  this.addState('validate', 'build', 'error', transition);
  this.addState('build', 'afterBuild', 'restart', transition);
  this.addState('afterBuild', 'sign', 'restart', transition);
  this.addState('sign', 'send', 'retry', transition);
  this.addState('retry', 'afterRetry', 'afterRetry', transition);
  this.addState('afterRetry', 'sign', 'error', transition);
  this.addState('send', 'validateResponse', 'retry', transition);
  this.addState('validateResponse', 'extractData', 'extractError', transition);
  this.addState('extractError', 'extractData', 'retry', transition);
  this.addState('extractData', 'success', 'retry', transition);
  this.addState('restart', 'build', 'error', transition);
  this.addState('success', 'complete', 'complete', transition);
  this.addState('error', 'complete', 'complete', transition);
  this.addState('complete', null, null, transition);
};
fsm.setupStates();

/**
 * ## Asynchronous Requests
 *
 * All requests made through the SDK are asynchronous and use a
 * callback interface. Each service method that kicks off a request
 * returns an `AWS.Request` object that you can use to register
 * callbacks.
 *
 * For example, the following service method returns the request
 * object as "request", which can be used to register callbacks:
 *
 * ```javascript
 * // request is an AWS.Request object
 * var request = ec2.describeInstances();
 *
 * // register callbacks on request to retrieve response data
 * request.on('success', function(response) {
 *   console.log(response.data);
 * });
 * ```
 *
 * When a request is ready to be sent, the {send} method should
 * be called:
 *
 * ```javascript
 * request.send();
 * ```
 *
 * Since registered callbacks may or may not be idempotent, requests should only
 * be sent once. To perform the same operation multiple times, you will need to
 * create multiple request objects, each with its own registered callbacks.
 *
 * ## Removing Default Listeners for Events
 *
 * Request objects are built with default listeners for the various events,
 * depending on the service type. In some cases, you may want to remove
 * some built-in listeners to customize behaviour. Doing this requires
 * access to the built-in listener functions, which are exposed through
 * the {AWS.EventListeners.Core} namespace. For instance, you may
 * want to customize the HTTP handler used when sending a request. In this
 * case, you can remove the built-in listener associated with the 'send'
 * event, the {AWS.EventListeners.Core.SEND} listener and add your own.
 *
 * ## Multiple Callbacks and Chaining
 *
 * You can register multiple callbacks on any request object. The
 * callbacks can be registered for different events, or all for the
 * same event. In addition, you can chain callback registration, for
 * example:
 *
 * ```javascript
 * request.
 *   on('success', function(response) {
 *     console.log("Success!");
 *   }).
 *   on('error', function(error, response) {
 *     console.log("Error!");
 *   }).
 *   on('complete', function(response) {
 *     console.log("Always!");
 *   }).
 *   send();
 * ```
 *
 * The above example will print either "Success! Always!", or "Error! Always!",
 * depending on whether the request succeeded or not.
 *
 * @!attribute httpRequest
 *   @readonly
 *   @!group HTTP Properties
 *   @return [AWS.HttpRequest] the raw HTTP request object
 *     containing request headers and body information
 *     sent by the service.
 *
 * @!attribute startTime
 *   @readonly
 *   @!group Operation Properties
 *   @return [Date] the time that the request started
 *
 * @!group Request Building Events
 *
 * @!event validate(request)
 *   Triggered when a request is being validated. Listeners
 *   should throw an error if the request should not be sent.
 *   @param request [Request] the request object being sent
 *   @see AWS.EventListeners.Core.VALIDATE_CREDENTIALS
 *   @see AWS.EventListeners.Core.VALIDATE_REGION
 *   @example Ensuring that a certain parameter is set before sending a request
 *     var req = s3.putObject(params);
 *     req.on('validate', function() {
 *       if (!req.params.Body.match(/^Hello\s/)) {
 *         throw new Error('Body must start with "Hello "');
 *       }
 *     });
 *     req.send(function(err, data) { ... });
 *
 * @!event build(request)
 *   Triggered when the request payload is being built. Listeners
 *   should fill the necessary information to send the request
 *   over HTTP.
 *   @param (see AWS.Request~validate)
 *   @example Add a custom HTTP header to a request
 *     var req = s3.putObject(params);
 *     req.on('build', function() {
 *       req.httpRequest.headers['Custom-Header'] = 'value';
 *     });
 *     req.send(function(err, data) { ... });
 *
 * @!event sign(request)
 *   Triggered when the request is being signed. Listeners should
 *   add the correct authentication headers and/or adjust the body,
 *   depending on the authentication mechanism being used.
 *   @param (see AWS.Request~validate)
 *
 * @!group Request Sending Events
 *
 * @!event send(response)
 *   Triggered when the request is ready to be sent. Listeners
 *   should call the underlying transport layer to initiate
 *   the sending of the request.
 *   @param response [Response] the response object
 *   @context [Request] the request object that was sent
 *   @see AWS.EventListeners.Core.SEND
 *
 * @!event retry(response)
 *   Triggered when a request failed and might need to be retried or redirected.
 *   If the response is retryable, the listener should set the
 *   `response.error.retryable` property to `true`, and optionally set
 *   `response.error.retryDelay` to the millisecond delay for the next attempt.
 *   In the case of a redirect, `response.error.redirect` should be set to
 *   `true` with `retryDelay` set to an optional delay on the next request.
 *
 *   If a listener decides that a request should not be retried,
 *   it should set both `retryable` and `redirect` to false.
 *
 *   Note that a retryable error will be retried at most
 *   {AWS.Config.maxRetries} times (based on the service object's config).
 *   Similarly, a request that is redirected will only redirect at most
 *   {AWS.Config.maxRedirects} times.
 *
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *   @example Adding a custom retry for a 404 response
 *     request.on('retry', function(response) {
 *       // this resource is not yet available, wait 10 seconds to get it again
 *       if (response.httpResponse.statusCode === 404 && response.error) {
 *         response.error.retryable = true;   // retry this error
 *         response.error.retryDelay = 10000; // wait 10 seconds
 *       }
 *     });
 *
 * @!group Data Parsing Events
 *
 * @!event extractError(response)
 *   Triggered on all non-2xx requests so that listeners can extract
 *   error details from the response body. Listeners to this event
 *   should set the `response.error` property.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event extractData(response)
 *   Triggered in successful requests to allow listeners to
 *   de-serialize the response body into `response.data`.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!group Completion Events
 *
 * @!event success(response)
 *   Triggered when the request completed successfully.
 *   `response.data` will contain the response data and
 *   `response.error` will be null.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event error(error, response)
 *   Triggered when an error occurs at any point during the
 *   request. `response.error` will contain details about the error
 *   that occurred. `response.data` will be null.
 *   @param error [Error] the error object containing details about
 *     the error that occurred.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event complete(response)
 *   Triggered whenever a request cycle completes. `response.error`
 *   should be checked, since the request may have failed.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!group HTTP Events
 *
 * @!event httpHeaders(statusCode, headers, response, statusMessage)
 *   Triggered when headers are sent by the remote server
 *   @param statusCode [Integer] the HTTP response code
 *   @param headers [map<String,String>] the response headers
 *   @param (see AWS.Request~send)
 *   @param statusMessage [String] A status message corresponding to the HTTP
 *                                 response code
 *   @context (see AWS.Request~send)
 *
 * @!event httpData(chunk, response)
 *   Triggered when data is sent by the remote server
 *   @param chunk [Buffer] the buffer data containing the next data chunk
 *     from the server
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *   @see AWS.EventListeners.Core.HTTP_DATA
 *
 * @!event httpUploadProgress(progress, response)
 *   Triggered when the HTTP request has uploaded more data
 *   @param progress [map] An object containing the `loaded` and `total` bytes
 *     of the request.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *   @note This event will not be emitted in Node.js 0.8.x.
 *
 * @!event httpDownloadProgress(progress, response)
 *   Triggered when the HTTP request has downloaded more data
 *   @param progress [map] An object containing the `loaded` and `total` bytes
 *     of the request.
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *   @note This event will not be emitted in Node.js 0.8.x.
 *
 * @!event httpError(error, response)
 *   Triggered when the HTTP request failed
 *   @param error [Error] the error object that was thrown
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @!event httpDone(response)
 *   Triggered when the server is finished sending data
 *   @param (see AWS.Request~send)
 *   @context (see AWS.Request~send)
 *
 * @see AWS.Response
 */
AWS.Request = inherit({

  /**
   * Creates a request for an operation on a given service with
   * a set of input parameters.
   *
   * @param service [AWS.Service] the service to perform the operation on
   * @param operation [String] the operation to perform on the service
   * @param params [Object] parameters to send to the operation.
   *   See the operation's documentation for the format of the
   *   parameters.
   */
  constructor: function Request(service, operation, params) {
    var endpoint = service.endpoint;
    var region = service.config.region;
    var customUserAgent = service.config.customUserAgent;

    // global endpoints sign as us-east-1
    if (service.isGlobalEndpoint) region = 'us-east-1';

    this.domain = domain && domain.active;
    this.service = service;
    this.operation = operation;
    this.params = params || {};
    this.httpRequest = new AWS.HttpRequest(endpoint, region);
    this.httpRequest.appendToUserAgent(customUserAgent);
    this.startTime = service.getSkewCorrectedDate();

    this.response = new AWS.Response(this);
    this._asm = new AcceptorStateMachine(fsm.states, 'validate');
    this._haltHandlersOnError = false;

    AWS.SequentialExecutor.call(this);
    this.emit = this.emitEvent;
  },

  /**
   * @!group Sending a Request
   */

  /**
   * @overload send(callback = null)
   *   Sends the request object.
   *
   *   @callback callback function(err, data)
   *     If a callback is supplied, it is called when a response is returned
   *     from the service.
   *     @context [AWS.Request] the request object being sent.
   *     @param err [Error] the error object returned from the request.
   *       Set to `null` if the request is successful.
   *     @param data [Object] the de-serialized data returned from
   *       the request. Set to `null` if a request error occurs.
   *   @example Sending a request with a callback
   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     request.send(function(err, data) { console.log(err, data); });
   *   @example Sending a request with no callback (using event handlers)
   *     request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     request.on('complete', function(response) { ... }); // register a callback
   *     request.send();
   */
  send: function send(callback) {
    if (callback) {
      // append to user agent
      this.httpRequest.appendToUserAgent('callback');
      this.on('complete', function (resp) {
        callback.call(resp, resp.error, resp.data);
      });
    }
    this.runTo();

    return this.response;
  },

  /**
   * @!method  promise()
   *   Sends the request and returns a 'thenable' promise.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function(data)
   *     Called if the promise is fulfilled.
   *     @param data [Object] the de-serialized data returned from the request.
   *   @callback rejectedCallback function(error)
   *     Called if the promise is rejected.
   *     @param error [Error] the error object returned from the request.
   *   @return [Promise] A promise that represents the state of the request.
   *   @example Sending a request using promises.
   *     var request = s3.putObject({Bucket: 'bucket', Key: 'key'});
   *     var result = request.promise();
   *     result.then(function(data) { ... }, function(error) { ... });
   */

  /**
   * @api private
   */
  build: function build(callback) {
    return this.runTo('send', callback);
  },

  /**
   * @api private
   */
  runTo: function runTo(state, done) {
    this._asm.runTo(state, done, this);
    return this;
  },

  /**
   * Aborts a request, emitting the error and complete events.
   *
   * @!macro nobrowser
   * @example Aborting a request after sending
   *   var params = {
   *     Bucket: 'bucket', Key: 'key',
   *     Body: Buffer.alloc(1024 * 1024 * 5) // 5MB payload
   *   };
   *   var request = s3.putObject(params);
   *   request.send(function (err, data) {
   *     if (err) console.log("Error:", err.code, err.message);
   *     else console.log(data);
   *   });
   *
   *   // abort request in 1 second
   *   setTimeout(request.abort.bind(request), 1000);
   *
   *   // prints "Error: RequestAbortedError Request aborted by user"
   * @return [AWS.Request] the same request object, for chaining.
   * @since v1.4.0
   */
  abort: function abort() {
    this.removeAllListeners('validateResponse');
    this.removeAllListeners('extractError');
    this.on('validateResponse', function addAbortedError(resp) {
      resp.error = AWS.util.error(new Error('Request aborted by user'), {
         code: 'RequestAbortedError', retryable: false
      });
    });

    if (this.httpRequest.stream && !this.httpRequest.stream.didCallback) { // abort HTTP stream
      this.httpRequest.stream.abort();
      if (this.httpRequest._abortCallback) {
         this.httpRequest._abortCallback();
      } else {
        this.removeAllListeners('send'); // haven't sent yet, so let's not
      }
    }

    return this;
  },

  /**
   * Iterates over each page of results given a pageable request, calling
   * the provided callback with each page of data. After all pages have been
   * retrieved, the callback is called with `null` data.
   *
   * @note This operation can generate multiple requests to a service.
   * @example Iterating over multiple pages of objects in an S3 bucket
   *   var pages = 1;
   *   s3.listObjects().eachPage(function(err, data) {
   *     if (err) return;
   *     console.log("Page", pages++);
   *     console.log(data);
   *   });
   * @example Iterating over multiple pages with an asynchronous callback
   *   s3.listObjects(params).eachPage(function(err, data, done) {
   *     doSomethingAsyncAndOrExpensive(function() {
   *       // The next page of results isn't fetched until done is called
   *       done();
   *     });
   *   });
   * @callback callback function(err, data, [doneCallback])
   *   Called with each page of resulting data from the request. If the
   *   optional `doneCallback` is provided in the function, it must be called
   *   when the callback is complete.
   *
   *   @param err [Error] an error object, if an error occurred.
   *   @param data [Object] a single page of response data. If there is no
   *     more data, this object will be `null`.
   *   @param doneCallback [Function] an optional done callback. If this
   *     argument is defined in the function declaration, it should be called
   *     when the next page is ready to be retrieved. This is useful for
   *     controlling serial pagination across asynchronous operations.
   *   @return [Boolean] if the callback returns `false`, pagination will
   *     stop.
   *
   * @see AWS.Request.eachItem
   * @see AWS.Response.nextPage
   * @since v1.4.0
   */
  eachPage: function eachPage(callback) {
    // Make all callbacks async-ish
    callback = AWS.util.fn.makeAsync(callback, 3);

    function wrappedCallback(response) {
      callback.call(response, response.error, response.data, function (result) {
        if (result === false) return;

        if (response.hasNextPage()) {
          response.nextPage().on('complete', wrappedCallback).send();
        } else {
          callback.call(response, null, null, AWS.util.fn.noop);
        }
      });
    }

    this.on('complete', wrappedCallback).send();
  },

  /**
   * Enumerates over individual items of a request, paging the responses if
   * necessary.
   *
   * @api experimental
   * @since v1.4.0
   */
  eachItem: function eachItem(callback) {
    var self = this;
    function wrappedCallback(err, data) {
      if (err) return callback(err, null);
      if (data === null) return callback(null, null);

      var config = self.service.paginationConfig(self.operation);
      var resultKey = config.resultKey;
      if (Array.isArray(resultKey)) resultKey = resultKey[0];
      var items = jmespath.search(data, resultKey);
      var continueIteration = true;
      AWS.util.arrayEach(items, function(item) {
        continueIteration = callback(null, item);
        if (continueIteration === false) {
          return AWS.util.abort;
        }
      });
      return continueIteration;
    }

    this.eachPage(wrappedCallback);
  },

  /**
   * @return [Boolean] whether the operation can return multiple pages of
   *   response data.
   * @see AWS.Response.eachPage
   * @since v1.4.0
   */
  isPageable: function isPageable() {
    return this.service.paginationConfig(this.operation) ? true : false;
  },

  /**
   * Sends the request and converts the request object into a readable stream
   * that can be read from or piped into a writable stream.
   *
   * @note The data read from a readable stream contains only
   *   the raw HTTP body contents.
   * @example Manually reading from a stream
   *   request.createReadStream().on('data', function(data) {
   *     console.log("Got data:", data.toString());
   *   });
   * @example Piping a request body into a file
   *   var out = fs.createWriteStream('/path/to/outfile.jpg');
   *   s3.service.getObject(params).createReadStream().pipe(out);
   * @return [Stream] the readable stream object that can be piped
   *   or read from (by registering 'data' event listeners).
   * @!macro nobrowser
   */
  createReadStream: function createReadStream() {
    var streams = AWS.util.stream;
    var req = this;
    var stream = null;

    if (AWS.HttpClient.streamsApiVersion === 2) {
      stream = new streams.PassThrough();
      process.nextTick(function() { req.send(); });
    } else {
      stream = new streams.Stream();
      stream.readable = true;

      stream.sent = false;
      stream.on('newListener', function(event) {
        if (!stream.sent && event === 'data') {
          stream.sent = true;
          process.nextTick(function() { req.send(); });
        }
      });
    }

    this.on('error', function(err) {
      stream.emit('error', err);
    });

    this.on('httpHeaders', function streamHeaders(statusCode, headers, resp) {
      if (statusCode < 300) {
        req.removeListener('httpData', AWS.EventListeners.Core.HTTP_DATA);
        req.removeListener('httpError', AWS.EventListeners.Core.HTTP_ERROR);
        req.on('httpError', function streamHttpError(error) {
          resp.error = error;
          resp.error.retryable = false;
        });

        var shouldCheckContentLength = false;
        var expectedLen;
        if (req.httpRequest.method !== 'HEAD') {
          expectedLen = parseInt(headers['content-length'], 10);
        }
        if (expectedLen !== undefined && !isNaN(expectedLen) && expectedLen >= 0) {
          shouldCheckContentLength = true;
          var receivedLen = 0;
        }

        var checkContentLengthAndEmit = function checkContentLengthAndEmit() {
          if (shouldCheckContentLength && receivedLen !== expectedLen) {
            stream.emit('error', AWS.util.error(
              new Error('Stream content length mismatch. Received ' +
                receivedLen + ' of ' + expectedLen + ' bytes.'),
              { code: 'StreamContentLengthMismatch' }
            ));
          } else if (AWS.HttpClient.streamsApiVersion === 2) {
            stream.end();
          } else {
            stream.emit('end');
          }
        };

        var httpStream = resp.httpResponse.createUnbufferedStream();

        if (AWS.HttpClient.streamsApiVersion === 2) {
          if (shouldCheckContentLength) {
            var lengthAccumulator = new streams.PassThrough();
            lengthAccumulator._write = function(chunk) {
              if (chunk && chunk.length) {
                receivedLen += chunk.length;
              }
              return streams.PassThrough.prototype._write.apply(this, arguments);
            };

            lengthAccumulator.on('end', checkContentLengthAndEmit);
            stream.on('error', function(err) {
              shouldCheckContentLength = false;
              httpStream.unpipe(lengthAccumulator);
              lengthAccumulator.emit('end');
              lengthAccumulator.end();
            });
            httpStream.pipe(lengthAccumulator).pipe(stream, { end: false });
          } else {
            httpStream.pipe(stream);
          }
        } else {

          if (shouldCheckContentLength) {
            httpStream.on('data', function(arg) {
              if (arg && arg.length) {
                receivedLen += arg.length;
              }
            });
          }

          httpStream.on('data', function(arg) {
            stream.emit('data', arg);
          });
          httpStream.on('end', checkContentLengthAndEmit);
        }

        httpStream.on('error', function(err) {
          shouldCheckContentLength = false;
          stream.emit('error', err);
        });
      }
    });

    return stream;
  },

  /**
   * @param [Array,Response] args This should be the response object,
   *   or an array of args to send to the event.
   * @api private
   */
  emitEvent: function emit(eventName, args, done) {
    if (typeof args === 'function') { done = args; args = null; }
    if (!done) done = function() { };
    if (!args) args = this.eventParameters(eventName, this.response);

    var origEmit = AWS.SequentialExecutor.prototype.emit;
    origEmit.call(this, eventName, args, function (err) {
      if (err) this.response.error = err;
      done.call(this, err);
    });
  },

  /**
   * @api private
   */
  eventParameters: function eventParameters(eventName) {
    switch (eventName) {
      case 'restart':
      case 'validate':
      case 'sign':
      case 'build':
      case 'afterValidate':
      case 'afterBuild':
        return [this];
      case 'error':
        return [this.response.error, this.response];
      default:
        return [this.response];
    }
  },

  /**
   * @api private
   */
  presign: function presign(expires, callback) {
    if (!callback && typeof expires === 'function') {
      callback = expires;
      expires = null;
    }
    return new AWS.Signers.Presign().sign(this.toGet(), expires, callback);
  },

  /**
   * @api private
   */
  isPresigned: function isPresigned() {
    return Object.prototype.hasOwnProperty.call(this.httpRequest.headers, 'presigned-expires');
  },

  /**
   * @api private
   */
  toUnauthenticated: function toUnauthenticated() {
    this._unAuthenticated = true;
    this.removeListener('validate', AWS.EventListeners.Core.VALIDATE_CREDENTIALS);
    this.removeListener('sign', AWS.EventListeners.Core.SIGN);
    return this;
  },

  /**
   * @api private
   */
  toGet: function toGet() {
    if (this.service.api.protocol === 'query' ||
        this.service.api.protocol === 'ec2') {
      this.removeListener('build', this.buildAsGet);
      this.addListener('build', this.buildAsGet);
    }
    return this;
  },

  /**
   * @api private
   */
  buildAsGet: function buildAsGet(request) {
    request.httpRequest.method = 'GET';
    request.httpRequest.path = request.service.endpoint.path +
                               '?' + request.httpRequest.body;
    request.httpRequest.body = '';

    // don't need these headers on a GET request
    delete request.httpRequest.headers['Content-Length'];
    delete request.httpRequest.headers['Content-Type'];
  },

  /**
   * @api private
   */
  haltHandlersOnError: function haltHandlersOnError() {
    this._haltHandlersOnError = true;
  }
});

/**
 * @api private
 */
AWS.Request.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.promise = function promise() {
    var self = this;
    // append to user agent
    this.httpRequest.appendToUserAgent('promise');
    return new PromiseDependency(function(resolve, reject) {
      self.on('complete', function(resp) {
        if (resp.error) {
          reject(resp.error);
        } else {
          // define $response property so that it is not enumberable
          // this prevents circular reference errors when stringifying the JSON object
          resolve(Object.defineProperty(
            resp.data || {},
            '$response',
            {value: resp}
          ));
        }
      });
      self.runTo();
    });
  };
};

/**
 * @api private
 */
AWS.Request.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.promise;
};

AWS.util.addPromises(AWS.Request);

AWS.util.mixin(AWS.Request, AWS.SequentialExecutor);

}).call(this,require('_process'))
},{"./core":18,"./state_machine":70,"_process":87,"jmespath":86}],56:[function(require,module,exports){
/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */

var AWS = require('./core');
var inherit = AWS.util.inherit;
var jmespath = require('jmespath');

/**
 * @api private
 */
function CHECK_ACCEPTORS(resp) {
  var waiter = resp.request._waiter;
  var acceptors = waiter.config.acceptors;
  var acceptorMatched = false;
  var state = 'retry';

  acceptors.forEach(function(acceptor) {
    if (!acceptorMatched) {
      var matcher = waiter.matchers[acceptor.matcher];
      if (matcher && matcher(resp, acceptor.expected, acceptor.argument)) {
        acceptorMatched = true;
        state = acceptor.state;
      }
    }
  });

  if (!acceptorMatched && resp.error) state = 'failure';

  if (state === 'success') {
    waiter.setSuccess(resp);
  } else {
    waiter.setError(resp, state === 'retry');
  }
}

/**
 * @api private
 */
AWS.ResourceWaiter = inherit({
  /**
   * Waits for a given state on a service object
   * @param service [Service] the service object to wait on
   * @param state [String] the state (defined in waiter configuration) to wait
   *   for.
   * @example Create a waiter for running EC2 instances
   *   var ec2 = new AWS.EC2;
   *   var waiter = new AWS.ResourceWaiter(ec2, 'instanceRunning');
   */
  constructor: function constructor(service, state) {
    this.service = service;
    this.state = state;
    this.loadWaiterConfig(this.state);
  },

  service: null,

  state: null,

  config: null,

  matchers: {
    path: function(resp, expected, argument) {
      try {
        var result = jmespath.search(resp.data, argument);
      } catch (err) {
        return false;
      }

      return jmespath.strictDeepEqual(result,expected);
    },

    pathAll: function(resp, expected, argument) {
      try {
        var results = jmespath.search(resp.data, argument);
      } catch (err) {
        return false;
      }

      if (!Array.isArray(results)) results = [results];
      var numResults = results.length;
      if (!numResults) return false;
      for (var ind = 0 ; ind < numResults; ind++) {
        if (!jmespath.strictDeepEqual(results[ind], expected)) {
          return false;
        }
      }
      return true;
    },

    pathAny: function(resp, expected, argument) {
      try {
        var results = jmespath.search(resp.data, argument);
      } catch (err) {
        return false;
      }

      if (!Array.isArray(results)) results = [results];
      var numResults = results.length;
      for (var ind = 0 ; ind < numResults; ind++) {
        if (jmespath.strictDeepEqual(results[ind], expected)) {
          return true;
        }
      }
      return false;
    },

    status: function(resp, expected) {
      var statusCode = resp.httpResponse.statusCode;
      return (typeof statusCode === 'number') && (statusCode === expected);
    },

    error: function(resp, expected) {
      if (typeof expected === 'string' && resp.error) {
        return expected === resp.error.code;
      }
      // if expected is not string, can be boolean indicating presence of error
      return expected === !!resp.error;
    }
  },

  listeners: new AWS.SequentialExecutor().addNamedListeners(function(add) {
    add('RETRY_CHECK', 'retry', function(resp) {
      var waiter = resp.request._waiter;
      if (resp.error && resp.error.code === 'ResourceNotReady') {
        resp.error.retryDelay = (waiter.config.delay || 0) * 1000;
      }
    });

    add('CHECK_OUTPUT', 'extractData', CHECK_ACCEPTORS);

    add('CHECK_ERROR', 'extractError', CHECK_ACCEPTORS);
  }),

  /**
   * @return [AWS.Request]
   */
  wait: function wait(params, callback) {
    if (typeof params === 'function') {
      callback = params; params = undefined;
    }

    if (params && params.$waiter) {
      params = AWS.util.copy(params);
      if (typeof params.$waiter.delay === 'number') {
        this.config.delay = params.$waiter.delay;
      }
      if (typeof params.$waiter.maxAttempts === 'number') {
        this.config.maxAttempts = params.$waiter.maxAttempts;
      }
      delete params.$waiter;
    }

    var request = this.service.makeRequest(this.config.operation, params);
    request._waiter = this;
    request.response.maxRetries = this.config.maxAttempts;
    request.addListeners(this.listeners);

    if (callback) request.send(callback);
    return request;
  },

  setSuccess: function setSuccess(resp) {
    resp.error = null;
    resp.data = resp.data || {};
    resp.request.removeAllListeners('extractData');
  },

  setError: function setError(resp, retryable) {
    resp.data = null;
    resp.error = AWS.util.error(resp.error || new Error(), {
      code: 'ResourceNotReady',
      message: 'Resource is not in the state ' + this.state,
      retryable: retryable
    });
  },

  /**
   * Loads waiter configuration from API configuration
   *
   * @api private
   */
  loadWaiterConfig: function loadWaiterConfig(state) {
    if (!this.service.api.waiters[state]) {
      throw new AWS.util.error(new Error(), {
        code: 'StateNotFoundError',
        message: 'State ' + state + ' not found.'
      });
    }

    this.config = AWS.util.copy(this.service.api.waiters[state]);
  }
});

},{"./core":18,"jmespath":86}],57:[function(require,module,exports){
var AWS = require('./core');
var inherit = AWS.util.inherit;
var jmespath = require('jmespath');

/**
 * This class encapsulates the response information
 * from a service request operation sent through {AWS.Request}.
 * The response object has two main properties for getting information
 * back from a request:
 *
 * ## The `data` property
 *
 * The `response.data` property contains the serialized object data
 * retrieved from the service request. For instance, for an
 * Amazon DynamoDB `listTables` method call, the response data might
 * look like:
 *
 * ```
 * > resp.data
 * { TableNames:
 *    [ 'table1', 'table2', ... ] }
 * ```
 *
 * The `data` property can be null if an error occurs (see below).
 *
 * ## The `error` property
 *
 * In the event of a service error (or transfer error), the
 * `response.error` property will be filled with the given
 * error data in the form:
 *
 * ```
 * { code: 'SHORT_UNIQUE_ERROR_CODE',
 *   message: 'Some human readable error message' }
 * ```
 *
 * In the case of an error, the `data` property will be `null`.
 * Note that if you handle events that can be in a failure state,
 * you should always check whether `response.error` is set
 * before attempting to access the `response.data` property.
 *
 * @!attribute data
 *   @readonly
 *   @!group Data Properties
 *   @note Inside of a {AWS.Request~httpData} event, this
 *     property contains a single raw packet instead of the
 *     full de-serialized service response.
 *   @return [Object] the de-serialized response data
 *     from the service.
 *
 * @!attribute error
 *   An structure containing information about a service
 *   or networking error.
 *   @readonly
 *   @!group Data Properties
 *   @note This attribute is only filled if a service or
 *     networking error occurs.
 *   @return [Error]
 *     * code [String] a unique short code representing the
 *       error that was emitted.
 *     * message [String] a longer human readable error message
 *     * retryable [Boolean] whether the error message is
 *       retryable.
 *     * statusCode [Numeric] in the case of a request that reached the service,
 *       this value contains the response status code.
 *     * time [Date] the date time object when the error occurred.
 *     * hostname [String] set when a networking error occurs to easily
 *       identify the endpoint of the request.
 *     * region [String] set when a networking error occurs to easily
 *       identify the region of the request.
 *
 * @!attribute requestId
 *   @readonly
 *   @!group Data Properties
 *   @return [String] the unique request ID associated with the response.
 *     Log this value when debugging requests for AWS support.
 *
 * @!attribute retryCount
 *   @readonly
 *   @!group Operation Properties
 *   @return [Integer] the number of retries that were
 *     attempted before the request was completed.
 *
 * @!attribute redirectCount
 *   @readonly
 *   @!group Operation Properties
 *   @return [Integer] the number of redirects that were
 *     followed before the request was completed.
 *
 * @!attribute httpResponse
 *   @readonly
 *   @!group HTTP Properties
 *   @return [AWS.HttpResponse] the raw HTTP response object
 *     containing the response headers and body information
 *     from the server.
 *
 * @see AWS.Request
 */
AWS.Response = inherit({

  /**
   * @api private
   */
  constructor: function Response(request) {
    this.request = request;
    this.data = null;
    this.error = null;
    this.retryCount = 0;
    this.redirectCount = 0;
    this.httpResponse = new AWS.HttpResponse();
    if (request) {
      this.maxRetries = request.service.numRetries();
      this.maxRedirects = request.service.config.maxRedirects;
    }
  },

  /**
   * Creates a new request for the next page of response data, calling the
   * callback with the page data if a callback is provided.
   *
   * @callback callback function(err, data)
   *   Called when a page of data is returned from the next request.
   *
   *   @param err [Error] an error object, if an error occurred in the request
   *   @param data [Object] the next page of data, or null, if there are no
   *     more pages left.
   * @return [AWS.Request] the request object for the next page of data
   * @return [null] if no callback is provided and there are no pages left
   *   to retrieve.
   * @since v1.4.0
   */
  nextPage: function nextPage(callback) {
    var config;
    var service = this.request.service;
    var operation = this.request.operation;
    try {
      config = service.paginationConfig(operation, true);
    } catch (e) { this.error = e; }

    if (!this.hasNextPage()) {
      if (callback) callback(this.error, null);
      else if (this.error) throw this.error;
      return null;
    }

    var params = AWS.util.copy(this.request.params);
    if (!this.nextPageTokens) {
      return callback ? callback(null, null) : null;
    } else {
      var inputTokens = config.inputToken;
      if (typeof inputTokens === 'string') inputTokens = [inputTokens];
      for (var i = 0; i < inputTokens.length; i++) {
        params[inputTokens[i]] = this.nextPageTokens[i];
      }
      return service.makeRequest(this.request.operation, params, callback);
    }
  },

  /**
   * @return [Boolean] whether more pages of data can be returned by further
   *   requests
   * @since v1.4.0
   */
  hasNextPage: function hasNextPage() {
    this.cacheNextPageTokens();
    if (this.nextPageTokens) return true;
    if (this.nextPageTokens === undefined) return undefined;
    else return false;
  },

  /**
   * @api private
   */
  cacheNextPageTokens: function cacheNextPageTokens() {
    if (Object.prototype.hasOwnProperty.call(this, 'nextPageTokens')) return this.nextPageTokens;
    this.nextPageTokens = undefined;

    var config = this.request.service.paginationConfig(this.request.operation);
    if (!config) return this.nextPageTokens;

    this.nextPageTokens = null;
    if (config.moreResults) {
      if (!jmespath.search(this.data, config.moreResults)) {
        return this.nextPageTokens;
      }
    }

    var exprs = config.outputToken;
    if (typeof exprs === 'string') exprs = [exprs];
    AWS.util.arrayEach.call(this, exprs, function (expr) {
      var output = jmespath.search(this.data, expr);
      if (output) {
        this.nextPageTokens = this.nextPageTokens || [];
        this.nextPageTokens.push(output);
      }
    });

    return this.nextPageTokens;
  }

});

},{"./core":18,"jmespath":86}],58:[function(require,module,exports){
var AWS = require('./core');

/**
 * @api private
 * @!method on(eventName, callback)
 *   Registers an event listener callback for the event given by `eventName`.
 *   Parameters passed to the callback function depend on the individual event
 *   being triggered. See the event documentation for those parameters.
 *
 *   @param eventName [String] the event name to register the listener for
 *   @param callback [Function] the listener callback function
 *   @param toHead [Boolean] attach the listener callback to the head of callback array if set to true.
 *     Default to be false.
 *   @return [AWS.SequentialExecutor] the same object for chaining
 */
AWS.SequentialExecutor = AWS.util.inherit({

  constructor: function SequentialExecutor() {
    this._events = {};
  },

  /**
   * @api private
   */
  listeners: function listeners(eventName) {
    return this._events[eventName] ? this._events[eventName].slice(0) : [];
  },

  on: function on(eventName, listener, toHead) {
    if (this._events[eventName]) {
      toHead ?
        this._events[eventName].unshift(listener) :
        this._events[eventName].push(listener);
    } else {
      this._events[eventName] = [listener];
    }
    return this;
  },

  onAsync: function onAsync(eventName, listener, toHead) {
    listener._isAsync = true;
    return this.on(eventName, listener, toHead);
  },

  removeListener: function removeListener(eventName, listener) {
    var listeners = this._events[eventName];
    if (listeners) {
      var length = listeners.length;
      var position = -1;
      for (var i = 0; i < length; ++i) {
        if (listeners[i] === listener) {
          position = i;
        }
      }
      if (position > -1) {
        listeners.splice(position, 1);
      }
    }
    return this;
  },

  removeAllListeners: function removeAllListeners(eventName) {
    if (eventName) {
      delete this._events[eventName];
    } else {
      this._events = {};
    }
    return this;
  },

  /**
   * @api private
   */
  emit: function emit(eventName, eventArgs, doneCallback) {
    if (!doneCallback) doneCallback = function() { };
    var listeners = this.listeners(eventName);
    var count = listeners.length;
    this.callListeners(listeners, eventArgs, doneCallback);
    return count > 0;
  },

  /**
   * @api private
   */
  callListeners: function callListeners(listeners, args, doneCallback, prevError) {
    var self = this;
    var error = prevError || null;

    function callNextListener(err) {
      if (err) {
        error = AWS.util.error(error || new Error(), err);
        if (self._haltHandlersOnError) {
          return doneCallback.call(self, error);
        }
      }
      self.callListeners(listeners, args, doneCallback, error);
    }

    while (listeners.length > 0) {
      var listener = listeners.shift();
      if (listener._isAsync) { // asynchronous listener
        listener.apply(self, args.concat([callNextListener]));
        return; // stop here, callNextListener will continue
      } else { // synchronous listener
        try {
          listener.apply(self, args);
        } catch (err) {
          error = AWS.util.error(error || new Error(), err);
        }
        if (error && self._haltHandlersOnError) {
          doneCallback.call(self, error);
          return;
        }
      }
    }
    doneCallback.call(self, error);
  },

  /**
   * Adds or copies a set of listeners from another list of
   * listeners or SequentialExecutor object.
   *
   * @param listeners [map<String,Array<Function>>, AWS.SequentialExecutor]
   *   a list of events and callbacks, or an event emitter object
   *   containing listeners to add to this emitter object.
   * @return [AWS.SequentialExecutor] the emitter object, for chaining.
   * @example Adding listeners from a map of listeners
   *   emitter.addListeners({
   *     event1: [function() { ... }, function() { ... }],
   *     event2: [function() { ... }]
   *   });
   *   emitter.emit('event1'); // emitter has event1
   *   emitter.emit('event2'); // emitter has event2
   * @example Adding listeners from another emitter object
   *   var emitter1 = new AWS.SequentialExecutor();
   *   emitter1.on('event1', function() { ... });
   *   emitter1.on('event2', function() { ... });
   *   var emitter2 = new AWS.SequentialExecutor();
   *   emitter2.addListeners(emitter1);
   *   emitter2.emit('event1'); // emitter2 has event1
   *   emitter2.emit('event2'); // emitter2 has event2
   */
  addListeners: function addListeners(listeners) {
    var self = this;

    // extract listeners if parameter is an SequentialExecutor object
    if (listeners._events) listeners = listeners._events;

    AWS.util.each(listeners, function(event, callbacks) {
      if (typeof callbacks === 'function') callbacks = [callbacks];
      AWS.util.arrayEach(callbacks, function(callback) {
        self.on(event, callback);
      });
    });

    return self;
  },

  /**
   * Registers an event with {on} and saves the callback handle function
   * as a property on the emitter object using a given `name`.
   *
   * @param name [String] the property name to set on this object containing
   *   the callback function handle so that the listener can be removed in
   *   the future.
   * @param (see on)
   * @return (see on)
   * @example Adding a named listener DATA_CALLBACK
   *   var listener = function() { doSomething(); };
   *   emitter.addNamedListener('DATA_CALLBACK', 'data', listener);
   *
   *   // the following prints: true
   *   console.log(emitter.DATA_CALLBACK == listener);
   */
  addNamedListener: function addNamedListener(name, eventName, callback, toHead) {
    this[name] = callback;
    this.addListener(eventName, callback, toHead);
    return this;
  },

  /**
   * @api private
   */
  addNamedAsyncListener: function addNamedAsyncListener(name, eventName, callback, toHead) {
    callback._isAsync = true;
    return this.addNamedListener(name, eventName, callback, toHead);
  },

  /**
   * Helper method to add a set of named listeners using
   * {addNamedListener}. The callback contains a parameter
   * with a handle to the `addNamedListener` method.
   *
   * @callback callback function(add)
   *   The callback function is called immediately in order to provide
   *   the `add` function to the block. This simplifies the addition of
   *   a large group of named listeners.
   *   @param add [Function] the {addNamedListener} function to call
   *     when registering listeners.
   * @example Adding a set of named listeners
   *   emitter.addNamedListeners(function(add) {
   *     add('DATA_CALLBACK', 'data', function() { ... });
   *     add('OTHER', 'otherEvent', function() { ... });
   *     add('LAST', 'lastEvent', function() { ... });
   *   });
   *
   *   // these properties are now set:
   *   emitter.DATA_CALLBACK;
   *   emitter.OTHER;
   *   emitter.LAST;
   */
  addNamedListeners: function addNamedListeners(callback) {
    var self = this;
    callback(
      function() {
        self.addNamedListener.apply(self, arguments);
      },
      function() {
        self.addNamedAsyncListener.apply(self, arguments);
      }
    );
    return this;
  }
});

/**
 * {on} is the prefered method.
 * @api private
 */
AWS.SequentialExecutor.prototype.addListener = AWS.SequentialExecutor.prototype.on;

/**
 * @api private
 */
module.exports = AWS.SequentialExecutor;

},{"./core":18}],59:[function(require,module,exports){
(function (process){
var AWS = require('./core');
var Api = require('./model/api');
var regionConfig = require('./region_config');

var inherit = AWS.util.inherit;
var clientCount = 0;

/**
 * The service class representing an AWS service.
 *
 * @class_abstract This class is an abstract class.
 *
 * @!attribute apiVersions
 *   @return [Array<String>] the list of API versions supported by this service.
 *   @readonly
 */
AWS.Service = inherit({
  /**
   * Create a new service object with a configuration object
   *
   * @param config [map] a map of configuration options
   */
  constructor: function Service(config) {
    if (!this.loadServiceClass) {
      throw AWS.util.error(new Error(),
        'Service must be constructed with `new\' operator');
    }
    var ServiceClass = this.loadServiceClass(config || {});
    if (ServiceClass) {
      var originalConfig = AWS.util.copy(config);
      var svc = new ServiceClass(config);
      Object.defineProperty(svc, '_originalConfig', {
        get: function() { return originalConfig; },
        enumerable: false,
        configurable: true
      });
      svc._clientId = ++clientCount;
      return svc;
    }
    this.initialize(config);
  },

  /**
   * @api private
   */
  initialize: function initialize(config) {
    var svcConfig = AWS.config[this.serviceIdentifier];
    this.config = new AWS.Config(AWS.config);
    if (svcConfig) this.config.update(svcConfig, true);
    if (config) this.config.update(config, true);

    this.validateService();
    if (!this.config.endpoint) regionConfig(this);

    this.config.endpoint = this.endpointFromTemplate(this.config.endpoint);
    this.setEndpoint(this.config.endpoint);
    //enable attaching listeners to service client
    AWS.SequentialExecutor.call(this);
    AWS.Service.addDefaultMonitoringListeners(this);
    if ((this.config.clientSideMonitoring || AWS.Service._clientSideMonitoring) && this.publisher) {
      var publisher = this.publisher;
      this.addNamedListener('PUBLISH_API_CALL', 'apiCall', function PUBLISH_API_CALL(event) {
        process.nextTick(function() {publisher.eventHandler(event);});
      });
      this.addNamedListener('PUBLISH_API_ATTEMPT', 'apiCallAttempt', function PUBLISH_API_ATTEMPT(event) {
        process.nextTick(function() {publisher.eventHandler(event);});
      });
    }
  },

  /**
   * @api private
   */
  validateService: function validateService() {
  },

  /**
   * @api private
   */
  loadServiceClass: function loadServiceClass(serviceConfig) {
    var config = serviceConfig;
    if (!AWS.util.isEmpty(this.api)) {
      return null;
    } else if (config.apiConfig) {
      return AWS.Service.defineServiceApi(this.constructor, config.apiConfig);
    } else if (!this.constructor.services) {
      return null;
    } else {
      config = new AWS.Config(AWS.config);
      config.update(serviceConfig, true);
      var version = config.apiVersions[this.constructor.serviceIdentifier];
      version = version || config.apiVersion;
      return this.getLatestServiceClass(version);
    }
  },

  /**
   * @api private
   */
  getLatestServiceClass: function getLatestServiceClass(version) {
    version = this.getLatestServiceVersion(version);
    if (this.constructor.services[version] === null) {
      AWS.Service.defineServiceApi(this.constructor, version);
    }

    return this.constructor.services[version];
  },

  /**
   * @api private
   */
  getLatestServiceVersion: function getLatestServiceVersion(version) {
    if (!this.constructor.services || this.constructor.services.length === 0) {
      throw new Error('No services defined on ' +
                      this.constructor.serviceIdentifier);
    }

    if (!version) {
      version = 'latest';
    } else if (AWS.util.isType(version, Date)) {
      version = AWS.util.date.iso8601(version).split('T')[0];
    }

    if (Object.hasOwnProperty(this.constructor.services, version)) {
      return version;
    }

    var keys = Object.keys(this.constructor.services).sort();
    var selectedVersion = null;
    for (var i = keys.length - 1; i >= 0; i--) {
      // versions that end in "*" are not available on disk and can be
      // skipped, so do not choose these as selectedVersions
      if (keys[i][keys[i].length - 1] !== '*') {
        selectedVersion = keys[i];
      }
      if (keys[i].substr(0, 10) <= version) {
        return selectedVersion;
      }
    }

    throw new Error('Could not find ' + this.constructor.serviceIdentifier +
                    ' API to satisfy version constraint `' + version + '\'');
  },

  /**
   * @api private
   */
  api: {},

  /**
   * @api private
   */
  defaultRetryCount: 3,

  /**
   * @api private
   */
  customizeRequests: function customizeRequests(callback) {
    if (!callback) {
      this.customRequestHandler = null;
    } else if (typeof callback === 'function') {
      this.customRequestHandler = callback;
    } else {
      throw new Error('Invalid callback type \'' + typeof callback + '\' provided in customizeRequests');
    }
  },

  /**
   * Calls an operation on a service with the given input parameters.
   *
   * @param operation [String] the name of the operation to call on the service.
   * @param params [map] a map of input options for the operation
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  makeRequest: function makeRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = null;
    }

    params = params || {};
    if (this.config.params) { // copy only toplevel bound params
      var rules = this.api.operations[operation];
      if (rules) {
        params = AWS.util.copy(params);
        AWS.util.each(this.config.params, function(key, value) {
          if (rules.input.members[key]) {
            if (params[key] === undefined || params[key] === null) {
              params[key] = value;
            }
          }
        });
      }
    }

    var request = new AWS.Request(this, operation, params);
    this.addAllRequestListeners(request);
    this.attachMonitoringEmitter(request);
    if (callback) request.send(callback);
    return request;
  },

  /**
   * Calls an operation on a service with the given input parameters, without
   * any authentication data. This method is useful for "public" API operations.
   *
   * @param operation [String] the name of the operation to call on the service.
   * @param params [map] a map of input options for the operation
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  makeUnauthenticatedRequest: function makeUnauthenticatedRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }

    var request = this.makeRequest(operation, params).toUnauthenticated();
    return callback ? request.send(callback) : request;
  },

  /**
   * Waits for a given state
   *
   * @param state [String] the state on the service to wait for
   * @param params [map] a map of parameters to pass with each request
   * @option params $waiter [map] a map of configuration options for the waiter
   * @option params $waiter.delay [Number] The number of seconds to wait between
   *                                       requests
   * @option params $waiter.maxAttempts [Number] The maximum number of requests
   *                                             to send while waiting
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  waitFor: function waitFor(state, params, callback) {
    var waiter = new AWS.ResourceWaiter(this, state);
    return waiter.wait(params, callback);
  },

  /**
   * @api private
   */
  addAllRequestListeners: function addAllRequestListeners(request) {
    var list = [AWS.events, AWS.EventListeners.Core, this.serviceInterface(),
                AWS.EventListeners.CorePost];
    for (var i = 0; i < list.length; i++) {
      if (list[i]) request.addListeners(list[i]);
    }

    // disable parameter validation
    if (!this.config.paramValidation) {
      request.removeListener('validate',
        AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    }

    if (this.config.logger) { // add logging events
      request.addListeners(AWS.EventListeners.Logger);
    }

    this.setupRequestListeners(request);
    // call prototype's customRequestHandler
    if (typeof this.constructor.prototype.customRequestHandler === 'function') {
      this.constructor.prototype.customRequestHandler(request);
    }
    // call instance's customRequestHandler
    if (Object.prototype.hasOwnProperty.call(this, 'customRequestHandler') && typeof this.customRequestHandler === 'function') {
      this.customRequestHandler(request);
    }
  },

  /**
   * Event recording metrics for a whole API call.
   * @returns {object} a subset of api call metrics
   * @api private
   */
  apiCallEvent: function apiCallEvent(request) {
    var api = request.service.api.operations[request.operation];
    var monitoringEvent = {
      Type: 'ApiCall',
      Api: api ? api.name : request.operation,
      Version: 1,
      Service: request.service.api.serviceId || request.service.api.endpointPrefix,
      Region: request.httpRequest.region,
      MaxRetriesExceeded: 0,
      UserAgent: request.httpRequest.getUserAgent(),
    };
    var response = request.response;
    if (response.httpResponse.statusCode) {
      monitoringEvent.FinalHttpStatusCode = response.httpResponse.statusCode;
    }
    if (response.error) {
      var error = response.error;
      var statusCode = response.httpResponse.statusCode;
      if (statusCode > 299) {
        if (error.code) monitoringEvent.FinalAwsException = error.code;
        if (error.message) monitoringEvent.FinalAwsExceptionMessage = error.message;
      } else {
        if (error.code || error.name) monitoringEvent.FinalSdkException = error.code || error.name;
        if (error.message) monitoringEvent.FinalSdkExceptionMessage = error.message;
      }
    }
    return monitoringEvent;
  },

  /**
   * Event recording metrics for an API call attempt.
   * @returns {object} a subset of api call attempt metrics
   * @api private
   */
  apiAttemptEvent: function apiAttemptEvent(request) {
    var api = request.service.api.operations[request.operation];
    var monitoringEvent = {
      Type: 'ApiCallAttempt',
      Api: api ? api.name : request.operation,
      Version: 1,
      Service: request.service.api.serviceId || request.service.api.endpointPrefix,
      Fqdn: request.httpRequest.endpoint.hostname,
      UserAgent: request.httpRequest.getUserAgent(),
    };
    var response = request.response;
    if (response.httpResponse.statusCode) {
      monitoringEvent.HttpStatusCode = response.httpResponse.statusCode;
    }
    if (
      !request._unAuthenticated &&
      request.service.config.credentials &&
      request.service.config.credentials.accessKeyId
    ) {
      monitoringEvent.AccessKey = request.service.config.credentials.accessKeyId;
    }
    if (!response.httpResponse.headers) return monitoringEvent;
    if (request.httpRequest.headers['x-amz-security-token']) {
      monitoringEvent.SessionToken = request.httpRequest.headers['x-amz-security-token'];
    }
    if (response.httpResponse.headers['x-amzn-requestid']) {
      monitoringEvent.XAmznRequestId = response.httpResponse.headers['x-amzn-requestid'];
    }
    if (response.httpResponse.headers['x-amz-request-id']) {
      monitoringEvent.XAmzRequestId = response.httpResponse.headers['x-amz-request-id'];
    }
    if (response.httpResponse.headers['x-amz-id-2']) {
      monitoringEvent.XAmzId2 = response.httpResponse.headers['x-amz-id-2'];
    }
    return monitoringEvent;
  },

  /**
   * Add metrics of failed request.
   * @api private
   */
  attemptFailEvent: function attemptFailEvent(request) {
    var monitoringEvent = this.apiAttemptEvent(request);
    var response = request.response;
    var error = response.error;
    if (response.httpResponse.statusCode > 299 ) {
      if (error.code) monitoringEvent.AwsException = error.code;
      if (error.message) monitoringEvent.AwsExceptionMessage = error.message;
    } else {
      if (error.code || error.name) monitoringEvent.SdkException = error.code || error.name;
      if (error.message) monitoringEvent.SdkExceptionMessage = error.message;
    }
    return monitoringEvent;
  },

  /**
   * Attach listeners to request object to fetch metrics of each request
   * and emit data object through \'ApiCall\' and \'ApiCallAttempt\' events.
   * @api private
   */
  attachMonitoringEmitter: function attachMonitoringEmitter(request) {
    var attemptTimestamp; //timestamp marking the beginning of a request attempt
    var attemptStartRealTime; //Start time of request attempt. Used to calculating attemptLatency
    var attemptLatency; //latency from request sent out to http response reaching SDK
    var callStartRealTime; //Start time of API call. Used to calculating API call latency
    var attemptCount = 0; //request.retryCount is not reliable here
    var region; //region cache region for each attempt since it can be updated in plase (e.g. s3)
    var callTimestamp; //timestamp when the request is created
    var self = this;
    var addToHead = true;

    request.on('validate', function () {
      callStartRealTime = AWS.util.realClock.now();
      callTimestamp = Date.now();
    }, addToHead);
    request.on('sign', function () {
      attemptStartRealTime = AWS.util.realClock.now();
      attemptTimestamp = Date.now();
      region = request.httpRequest.region;
      attemptCount++;
    }, addToHead);
    request.on('validateResponse', function() {
      attemptLatency = Math.round(AWS.util.realClock.now() - attemptStartRealTime);
    });
    request.addNamedListener('API_CALL_ATTEMPT', 'success', function API_CALL_ATTEMPT() {
      var apiAttemptEvent = self.apiAttemptEvent(request);
      apiAttemptEvent.Timestamp = attemptTimestamp;
      apiAttemptEvent.AttemptLatency = attemptLatency >= 0 ? attemptLatency : 0;
      apiAttemptEvent.Region = region;
      self.emit('apiCallAttempt', [apiAttemptEvent]);
    });
    request.addNamedListener('API_CALL_ATTEMPT_RETRY', 'retry', function API_CALL_ATTEMPT_RETRY() {
      var apiAttemptEvent = self.attemptFailEvent(request);
      apiAttemptEvent.Timestamp = attemptTimestamp;
      //attemptLatency may not be available if fail before response
      attemptLatency = attemptLatency ||
        Math.round(AWS.util.realClock.now() - attemptStartRealTime);
      apiAttemptEvent.AttemptLatency = attemptLatency >= 0 ? attemptLatency : 0;
      apiAttemptEvent.Region = region;
      self.emit('apiCallAttempt', [apiAttemptEvent]);
    });
    request.addNamedListener('API_CALL', 'complete', function API_CALL() {
      var apiCallEvent = self.apiCallEvent(request);
      apiCallEvent.AttemptCount = attemptCount;
      if (apiCallEvent.AttemptCount <= 0) return;
      apiCallEvent.Timestamp = callTimestamp;
      var latency = Math.round(AWS.util.realClock.now() - callStartRealTime);
      apiCallEvent.Latency = latency >= 0 ? latency : 0;
      var response = request.response;
      if (
        typeof response.retryCount === 'number' &&
        typeof response.maxRetries === 'number' &&
        (response.retryCount >= response.maxRetries)
      ) {
        apiCallEvent.MaxRetriesExceeded = 1;
      }
      self.emit('apiCall', [apiCallEvent]);
    });
  },

  /**
   * Override this method to setup any custom request listeners for each
   * new request to the service.
   *
   * @method_abstract This is an abstract method.
   */
  setupRequestListeners: function setupRequestListeners(request) {
  },

  /**
   * Gets the signer class for a given request
   * @api private
   */
  getSignerClass: function getSignerClass(request) {
    var version;
    // get operation authtype if present
    var operation = null;
    var authtype = '';
    if (request) {
      var operations = request.service.api.operations || {};
      operation = operations[request.operation] || null;
      authtype = operation ? operation.authtype : '';
    }
    if (this.config.signatureVersion) {
      version = this.config.signatureVersion;
    } else if (authtype === 'v4' || authtype === 'v4-unsigned-body') {
      version = 'v4';
    } else {
      version = this.api.signatureVersion;
    }
    return AWS.Signers.RequestSigner.getVersion(version);
  },

  /**
   * @api private
   */
  serviceInterface: function serviceInterface() {
    switch (this.api.protocol) {
      case 'ec2': return AWS.EventListeners.Query;
      case 'query': return AWS.EventListeners.Query;
      case 'json': return AWS.EventListeners.Json;
      case 'rest-json': return AWS.EventListeners.RestJson;
      case 'rest-xml': return AWS.EventListeners.RestXml;
    }
    if (this.api.protocol) {
      throw new Error('Invalid service `protocol\' ' +
        this.api.protocol + ' in API config');
    }
  },

  /**
   * @api private
   */
  successfulResponse: function successfulResponse(resp) {
    return resp.httpResponse.statusCode < 300;
  },

  /**
   * How many times a failed request should be retried before giving up.
   * the defaultRetryCount can be overriden by service classes.
   *
   * @api private
   */
  numRetries: function numRetries() {
    if (this.config.maxRetries !== undefined) {
      return this.config.maxRetries;
    } else {
      return this.defaultRetryCount;
    }
  },

  /**
   * @api private
   */
  retryDelays: function retryDelays(retryCount) {
    return AWS.util.calculateRetryDelay(retryCount, this.config.retryDelayOptions);
  },

  /**
   * @api private
   */
  retryableError: function retryableError(error) {
    if (this.timeoutError(error)) return true;
    if (this.networkingError(error)) return true;
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (error.statusCode >= 500) return true;
    return false;
  },

  /**
   * @api private
   */
  networkingError: function networkingError(error) {
    return error.code === 'NetworkingError';
  },

  /**
   * @api private
   */
  timeoutError: function timeoutError(error) {
    return error.code === 'TimeoutError';
  },

  /**
   * @api private
   */
  expiredCredentialsError: function expiredCredentialsError(error) {
    // TODO : this only handles *one* of the expired credential codes
    return (error.code === 'ExpiredTokenException');
  },

  /**
   * @api private
   */
  clockSkewError: function clockSkewError(error) {
    switch (error.code) {
      case 'RequestTimeTooSkewed':
      case 'RequestExpired':
      case 'InvalidSignatureException':
      case 'SignatureDoesNotMatch':
      case 'AuthFailure':
      case 'RequestInTheFuture':
        return true;
      default: return false;
    }
  },

  /**
   * @api private
   */
  getSkewCorrectedDate: function getSkewCorrectedDate() {
    return new Date(Date.now() + this.config.systemClockOffset);
  },

  /**
   * @api private
   */
  applyClockOffset: function applyClockOffset(newServerTime) {
    if (newServerTime) {
      this.config.systemClockOffset = newServerTime - Date.now();
    }
  },

  /**
   * @api private
   */
  isClockSkewed: function isClockSkewed(newServerTime) {
    if (newServerTime) {
      return Math.abs(this.getSkewCorrectedDate().getTime() - newServerTime) >= 30000;
    }
  },

  /**
   * @api private
   */
  throttledError: function throttledError(error) {
    // this logic varies between services
    if (error.statusCode === 429) return true;
    switch (error.code) {
      case 'ProvisionedThroughputExceededException':
      case 'Throttling':
      case 'ThrottlingException':
      case 'RequestLimitExceeded':
      case 'RequestThrottled':
      case 'RequestThrottledException':
      case 'TooManyRequestsException':
      case 'TransactionInProgressException': //dynamodb
        return true;
      default:
        return false;
    }
  },

  /**
   * @api private
   */
  endpointFromTemplate: function endpointFromTemplate(endpoint) {
    if (typeof endpoint !== 'string') return endpoint;

    var e = endpoint;
    e = e.replace(/\{service\}/g, this.api.endpointPrefix);
    e = e.replace(/\{region\}/g, this.config.region);
    e = e.replace(/\{scheme\}/g, this.config.sslEnabled ? 'https' : 'http');
    return e;
  },

  /**
   * @api private
   */
  setEndpoint: function setEndpoint(endpoint) {
    this.endpoint = new AWS.Endpoint(endpoint, this.config);
  },

  /**
   * @api private
   */
  paginationConfig: function paginationConfig(operation, throwException) {
    var paginator = this.api.operations[operation].paginator;
    if (!paginator) {
      if (throwException) {
        var e = new Error();
        throw AWS.util.error(e, 'No pagination configuration for ' + operation);
      }
      return null;
    }

    return paginator;
  }
});

AWS.util.update(AWS.Service, {

  /**
   * Adds one method for each operation described in the api configuration
   *
   * @api private
   */
  defineMethods: function defineMethods(svc) {
    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
      if (svc.prototype[method]) return;
      var operation = svc.prototype.api.operations[method];
      if (operation.authtype === 'none') {
        svc.prototype[method] = function (params, callback) {
          return this.makeUnauthenticatedRequest(method, params, callback);
        };
      } else {
        svc.prototype[method] = function (params, callback) {
          return this.makeRequest(method, params, callback);
        };
      }
    });
  },

  /**
   * Defines a new Service class using a service identifier and list of versions
   * including an optional set of features (functions) to apply to the class
   * prototype.
   *
   * @param serviceIdentifier [String] the identifier for the service
   * @param versions [Array<String>] a list of versions that work with this
   *   service
   * @param features [Object] an object to attach to the prototype
   * @return [Class<Service>] the service class defined by this function.
   */
  defineService: function defineService(serviceIdentifier, versions, features) {
    AWS.Service._serviceMap[serviceIdentifier] = true;
    if (!Array.isArray(versions)) {
      features = versions;
      versions = [];
    }

    var svc = inherit(AWS.Service, features || {});

    if (typeof serviceIdentifier === 'string') {
      AWS.Service.addVersions(svc, versions);

      var identifier = svc.serviceIdentifier || serviceIdentifier;
      svc.serviceIdentifier = identifier;
    } else { // defineService called with an API
      svc.prototype.api = serviceIdentifier;
      AWS.Service.defineMethods(svc);
    }
    AWS.SequentialExecutor.call(this.prototype);
    //util.clientSideMonitoring is only available in node
    if (!this.prototype.publisher && AWS.util.clientSideMonitoring) {
      var Publisher = AWS.util.clientSideMonitoring.Publisher;
      var configProvider = AWS.util.clientSideMonitoring.configProvider;
      var publisherConfig = configProvider();
      this.prototype.publisher = new Publisher(publisherConfig);
      if (publisherConfig.enabled) {
        //if csm is enabled in environment, SDK should send all metrics
        AWS.Service._clientSideMonitoring = true;
      }
    }
    AWS.SequentialExecutor.call(svc.prototype);
    AWS.Service.addDefaultMonitoringListeners(svc.prototype);
    return svc;
  },

  /**
   * @api private
   */
  addVersions: function addVersions(svc, versions) {
    if (!Array.isArray(versions)) versions = [versions];

    svc.services = svc.services || {};
    for (var i = 0; i < versions.length; i++) {
      if (svc.services[versions[i]] === undefined) {
        svc.services[versions[i]] = null;
      }
    }

    svc.apiVersions = Object.keys(svc.services).sort();
  },

  /**
   * @api private
   */
  defineServiceApi: function defineServiceApi(superclass, version, apiConfig) {
    var svc = inherit(superclass, {
      serviceIdentifier: superclass.serviceIdentifier
    });

    function setApi(api) {
      if (api.isApi) {
        svc.prototype.api = api;
      } else {
        svc.prototype.api = new Api(api);
      }
    }

    if (typeof version === 'string') {
      if (apiConfig) {
        setApi(apiConfig);
      } else {
        try {
          setApi(AWS.apiLoader(superclass.serviceIdentifier, version));
        } catch (err) {
          throw AWS.util.error(err, {
            message: 'Could not find API configuration ' +
              superclass.serviceIdentifier + '-' + version
          });
        }
      }
      if (!Object.prototype.hasOwnProperty.call(superclass.services, version)) {
        superclass.apiVersions = superclass.apiVersions.concat(version).sort();
      }
      superclass.services[version] = svc;
    } else {
      setApi(version);
    }

    AWS.Service.defineMethods(svc);
    return svc;
  },

  /**
   * @api private
   */
  hasService: function(identifier) {
    return Object.prototype.hasOwnProperty.call(AWS.Service._serviceMap, identifier);
  },

  /**
   * @param attachOn attach default monitoring listeners to object
   *
   * Each monitoring event should be emitted from service client to service constructor prototype and then
   * to global service prototype like bubbling up. These default monitoring events listener will transfer
   * the monitoring events to the upper layer.
   * @api private
   */
  addDefaultMonitoringListeners: function addDefaultMonitoringListeners(attachOn) {
    attachOn.addNamedListener('MONITOR_EVENTS_BUBBLE', 'apiCallAttempt', function EVENTS_BUBBLE(event) {
      var baseClass = Object.getPrototypeOf(attachOn);
      if (baseClass._events) baseClass.emit('apiCallAttempt', [event]);
    });
    attachOn.addNamedListener('CALL_EVENTS_BUBBLE', 'apiCall', function CALL_EVENTS_BUBBLE(event) {
      var baseClass = Object.getPrototypeOf(attachOn);
      if (baseClass._events) baseClass.emit('apiCall', [event]);
    });
  },

  /**
   * @api private
   */
  _serviceMap: {}
});

AWS.util.mixin(AWS.Service, AWS.SequentialExecutor);

/**
 * @api private
 */
module.exports = AWS.Service;

}).call(this,require('_process'))
},{"./core":18,"./model/api":38,"./region_config":53,"_process":87}],60:[function(require,module,exports){
var AWS = require('../core');

AWS.util.update(AWS.CognitoIdentity.prototype, {
  getOpenIdToken: function getOpenIdToken(params, callback) {
    return this.makeUnauthenticatedRequest('getOpenIdToken', params, callback);
  },

  getId: function getId(params, callback) {
    return this.makeUnauthenticatedRequest('getId', params, callback);
  },

  getCredentialsForIdentity: function getCredentialsForIdentity(params, callback) {
    return this.makeUnauthenticatedRequest('getCredentialsForIdentity', params, callback);
  }
});

},{"../core":18}],61:[function(require,module,exports){
(function (process){
var AWS = require('../core');
var regionConfig = require('../region_config');
var ENV_REGIONAL_ENDPOINT_ENABLED = 'AWS_STS_REGIONAL_ENDPOINTS';
var CONFIG_REGIONAL_ENDPOINT_ENABLED = 'sts_regional_endpoints';

AWS.util.update(AWS.STS.prototype, {
  /**
   * @overload credentialsFrom(data, credentials = null)
   *   Creates a credentials object from STS response data containing
   *   credentials information. Useful for quickly setting AWS credentials.
   *
   *   @note This is a low-level utility function. If you want to load temporary
   *     credentials into your process for subsequent requests to AWS resources,
   *     you should use {AWS.TemporaryCredentials} instead.
   *   @param data [map] data retrieved from a call to {getFederatedToken},
   *     {getSessionToken}, {assumeRole}, or {assumeRoleWithWebIdentity}.
   *   @param credentials [AWS.Credentials] an optional credentials object to
   *     fill instead of creating a new object. Useful when modifying an
   *     existing credentials object from a refresh call.
   *   @return [AWS.TemporaryCredentials] the set of temporary credentials
   *     loaded from a raw STS operation response.
   *   @example Using credentialsFrom to load global AWS credentials
   *     var sts = new AWS.STS();
   *     sts.getSessionToken(function (err, data) {
   *       if (err) console.log("Error getting credentials");
   *       else {
   *         AWS.config.credentials = sts.credentialsFrom(data);
   *       }
   *     });
   *   @see AWS.TemporaryCredentials
   */
  credentialsFrom: function credentialsFrom(data, credentials) {
    if (!data) return null;
    if (!credentials) credentials = new AWS.TemporaryCredentials();
    credentials.expired = false;
    credentials.accessKeyId = data.Credentials.AccessKeyId;
    credentials.secretAccessKey = data.Credentials.SecretAccessKey;
    credentials.sessionToken = data.Credentials.SessionToken;
    credentials.expireTime = data.Credentials.Expiration;
    return credentials;
  },

  assumeRoleWithWebIdentity: function assumeRoleWithWebIdentity(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithWebIdentity', params, callback);
  },

  assumeRoleWithSAML: function assumeRoleWithSAML(params, callback) {
    return this.makeUnauthenticatedRequest('assumeRoleWithSAML', params, callback);
  },

  /**
   * @api private
   */
  validateRegionalEndpointsFlagValue: function validateRegionalEndpointsFlagValue(configValue, errorOptions) {
    if (typeof configValue === 'string' && ['legacy', 'regional'].indexOf(configValue.toLowerCase()) >= 0) {
      this.config.stsRegionalEndpoints = configValue.toLowerCase();
      return;
    } else {
      throw AWS.util.error(new Error(), errorOptions);
    }
  },

  /**
   * @api private
   */
  validateRegionalEndpointsFlag: function validateRegionalEndpointsFlag() {
    //validate config value
    var config = this.config;
    if (config.stsRegionalEndpoints) {
      this.validateRegionalEndpointsFlagValue(config.stsRegionalEndpoints, {
        code: 'InvalidConfiguration',
        message: 'invalid "stsRegionalEndpoints" configuration. Expect "legacy" ' +
        ' or "regional". Got "' + config.stsRegionalEndpoints + '".'
      });
    }
    if (!AWS.util.isNode()) return;
    //validate environmental variable
    if (Object.prototype.hasOwnProperty.call(process.env, ENV_REGIONAL_ENDPOINT_ENABLED)) {
      var envFlag = process.env[ENV_REGIONAL_ENDPOINT_ENABLED];
      this.validateRegionalEndpointsFlagValue(envFlag, {
        code: 'InvalidEnvironmentalVariable',
        message: 'invalid ' + ENV_REGIONAL_ENDPOINT_ENABLED + ' environmental variable. Expect "legacy" ' +
        ' or "regional". Got "' + process.env[ENV_REGIONAL_ENDPOINT_ENABLED] + '".'
      });
    }
    //validate shared config file
    var profile = {};
    try {
      var profiles = AWS.util.getProfilesFromSharedConfig(AWS.util.iniLoader);
      profile = profiles[process.env.AWS_PROFILE || AWS.util.defaultProfile];
    } catch (e) {};
    if (profile && Object.prototype.hasOwnProperty.call(profile, CONFIG_REGIONAL_ENDPOINT_ENABLED)) {
      var fileFlag = profile[CONFIG_REGIONAL_ENDPOINT_ENABLED];
      this.validateRegionalEndpointsFlagValue(fileFlag, {
        code: 'InvalidConfiguration',
        message: 'invalid '+CONFIG_REGIONAL_ENDPOINT_ENABLED+' profile config. Expect "legacy" ' +
        ' or "regional". Got "' + profile[CONFIG_REGIONAL_ENDPOINT_ENABLED] + '".'
      });
    }
  },

  /**
   * @api private
   */
  optInRegionalEndpoint: function optInRegionalEndpoint() {
    this.validateRegionalEndpointsFlag();
    var config = this.config;
    if (config.stsRegionalEndpoints === 'regional') {
      regionConfig(this);
      if (!this.isGlobalEndpoint) return;
      this.isGlobalEndpoint = false;
      //client will throw if region is not supplied; request will be signed with specified region
      if (!config.region) {
        throw AWS.util.error(new Error(),
          {code: 'ConfigError', message: 'Missing region in config'});
      }
      var insertPoint = config.endpoint.indexOf('.amazonaws.com');
      config.endpoint = config.endpoint.substring(0, insertPoint) +
        '.' + config.region + config.endpoint.substring(insertPoint);
    }
  },

  validateService: function validateService() {
    this.optInRegionalEndpoint();
  }

});

}).call(this,require('_process'))
},{"../core":18,"../region_config":53,"_process":87}],62:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
var expiresHeader = 'presigned-expires';

/**
 * @api private
 */
function signedUrlBuilder(request) {
  var expires = request.httpRequest.headers[expiresHeader];
  var signerClass = request.service.getSignerClass(request);

  delete request.httpRequest.headers['User-Agent'];
  delete request.httpRequest.headers['X-Amz-User-Agent'];

  if (signerClass === AWS.Signers.V4) {
    if (expires > 604800) { // one week expiry is invalid
      var message = 'Presigning does not support expiry time greater ' +
                    'than a week with SigV4 signing.';
      throw AWS.util.error(new Error(), {
        code: 'InvalidExpiryTime', message: message, retryable: false
      });
    }
    request.httpRequest.headers[expiresHeader] = expires;
  } else if (signerClass === AWS.Signers.S3) {
    var now = request.service ? request.service.getSkewCorrectedDate() : AWS.util.date.getDate();
    request.httpRequest.headers[expiresHeader] = parseInt(
      AWS.util.date.unixTimestamp(now) + expires, 10).toString();
  } else {
    throw AWS.util.error(new Error(), {
      message: 'Presigning only supports S3 or SigV4 signing.',
      code: 'UnsupportedSigner', retryable: false
    });
  }
}

/**
 * @api private
 */
function signedUrlSigner(request) {
  var endpoint = request.httpRequest.endpoint;
  var parsedUrl = AWS.util.urlParse(request.httpRequest.path);
  var queryParams = {};

  if (parsedUrl.search) {
    queryParams = AWS.util.queryStringParse(parsedUrl.search.substr(1));
  }

  var auth = request.httpRequest.headers['Authorization'].split(' ');
  if (auth[0] === 'AWS') {
    auth = auth[1].split(':');
    queryParams['AWSAccessKeyId'] = auth[0];
    queryParams['Signature'] = auth[1];

    AWS.util.each(request.httpRequest.headers, function (key, value) {
      if (key === expiresHeader) key = 'Expires';
      if (key.indexOf('x-amz-meta-') === 0) {
        // Delete existing, potentially not normalized key
        delete queryParams[key];
        key = key.toLowerCase();
      }
      queryParams[key] = value;
    });
    delete request.httpRequest.headers[expiresHeader];
    delete queryParams['Authorization'];
    delete queryParams['Host'];
  } else if (auth[0] === 'AWS4-HMAC-SHA256') { // SigV4 signing
    auth.shift();
    var rest = auth.join(' ');
    var signature = rest.match(/Signature=(.*?)(?:,|\s|\r?\n|$)/)[1];
    queryParams['X-Amz-Signature'] = signature;
    delete queryParams['Expires'];
  }

  // build URL
  endpoint.pathname = parsedUrl.pathname;
  endpoint.search = AWS.util.queryParamsToString(queryParams);
}

/**
 * @api private
 */
AWS.Signers.Presign = inherit({
  /**
   * @api private
   */
  sign: function sign(request, expireTime, callback) {
    request.httpRequest.headers[expiresHeader] = expireTime || 3600;
    request.on('build', signedUrlBuilder);
    request.on('sign', signedUrlSigner);
    request.removeListener('afterBuild',
      AWS.EventListeners.Core.SET_CONTENT_LENGTH);
    request.removeListener('afterBuild',
      AWS.EventListeners.Core.COMPUTE_SHA256);

    request.emit('beforePresign', [request]);

    if (callback) {
      request.build(function() {
        if (this.response.error) callback(this.response.error);
        else {
          callback(null, AWS.util.urlFormat(request.httpRequest.endpoint));
        }
      });
    } else {
      request.build();
      if (request.response.error) throw request.response.error;
      return AWS.util.urlFormat(request.httpRequest.endpoint);
    }
  }
});

/**
 * @api private
 */
module.exports = AWS.Signers.Presign;

},{"../core":18}],63:[function(require,module,exports){
var AWS = require('../core');

var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.RequestSigner = inherit({
  constructor: function RequestSigner(request) {
    this.request = request;
  },

  setServiceClientId: function setServiceClientId(id) {
    this.serviceClientId = id;
  },

  getServiceClientId: function getServiceClientId() {
    return this.serviceClientId;
  }
});

AWS.Signers.RequestSigner.getVersion = function getVersion(version) {
  switch (version) {
    case 'v2': return AWS.Signers.V2;
    case 'v3': return AWS.Signers.V3;
    case 's3v4': return AWS.Signers.V4;
    case 'v4': return AWS.Signers.V4;
    case 's3': return AWS.Signers.S3;
    case 'v3https': return AWS.Signers.V3Https;
  }
  throw new Error('Unknown signing version ' + version);
};

require('./v2');
require('./v3');
require('./v3https');
require('./v4');
require('./s3');
require('./presign');

},{"../core":18,"./presign":62,"./s3":64,"./v2":65,"./v3":66,"./v3https":67,"./v4":68}],64:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.S3 = inherit(AWS.Signers.RequestSigner, {
  /**
   * When building the stringToSign, these sub resource params should be
   * part of the canonical resource string with their NON-decoded values
   */
  subResources: {
    'acl': 1,
    'accelerate': 1,
    'analytics': 1,
    'cors': 1,
    'lifecycle': 1,
    'delete': 1,
    'inventory': 1,
    'location': 1,
    'logging': 1,
    'metrics': 1,
    'notification': 1,
    'partNumber': 1,
    'policy': 1,
    'requestPayment': 1,
    'replication': 1,
    'restore': 1,
    'tagging': 1,
    'torrent': 1,
    'uploadId': 1,
    'uploads': 1,
    'versionId': 1,
    'versioning': 1,
    'versions': 1,
    'website': 1
  },

  // when building the stringToSign, these querystring params should be
  // part of the canonical resource string with their NON-encoded values
  responseHeaders: {
    'response-content-type': 1,
    'response-content-language': 1,
    'response-expires': 1,
    'response-cache-control': 1,
    'response-content-disposition': 1,
    'response-content-encoding': 1
  },

  addAuthorization: function addAuthorization(credentials, date) {
    if (!this.request.headers['presigned-expires']) {
      this.request.headers['X-Amz-Date'] = AWS.util.date.rfc822(date);
    }

    if (credentials.sessionToken) {
      // presigned URLs require this header to be lowercased
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    var signature = this.sign(credentials.secretAccessKey, this.stringToSign());
    var auth = 'AWS ' + credentials.accessKeyId + ':' + signature;

    this.request.headers['Authorization'] = auth;
  },

  stringToSign: function stringToSign() {
    var r = this.request;

    var parts = [];
    parts.push(r.method);
    parts.push(r.headers['Content-MD5'] || '');
    parts.push(r.headers['Content-Type'] || '');

    // This is the "Date" header, but we use X-Amz-Date.
    // The S3 signing mechanism requires us to pass an empty
    // string for this Date header regardless.
    parts.push(r.headers['presigned-expires'] || '');

    var headers = this.canonicalizedAmzHeaders();
    if (headers) parts.push(headers);
    parts.push(this.canonicalizedResource());

    return parts.join('\n');

  },

  canonicalizedAmzHeaders: function canonicalizedAmzHeaders() {

    var amzHeaders = [];

    AWS.util.each(this.request.headers, function (name) {
      if (name.match(/^x-amz-/i))
        amzHeaders.push(name);
    });

    amzHeaders.sort(function (a, b) {
      return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
    });

    var parts = [];
    AWS.util.arrayEach.call(this, amzHeaders, function (name) {
      parts.push(name.toLowerCase() + ':' + String(this.request.headers[name]));
    });

    return parts.join('\n');

  },

  canonicalizedResource: function canonicalizedResource() {

    var r = this.request;

    var parts = r.path.split('?');
    var path = parts[0];
    var querystring = parts[1];

    var resource = '';

    if (r.virtualHostedBucket)
      resource += '/' + r.virtualHostedBucket;

    resource += path;

    if (querystring) {

      // collect a list of sub resources and query params that need to be signed
      var resources = [];

      AWS.util.arrayEach.call(this, querystring.split('&'), function (param) {
        var name = param.split('=')[0];
        var value = param.split('=')[1];
        if (this.subResources[name] || this.responseHeaders[name]) {
          var subresource = { name: name };
          if (value !== undefined) {
            if (this.subResources[name]) {
              subresource.value = value;
            } else {
              subresource.value = decodeURIComponent(value);
            }
          }
          resources.push(subresource);
        }
      });

      resources.sort(function (a, b) { return a.name < b.name ? -1 : 1; });

      if (resources.length) {

        querystring = [];
        AWS.util.arrayEach(resources, function (res) {
          if (res.value === undefined) {
            querystring.push(res.name);
          } else {
            querystring.push(res.name + '=' + res.value);
          }
        });

        resource += '?' + querystring.join('&');
      }

    }

    return resource;

  },

  sign: function sign(secret, string) {
    return AWS.util.crypto.hmac(secret, string, 'base64', 'sha1');
  }
});

/**
 * @api private
 */
module.exports = AWS.Signers.S3;

},{"../core":18}],65:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.V2 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    if (!date) date = AWS.util.date.getDate();

    var r = this.request;

    r.params.Timestamp = AWS.util.date.iso8601(date);
    r.params.SignatureVersion = '2';
    r.params.SignatureMethod = 'HmacSHA256';
    r.params.AWSAccessKeyId = credentials.accessKeyId;

    if (credentials.sessionToken) {
      r.params.SecurityToken = credentials.sessionToken;
    }

    delete r.params.Signature; // delete old Signature for re-signing
    r.params.Signature = this.signature(credentials);

    r.body = AWS.util.queryParamsToString(r.params);
    r.headers['Content-Length'] = r.body.length;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push(this.request.endpoint.host.toLowerCase());
    parts.push(this.request.pathname());
    parts.push(AWS.util.queryParamsToString(this.request.params));
    return parts.join('\n');
  }

});

/**
 * @api private
 */
module.exports = AWS.Signers.V2;

},{"../core":18}],66:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    var datetime = AWS.util.date.rfc822(date);

    this.request.headers['X-Amz-Date'] = datetime;

    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    this.request.headers['X-Amzn-Authorization'] =
      this.authorization(credentials, datetime);

  },

  authorization: function authorization(credentials) {
    return 'AWS3 ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'SignedHeaders=' + this.signedHeaders() + ',' +
      'Signature=' + this.signature(credentials);
  },

  signedHeaders: function signedHeaders() {
    var headers = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      headers.push(h.toLowerCase());
    });
    return headers.sort().join(';');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = this.request.headers;
    var parts = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
    });
    return parts.sort().join('\n') + '\n';
  },

  headersToSign: function headersToSign() {
    var headers = [];
    AWS.util.each(this.request.headers, function iterator(k) {
      if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
        headers.push(k);
      }
    });
    return headers;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push('/');
    parts.push('');
    parts.push(this.canonicalHeaders());
    parts.push(this.request.body);
    return AWS.util.crypto.sha256(parts.join('\n'));
  }

});

/**
 * @api private
 */
module.exports = AWS.Signers.V3;

},{"../core":18}],67:[function(require,module,exports){
var AWS = require('../core');
var inherit = AWS.util.inherit;

require('./v3');

/**
 * @api private
 */
AWS.Signers.V3Https = inherit(AWS.Signers.V3, {
  authorization: function authorization(credentials) {
    return 'AWS3-HTTPS ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'Signature=' + this.signature(credentials);
  },

  stringToSign: function stringToSign() {
    return this.request.headers['X-Amz-Date'];
  }
});

/**
 * @api private
 */
module.exports = AWS.Signers.V3Https;

},{"../core":18,"./v3":66}],68:[function(require,module,exports){
var AWS = require('../core');
var v4Credentials = require('./v4_credentials');
var inherit = AWS.util.inherit;

/**
 * @api private
 */
var expiresHeader = 'presigned-expires';

/**
 * @api private
 */
AWS.Signers.V4 = inherit(AWS.Signers.RequestSigner, {
  constructor: function V4(request, serviceName, options) {
    AWS.Signers.RequestSigner.call(this, request);
    this.serviceName = serviceName;
    options = options || {};
    this.signatureCache = typeof options.signatureCache === 'boolean' ? options.signatureCache : true;
    this.operation = options.operation;
    this.signatureVersion = options.signatureVersion;
  },

  algorithm: 'AWS4-HMAC-SHA256',

  addAuthorization: function addAuthorization(credentials, date) {
    var datetime = AWS.util.date.iso8601(date).replace(/[:\-]|\.\d{3}/g, '');

    if (this.isPresigned()) {
      this.updateForPresigned(credentials, datetime);
    } else {
      this.addHeaders(credentials, datetime);
    }

    this.request.headers['Authorization'] =
      this.authorization(credentials, datetime);
  },

  addHeaders: function addHeaders(credentials, datetime) {
    this.request.headers['X-Amz-Date'] = datetime;
    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }
  },

  updateForPresigned: function updateForPresigned(credentials, datetime) {
    var credString = this.credentialString(datetime);
    var qs = {
      'X-Amz-Date': datetime,
      'X-Amz-Algorithm': this.algorithm,
      'X-Amz-Credential': credentials.accessKeyId + '/' + credString,
      'X-Amz-Expires': this.request.headers[expiresHeader],
      'X-Amz-SignedHeaders': this.signedHeaders()
    };

    if (credentials.sessionToken) {
      qs['X-Amz-Security-Token'] = credentials.sessionToken;
    }

    if (this.request.headers['Content-Type']) {
      qs['Content-Type'] = this.request.headers['Content-Type'];
    }
    if (this.request.headers['Content-MD5']) {
      qs['Content-MD5'] = this.request.headers['Content-MD5'];
    }
    if (this.request.headers['Cache-Control']) {
      qs['Cache-Control'] = this.request.headers['Cache-Control'];
    }

    // need to pull in any other X-Amz-* headers
    AWS.util.each.call(this, this.request.headers, function(key, value) {
      if (key === expiresHeader) return;
      if (this.isSignableHeader(key)) {
        var lowerKey = key.toLowerCase();
        // Metadata should be normalized
        if (lowerKey.indexOf('x-amz-meta-') === 0) {
          qs[lowerKey] = value;
        } else if (lowerKey.indexOf('x-amz-') === 0) {
          qs[key] = value;
        }
      }
    });

    var sep = this.request.path.indexOf('?') >= 0 ? '&' : '?';
    this.request.path += sep + AWS.util.queryParamsToString(qs);
  },

  authorization: function authorization(credentials, datetime) {
    var parts = [];
    var credString = this.credentialString(datetime);
    parts.push(this.algorithm + ' Credential=' +
      credentials.accessKeyId + '/' + credString);
    parts.push('SignedHeaders=' + this.signedHeaders());
    parts.push('Signature=' + this.signature(credentials, datetime));
    return parts.join(', ');
  },

  signature: function signature(credentials, datetime) {
    var signingKey = v4Credentials.getSigningKey(
      credentials,
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName,
      this.signatureCache
    );
    return AWS.util.crypto.hmac(signingKey, this.stringToSign(datetime), 'hex');
  },

  stringToSign: function stringToSign(datetime) {
    var parts = [];
    parts.push('AWS4-HMAC-SHA256');
    parts.push(datetime);
    parts.push(this.credentialString(datetime));
    parts.push(this.hexEncodedHash(this.canonicalString()));
    return parts.join('\n');
  },

  canonicalString: function canonicalString() {
    var parts = [], pathname = this.request.pathname();
    if (this.serviceName !== 's3' && this.signatureVersion !== 's3v4') pathname = AWS.util.uriEscapePath(pathname);

    parts.push(this.request.method);
    parts.push(pathname);
    parts.push(this.request.search());
    parts.push(this.canonicalHeaders() + '\n');
    parts.push(this.signedHeaders());
    parts.push(this.hexEncodedBodyHash());
    return parts.join('\n');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = [];
    AWS.util.each.call(this, this.request.headers, function (key, item) {
      headers.push([key, item]);
    });
    headers.sort(function (a, b) {
      return a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1;
    });
    var parts = [];
    AWS.util.arrayEach.call(this, headers, function (item) {
      var key = item[0].toLowerCase();
      if (this.isSignableHeader(key)) {
        var value = item[1];
        if (typeof value === 'undefined' || value === null || typeof value.toString !== 'function') {
          throw AWS.util.error(new Error('Header ' + key + ' contains invalid value'), {
            code: 'InvalidHeader'
          });
        }
        parts.push(key + ':' +
          this.canonicalHeaderValues(value.toString()));
      }
    });
    return parts.join('\n');
  },

  canonicalHeaderValues: function canonicalHeaderValues(values) {
    return values.replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
  },

  signedHeaders: function signedHeaders() {
    var keys = [];
    AWS.util.each.call(this, this.request.headers, function (key) {
      key = key.toLowerCase();
      if (this.isSignableHeader(key)) keys.push(key);
    });
    return keys.sort().join(';');
  },

  credentialString: function credentialString(datetime) {
    return v4Credentials.createScope(
      datetime.substr(0, 8),
      this.request.region,
      this.serviceName
    );
  },

  hexEncodedHash: function hash(string) {
    return AWS.util.crypto.sha256(string, 'hex');
  },

  hexEncodedBodyHash: function hexEncodedBodyHash() {
    var request = this.request;
    if (this.isPresigned() && this.serviceName === 's3' && !request.body) {
      return 'UNSIGNED-PAYLOAD';
    } else if (request.headers['X-Amz-Content-Sha256']) {
      return request.headers['X-Amz-Content-Sha256'];
    } else {
      return this.hexEncodedHash(this.request.body || '');
    }
  },

  unsignableHeaders: [
    'authorization',
    'content-type',
    'content-length',
    'user-agent',
    expiresHeader,
    'expect',
    'x-amzn-trace-id'
  ],

  isSignableHeader: function isSignableHeader(key) {
    if (key.toLowerCase().indexOf('x-amz-') === 0) return true;
    return this.unsignableHeaders.indexOf(key) < 0;
  },

  isPresigned: function isPresigned() {
    return this.request.headers[expiresHeader] ? true : false;
  }

});

/**
 * @api private
 */
module.exports = AWS.Signers.V4;

},{"../core":18,"./v4_credentials":69}],69:[function(require,module,exports){
var AWS = require('../core');

/**
 * @api private
 */
var cachedSecret = {};

/**
 * @api private
 */
var cacheQueue = [];

/**
 * @api private
 */
var maxCacheEntries = 50;

/**
 * @api private
 */
var v4Identifier = 'aws4_request';

/**
 * @api private
 */
module.exports = {
  /**
   * @api private
   *
   * @param date [String]
   * @param region [String]
   * @param serviceName [String]
   * @return [String]
   */
  createScope: function createScope(date, region, serviceName) {
    return [
      date.substr(0, 8),
      region,
      serviceName,
      v4Identifier
    ].join('/');
  },

  /**
   * @api private
   *
   * @param credentials [Credentials]
   * @param date [String]
   * @param region [String]
   * @param service [String]
   * @param shouldCache [Boolean]
   * @return [String]
   */
  getSigningKey: function getSigningKey(
    credentials,
    date,
    region,
    service,
    shouldCache
  ) {
    var credsIdentifier = AWS.util.crypto
      .hmac(credentials.secretAccessKey, credentials.accessKeyId, 'base64');
    var cacheKey = [credsIdentifier, date, region, service].join('_');
    shouldCache = shouldCache !== false;
    if (shouldCache && (cacheKey in cachedSecret)) {
      return cachedSecret[cacheKey];
    }

    var kDate = AWS.util.crypto.hmac(
      'AWS4' + credentials.secretAccessKey,
      date,
      'buffer'
    );
    var kRegion = AWS.util.crypto.hmac(kDate, region, 'buffer');
    var kService = AWS.util.crypto.hmac(kRegion, service, 'buffer');

    var signingKey = AWS.util.crypto.hmac(kService, v4Identifier, 'buffer');
    if (shouldCache) {
      cachedSecret[cacheKey] = signingKey;
      cacheQueue.push(cacheKey);
      if (cacheQueue.length > maxCacheEntries) {
        // remove the oldest entry (not the least recently used)
        delete cachedSecret[cacheQueue.shift()];
      }
    }

    return signingKey;
  },

  /**
   * @api private
   *
   * Empties the derived signing key cache. Made available for testing purposes
   * only.
   */
  emptyCache: function emptyCache() {
    cachedSecret = {};
    cacheQueue = [];
  }
};

},{"../core":18}],70:[function(require,module,exports){
function AcceptorStateMachine(states, state) {
  this.currentState = state || null;
  this.states = states || {};
}

AcceptorStateMachine.prototype.runTo = function runTo(finalState, done, bindObject, inputError) {
  if (typeof finalState === 'function') {
    inputError = bindObject; bindObject = done;
    done = finalState; finalState = null;
  }

  var self = this;
  var state = self.states[self.currentState];
  state.fn.call(bindObject || self, inputError, function(err) {
    if (err) {
      if (state.fail) self.currentState = state.fail;
      else return done ? done.call(bindObject, err) : null;
    } else {
      if (state.accept) self.currentState = state.accept;
      else return done ? done.call(bindObject) : null;
    }
    if (self.currentState === finalState) {
      return done ? done.call(bindObject, err) : null;
    }

    self.runTo(finalState, done, bindObject, err);
  });
};

AcceptorStateMachine.prototype.addState = function addState(name, acceptState, failState, fn) {
  if (typeof acceptState === 'function') {
    fn = acceptState; acceptState = null; failState = null;
  } else if (typeof failState === 'function') {
    fn = failState; failState = null;
  }

  if (!this.currentState) this.currentState = name;
  this.states[name] = { accept: acceptState, fail: failState, fn: fn };
  return this;
};

/**
 * @api private
 */
module.exports = AcceptorStateMachine;

},{}],71:[function(require,module,exports){
(function (process,setImmediate){
/* eslint guard-for-in:0 */
var AWS;

/**
 * A set of utility methods for use with the AWS SDK.
 *
 * @!attribute abort
 *   Return this value from an iterator function {each} or {arrayEach}
 *   to break out of the iteration.
 *   @example Breaking out of an iterator function
 *     AWS.util.each({a: 1, b: 2, c: 3}, function(key, value) {
 *       if (key == 'b') return AWS.util.abort;
 *     });
 *   @see each
 *   @see arrayEach
 * @api private
 */
var util = {
  environment: 'nodejs',
  engine: function engine() {
    if (util.isBrowser() && typeof navigator !== 'undefined') {
      return navigator.userAgent;
    } else {
      var engine = process.platform + '/' + process.version;
      if (process.env.AWS_EXECUTION_ENV) {
        engine += ' exec-env/' + process.env.AWS_EXECUTION_ENV;
      }
      return engine;
    }
  },

  userAgent: function userAgent() {
    var name = util.environment;
    var agent = 'aws-sdk-' + name + '/' + require('./core').VERSION;
    if (name === 'nodejs') agent += ' ' + util.engine();
    return agent;
  },

  uriEscape: function uriEscape(string) {
    var output = encodeURIComponent(string);
    output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, escape);

    // AWS percent-encodes some extra non-standard characters in a URI
    output = output.replace(/[*]/g, function(ch) {
      return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
    });

    return output;
  },

  uriEscapePath: function uriEscapePath(string) {
    var parts = [];
    util.arrayEach(string.split('/'), function (part) {
      parts.push(util.uriEscape(part));
    });
    return parts.join('/');
  },

  urlParse: function urlParse(url) {
    return util.url.parse(url);
  },

  urlFormat: function urlFormat(url) {
    return util.url.format(url);
  },

  queryStringParse: function queryStringParse(qs) {
    return util.querystring.parse(qs);
  },

  queryParamsToString: function queryParamsToString(params) {
    var items = [];
    var escape = util.uriEscape;
    var sortedKeys = Object.keys(params).sort();

    util.arrayEach(sortedKeys, function(name) {
      var value = params[name];
      var ename = escape(name);
      var result = ename + '=';
      if (Array.isArray(value)) {
        var vals = [];
        util.arrayEach(value, function(item) { vals.push(escape(item)); });
        result = ename + '=' + vals.sort().join('&' + ename + '=');
      } else if (value !== undefined && value !== null) {
        result = ename + '=' + escape(value);
      }
      items.push(result);
    });

    return items.join('&');
  },

  readFileSync: function readFileSync(path) {
    if (util.isBrowser()) return null;
    return require('fs').readFileSync(path, 'utf-8');
  },

  base64: {
    encode: function encode64(string) {
      if (typeof string === 'number') {
        throw util.error(new Error('Cannot base64 encode number ' + string));
      }
      if (string === null || typeof string === 'undefined') {
        return string;
      }
      var buf = util.buffer.toBuffer(string);
      return buf.toString('base64');
    },

    decode: function decode64(string) {
      if (typeof string === 'number') {
        throw util.error(new Error('Cannot base64 decode number ' + string));
      }
      if (string === null || typeof string === 'undefined') {
        return string;
      }
      return util.buffer.toBuffer(string, 'base64');
    }

  },

  buffer: {
    /**
     * Buffer constructor for Node buffer and buffer pollyfill
     */
    toBuffer: function(data, encoding) {
      return (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ?
        util.Buffer.from(data, encoding) : new util.Buffer(data, encoding);
    },

    alloc: function(size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new Error('size passed to alloc must be a number.');
      }
      if (typeof util.Buffer.alloc === 'function') {
        return util.Buffer.alloc(size, fill, encoding);
      } else {
        var buf = new util.Buffer(size);
        if (fill !== undefined && typeof buf.fill === 'function') {
          buf.fill(fill, undefined, undefined, encoding);
        }
        return buf;
      }
    },

    toStream: function toStream(buffer) {
      if (!util.Buffer.isBuffer(buffer)) buffer =  util.buffer.toBuffer(buffer);

      var readable = new (util.stream.Readable)();
      var pos = 0;
      readable._read = function(size) {
        if (pos >= buffer.length) return readable.push(null);

        var end = pos + size;
        if (end > buffer.length) end = buffer.length;
        readable.push(buffer.slice(pos, end));
        pos = end;
      };

      return readable;
    },

    /**
     * Concatenates a list of Buffer objects.
     */
    concat: function(buffers) {
      var length = 0,
          offset = 0,
          buffer = null, i;

      for (i = 0; i < buffers.length; i++) {
        length += buffers[i].length;
      }

      buffer = util.buffer.alloc(length);

      for (i = 0; i < buffers.length; i++) {
        buffers[i].copy(buffer, offset);
        offset += buffers[i].length;
      }

      return buffer;
    }
  },

  string: {
    byteLength: function byteLength(string) {
      if (string === null || string === undefined) return 0;
      if (typeof string === 'string') string = util.buffer.toBuffer(string);

      if (typeof string.byteLength === 'number') {
        return string.byteLength;
      } else if (typeof string.length === 'number') {
        return string.length;
      } else if (typeof string.size === 'number') {
        return string.size;
      } else if (typeof string.path === 'string') {
        return require('fs').lstatSync(string.path).size;
      } else {
        throw util.error(new Error('Cannot determine length of ' + string),
          { object: string });
      }
    },

    upperFirst: function upperFirst(string) {
      return string[0].toUpperCase() + string.substr(1);
    },

    lowerFirst: function lowerFirst(string) {
      return string[0].toLowerCase() + string.substr(1);
    }
  },

  ini: {
    parse: function string(ini) {
      var currentSection, map = {};
      util.arrayEach(ini.split(/\r?\n/), function(line) {
        line = line.split(/(^|\s)[;#]/)[0]; // remove comments
        var section = line.match(/^\s*\[([^\[\]]+)\]\s*$/);
        if (section) {
          currentSection = section[1];
        } else if (currentSection) {
          var item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
          if (item) {
            map[currentSection] = map[currentSection] || {};
            map[currentSection][item[1]] = item[2];
          }
        }
      });

      return map;
    }
  },

  fn: {
    noop: function() {},
    callback: function (err) { if (err) throw err; },

    /**
     * Turn a synchronous function into as "async" function by making it call
     * a callback. The underlying function is called with all but the last argument,
     * which is treated as the callback. The callback is passed passed a first argument
     * of null on success to mimick standard node callbacks.
     */
    makeAsync: function makeAsync(fn, expectedArgs) {
      if (expectedArgs && expectedArgs <= fn.length) {
        return fn;
      }

      return function() {
        var args = Array.prototype.slice.call(arguments, 0);
        var callback = args.pop();
        var result = fn.apply(null, args);
        callback(result);
      };
    }
  },

  /**
   * Date and time utility functions.
   */
  date: {

    /**
     * @return [Date] the current JavaScript date object. Since all
     *   AWS services rely on this date object, you can override
     *   this function to provide a special time value to AWS service
     *   requests.
     */
    getDate: function getDate() {
      if (!AWS) AWS = require('./core');
      if (AWS.config.systemClockOffset) { // use offset when non-zero
        return new Date(new Date().getTime() + AWS.config.systemClockOffset);
      } else {
        return new Date();
      }
    },

    /**
     * @return [String] the date in ISO-8601 format
     */
    iso8601: function iso8601(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
    },

    /**
     * @return [String] the date in RFC 822 format
     */
    rfc822: function rfc822(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toUTCString();
    },

    /**
     * @return [Integer] the UNIX timestamp value for the current time
     */
    unixTimestamp: function unixTimestamp(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.getTime() / 1000;
    },

    /**
     * @param [String,number,Date] date
     * @return [Date]
     */
    from: function format(date) {
      if (typeof date === 'number') {
        return new Date(date * 1000); // unix timestamp
      } else {
        return new Date(date);
      }
    },

    /**
     * Given a Date or date-like value, this function formats the
     * date into a string of the requested value.
     * @param [String,number,Date] date
     * @param [String] formatter Valid formats are:
     #   * 'iso8601'
     #   * 'rfc822'
     #   * 'unixTimestamp'
     * @return [String]
     */
    format: function format(date, formatter) {
      if (!formatter) formatter = 'iso8601';
      return util.date[formatter](util.date.from(date));
    },

    parseTimestamp: function parseTimestamp(value) {
      if (typeof value === 'number') { // unix timestamp (number)
        return new Date(value * 1000);
      } else if (value.match(/^\d+$/)) { // unix timestamp
        return new Date(value * 1000);
      } else if (value.match(/^\d{4}/)) { // iso8601
        return new Date(value);
      } else if (value.match(/^\w{3},/)) { // rfc822
        return new Date(value);
      } else {
        throw util.error(
          new Error('unhandled timestamp format: ' + value),
          {code: 'TimestampParserError'});
      }
    }

  },

  crypto: {
    crc32Table: [
     0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419,
     0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4,
     0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07,
     0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
     0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856,
     0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
     0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4,
     0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3,
     0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A,
     0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599,
     0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
     0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190,
     0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F,
     0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E,
     0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED,
     0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
     0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3,
     0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
     0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A,
     0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5,
     0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010,
     0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17,
     0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6,
     0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615,
     0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
     0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344,
     0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
     0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A,
     0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1,
     0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C,
     0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF,
     0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
     0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE,
     0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31,
     0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C,
     0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B,
     0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242,
     0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1,
     0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
     0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278,
     0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7,
     0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66,
     0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605,
     0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8,
     0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B,
     0x2D02EF8D],

    crc32: function crc32(data) {
      var tbl = util.crypto.crc32Table;
      var crc = 0 ^ -1;

      if (typeof data === 'string') {
        data = util.buffer.toBuffer(data);
      }

      for (var i = 0; i < data.length; i++) {
        var code = data.readUInt8(i);
        crc = (crc >>> 8) ^ tbl[(crc ^ code) & 0xFF];
      }
      return (crc ^ -1) >>> 0;
    },

    hmac: function hmac(key, string, digest, fn) {
      if (!digest) digest = 'binary';
      if (digest === 'buffer') { digest = undefined; }
      if (!fn) fn = 'sha256';
      if (typeof string === 'string') string = util.buffer.toBuffer(string);
      return util.crypto.lib.createHmac(fn, key).update(string).digest(digest);
    },

    md5: function md5(data, digest, callback) {
      return util.crypto.hash('md5', data, digest, callback);
    },

    sha256: function sha256(data, digest, callback) {
      return util.crypto.hash('sha256', data, digest, callback);
    },

    hash: function(algorithm, data, digest, callback) {
      var hash = util.crypto.createHash(algorithm);
      if (!digest) { digest = 'binary'; }
      if (digest === 'buffer') { digest = undefined; }
      if (typeof data === 'string') data = util.buffer.toBuffer(data);
      var sliceFn = util.arraySliceFn(data);
      var isBuffer = util.Buffer.isBuffer(data);
      //Identifying objects with an ArrayBuffer as buffers
      if (util.isBrowser() && typeof ArrayBuffer !== 'undefined' && data && data.buffer instanceof ArrayBuffer) isBuffer = true;

      if (callback && typeof data === 'object' &&
          typeof data.on === 'function' && !isBuffer) {
        data.on('data', function(chunk) { hash.update(chunk); });
        data.on('error', function(err) { callback(err); });
        data.on('end', function() { callback(null, hash.digest(digest)); });
      } else if (callback && sliceFn && !isBuffer &&
                 typeof FileReader !== 'undefined') {
        // this might be a File/Blob
        var index = 0, size = 1024 * 512;
        var reader = new FileReader();
        reader.onerror = function() {
          callback(new Error('Failed to read data.'));
        };
        reader.onload = function() {
          var buf = new util.Buffer(new Uint8Array(reader.result));
          hash.update(buf);
          index += buf.length;
          reader._continueReading();
        };
        reader._continueReading = function() {
          if (index >= data.size) {
            callback(null, hash.digest(digest));
            return;
          }

          var back = index + size;
          if (back > data.size) back = data.size;
          reader.readAsArrayBuffer(sliceFn.call(data, index, back));
        };

        reader._continueReading();
      } else {
        if (util.isBrowser() && typeof data === 'object' && !isBuffer) {
          data = new util.Buffer(new Uint8Array(data));
        }
        var out = hash.update(data).digest(digest);
        if (callback) callback(null, out);
        return out;
      }
    },

    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
      }
      return out.join('');
    },

    createHash: function createHash(algorithm) {
      return util.crypto.lib.createHash(algorithm);
    }

  },

  /** @!ignore */

  /* Abort constant */
  abort: {},

  each: function each(object, iterFunction) {
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        var ret = iterFunction.call(this, key, object[key]);
        if (ret === util.abort) break;
      }
    }
  },

  arrayEach: function arrayEach(array, iterFunction) {
    for (var idx in array) {
      if (Object.prototype.hasOwnProperty.call(array, idx)) {
        var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
        if (ret === util.abort) break;
      }
    }
  },

  update: function update(obj1, obj2) {
    util.each(obj2, function iterator(key, item) {
      obj1[key] = item;
    });
    return obj1;
  },

  merge: function merge(obj1, obj2) {
    return util.update(util.copy(obj1), obj2);
  },

  copy: function copy(object) {
    if (object === null || object === undefined) return object;
    var dupe = {};
    // jshint forin:false
    for (var key in object) {
      dupe[key] = object[key];
    }
    return dupe;
  },

  isEmpty: function isEmpty(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return true;
  },

  arraySliceFn: function arraySliceFn(obj) {
    var fn = obj.slice || obj.webkitSlice || obj.mozSlice;
    return typeof fn === 'function' ? fn : null;
  },

  isType: function isType(obj, type) {
    // handle cross-"frame" objects
    if (typeof type === 'function') type = util.typeName(type);
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  },

  typeName: function typeName(type) {
    if (Object.prototype.hasOwnProperty.call(type, 'name')) return type.name;
    var str = type.toString();
    var match = str.match(/^\s*function (.+)\(/);
    return match ? match[1] : str;
  },

  error: function error(err, options) {
    var originalError = null;
    if (typeof err.message === 'string' && err.message !== '') {
      if (typeof options === 'string' || (options && options.message)) {
        originalError = util.copy(err);
        originalError.message = err.message;
      }
    }
    err.message = err.message || null;

    if (typeof options === 'string') {
      err.message = options;
    } else if (typeof options === 'object' && options !== null) {
      util.update(err, options);
      if (options.message)
        err.message = options.message;
      if (options.code || options.name)
        err.code = options.code || options.name;
      if (options.stack)
        err.stack = options.stack;
    }

    if (typeof Object.defineProperty === 'function') {
      Object.defineProperty(err, 'name', {writable: true, enumerable: false});
      Object.defineProperty(err, 'message', {enumerable: true});
    }

    err.name = options && options.name || err.name || err.code || 'Error';
    err.time = new Date();

    if (originalError) err.originalError = originalError;

    return err;
  },

  /**
   * @api private
   */
  inherit: function inherit(klass, features) {
    var newObject = null;
    if (features === undefined) {
      features = klass;
      klass = Object;
      newObject = {};
    } else {
      var ctor = function ConstructorWrapper() {};
      ctor.prototype = klass.prototype;
      newObject = new ctor();
    }

    // constructor not supplied, create pass-through ctor
    if (features.constructor === Object) {
      features.constructor = function() {
        if (klass !== Object) {
          return klass.apply(this, arguments);
        }
      };
    }

    features.constructor.prototype = newObject;
    util.update(features.constructor.prototype, features);
    features.constructor.__super__ = klass;
    return features.constructor;
  },

  /**
   * @api private
   */
  mixin: function mixin() {
    var klass = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      // jshint forin:false
      for (var prop in arguments[i].prototype) {
        var fn = arguments[i].prototype[prop];
        if (prop !== 'constructor') {
          klass.prototype[prop] = fn;
        }
      }
    }
    return klass;
  },

  /**
   * @api private
   */
  hideProperties: function hideProperties(obj, props) {
    if (typeof Object.defineProperty !== 'function') return;

    util.arrayEach(props, function (key) {
      Object.defineProperty(obj, key, {
        enumerable: false, writable: true, configurable: true });
    });
  },

  /**
   * @api private
   */
  property: function property(obj, name, value, enumerable, isValue) {
    var opts = {
      configurable: true,
      enumerable: enumerable !== undefined ? enumerable : true
    };
    if (typeof value === 'function' && !isValue) {
      opts.get = value;
    }
    else {
      opts.value = value; opts.writable = true;
    }

    Object.defineProperty(obj, name, opts);
  },

  /**
   * @api private
   */
  memoizedProperty: function memoizedProperty(obj, name, get, enumerable) {
    var cachedValue = null;

    // build enumerable attribute for each value with lazy accessor.
    util.property(obj, name, function() {
      if (cachedValue === null) {
        cachedValue = get();
      }
      return cachedValue;
    }, enumerable);
  },

  /**
   * TODO Remove in major version revision
   * This backfill populates response data without the
   * top-level payload name.
   *
   * @api private
   */
  hoistPayloadMember: function hoistPayloadMember(resp) {
    var req = resp.request;
    var operationName = req.operation;
    var operation = req.service.api.operations[operationName];
    var output = operation.output;
    if (output.payload && !operation.hasEventOutput) {
      var payloadMember = output.members[output.payload];
      var responsePayload = resp.data[output.payload];
      if (payloadMember.type === 'structure') {
        util.each(responsePayload, function(key, value) {
          util.property(resp.data, key, value, false);
        });
      }
    }
  },

  /**
   * Compute SHA-256 checksums of streams
   *
   * @api private
   */
  computeSha256: function computeSha256(body, done) {
    if (util.isNode()) {
      var Stream = util.stream.Stream;
      var fs = require('fs');
      if (typeof Stream === 'function' && body instanceof Stream) {
        if (typeof body.path === 'string') { // assume file object
          var settings = {};
          if (typeof body.start === 'number') {
            settings.start = body.start;
          }
          if (typeof body.end === 'number') {
            settings.end = body.end;
          }
          body = fs.createReadStream(body.path, settings);
        } else { // TODO support other stream types
          return done(new Error('Non-file stream objects are ' +
                                'not supported with SigV4'));
        }
      }
    }

    util.crypto.sha256(body, 'hex', function(err, sha) {
      if (err) done(err);
      else done(null, sha);
    });
  },

  /**
   * @api private
   */
  isClockSkewed: function isClockSkewed(serverTime) {
    if (serverTime) {
      util.property(AWS.config, 'isClockSkewed',
        Math.abs(new Date().getTime() - serverTime) >= 300000, false);
      return AWS.config.isClockSkewed;
    }
  },

  applyClockOffset: function applyClockOffset(serverTime) {
    if (serverTime)
      AWS.config.systemClockOffset = serverTime - new Date().getTime();
  },

  /**
   * @api private
   */
  extractRequestId: function extractRequestId(resp) {
    var requestId = resp.httpResponse.headers['x-amz-request-id'] ||
                     resp.httpResponse.headers['x-amzn-requestid'];

    if (!requestId && resp.data && resp.data.ResponseMetadata) {
      requestId = resp.data.ResponseMetadata.RequestId;
    }

    if (requestId) {
      resp.requestId = requestId;
    }

    if (resp.error) {
      resp.error.requestId = requestId;
    }
  },

  /**
   * @api private
   */
  addPromises: function addPromises(constructors, PromiseDependency) {
    var deletePromises = false;
    if (PromiseDependency === undefined && AWS && AWS.config) {
      PromiseDependency = AWS.config.getPromisesDependency();
    }
    if (PromiseDependency === undefined && typeof Promise !== 'undefined') {
      PromiseDependency = Promise;
    }
    if (typeof PromiseDependency !== 'function') deletePromises = true;
    if (!Array.isArray(constructors)) constructors = [constructors];

    for (var ind = 0; ind < constructors.length; ind++) {
      var constructor = constructors[ind];
      if (deletePromises) {
        if (constructor.deletePromisesFromClass) {
          constructor.deletePromisesFromClass();
        }
      } else if (constructor.addPromisesToClass) {
        constructor.addPromisesToClass(PromiseDependency);
      }
    }
  },

  /**
   * @api private
   * Return a function that will return a promise whose fate is decided by the
   * callback behavior of the given method with `methodName`. The method to be
   * promisified should conform to node.js convention of accepting a callback as
   * last argument and calling that callback with error as the first argument
   * and success value on the second argument.
   */
  promisifyMethod: function promisifyMethod(methodName, PromiseDependency) {
    return function promise() {
      var self = this;
      var args = Array.prototype.slice.call(arguments);
      return new PromiseDependency(function(resolve, reject) {
        args.push(function(err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
        self[methodName].apply(self, args);
      });
    };
  },

  /**
   * @api private
   */
  isDualstackAvailable: function isDualstackAvailable(service) {
    if (!service) return false;
    var metadata = require('../apis/metadata.json');
    if (typeof service !== 'string') service = service.serviceIdentifier;
    if (typeof service !== 'string' || !metadata.hasOwnProperty(service)) return false;
    return !!metadata[service].dualstackAvailable;
  },

  /**
   * @api private
   */
  calculateRetryDelay: function calculateRetryDelay(retryCount, retryDelayOptions) {
    if (!retryDelayOptions) retryDelayOptions = {};
    var customBackoff = retryDelayOptions.customBackoff || null;
    if (typeof customBackoff === 'function') {
      return customBackoff(retryCount);
    }
    var base = typeof retryDelayOptions.base === 'number' ? retryDelayOptions.base : 100;
    var delay = Math.random() * (Math.pow(2, retryCount) * base);
    return delay;
  },

  /**
   * @api private
   */
  handleRequestWithRetries: function handleRequestWithRetries(httpRequest, options, cb) {
    if (!options) options = {};
    var http = AWS.HttpClient.getInstance();
    var httpOptions = options.httpOptions || {};
    var retryCount = 0;

    var errCallback = function(err) {
      var maxRetries = options.maxRetries || 0;
      if (err && err.code === 'TimeoutError') err.retryable = true;
      if (err && err.retryable && retryCount < maxRetries) {
        retryCount++;
        var delay = util.calculateRetryDelay(retryCount, options.retryDelayOptions);
        setTimeout(sendRequest, delay + (err.retryAfter || 0));
      } else {
        cb(err);
      }
    };

    var sendRequest = function() {
      var data = '';
      http.handleRequest(httpRequest, httpOptions, function(httpResponse) {
        httpResponse.on('data', function(chunk) { data += chunk.toString(); });
        httpResponse.on('end', function() {
          var statusCode = httpResponse.statusCode;
          if (statusCode < 300) {
            cb(null, data);
          } else {
            var retryAfter = parseInt(httpResponse.headers['retry-after'], 10) * 1000 || 0;
            var err = util.error(new Error(),
              { retryable: statusCode >= 500 || statusCode === 429 }
            );
            if (retryAfter && err.retryable) err.retryAfter = retryAfter;
            errCallback(err);
          }
        });
      }, errCallback);
    };

    AWS.util.defer(sendRequest);
  },

  /**
   * @api private
   */
  uuid: {
    v4: function uuidV4() {
      return require('uuid').v4();
    }
  },

  /**
   * @api private
   */
  convertPayloadToString: function convertPayloadToString(resp) {
    var req = resp.request;
    var operation = req.operation;
    var rules = req.service.api.operations[operation].output || {};
    if (rules.payload && resp.data[rules.payload]) {
      resp.data[rules.payload] = resp.data[rules.payload].toString();
    }
  },

  /**
   * @api private
   */
  defer: function defer(callback) {
    if (typeof process === 'object' && typeof process.nextTick === 'function') {
      process.nextTick(callback);
    } else if (typeof setImmediate === 'function') {
      setImmediate(callback);
    } else {
      setTimeout(callback, 0);
    }
  },

  /**
   * @api private
   */
  getRequestPayloadShape: function getRequestPayloadShape(req) {
    var operations = req.service.api.operations;
    if (!operations) return undefined;
    var operation = (operations || {})[req.operation];
    if (!operation || !operation.input || !operation.input.payload) return undefined;
    return operation.input.members[operation.input.payload];
  },

  getProfilesFromSharedConfig: function getProfilesFromSharedConfig(iniLoader, filename) {
    var profiles = {};
    var profilesFromConfig = {};
    if (process.env[util.configOptInEnv]) {
      var profilesFromConfig = iniLoader.loadFrom({
        isConfig: true,
        filename: process.env[util.sharedConfigFileEnv]
      });
    }
    var profilesFromCreds = iniLoader.loadFrom({
      filename: filename ||
        (process.env[util.configOptInEnv] && process.env[util.sharedCredentialsFileEnv])
    });
    for (var i = 0, profileNames = Object.keys(profilesFromConfig); i < profileNames.length; i++) {
      profiles[profileNames[i]] = profilesFromConfig[profileNames[i]];
    }
    for (var i = 0, profileNames = Object.keys(profilesFromCreds); i < profileNames.length; i++) {
      profiles[profileNames[i]] = profilesFromCreds[profileNames[i]];
    }
    return profiles;
  },

  /**
   * @api private
   */
  defaultProfile: 'default',

  /**
   * @api private
   */
  configOptInEnv: 'AWS_SDK_LOAD_CONFIG',

  /**
   * @api private
   */
  sharedCredentialsFileEnv: 'AWS_SHARED_CREDENTIALS_FILE',

  /**
   * @api private
   */
  sharedConfigFileEnv: 'AWS_CONFIG_FILE',

  /**
   * @api private
   */
  imdsDisabledEnv: 'AWS_EC2_METADATA_DISABLED'
};

/**
 * @api private
 */
module.exports = util;

}).call(this,require('_process'),require("timers").setImmediate)
},{"../apis/metadata.json":4,"./core":18,"_process":87,"fs":79,"timers":95,"uuid":100}],72:[function(require,module,exports){
var util = require('../util');
var Shape = require('../model/shape');

function DomXmlParser() { }

DomXmlParser.prototype.parse = function(xml, shape) {
  if (xml.replace(/^\s+/, '') === '') return {};

  var result, error;
  try {
    if (window.DOMParser) {
      try {
        var parser = new DOMParser();
        result = parser.parseFromString(xml, 'text/xml');
      } catch (syntaxError) {
        throw util.error(new Error('Parse error in document'),
          {
            originalError: syntaxError,
            code: 'XMLParserError',
            retryable: true
          });
      }

      if (result.documentElement === null) {
        throw util.error(new Error('Cannot parse empty document.'),
          {
            code: 'XMLParserError',
            retryable: true
          });
      }

      var isError = result.getElementsByTagName('parsererror')[0];
      if (isError && (isError.parentNode === result ||
          isError.parentNode.nodeName === 'body' ||
          isError.parentNode.parentNode === result ||
          isError.parentNode.parentNode.nodeName === 'body')) {
        var errorElement = isError.getElementsByTagName('div')[0] || isError;
        throw util.error(new Error(errorElement.textContent || 'Parser error in document'),
          {
            code: 'XMLParserError',
            retryable: true
          });
      }
    } else if (window.ActiveXObject) {
      result = new window.ActiveXObject('Microsoft.XMLDOM');
      result.async = false;

      if (!result.loadXML(xml)) {
        throw util.error(new Error('Parse error in document'),
          {
            code: 'XMLParserError',
            retryable: true
          });
      }
    } else {
      throw new Error('Cannot load XML parser');
    }
  } catch (e) {
    error = e;
  }

  if (result && result.documentElement && !error) {
    var data = parseXml(result.documentElement, shape);
    var metadata = getElementByTagName(result.documentElement, 'ResponseMetadata');
    if (metadata) {
      data.ResponseMetadata = parseXml(metadata, {});
    }
    return data;
  } else if (error) {
    throw util.error(error || new Error(), {code: 'XMLParserError', retryable: true});
  } else { // empty xml document
    return {};
  }
};

function getElementByTagName(xml, tag) {
  var elements = xml.getElementsByTagName(tag);
  for (var i = 0, iLen = elements.length; i < iLen; i++) {
    if (elements[i].parentNode === xml) {
      return elements[i];
    }
  }
}

function parseXml(xml, shape) {
  if (!shape) shape = {};
  switch (shape.type) {
    case 'structure': return parseStructure(xml, shape);
    case 'map': return parseMap(xml, shape);
    case 'list': return parseList(xml, shape);
    case undefined: case null: return parseUnknown(xml);
    default: return parseScalar(xml, shape);
  }
}

function parseStructure(xml, shape) {
  var data = {};
  if (xml === null) return data;

  util.each(shape.members, function(memberName, memberShape) {
    if (memberShape.isXmlAttribute) {
      if (Object.prototype.hasOwnProperty.call(xml.attributes, memberShape.name)) {
        var value = xml.attributes[memberShape.name].value;
        data[memberName] = parseXml({textContent: value}, memberShape);
      }
    } else {
      var xmlChild = memberShape.flattened ? xml :
        getElementByTagName(xml, memberShape.name);
      if (xmlChild) {
        data[memberName] = parseXml(xmlChild, memberShape);
      } else if (!memberShape.flattened && memberShape.type === 'list') {
        data[memberName] = memberShape.defaultValue;
      }
    }
  });

  return data;
}

function parseMap(xml, shape) {
  var data = {};
  var xmlKey = shape.key.name || 'key';
  var xmlValue = shape.value.name || 'value';
  var tagName = shape.flattened ? shape.name : 'entry';

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      var key = getElementByTagName(child, xmlKey).textContent;
      var value = getElementByTagName(child, xmlValue);
      data[key] = parseXml(value, shape.value);
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseList(xml, shape) {
  var data = [];
  var tagName = shape.flattened ? shape.name : (shape.member.name || 'member');

  var child = xml.firstElementChild;
  while (child) {
    if (child.nodeName === tagName) {
      data.push(parseXml(child, shape.member));
    }
    child = child.nextElementSibling;
  }
  return data;
}

function parseScalar(xml, shape) {
  if (xml.getAttribute) {
    var encoding = xml.getAttribute('encoding');
    if (encoding === 'base64') {
      shape = new Shape.create({type: encoding});
    }
  }

  var text = xml.textContent;
  if (text === '') text = null;
  if (typeof shape.toType === 'function') {
    return shape.toType(text);
  } else {
    return text;
  }
}

function parseUnknown(xml) {
  if (xml === undefined || xml === null) return '';

  // empty object
  if (!xml.firstElementChild) {
    if (xml.parentNode.parentNode === null) return {};
    if (xml.childNodes.length === 0) return '';
    else return xml.textContent;
  }

  // object, parse as structure
  var shape = {type: 'structure', members: {}};
  var child = xml.firstElementChild;
  while (child) {
    var tag = child.nodeName;
    if (Object.prototype.hasOwnProperty.call(shape.members, tag)) {
      // multiple tags of the same name makes it a list
      shape.members[tag].type = 'list';
    } else {
      shape.members[tag] = {name: tag};
    }
    child = child.nextElementSibling;
  }
  return parseStructure(xml, shape);
}

/**
 * @api private
 */
module.exports = DomXmlParser;

},{"../model/shape":43,"../util":71}],73:[function(require,module,exports){
var util = require('../util');
var XmlNode = require('./xml-node').XmlNode;
var XmlText = require('./xml-text').XmlText;

function XmlBuilder() { }

XmlBuilder.prototype.toXML = function(params, shape, rootElement, noEmpty) {
  var xml = new XmlNode(rootElement);
  applyNamespaces(xml, shape, true);
  serialize(xml, params, shape);
  return xml.children.length > 0 || noEmpty ? xml.toString() : '';
};

function serialize(xml, value, shape) {
  switch (shape.type) {
    case 'structure': return serializeStructure(xml, value, shape);
    case 'map': return serializeMap(xml, value, shape);
    case 'list': return serializeList(xml, value, shape);
    default: return serializeScalar(xml, value, shape);
  }
}

function serializeStructure(xml, params, shape) {
  util.arrayEach(shape.memberNames, function(memberName) {
    var memberShape = shape.members[memberName];
    if (memberShape.location !== 'body') return;

    var value = params[memberName];
    var name = memberShape.name;
    if (value !== undefined && value !== null) {
      if (memberShape.isXmlAttribute) {
        xml.addAttribute(name, value);
      } else if (memberShape.flattened) {
        serialize(xml, value, memberShape);
      } else {
        var element = new XmlNode(name);
        xml.addChildNode(element);
        applyNamespaces(element, memberShape);
        serialize(element, value, memberShape);
      }
    }
  });
}

function serializeMap(xml, map, shape) {
  var xmlKey = shape.key.name || 'key';
  var xmlValue = shape.value.name || 'value';

  util.each(map, function(key, value) {
    var entry = new XmlNode(shape.flattened ? shape.name : 'entry');
    xml.addChildNode(entry);

    var entryKey = new XmlNode(xmlKey);
    var entryValue = new XmlNode(xmlValue);
    entry.addChildNode(entryKey);
    entry.addChildNode(entryValue);

    serialize(entryKey, key, shape.key);
    serialize(entryValue, value, shape.value);
  });
}

function serializeList(xml, list, shape) {
  if (shape.flattened) {
    util.arrayEach(list, function(value) {
      var name = shape.member.name || shape.name;
      var element = new XmlNode(name);
      xml.addChildNode(element);
      serialize(element, value, shape.member);
    });
  } else {
    util.arrayEach(list, function(value) {
      var name = shape.member.name || 'member';
      var element = new XmlNode(name);
      xml.addChildNode(element);
      serialize(element, value, shape.member);
    });
  }
}

function serializeScalar(xml, value, shape) {
  xml.addChildNode(
    new XmlText(shape.toWireFormat(value))
  );
}

function applyNamespaces(xml, shape, isRoot) {
  var uri, prefix = 'xmlns';
  if (shape.xmlNamespaceUri) {
    uri = shape.xmlNamespaceUri;
    if (shape.xmlNamespacePrefix) prefix += ':' + shape.xmlNamespacePrefix;
  } else if (isRoot && shape.api.xmlNamespaceUri) {
    uri = shape.api.xmlNamespaceUri;
  }

  if (uri) xml.addAttribute(prefix, uri);
}

/**
 * @api private
 */
module.exports = XmlBuilder;

},{"../util":71,"./xml-node":76,"./xml-text":77}],74:[function(require,module,exports){
/**
 * Escapes characters that can not be in an XML attribute.
 */
function escapeAttribute(value) {
    return value.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * @api private
 */
module.exports = {
    escapeAttribute: escapeAttribute
};

},{}],75:[function(require,module,exports){
/**
 * Escapes characters that can not be in an XML element.
 */
function escapeElement(value) {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * @api private
 */
module.exports = {
    escapeElement: escapeElement
};

},{}],76:[function(require,module,exports){
var escapeAttribute = require('./escape-attribute').escapeAttribute;

/**
 * Represents an XML node.
 * @api private
 */
function XmlNode(name, children) {
    if (children === void 0) { children = []; }
    this.name = name;
    this.children = children;
    this.attributes = {};
}
XmlNode.prototype.addAttribute = function (name, value) {
    this.attributes[name] = value;
    return this;
};
XmlNode.prototype.addChildNode = function (child) {
    this.children.push(child);
    return this;
};
XmlNode.prototype.removeAttribute = function (name) {
    delete this.attributes[name];
    return this;
};
XmlNode.prototype.toString = function () {
    var hasChildren = Boolean(this.children.length);
    var xmlText = '<' + this.name;
    // add attributes
    var attributes = this.attributes;
    for (var i = 0, attributeNames = Object.keys(attributes); i < attributeNames.length; i++) {
        var attributeName = attributeNames[i];
        var attribute = attributes[attributeName];
        if (typeof attribute !== 'undefined' && attribute !== null) {
            xmlText += ' ' + attributeName + '=\"' + escapeAttribute('' + attribute) + '\"';
        }
    }
    return xmlText += !hasChildren ? '/>' : '>' + this.children.map(function (c) { return c.toString(); }).join('') + '</' + this.name + '>';
};

/**
 * @api private
 */
module.exports = {
    XmlNode: XmlNode
};

},{"./escape-attribute":74}],77:[function(require,module,exports){
var escapeElement = require('./escape-element').escapeElement;

/**
 * Represents an XML text value.
 * @api private
 */
function XmlText(value) {
    this.value = value;
}

XmlText.prototype.toString = function () {
    return escapeElement('' + this.value);
};

/**
 * @api private
 */
module.exports = {
    XmlText: XmlText
};

},{"./escape-element":75}],78:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],79:[function(require,module,exports){

},{}],80:[function(require,module,exports){
(function (global,Buffer){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
},{"base64-js":78,"buffer":80,"ieee754":82,"isarray":85}],81:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],82:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],83:[function(require,module,exports){
arguments[4][80][0].apply(exports,arguments)
},{"base64-js":78,"buffer":80,"dup":80,"ieee754":84,"isarray":85}],84:[function(require,module,exports){
arguments[4][82][0].apply(exports,arguments)
},{"dup":82}],85:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],86:[function(require,module,exports){
(function(exports) {
  "use strict";

  function isArray(obj) {
    if (obj !== null) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    } else {
      return false;
    }
  }

  function isObject(obj) {
    if (obj !== null) {
      return Object.prototype.toString.call(obj) === "[object Object]";
    } else {
      return false;
    }
  }

  function strictDeepEqual(first, second) {
    // Check the scalar case first.
    if (first === second) {
      return true;
    }

    // Check if they are the same type.
    var firstType = Object.prototype.toString.call(first);
    if (firstType !== Object.prototype.toString.call(second)) {
      return false;
    }
    // We know that first and second have the same type so we can just check the
    // first type from now on.
    if (isArray(first) === true) {
      // Short circuit if they're not the same length;
      if (first.length !== second.length) {
        return false;
      }
      for (var i = 0; i < first.length; i++) {
        if (strictDeepEqual(first[i], second[i]) === false) {
          return false;
        }
      }
      return true;
    }
    if (isObject(first) === true) {
      // An object is equal if it has the same key/value pairs.
      var keysSeen = {};
      for (var key in first) {
        if (hasOwnProperty.call(first, key)) {
          if (strictDeepEqual(first[key], second[key]) === false) {
            return false;
          }
          keysSeen[key] = true;
        }
      }
      // Now check that there aren't any keys in second that weren't
      // in first.
      for (var key2 in second) {
        if (hasOwnProperty.call(second, key2)) {
          if (keysSeen[key2] !== true) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  function isFalse(obj) {
    // From the spec:
    // A false value corresponds to the following values:
    // Empty list
    // Empty object
    // Empty string
    // False boolean
    // null value

    // First check the scalar values.
    if (obj === "" || obj === false || obj === null) {
        return true;
    } else if (isArray(obj) && obj.length === 0) {
        // Check for an empty array.
        return true;
    } else if (isObject(obj)) {
        // Check for an empty object.
        for (var key in obj) {
            // If there are any keys, then
            // the object is not empty so the object
            // is not false.
            if (obj.hasOwnProperty(key)) {
              return false;
            }
        }
        return true;
    } else {
        return false;
    }
  }

  function objValues(obj) {
    var keys = Object.keys(obj);
    var values = [];
    for (var i = 0; i < keys.length; i++) {
      values.push(obj[keys[i]]);
    }
    return values;
  }

  function merge(a, b) {
      var merged = {};
      for (var key in a) {
          merged[key] = a[key];
      }
      for (var key2 in b) {
          merged[key2] = b[key2];
      }
      return merged;
  }

  var trimLeft;
  if (typeof String.prototype.trimLeft === "function") {
    trimLeft = function(str) {
      return str.trimLeft();
    };
  } else {
    trimLeft = function(str) {
      return str.match(/^\s*(.*)/)[1];
    };
  }

  // Type constants used to define functions.
  var TYPE_NUMBER = 0;
  var TYPE_ANY = 1;
  var TYPE_STRING = 2;
  var TYPE_ARRAY = 3;
  var TYPE_OBJECT = 4;
  var TYPE_BOOLEAN = 5;
  var TYPE_EXPREF = 6;
  var TYPE_NULL = 7;
  var TYPE_ARRAY_NUMBER = 8;
  var TYPE_ARRAY_STRING = 9;

  var TOK_EOF = "EOF";
  var TOK_UNQUOTEDIDENTIFIER = "UnquotedIdentifier";
  var TOK_QUOTEDIDENTIFIER = "QuotedIdentifier";
  var TOK_RBRACKET = "Rbracket";
  var TOK_RPAREN = "Rparen";
  var TOK_COMMA = "Comma";
  var TOK_COLON = "Colon";
  var TOK_RBRACE = "Rbrace";
  var TOK_NUMBER = "Number";
  var TOK_CURRENT = "Current";
  var TOK_EXPREF = "Expref";
  var TOK_PIPE = "Pipe";
  var TOK_OR = "Or";
  var TOK_AND = "And";
  var TOK_EQ = "EQ";
  var TOK_GT = "GT";
  var TOK_LT = "LT";
  var TOK_GTE = "GTE";
  var TOK_LTE = "LTE";
  var TOK_NE = "NE";
  var TOK_FLATTEN = "Flatten";
  var TOK_STAR = "Star";
  var TOK_FILTER = "Filter";
  var TOK_DOT = "Dot";
  var TOK_NOT = "Not";
  var TOK_LBRACE = "Lbrace";
  var TOK_LBRACKET = "Lbracket";
  var TOK_LPAREN= "Lparen";
  var TOK_LITERAL= "Literal";

  // The "&", "[", "<", ">" tokens
  // are not in basicToken because
  // there are two token variants
  // ("&&", "[?", "<=", ">=").  This is specially handled
  // below.

  var basicTokens = {
    ".": TOK_DOT,
    "*": TOK_STAR,
    ",": TOK_COMMA,
    ":": TOK_COLON,
    "{": TOK_LBRACE,
    "}": TOK_RBRACE,
    "]": TOK_RBRACKET,
    "(": TOK_LPAREN,
    ")": TOK_RPAREN,
    "@": TOK_CURRENT
  };

  var operatorStartToken = {
      "<": true,
      ">": true,
      "=": true,
      "!": true
  };

  var skipChars = {
      " ": true,
      "\t": true,
      "\n": true
  };


  function isAlpha(ch) {
      return (ch >= "a" && ch <= "z") ||
             (ch >= "A" && ch <= "Z") ||
             ch === "_";
  }

  function isNum(ch) {
      return (ch >= "0" && ch <= "9") ||
             ch === "-";
  }
  function isAlphaNum(ch) {
      return (ch >= "a" && ch <= "z") ||
             (ch >= "A" && ch <= "Z") ||
             (ch >= "0" && ch <= "9") ||
             ch === "_";
  }

  function Lexer() {
  }
  Lexer.prototype = {
      tokenize: function(stream) {
          var tokens = [];
          this._current = 0;
          var start;
          var identifier;
          var token;
          while (this._current < stream.length) {
              if (isAlpha(stream[this._current])) {
                  start = this._current;
                  identifier = this._consumeUnquotedIdentifier(stream);
                  tokens.push({type: TOK_UNQUOTEDIDENTIFIER,
                               value: identifier,
                               start: start});
              } else if (basicTokens[stream[this._current]] !== undefined) {
                  tokens.push({type: basicTokens[stream[this._current]],
                              value: stream[this._current],
                              start: this._current});
                  this._current++;
              } else if (isNum(stream[this._current])) {
                  token = this._consumeNumber(stream);
                  tokens.push(token);
              } else if (stream[this._current] === "[") {
                  // No need to increment this._current.  This happens
                  // in _consumeLBracket
                  token = this._consumeLBracket(stream);
                  tokens.push(token);
              } else if (stream[this._current] === "\"") {
                  start = this._current;
                  identifier = this._consumeQuotedIdentifier(stream);
                  tokens.push({type: TOK_QUOTEDIDENTIFIER,
                               value: identifier,
                               start: start});
              } else if (stream[this._current] === "'") {
                  start = this._current;
                  identifier = this._consumeRawStringLiteral(stream);
                  tokens.push({type: TOK_LITERAL,
                               value: identifier,
                               start: start});
              } else if (stream[this._current] === "`") {
                  start = this._current;
                  var literal = this._consumeLiteral(stream);
                  tokens.push({type: TOK_LITERAL,
                               value: literal,
                               start: start});
              } else if (operatorStartToken[stream[this._current]] !== undefined) {
                  tokens.push(this._consumeOperator(stream));
              } else if (skipChars[stream[this._current]] !== undefined) {
                  // Ignore whitespace.
                  this._current++;
              } else if (stream[this._current] === "&") {
                  start = this._current;
                  this._current++;
                  if (stream[this._current] === "&") {
                      this._current++;
                      tokens.push({type: TOK_AND, value: "&&", start: start});
                  } else {
                      tokens.push({type: TOK_EXPREF, value: "&", start: start});
                  }
              } else if (stream[this._current] === "|") {
                  start = this._current;
                  this._current++;
                  if (stream[this._current] === "|") {
                      this._current++;
                      tokens.push({type: TOK_OR, value: "||", start: start});
                  } else {
                      tokens.push({type: TOK_PIPE, value: "|", start: start});
                  }
              } else {
                  var error = new Error("Unknown character:" + stream[this._current]);
                  error.name = "LexerError";
                  throw error;
              }
          }
          return tokens;
      },

      _consumeUnquotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          while (this._current < stream.length && isAlphaNum(stream[this._current])) {
              this._current++;
          }
          return stream.slice(start, this._current);
      },

      _consumeQuotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== "\"" && this._current < maxLength) {
              // You can escape a double quote and you can escape an escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "\"")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          this._current++;
          return JSON.parse(stream.slice(start, this._current));
      },

      _consumeRawStringLiteral: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== "'" && this._current < maxLength) {
              // You can escape a single quote and you can escape an escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "'")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          this._current++;
          var literal = stream.slice(start + 1, this._current - 1);
          return literal.replace("\\'", "'");
      },

      _consumeNumber: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (isNum(stream[this._current]) && this._current < maxLength) {
              this._current++;
          }
          var value = parseInt(stream.slice(start, this._current));
          return {type: TOK_NUMBER, value: value, start: start};
      },

      _consumeLBracket: function(stream) {
          var start = this._current;
          this._current++;
          if (stream[this._current] === "?") {
              this._current++;
              return {type: TOK_FILTER, value: "[?", start: start};
          } else if (stream[this._current] === "]") {
              this._current++;
              return {type: TOK_FLATTEN, value: "[]", start: start};
          } else {
              return {type: TOK_LBRACKET, value: "[", start: start};
          }
      },

      _consumeOperator: function(stream) {
          var start = this._current;
          var startingChar = stream[start];
          this._current++;
          if (startingChar === "!") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_NE, value: "!=", start: start};
              } else {
                return {type: TOK_NOT, value: "!", start: start};
              }
          } else if (startingChar === "<") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_LTE, value: "<=", start: start};
              } else {
                  return {type: TOK_LT, value: "<", start: start};
              }
          } else if (startingChar === ">") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_GTE, value: ">=", start: start};
              } else {
                  return {type: TOK_GT, value: ">", start: start};
              }
          } else if (startingChar === "=") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_EQ, value: "==", start: start};
              }
          }
      },

      _consumeLiteral: function(stream) {
          this._current++;
          var start = this._current;
          var maxLength = stream.length;
          var literal;
          while(stream[this._current] !== "`" && this._current < maxLength) {
              // You can escape a literal char or you can escape the escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "`")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          var literalString = trimLeft(stream.slice(start, this._current));
          literalString = literalString.replace("\\`", "`");
          if (this._looksLikeJSON(literalString)) {
              literal = JSON.parse(literalString);
          } else {
              // Try to JSON parse it as "<literal>"
              literal = JSON.parse("\"" + literalString + "\"");
          }
          // +1 gets us to the ending "`", +1 to move on to the next char.
          this._current++;
          return literal;
      },

      _looksLikeJSON: function(literalString) {
          var startingChars = "[{\"";
          var jsonLiterals = ["true", "false", "null"];
          var numberLooking = "-0123456789";

          if (literalString === "") {
              return false;
          } else if (startingChars.indexOf(literalString[0]) >= 0) {
              return true;
          } else if (jsonLiterals.indexOf(literalString) >= 0) {
              return true;
          } else if (numberLooking.indexOf(literalString[0]) >= 0) {
              try {
                  JSON.parse(literalString);
                  return true;
              } catch (ex) {
                  return false;
              }
          } else {
              return false;
          }
      }
  };

      var bindingPower = {};
      bindingPower[TOK_EOF] = 0;
      bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_QUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_RBRACKET] = 0;
      bindingPower[TOK_RPAREN] = 0;
      bindingPower[TOK_COMMA] = 0;
      bindingPower[TOK_RBRACE] = 0;
      bindingPower[TOK_NUMBER] = 0;
      bindingPower[TOK_CURRENT] = 0;
      bindingPower[TOK_EXPREF] = 0;
      bindingPower[TOK_PIPE] = 1;
      bindingPower[TOK_OR] = 2;
      bindingPower[TOK_AND] = 3;
      bindingPower[TOK_EQ] = 5;
      bindingPower[TOK_GT] = 5;
      bindingPower[TOK_LT] = 5;
      bindingPower[TOK_GTE] = 5;
      bindingPower[TOK_LTE] = 5;
      bindingPower[TOK_NE] = 5;
      bindingPower[TOK_FLATTEN] = 9;
      bindingPower[TOK_STAR] = 20;
      bindingPower[TOK_FILTER] = 21;
      bindingPower[TOK_DOT] = 40;
      bindingPower[TOK_NOT] = 45;
      bindingPower[TOK_LBRACE] = 50;
      bindingPower[TOK_LBRACKET] = 55;
      bindingPower[TOK_LPAREN] = 60;

  function Parser() {
  }

  Parser.prototype = {
      parse: function(expression) {
          this._loadTokens(expression);
          this.index = 0;
          var ast = this.expression(0);
          if (this._lookahead(0) !== TOK_EOF) {
              var t = this._lookaheadToken(0);
              var error = new Error(
                  "Unexpected token type: " + t.type + ", value: " + t.value);
              error.name = "ParserError";
              throw error;
          }
          return ast;
      },

      _loadTokens: function(expression) {
          var lexer = new Lexer();
          var tokens = lexer.tokenize(expression);
          tokens.push({type: TOK_EOF, value: "", start: expression.length});
          this.tokens = tokens;
      },

      expression: function(rbp) {
          var leftToken = this._lookaheadToken(0);
          this._advance();
          var left = this.nud(leftToken);
          var currentToken = this._lookahead(0);
          while (rbp < bindingPower[currentToken]) {
              this._advance();
              left = this.led(currentToken, left);
              currentToken = this._lookahead(0);
          }
          return left;
      },

      _lookahead: function(number) {
          return this.tokens[this.index + number].type;
      },

      _lookaheadToken: function(number) {
          return this.tokens[this.index + number];
      },

      _advance: function() {
          this.index++;
      },

      nud: function(token) {
        var left;
        var right;
        var expression;
        switch (token.type) {
          case TOK_LITERAL:
            return {type: "Literal", value: token.value};
          case TOK_UNQUOTEDIDENTIFIER:
            return {type: "Field", name: token.value};
          case TOK_QUOTEDIDENTIFIER:
            var node = {type: "Field", name: token.value};
            if (this._lookahead(0) === TOK_LPAREN) {
                throw new Error("Quoted identifier not allowed for function names.");
            } else {
                return node;
            }
            break;
          case TOK_NOT:
            right = this.expression(bindingPower.Not);
            return {type: "NotExpression", children: [right]};
          case TOK_STAR:
            left = {type: "Identity"};
            right = null;
            if (this._lookahead(0) === TOK_RBRACKET) {
                // This can happen in a multiselect,
                // [a, b, *]
                right = {type: "Identity"};
            } else {
                right = this._parseProjectionRHS(bindingPower.Star);
            }
            return {type: "ValueProjection", children: [left, right]};
          case TOK_FILTER:
            return this.led(token.type, {type: "Identity"});
          case TOK_LBRACE:
            return this._parseMultiselectHash();
          case TOK_FLATTEN:
            left = {type: TOK_FLATTEN, children: [{type: "Identity"}]};
            right = this._parseProjectionRHS(bindingPower.Flatten);
            return {type: "Projection", children: [left, right]};
          case TOK_LBRACKET:
            if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice({type: "Identity"}, right);
            } else if (this._lookahead(0) === TOK_STAR &&
                       this._lookahead(1) === TOK_RBRACKET) {
                this._advance();
                this._advance();
                right = this._parseProjectionRHS(bindingPower.Star);
                return {type: "Projection",
                        children: [{type: "Identity"}, right]};
            } else {
                return this._parseMultiselectList();
            }
            break;
          case TOK_CURRENT:
            return {type: TOK_CURRENT};
          case TOK_EXPREF:
            expression = this.expression(bindingPower.Expref);
            return {type: "ExpressionReference", children: [expression]};
          case TOK_LPAREN:
            var args = [];
            while (this._lookahead(0) !== TOK_RPAREN) {
              if (this._lookahead(0) === TOK_CURRENT) {
                expression = {type: TOK_CURRENT};
                this._advance();
              } else {
                expression = this.expression(0);
              }
              args.push(expression);
            }
            this._match(TOK_RPAREN);
            return args[0];
          default:
            this._errorToken(token);
        }
      },

      led: function(tokenName, left) {
        var right;
        switch(tokenName) {
          case TOK_DOT:
            var rbp = bindingPower.Dot;
            if (this._lookahead(0) !== TOK_STAR) {
                right = this._parseDotRHS(rbp);
                return {type: "Subexpression", children: [left, right]};
            } else {
                // Creating a projection.
                this._advance();
                right = this._parseProjectionRHS(rbp);
                return {type: "ValueProjection", children: [left, right]};
            }
            break;
          case TOK_PIPE:
            right = this.expression(bindingPower.Pipe);
            return {type: TOK_PIPE, children: [left, right]};
          case TOK_OR:
            right = this.expression(bindingPower.Or);
            return {type: "OrExpression", children: [left, right]};
          case TOK_AND:
            right = this.expression(bindingPower.And);
            return {type: "AndExpression", children: [left, right]};
          case TOK_LPAREN:
            var name = left.name;
            var args = [];
            var expression, node;
            while (this._lookahead(0) !== TOK_RPAREN) {
              if (this._lookahead(0) === TOK_CURRENT) {
                expression = {type: TOK_CURRENT};
                this._advance();
              } else {
                expression = this.expression(0);
              }
              if (this._lookahead(0) === TOK_COMMA) {
                this._match(TOK_COMMA);
              }
              args.push(expression);
            }
            this._match(TOK_RPAREN);
            node = {type: "Function", name: name, children: args};
            return node;
          case TOK_FILTER:
            var condition = this.expression(0);
            this._match(TOK_RBRACKET);
            if (this._lookahead(0) === TOK_FLATTEN) {
              right = {type: "Identity"};
            } else {
              right = this._parseProjectionRHS(bindingPower.Filter);
            }
            return {type: "FilterProjection", children: [left, right, condition]};
          case TOK_FLATTEN:
            var leftNode = {type: TOK_FLATTEN, children: [left]};
            var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
            return {type: "Projection", children: [leftNode, rightNode]};
          case TOK_EQ:
          case TOK_NE:
          case TOK_GT:
          case TOK_GTE:
          case TOK_LT:
          case TOK_LTE:
            return this._parseComparator(left, tokenName);
          case TOK_LBRACKET:
            var token = this._lookaheadToken(0);
            if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice(left, right);
            } else {
                this._match(TOK_STAR);
                this._match(TOK_RBRACKET);
                right = this._parseProjectionRHS(bindingPower.Star);
                return {type: "Projection", children: [left, right]};
            }
            break;
          default:
            this._errorToken(this._lookaheadToken(0));
        }
      },

      _match: function(tokenType) {
          if (this._lookahead(0) === tokenType) {
              this._advance();
          } else {
              var t = this._lookaheadToken(0);
              var error = new Error("Expected " + tokenType + ", got: " + t.type);
              error.name = "ParserError";
              throw error;
          }
      },

      _errorToken: function(token) {
          var error = new Error("Invalid token (" +
                                token.type + "): \"" +
                                token.value + "\"");
          error.name = "ParserError";
          throw error;
      },


      _parseIndexExpression: function() {
          if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
              return this._parseSliceExpression();
          } else {
              var node = {
                  type: "Index",
                  value: this._lookaheadToken(0).value};
              this._advance();
              this._match(TOK_RBRACKET);
              return node;
          }
      },

      _projectIfSlice: function(left, right) {
          var indexExpr = {type: "IndexExpression", children: [left, right]};
          if (right.type === "Slice") {
              return {
                  type: "Projection",
                  children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)]
              };
          } else {
              return indexExpr;
          }
      },

      _parseSliceExpression: function() {
          // [start:end:step] where each part is optional, as well as the last
          // colon.
          var parts = [null, null, null];
          var index = 0;
          var currentToken = this._lookahead(0);
          while (currentToken !== TOK_RBRACKET && index < 3) {
              if (currentToken === TOK_COLON) {
                  index++;
                  this._advance();
              } else if (currentToken === TOK_NUMBER) {
                  parts[index] = this._lookaheadToken(0).value;
                  this._advance();
              } else {
                  var t = this._lookahead(0);
                  var error = new Error("Syntax error, unexpected token: " +
                                        t.value + "(" + t.type + ")");
                  error.name = "Parsererror";
                  throw error;
              }
              currentToken = this._lookahead(0);
          }
          this._match(TOK_RBRACKET);
          return {
              type: "Slice",
              children: parts
          };
      },

      _parseComparator: function(left, comparator) {
        var right = this.expression(bindingPower[comparator]);
        return {type: "Comparator", name: comparator, children: [left, right]};
      },

      _parseDotRHS: function(rbp) {
          var lookahead = this._lookahead(0);
          var exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR];
          if (exprTokens.indexOf(lookahead) >= 0) {
              return this.expression(rbp);
          } else if (lookahead === TOK_LBRACKET) {
              this._match(TOK_LBRACKET);
              return this._parseMultiselectList();
          } else if (lookahead === TOK_LBRACE) {
              this._match(TOK_LBRACE);
              return this._parseMultiselectHash();
          }
      },

      _parseProjectionRHS: function(rbp) {
          var right;
          if (bindingPower[this._lookahead(0)] < 10) {
              right = {type: "Identity"};
          } else if (this._lookahead(0) === TOK_LBRACKET) {
              right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_FILTER) {
              right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_DOT) {
              this._match(TOK_DOT);
              right = this._parseDotRHS(rbp);
          } else {
              var t = this._lookaheadToken(0);
              var error = new Error("Sytanx error, unexpected token: " +
                                    t.value + "(" + t.type + ")");
              error.name = "ParserError";
              throw error;
          }
          return right;
      },

      _parseMultiselectList: function() {
          var expressions = [];
          while (this._lookahead(0) !== TOK_RBRACKET) {
              var expression = this.expression(0);
              expressions.push(expression);
              if (this._lookahead(0) === TOK_COMMA) {
                  this._match(TOK_COMMA);
                  if (this._lookahead(0) === TOK_RBRACKET) {
                    throw new Error("Unexpected token Rbracket");
                  }
              }
          }
          this._match(TOK_RBRACKET);
          return {type: "MultiSelectList", children: expressions};
      },

      _parseMultiselectHash: function() {
        var pairs = [];
        var identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER];
        var keyToken, keyName, value, node;
        for (;;) {
          keyToken = this._lookaheadToken(0);
          if (identifierTypes.indexOf(keyToken.type) < 0) {
            throw new Error("Expecting an identifier token, got: " +
                            keyToken.type);
          }
          keyName = keyToken.value;
          this._advance();
          this._match(TOK_COLON);
          value = this.expression(0);
          node = {type: "KeyValuePair", name: keyName, value: value};
          pairs.push(node);
          if (this._lookahead(0) === TOK_COMMA) {
            this._match(TOK_COMMA);
          } else if (this._lookahead(0) === TOK_RBRACE) {
            this._match(TOK_RBRACE);
            break;
          }
        }
        return {type: "MultiSelectHash", children: pairs};
      }
  };


  function TreeInterpreter(runtime) {
    this.runtime = runtime;
  }

  TreeInterpreter.prototype = {
      search: function(node, value) {
          return this.visit(node, value);
      },

      visit: function(node, value) {
          var matched, current, result, first, second, field, left, right, collected, i;
          switch (node.type) {
            case "Field":
              if (value === null ) {
                  return null;
              } else if (isObject(value)) {
                  field = value[node.name];
                  if (field === undefined) {
                      return null;
                  } else {
                      return field;
                  }
              } else {
                return null;
              }
              break;
            case "Subexpression":
              result = this.visit(node.children[0], value);
              for (i = 1; i < node.children.length; i++) {
                  result = this.visit(node.children[1], result);
                  if (result === null) {
                      return null;
                  }
              }
              return result;
            case "IndexExpression":
              left = this.visit(node.children[0], value);
              right = this.visit(node.children[1], left);
              return right;
            case "Index":
              if (!isArray(value)) {
                return null;
              }
              var index = node.value;
              if (index < 0) {
                index = value.length + index;
              }
              result = value[index];
              if (result === undefined) {
                result = null;
              }
              return result;
            case "Slice":
              if (!isArray(value)) {
                return null;
              }
              var sliceParams = node.children.slice(0);
              var computed = this.computeSliceParams(value.length, sliceParams);
              var start = computed[0];
              var stop = computed[1];
              var step = computed[2];
              result = [];
              if (step > 0) {
                  for (i = start; i < stop; i += step) {
                      result.push(value[i]);
                  }
              } else {
                  for (i = start; i > stop; i += step) {
                      result.push(value[i]);
                  }
              }
              return result;
            case "Projection":
              // Evaluate left child.
              var base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              collected = [];
              for (i = 0; i < base.length; i++) {
                current = this.visit(node.children[1], base[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "ValueProjection":
              // Evaluate left child.
              base = this.visit(node.children[0], value);
              if (!isObject(base)) {
                return null;
              }
              collected = [];
              var values = objValues(base);
              for (i = 0; i < values.length; i++) {
                current = this.visit(node.children[1], values[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "FilterProjection":
              base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              var filtered = [];
              var finalResults = [];
              for (i = 0; i < base.length; i++) {
                matched = this.visit(node.children[2], base[i]);
                if (!isFalse(matched)) {
                  filtered.push(base[i]);
                }
              }
              for (var j = 0; j < filtered.length; j++) {
                current = this.visit(node.children[1], filtered[j]);
                if (current !== null) {
                  finalResults.push(current);
                }
              }
              return finalResults;
            case "Comparator":
              first = this.visit(node.children[0], value);
              second = this.visit(node.children[1], value);
              switch(node.name) {
                case TOK_EQ:
                  result = strictDeepEqual(first, second);
                  break;
                case TOK_NE:
                  result = !strictDeepEqual(first, second);
                  break;
                case TOK_GT:
                  result = first > second;
                  break;
                case TOK_GTE:
                  result = first >= second;
                  break;
                case TOK_LT:
                  result = first < second;
                  break;
                case TOK_LTE:
                  result = first <= second;
                  break;
                default:
                  throw new Error("Unknown comparator: " + node.name);
              }
              return result;
            case TOK_FLATTEN:
              var original = this.visit(node.children[0], value);
              if (!isArray(original)) {
                return null;
              }
              var merged = [];
              for (i = 0; i < original.length; i++) {
                current = original[i];
                if (isArray(current)) {
                  merged.push.apply(merged, current);
                } else {
                  merged.push(current);
                }
              }
              return merged;
            case "Identity":
              return value;
            case "MultiSelectList":
              if (value === null) {
                return null;
              }
              collected = [];
              for (i = 0; i < node.children.length; i++) {
                  collected.push(this.visit(node.children[i], value));
              }
              return collected;
            case "MultiSelectHash":
              if (value === null) {
                return null;
              }
              collected = {};
              var child;
              for (i = 0; i < node.children.length; i++) {
                child = node.children[i];
                collected[child.name] = this.visit(child.value, value);
              }
              return collected;
            case "OrExpression":
              matched = this.visit(node.children[0], value);
              if (isFalse(matched)) {
                  matched = this.visit(node.children[1], value);
              }
              return matched;
            case "AndExpression":
              first = this.visit(node.children[0], value);

              if (isFalse(first) === true) {
                return first;
              }
              return this.visit(node.children[1], value);
            case "NotExpression":
              first = this.visit(node.children[0], value);
              return isFalse(first);
            case "Literal":
              return node.value;
            case TOK_PIPE:
              left = this.visit(node.children[0], value);
              return this.visit(node.children[1], left);
            case TOK_CURRENT:
              return value;
            case "Function":
              var resolvedArgs = [];
              for (i = 0; i < node.children.length; i++) {
                  resolvedArgs.push(this.visit(node.children[i], value));
              }
              return this.runtime.callFunction(node.name, resolvedArgs);
            case "ExpressionReference":
              var refNode = node.children[0];
              // Tag the node with a specific attribute so the type
              // checker verify the type.
              refNode.jmespathType = TOK_EXPREF;
              return refNode;
            default:
              throw new Error("Unknown node type: " + node.type);
          }
      },

      computeSliceParams: function(arrayLength, sliceParams) {
        var start = sliceParams[0];
        var stop = sliceParams[1];
        var step = sliceParams[2];
        var computed = [null, null, null];
        if (step === null) {
          step = 1;
        } else if (step === 0) {
          var error = new Error("Invalid slice, step cannot be 0");
          error.name = "RuntimeError";
          throw error;
        }
        var stepValueNegative = step < 0 ? true : false;

        if (start === null) {
            start = stepValueNegative ? arrayLength - 1 : 0;
        } else {
            start = this.capSliceRange(arrayLength, start, step);
        }

        if (stop === null) {
            stop = stepValueNegative ? -1 : arrayLength;
        } else {
            stop = this.capSliceRange(arrayLength, stop, step);
        }
        computed[0] = start;
        computed[1] = stop;
        computed[2] = step;
        return computed;
      },

      capSliceRange: function(arrayLength, actualValue, step) {
          if (actualValue < 0) {
              actualValue += arrayLength;
              if (actualValue < 0) {
                  actualValue = step < 0 ? -1 : 0;
              }
          } else if (actualValue >= arrayLength) {
              actualValue = step < 0 ? arrayLength - 1 : arrayLength;
          }
          return actualValue;
      }

  };

  function Runtime(interpreter) {
    this._interpreter = interpreter;
    this.functionTable = {
        // name: [function, <signature>]
        // The <signature> can be:
        //
        // {
        //   args: [[type1, type2], [type1, type2]],
        //   variadic: true|false
        // }
        //
        // Each arg in the arg list is a list of valid types
        // (if the function is overloaded and supports multiple
        // types.  If the type is "any" then no type checking
        // occurs on the argument.  Variadic is optional
        // and if not provided is assumed to be false.
        abs: {_func: this._functionAbs, _signature: [{types: [TYPE_NUMBER]}]},
        avg: {_func: this._functionAvg, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
        ceil: {_func: this._functionCeil, _signature: [{types: [TYPE_NUMBER]}]},
        contains: {
            _func: this._functionContains,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]},
                        {types: [TYPE_ANY]}]},
        "ends_with": {
            _func: this._functionEndsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
        floor: {_func: this._functionFloor, _signature: [{types: [TYPE_NUMBER]}]},
        length: {
            _func: this._functionLength,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT]}]},
        map: {
            _func: this._functionMap,
            _signature: [{types: [TYPE_EXPREF]}, {types: [TYPE_ARRAY]}]},
        max: {
            _func: this._functionMax,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
        "merge": {
            _func: this._functionMerge,
            _signature: [{types: [TYPE_OBJECT], variadic: true}]
        },
        "max_by": {
          _func: this._functionMaxBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        sum: {_func: this._functionSum, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
        "starts_with": {
            _func: this._functionStartsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
        min: {
            _func: this._functionMin,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
        "min_by": {
          _func: this._functionMinBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        type: {_func: this._functionType, _signature: [{types: [TYPE_ANY]}]},
        keys: {_func: this._functionKeys, _signature: [{types: [TYPE_OBJECT]}]},
        values: {_func: this._functionValues, _signature: [{types: [TYPE_OBJECT]}]},
        sort: {_func: this._functionSort, _signature: [{types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER]}]},
        "sort_by": {
          _func: this._functionSortBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        join: {
            _func: this._functionJoin,
            _signature: [
                {types: [TYPE_STRING]},
                {types: [TYPE_ARRAY_STRING]}
            ]
        },
        reverse: {
            _func: this._functionReverse,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]}]},
        "to_array": {_func: this._functionToArray, _signature: [{types: [TYPE_ANY]}]},
        "to_string": {_func: this._functionToString, _signature: [{types: [TYPE_ANY]}]},
        "to_number": {_func: this._functionToNumber, _signature: [{types: [TYPE_ANY]}]},
        "not_null": {
            _func: this._functionNotNull,
            _signature: [{types: [TYPE_ANY], variadic: true}]
        }
    };
  }

  Runtime.prototype = {
    callFunction: function(name, resolvedArgs) {
      var functionEntry = this.functionTable[name];
      if (functionEntry === undefined) {
          throw new Error("Unknown function: " + name + "()");
      }
      this._validateArgs(name, resolvedArgs, functionEntry._signature);
      return functionEntry._func.call(this, resolvedArgs);
    },

    _validateArgs: function(name, args, signature) {
        // Validating the args requires validating
        // the correct arity and the correct type of each arg.
        // If the last argument is declared as variadic, then we need
        // a minimum number of args to be required.  Otherwise it has to
        // be an exact amount.
        var pluralized;
        if (signature[signature.length - 1].variadic) {
            if (args.length < signature.length) {
                pluralized = signature.length === 1 ? " argument" : " arguments";
                throw new Error("ArgumentError: " + name + "() " +
                                "takes at least" + signature.length + pluralized +
                                " but received " + args.length);
            }
        } else if (args.length !== signature.length) {
            pluralized = signature.length === 1 ? " argument" : " arguments";
            throw new Error("ArgumentError: " + name + "() " +
                            "takes " + signature.length + pluralized +
                            " but received " + args.length);
        }
        var currentSpec;
        var actualType;
        var typeMatched;
        for (var i = 0; i < signature.length; i++) {
            typeMatched = false;
            currentSpec = signature[i].types;
            actualType = this._getTypeName(args[i]);
            for (var j = 0; j < currentSpec.length; j++) {
                if (this._typeMatches(actualType, currentSpec[j], args[i])) {
                    typeMatched = true;
                    break;
                }
            }
            if (!typeMatched) {
                throw new Error("TypeError: " + name + "() " +
                                "expected argument " + (i + 1) +
                                " to be type " + currentSpec +
                                " but received type " + actualType +
                                " instead.");
            }
        }
    },

    _typeMatches: function(actual, expected, argValue) {
        if (expected === TYPE_ANY) {
            return true;
        }
        if (expected === TYPE_ARRAY_STRING ||
            expected === TYPE_ARRAY_NUMBER ||
            expected === TYPE_ARRAY) {
            // The expected type can either just be array,
            // or it can require a specific subtype (array of numbers).
            //
            // The simplest case is if "array" with no subtype is specified.
            if (expected === TYPE_ARRAY) {
                return actual === TYPE_ARRAY;
            } else if (actual === TYPE_ARRAY) {
                // Otherwise we need to check subtypes.
                // I think this has potential to be improved.
                var subtype;
                if (expected === TYPE_ARRAY_NUMBER) {
                  subtype = TYPE_NUMBER;
                } else if (expected === TYPE_ARRAY_STRING) {
                  subtype = TYPE_STRING;
                }
                for (var i = 0; i < argValue.length; i++) {
                    if (!this._typeMatches(
                            this._getTypeName(argValue[i]), subtype,
                                             argValue[i])) {
                        return false;
                    }
                }
                return true;
            }
        } else {
            return actual === expected;
        }
    },
    _getTypeName: function(obj) {
        switch (Object.prototype.toString.call(obj)) {
            case "[object String]":
              return TYPE_STRING;
            case "[object Number]":
              return TYPE_NUMBER;
            case "[object Array]":
              return TYPE_ARRAY;
            case "[object Boolean]":
              return TYPE_BOOLEAN;
            case "[object Null]":
              return TYPE_NULL;
            case "[object Object]":
              // Check if it's an expref.  If it has, it's been
              // tagged with a jmespathType attr of 'Expref';
              if (obj.jmespathType === TOK_EXPREF) {
                return TYPE_EXPREF;
              } else {
                return TYPE_OBJECT;
              }
        }
    },

    _functionStartsWith: function(resolvedArgs) {
        return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
    },

    _functionEndsWith: function(resolvedArgs) {
        var searchStr = resolvedArgs[0];
        var suffix = resolvedArgs[1];
        return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
    },

    _functionReverse: function(resolvedArgs) {
        var typeName = this._getTypeName(resolvedArgs[0]);
        if (typeName === TYPE_STRING) {
          var originalStr = resolvedArgs[0];
          var reversedStr = "";
          for (var i = originalStr.length - 1; i >= 0; i--) {
              reversedStr += originalStr[i];
          }
          return reversedStr;
        } else {
          var reversedArray = resolvedArgs[0].slice(0);
          reversedArray.reverse();
          return reversedArray;
        }
    },

    _functionAbs: function(resolvedArgs) {
      return Math.abs(resolvedArgs[0]);
    },

    _functionCeil: function(resolvedArgs) {
        return Math.ceil(resolvedArgs[0]);
    },

    _functionAvg: function(resolvedArgs) {
        var sum = 0;
        var inputArray = resolvedArgs[0];
        for (var i = 0; i < inputArray.length; i++) {
            sum += inputArray[i];
        }
        return sum / inputArray.length;
    },

    _functionContains: function(resolvedArgs) {
        return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
    },

    _functionFloor: function(resolvedArgs) {
        return Math.floor(resolvedArgs[0]);
    },

    _functionLength: function(resolvedArgs) {
       if (!isObject(resolvedArgs[0])) {
         return resolvedArgs[0].length;
       } else {
         // As far as I can tell, there's no way to get the length
         // of an object without O(n) iteration through the object.
         return Object.keys(resolvedArgs[0]).length;
       }
    },

    _functionMap: function(resolvedArgs) {
      var mapped = [];
      var interpreter = this._interpreter;
      var exprefNode = resolvedArgs[0];
      var elements = resolvedArgs[1];
      for (var i = 0; i < elements.length; i++) {
          mapped.push(interpreter.visit(exprefNode, elements[i]));
      }
      return mapped;
    },

    _functionMerge: function(resolvedArgs) {
      var merged = {};
      for (var i = 0; i < resolvedArgs.length; i++) {
        var current = resolvedArgs[i];
        for (var key in current) {
          merged[key] = current[key];
        }
      }
      return merged;
    },

    _functionMax: function(resolvedArgs) {
      if (resolvedArgs[0].length > 0) {
        var typeName = this._getTypeName(resolvedArgs[0][0]);
        if (typeName === TYPE_NUMBER) {
          return Math.max.apply(Math, resolvedArgs[0]);
        } else {
          var elements = resolvedArgs[0];
          var maxElement = elements[0];
          for (var i = 1; i < elements.length; i++) {
              if (maxElement.localeCompare(elements[i]) < 0) {
                  maxElement = elements[i];
              }
          }
          return maxElement;
        }
      } else {
          return null;
      }
    },

    _functionMin: function(resolvedArgs) {
      if (resolvedArgs[0].length > 0) {
        var typeName = this._getTypeName(resolvedArgs[0][0]);
        if (typeName === TYPE_NUMBER) {
          return Math.min.apply(Math, resolvedArgs[0]);
        } else {
          var elements = resolvedArgs[0];
          var minElement = elements[0];
          for (var i = 1; i < elements.length; i++) {
              if (elements[i].localeCompare(minElement) < 0) {
                  minElement = elements[i];
              }
          }
          return minElement;
        }
      } else {
        return null;
      }
    },

    _functionSum: function(resolvedArgs) {
      var sum = 0;
      var listToSum = resolvedArgs[0];
      for (var i = 0; i < listToSum.length; i++) {
        sum += listToSum[i];
      }
      return sum;
    },

    _functionType: function(resolvedArgs) {
        switch (this._getTypeName(resolvedArgs[0])) {
          case TYPE_NUMBER:
            return "number";
          case TYPE_STRING:
            return "string";
          case TYPE_ARRAY:
            return "array";
          case TYPE_OBJECT:
            return "object";
          case TYPE_BOOLEAN:
            return "boolean";
          case TYPE_EXPREF:
            return "expref";
          case TYPE_NULL:
            return "null";
        }
    },

    _functionKeys: function(resolvedArgs) {
        return Object.keys(resolvedArgs[0]);
    },

    _functionValues: function(resolvedArgs) {
        var obj = resolvedArgs[0];
        var keys = Object.keys(obj);
        var values = [];
        for (var i = 0; i < keys.length; i++) {
            values.push(obj[keys[i]]);
        }
        return values;
    },

    _functionJoin: function(resolvedArgs) {
        var joinChar = resolvedArgs[0];
        var listJoin = resolvedArgs[1];
        return listJoin.join(joinChar);
    },

    _functionToArray: function(resolvedArgs) {
        if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
            return resolvedArgs[0];
        } else {
            return [resolvedArgs[0]];
        }
    },

    _functionToString: function(resolvedArgs) {
        if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
            return resolvedArgs[0];
        } else {
            return JSON.stringify(resolvedArgs[0]);
        }
    },

    _functionToNumber: function(resolvedArgs) {
        var typeName = this._getTypeName(resolvedArgs[0]);
        var convertedValue;
        if (typeName === TYPE_NUMBER) {
            return resolvedArgs[0];
        } else if (typeName === TYPE_STRING) {
            convertedValue = +resolvedArgs[0];
            if (!isNaN(convertedValue)) {
                return convertedValue;
            }
        }
        return null;
    },

    _functionNotNull: function(resolvedArgs) {
        for (var i = 0; i < resolvedArgs.length; i++) {
            if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
                return resolvedArgs[i];
            }
        }
        return null;
    },

    _functionSort: function(resolvedArgs) {
        var sortedArray = resolvedArgs[0].slice(0);
        sortedArray.sort();
        return sortedArray;
    },

    _functionSortBy: function(resolvedArgs) {
        var sortedArray = resolvedArgs[0].slice(0);
        if (sortedArray.length === 0) {
            return sortedArray;
        }
        var interpreter = this._interpreter;
        var exprefNode = resolvedArgs[1];
        var requiredType = this._getTypeName(
            interpreter.visit(exprefNode, sortedArray[0]));
        if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
            throw new Error("TypeError");
        }
        var that = this;
        // In order to get a stable sort out of an unstable
        // sort algorithm, we decorate/sort/undecorate (DSU)
        // by creating a new list of [index, element] pairs.
        // In the cmp function, if the evaluated elements are
        // equal, then the index will be used as the tiebreaker.
        // After the decorated list has been sorted, it will be
        // undecorated to extract the original elements.
        var decorated = [];
        for (var i = 0; i < sortedArray.length; i++) {
          decorated.push([i, sortedArray[i]]);
        }
        decorated.sort(function(a, b) {
          var exprA = interpreter.visit(exprefNode, a[1]);
          var exprB = interpreter.visit(exprefNode, b[1]);
          if (that._getTypeName(exprA) !== requiredType) {
              throw new Error(
                  "TypeError: expected " + requiredType + ", received " +
                  that._getTypeName(exprA));
          } else if (that._getTypeName(exprB) !== requiredType) {
              throw new Error(
                  "TypeError: expected " + requiredType + ", received " +
                  that._getTypeName(exprB));
          }
          if (exprA > exprB) {
            return 1;
          } else if (exprA < exprB) {
            return -1;
          } else {
            // If they're equal compare the items by their
            // order to maintain relative order of equal keys
            // (i.e. to get a stable sort).
            return a[0] - b[0];
          }
        });
        // Undecorate: extract out the original list elements.
        for (var j = 0; j < decorated.length; j++) {
          sortedArray[j] = decorated[j][1];
        }
        return sortedArray;
    },

    _functionMaxBy: function(resolvedArgs) {
      var exprefNode = resolvedArgs[1];
      var resolvedArray = resolvedArgs[0];
      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
      var maxNumber = -Infinity;
      var maxRecord;
      var current;
      for (var i = 0; i < resolvedArray.length; i++) {
        current = keyFunction(resolvedArray[i]);
        if (current > maxNumber) {
          maxNumber = current;
          maxRecord = resolvedArray[i];
        }
      }
      return maxRecord;
    },

    _functionMinBy: function(resolvedArgs) {
      var exprefNode = resolvedArgs[1];
      var resolvedArray = resolvedArgs[0];
      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
      var minNumber = Infinity;
      var minRecord;
      var current;
      for (var i = 0; i < resolvedArray.length; i++) {
        current = keyFunction(resolvedArray[i]);
        if (current < minNumber) {
          minNumber = current;
          minRecord = resolvedArray[i];
        }
      }
      return minRecord;
    },

    createKeyFunction: function(exprefNode, allowedTypes) {
      var that = this;
      var interpreter = this._interpreter;
      var keyFunc = function(x) {
        var current = interpreter.visit(exprefNode, x);
        if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
          var msg = "TypeError: expected one of " + allowedTypes +
                    ", received " + that._getTypeName(current);
          throw new Error(msg);
        }
        return current;
      };
      return keyFunc;
    }

  };

  function compile(stream) {
    var parser = new Parser();
    var ast = parser.parse(stream);
    return ast;
  }

  function tokenize(stream) {
      var lexer = new Lexer();
      return lexer.tokenize(stream);
  }

  function search(data, expression) {
      var parser = new Parser();
      // This needs to be improved.  Both the interpreter and runtime depend on
      // each other.  The runtime needs the interpreter to support exprefs.
      // There's likely a clean way to avoid the cyclic dependency.
      var runtime = new Runtime();
      var interpreter = new TreeInterpreter(runtime);
      runtime._interpreter = interpreter;
      var node = parser.parse(expression);
      return interpreter.search(node, data);
  }

  exports.tokenize = tokenize;
  exports.compile = compile;
  exports.search = search;
  exports.strictDeepEqual = strictDeepEqual;
})(typeof exports === "undefined" ? this.jmespath = {} : exports);

},{}],87:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],88:[function(require,module,exports){
(function (global){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],89:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],90:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],91:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":89,"./encode":90}],92:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

},{}],93:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

},{}],94:[function(require,module,exports){
arguments[4][91][0].apply(exports,arguments)
},{"./decode":92,"./encode":93,"dup":91}],95:[function(require,module,exports){
(function (setImmediate,clearImmediate){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":87,"timers":95}],96:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var punycode = require('punycode');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a puny coded representation of "domain".
      // It only converts the part of the domain name that
      // has non ASCII characters. I.e. it dosent matter if
      // you call it with a domain that already is in ASCII.
      var domainArray = this.hostname.split('.');
      var newOut = [];
      for (var i = 0; i < domainArray.length; ++i) {
        var s = domainArray[i];
        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
            'xn--' + punycode.encode(s) : s);
      }
      this.hostname = newOut.join('.');
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  Object.keys(this).forEach(function(k) {
    result[k] = this[k];
  }, this);

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    Object.keys(relative).forEach(function(k) {
      if (k !== 'protocol')
        result[k] = relative[k];
    });

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      Object.keys(relative).forEach(function(k) {
        result[k] = relative[k];
      });
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especialy happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host) && (last === '.' || last === '..') ||
      last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last == '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especialy happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!isNull(result.pathname) || !isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

function isString(arg) {
  return typeof arg === "string";
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return  arg == null;
}

},{"punycode":88,"querystring":91}],97:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],98:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],99:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":98,"_process":87,"inherits":97}],100:[function(require,module,exports){
var v1 = require('./v1');
var v4 = require('./v4');

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;

},{"./v1":103,"./v4":104}],101:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;

},{}],102:[function(require,module,exports){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],103:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

},{"./lib/bytesToUuid":101,"./lib/rng":102}],104:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/bytesToUuid":101,"./lib/rng":102}],105:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LRU_1 = require("./utils/LRU");
var CACHE_SIZE = 1000;
/**
 * Inspired node-lru-cache[https://github.com/isaacs/node-lru-cache]
 */
var EndpointCache = /** @class */ (function () {
    function EndpointCache(maxSize) {
        if (maxSize === void 0) { maxSize = CACHE_SIZE; }
        this.maxSize = maxSize;
        this.cache = new LRU_1.LRUCache(maxSize);
    }
    ;
    Object.defineProperty(EndpointCache.prototype, "size", {
        get: function () {
            return this.cache.length;
        },
        enumerable: true,
        configurable: true
    });
    EndpointCache.prototype.put = function (key, value) {
      var keyString = typeof key !== 'string' ? EndpointCache.getKeyString(key) : key;
        var endpointRecord = this.populateValue(value);
        this.cache.put(keyString, endpointRecord);
    };
    EndpointCache.prototype.get = function (key) {
      var keyString = typeof key !== 'string' ? EndpointCache.getKeyString(key) : key;
        var now = Date.now();
        var records = this.cache.get(keyString);
        if (records) {
            for (var i = 0; i < records.length; i++) {
                var record = records[i];
                if (record.Expire < now) {
                    this.cache.remove(keyString);
                    return undefined;
                }
            }
        }
        return records;
    };
    EndpointCache.getKeyString = function (key) {
        var identifiers = [];
        var identifierNames = Object.keys(key).sort();
        for (var i = 0; i < identifierNames.length; i++) {
            var identifierName = identifierNames[i];
            if (key[identifierName] === undefined)
                continue;
            identifiers.push(key[identifierName]);
        }
        return identifiers.join(' ');
    };
    EndpointCache.prototype.populateValue = function (endpoints) {
        var now = Date.now();
        return endpoints.map(function (endpoint) { return ({
            Address: endpoint.Address || '',
            Expire: now + (endpoint.CachePeriodInMinutes || 1) * 60 * 1000
        }); });
    };
    EndpointCache.prototype.empty = function () {
        this.cache.empty();
    };
    EndpointCache.prototype.remove = function (key) {
      var keyString = typeof key !== 'string' ? EndpointCache.getKeyString(key) : key;
        this.cache.remove(keyString);
    };
    return EndpointCache;
}());
exports.EndpointCache = EndpointCache;
},{"./utils/LRU":106}],106:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(key, value) {
        this.key = key;
        this.value = value;
    }
    return LinkedListNode;
}());
var LRUCache = /** @class */ (function () {
    function LRUCache(size) {
        this.nodeMap = {};
        this.size = 0;
        if (typeof size !== 'number' || size < 1) {
            throw new Error('Cache size can only be positive number');
        }
        this.sizeLimit = size;
    }
    Object.defineProperty(LRUCache.prototype, "length", {
        get: function () {
            return this.size;
        },
        enumerable: true,
        configurable: true
    });
    LRUCache.prototype.prependToList = function (node) {
        if (!this.headerNode) {
            this.tailNode = node;
        }
        else {
            this.headerNode.prev = node;
            node.next = this.headerNode;
        }
        this.headerNode = node;
        this.size++;
    };
    LRUCache.prototype.removeFromTail = function () {
        if (!this.tailNode) {
            return undefined;
        }
        var node = this.tailNode;
        var prevNode = node.prev;
        if (prevNode) {
            prevNode.next = undefined;
        }
        node.prev = undefined;
        this.tailNode = prevNode;
        this.size--;
        return node;
    };
    LRUCache.prototype.detachFromList = function (node) {
        if (this.headerNode === node) {
            this.headerNode = node.next;
        }
        if (this.tailNode === node) {
            this.tailNode = node.prev;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        node.next = undefined;
        node.prev = undefined;
        this.size--;
    };
    LRUCache.prototype.get = function (key) {
        if (this.nodeMap[key]) {
            var node = this.nodeMap[key];
            this.detachFromList(node);
            this.prependToList(node);
            return node.value;
        }
    };
    LRUCache.prototype.remove = function (key) {
        if (this.nodeMap[key]) {
            var node = this.nodeMap[key];
            this.detachFromList(node);
            delete this.nodeMap[key];
        }
    };
    LRUCache.prototype.put = function (key, value) {
        if (this.nodeMap[key]) {
            this.remove(key);
        }
        else if (this.size === this.sizeLimit) {
            var tailNode = this.removeFromTail();
            var key_1 = tailNode.key;
            delete this.nodeMap[key_1];
        }
        var newNode = new LinkedListNode(key, value);
        this.nodeMap[key] = newNode;
        this.prependToList(newNode);
    };
    LRUCache.prototype.empty = function () {
        var keys = Object.keys(this.nodeMap);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var node = this.nodeMap[key];
            this.detachFromList(node);
            delete this.nodeMap[key];
        }
    };
    return LRUCache;
}());
exports.LRUCache = LRUCache;
},{}],107:[function(require,module,exports){
// AWS SDK for JavaScript v2.553.0
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// License at https://sdk.amazonaws.com/js/BUNDLE_LICENSE.txt
require('./browser_loader');

var AWS = require('./core');

if (typeof window !== 'undefined') window.AWS = AWS;
if (typeof module !== 'undefined') {
    /**
     * @api private
     */
    module.exports = AWS;
}
if (typeof self !== 'undefined') self.AWS = AWS;

/**
 * @private
 * DO NOT REMOVE
 * browser builder will strip out this line if services are supplied on the command line.
 */if (!Object.prototype.hasOwnProperty.call(AWS, 'Connect')) {
  AWS.apiLoader.services['connect'] = {};
  AWS.Connect = AWS.Service.defineService('connect', [ '2017-02-15' ]);
}
AWS.apiLoader.services['connect']['2017-02-15'] = require('../apis/connect-2017-02-15.min');

if (!Object.prototype.hasOwnProperty.call(AWS, 'STS')) {
  AWS.apiLoader.services['sts'] = {};
  AWS.STS = AWS.Service.defineService('sts', [ '2011-06-15' ]);
  require('./services/sts');
}
AWS.apiLoader.services['sts']['2011-06-15'] = require('../apis/sts-2011-06-15.min');


},{"../apis/connect-2017-02-15.min":3,"../apis/sts-2011-06-15.min":5,"./browser_loader":16,"./core":18,"./services/sts":61}]},{},[107]);


/*! @license sprintf.js | Copyright (c) 2007-2013 Alexandru Marasteanu <hello at alexei dot ro> | 3 clause BSD license */

(function() {
   var ctx = this;

	var sprintf = function() {
		if (!sprintf.cache.hasOwnProperty(arguments[0])) {
			sprintf.cache[arguments[0]] = sprintf.parse(arguments[0]);
		}
		return sprintf.format.call(null, sprintf.cache[arguments[0]], arguments);
	};

	sprintf.format = function(parse_tree, argv) {
		var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
		for (i = 0; i < tree_length; i++) {
			node_type = get_type(parse_tree[i]);
			if (node_type === 'string') {
				output.push(parse_tree[i]);
			}
			else if (node_type === 'array') {
				match = parse_tree[i]; // convenience purposes only
				if (match[2]) { // keyword argument
					arg = argv[cursor];
					for (k = 0; k < match[2].length; k++) {
						if (!arg.hasOwnProperty(match[2][k])) {
							throw(sprintf('[sprintf] property "%s" does not exist', match[2][k]));
						}
						arg = arg[match[2][k]];
					}
				}
				else if (match[1]) { // positional argument (explicit)
					arg = argv[match[1]];
				}
				else { // positional argument (implicit)
					arg = argv[cursor++];
				}

				if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
					throw(sprintf('[sprintf] expecting number but found %s', get_type(arg)));
				}
				switch (match[8]) {
					case 'b': arg = arg.toString(2); break;
					case 'c': arg = String.fromCharCode(arg); break;
					case 'd': arg = parseInt(arg, 10); break;
					case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
					case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
					case 'o': arg = arg.toString(8); break;
					case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
					case 'u': arg = arg >>> 0; break;
					case 'x': arg = arg.toString(16); break;
					case 'X': arg = arg.toString(16).toUpperCase(); break;
				}
				arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
				pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
				pad_length = match[6] - String(arg).length;
				pad = match[6] ? str_repeat(pad_character, pad_length) : '';
				output.push(match[5] ? arg + pad : pad + arg);
			}
		}
		return output.join('');
	};

	sprintf.cache = {};

	sprintf.parse = function(fmt) {
		var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
		while (_fmt) {
			if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
				parse_tree.push(match[0]);
			}
			else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
				parse_tree.push('%');
			}
			else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
				if (match[2]) {
					arg_names |= 1;
					var field_list = [], replacement_field = match[2], field_match = [];
					if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
						field_list.push(field_match[1]);
						while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
							if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
								field_list.push(field_match[1]);
							}
							else {
								throw('[sprintf] huh?');
							}
						}
					}
					else {
						throw('[sprintf] huh?');
					}
					match[2] = field_list;
				}
				else {
					arg_names |= 2;
				}
				if (arg_names === 3) {
					throw('[sprintf] mixing positional and named placeholders is not (yet) supported');
				}
				parse_tree.push(match);
			}
			else {
				throw('[sprintf] huh?');
			}
			_fmt = _fmt.substring(match[0].length);
		}
		return parse_tree;
	};

	var vsprintf = function(fmt, argv, _argv) {
		_argv = argv.slice(0);
		_argv.splice(0, 0, fmt);
		return sprintf.apply(null, _argv);
	};

	/**
	 * helpers
	 */
	function get_type(variable) {
		return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
	}

	function str_repeat(input, multiplier) {
		for (var output = []; multiplier > 0; output[--multiplier] = input) {/* do nothing */}
		return output.join('');
	}

	/**
	 * export to either browser or node.js
	 */
	ctx.sprintf = sprintf;
	ctx.vsprintf = vsprintf;
})();


/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function () {
  var global = this;
  connect = global.connect || {};
  global.connect = connect;
  global.lily = connect;

  // How frequently logs should be collected and reported to shared worker.
  var LOG_REPORT_INTERVAL_MILLIS = 5000;

  // The default log roll interval (30min)
  var DEFAULT_LOG_ROLL_INTERVAL = 1800000;

  /**
   * An enumeration of common logging levels.
   */
  var LogLevel = {
    TEST: "TEST",
    TRACE: "TRACE",
    DEBUG: "DEBUG",
    INFO: "INFO",
    LOG: "LOG",
    WARN: "WARN",
    ERROR: "ERROR",
    CRITICAL: "CRITICAL"
  };

  /**
   * An enumeration of common logging components.
   */
  var LogComponent = {
    CCP: "ccp",
    SOFTPHONE: "softphone",
    CHAT: "chat"
  };

  /**
   * The numeric order of the logging levels above.
   * They are spaced to allow the addition of other log
   * levels at a later time.
   */
  var LogLevelOrder = {
    TEST: 0,
    TRACE: 10,
    DEBUG: 20,
    INFO: 30,
    LOG: 40,
    WARN: 50,
    ERROR: 100,
    CRITICAL: 200

  };

  /**
   * A map from log level to console logger function.
   */
  var CONSOLE_LOGGER_MAP = {
    TRACE: function (text) { console.info(text); },
    DEBUG: function (text) { console.info(text); },
    INFO: function (text) { console.info(text); },
    LOG: function (text) { console.log(text); },
    TEST: function (text) { console.log(text); },
    WARN: function (text) { console.warn(text); },
    ERROR: function (text) { console.error(text); },
    CRITICAL: function (text) { console.error(text); }
  };

  /**
  * Checks if it is a valid log component enum
  */

  var isValidLogComponent = function (component) {
    return [LogComponent.SOFTPHONE, LogComponent.CCP, LogComponent.CHAT].indexOf(component) !== -1;
  };

  /**
  * Extract the custom arguments as required by the logger
  */
  var extractLoggerArgs = function (loggerArgs) {
    var args = Array.prototype.slice.call(loggerArgs, 0);
    var firstArg = args.shift();
    var format;
    var component;
    if (isValidLogComponent(firstArg)) {
      component = firstArg;
      format = args.shift();
    } else {
      //default to CCP component
      format = firstArg;
      component = LogComponent.CCP;
    }
    return {
      format: format,
      component: component,
      args: args
    };
  };

  /**
   * A log entry.
   *
   * @param level The log level of this log entry.
   * @param text The text contained in the log entry.
   *
   * Log entries are aware of their timestamp, order,
   * and can contain objects and exception stack traces.
   */
  var LogEntry = function (component, level, text) {
    this.component = component;
    this.level = level;
    this.text = text;
    this.time = new Date();
    this.exception = null;
    this.objects = [];
    this.line = 0;
  };

  LogEntry.fromObject = function (obj) {
    var entry = new LogEntry(LogComponent.CCP, obj.level, obj.text);

    // Required to check for Date objects sent across frame boundaries
    if (Object.prototype.toString.call(obj.time) === '[object Date]') {
      entry.time = new Date(obj.time.getTime());
    } else if (typeof obj.time === 'number') {
      entry.time = new Date(obj.time);
    } else if (typeof obj.time === 'string') {
      entry.time = Date.parse(obj.time);
    } else {
      entry.time = new Date();
    }
    entry.exception = obj.exception;
    entry.objects = obj.objects;
    return entry;
  };

  /**
   * Pulls the type, message, and stack trace
   * out of the given exception for JSON serialization.
   */
  var LoggedException = function (e) {
    this.type = Object.prototype.toString.call(e);
    this.message = e.message;
    this.stack = e.stack ? e.stack.split('\n') : [];
  };

  /**
   * Minimally stringify this log entry for printing
   * to the console.
   */
  LogEntry.prototype.toString = function () {
    return connect.sprintf("[%s] [%s]: %s",
      this.getTime() && this.getTime().toISOString ? this.getTime().toISOString() : "???",
      this.getLevel(),
      this.getText());
  };

  /**
   * Get the log entry timestamp.
   */
  LogEntry.prototype.getTime = function () {
    return this.time;
  };

  /**
   * Get the level of the log entry.
   */
  LogEntry.prototype.getLevel = function () {
    return this.level;
  };

  /**
   * Get the log entry text.
   */
  LogEntry.prototype.getText = function () {
    return this.text;
  };

  /**
   * Get the log entry component.
   */
  LogEntry.prototype.getComponent = function () {
    return this.component;
  };

  /**
   * Add an exception stack trace to this log entry.
   * A log entry may contain only one exception stack trace.
   */
  LogEntry.prototype.withException = function (e) {
    this.exception = new LoggedException(e);
    return this;
  };

  /**
   * Add an arbitrary object to the log entry.  A log entry
   * may contain any number of objects.
   */
  LogEntry.prototype.withObject = function (obj) {
    this.objects.push(connect.deepcopy(obj));
    return this;
  };

  /**
   * The logger instance.
   */
  var Logger = function () {
    this._logs = [];
    this._rolledLogs = [];
    this._logsToPush = [];
    this._echoLevel = LogLevelOrder.INFO;
    this._logLevel = LogLevelOrder.INFO;
    this._lineCount = 0;
    this._logRollInterval = 0;
    this._logRollTimer = null;
    this.setLogRollInterval(DEFAULT_LOG_ROLL_INTERVAL);
  };

  /**
   * Sets the interval in milliseconds that the logs will be rotated.
   * Logs are rotated out completely at the end of the second roll
   * and will eventually be garbage collected.
   */
  Logger.prototype.setLogRollInterval = function (interval) {
    var self = this;

    if (!(this._logRollTimer) || interval !== this._logRollInterval) {
      if (this._logRollTimer) {
        global.clearInterval(this._logRollTimer);
      }
      this._logRollInterval = interval;
      this._logRollTimer = global.setInterval(function () {
        this._rolledLogs = this._logs;
        this._logs = [];
        self.info("Log roll interval occurred.");
      }, this._logRollInterval);
    } else {
      this.warn("Logger is already set to the given interval: %d", this._logRollInterval);
    }
  };

  /**
   * Set the log level.  This is the minimum level at which logs will
   * be kept for later archiving.
   */
  Logger.prototype.setLogLevel = function (level) {
    if (level in LogLevelOrder) {
      this._logLevel = LogLevelOrder[level];
    } else {
      throw new Error("Unknown logging level: " + level);
    }
  };

  /**
   * Set the echo level.  This is the minimum level at which logs will
   * be printed to the javascript console.
   */
  Logger.prototype.setEchoLevel = function (level) {
    if (level in LogLevelOrder) {
      this._echoLevel = LogLevelOrder[level];
    } else {
      throw new Error("Unknown logging level: " + level);
    }
  };

  /**
   * Write a particular log entry.
   *
   * @param level The logging level of the entry.
   * @param text The text contents of the entry.
   *
   * @returns The new log entry.
   */
  Logger.prototype.write = function (component, level, text) {
    var logEntry = new LogEntry(component, level, text);
    this.addLogEntry(logEntry);
    return logEntry;
  };

  Logger.prototype.addLogEntry = function (logEntry) {
    this._logs.push(logEntry);
    //For now only send softphone logs only.
    //TODO add CCP logs once we are sure that no sensitive data is being logged.
    if (LogComponent.SOFTPHONE === logEntry.component) {
      this._logsToPush.push(logEntry);
    }

    if (logEntry.level in LogLevelOrder &&
      LogLevelOrder[logEntry.level] >= this._logLevel) {

      if (LogLevelOrder[logEntry.level] >= this._echoLevel) {
        CONSOLE_LOGGER_MAP[logEntry.getLevel()](logEntry.toString());
      }

      logEntry.line = this._lineCount++;
    }
  };

  /**
   * Remove all objects from all log entries.
   */
  Logger.prototype.clearObjects = function () {
    for (var x = 0; x < this._logs.length; x++) {
      if (this._logs[x].objects) {
        delete this._logs[x].objects;
      }
    }
  };

  /**
   * Remove all exception stack traces from the log entries.
   */
  Logger.prototype.clearExceptions = function () {
    for (var x = 0; x < this._logs.length; x++) {
      if (this._logs[x].exception) {
        delete this._logs[x].exception;
      }
    }
  };

  Logger.prototype.trace = function () {
    var logArgs = extractLoggerArgs(arguments);
    return this.write(logArgs.component, LogLevel.TRACE, connect.vsprintf(logArgs.format, logArgs.args));
  };

  Logger.prototype.debug = function () {
    var logArgs = extractLoggerArgs(arguments);
    return this.write(logArgs.component, LogLevel.DEBUG, connect.vsprintf(logArgs.format, logArgs.args));
  };

  Logger.prototype.info = function () {
    var logArgs = extractLoggerArgs(arguments);
    return this.write(logArgs.component, LogLevel.INFO, connect.vsprintf(logArgs.format, logArgs.args));
  };

  Logger.prototype.log = function () {
    var logArgs = extractLoggerArgs(arguments);
    return this.write(logArgs.component, LogLevel.LOG, connect.vsprintf(logArgs.format, logArgs.args));
  };

  Logger.prototype.test = function () {
    var logArgs = extractLoggerArgs(arguments);
    return this.write(logArgs.component, LogLevel.TEST, connect.vsprintf(logArgs.format, logArgs.args));
  };

  Logger.prototype.warn = function () {
    var logArgs = extractLoggerArgs(arguments);
    return this.write(logArgs.component, LogLevel.WARN, connect.vsprintf(logArgs.format, logArgs.args));
  };

  Logger.prototype.error = function () {
    var logArgs = extractLoggerArgs(arguments);
    return this.write(logArgs.component, LogLevel.ERROR, connect.vsprintf(logArgs.format, logArgs.args));
  };

  Logger.prototype.critical = function () {
    var logArgs = extractLoggerArgs(arguments);
    return this.write(logArgs.component, LogLevel.ERROR, connect.vsprintf(logArgs.format, logArgs.args));
  };

  /**
   * Create a string representation of the logger contents.
   */
  Logger.prototype.toString = function () {
    var lines = [];
    for (var x = 0; x < this._logs.length; x++) {
      lines.push(this._logs[x].toString());
    }

    return lines.join("\n");
  };

  Logger.prototype.download = function () {
    var logBlob = new global.Blob([JSON.stringify(this._rolledLogs.concat(this._logs), undefined, 4)], ['text/plain']);
    var downloadLink = document.createElement('a');
    downloadLink.href = global.URL.createObjectURL(logBlob);
    downloadLink.download = 'agent-log.txt';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  Logger.prototype.scheduleUpstreamLogPush = function (conduit) {
    if (!connect.upstreamLogPushScheduled) {
      connect.upstreamLogPushScheduled = true;
      /** Schedule pushing logs frequently to sharedworker upstream, sharedworker will report to LARS*/
      global.setInterval(connect.hitch(this, this.reportMasterLogsUpStream, conduit), LOG_REPORT_INTERVAL_MILLIS);
    }
  };

  Logger.prototype.reportMasterLogsUpStream = function (conduit) {
    var logsToPush = this._logsToPush.slice();
    this._logsToPush = [];
    connect.ifMaster(connect.MasterTopics.SEND_LOGS, function () {
      if (logsToPush.length > 0) {
        conduit.sendUpstream(connect.EventType.SEND_LOGS, logsToPush);
      }
    });
  };

  var DownstreamConduitLogger = function (conduit) {
    Logger.call(this);
    this.conduit = conduit;
    global.setInterval(connect.hitch(this, this._pushLogsDownstream),
      DownstreamConduitLogger.LOG_PUSH_INTERVAL);

    // Disable log rolling, we will purge our own logs once they have
    // been pushed downstream.
    global.clearInterval(this._logRollTimer);
    this._logRollTimer = null;
  };
  // How frequently logs should be collected and delivered downstream.
  DownstreamConduitLogger.LOG_PUSH_INTERVAL = 1000;
  DownstreamConduitLogger.prototype = Object.create(Logger.prototype);
  DownstreamConduitLogger.prototype.constructor = DownstreamConduitLogger;

  DownstreamConduitLogger.prototype._pushLogsDownstream = function () {
    var self = this;
    this._logs.forEach(function (log) {
      self.conduit.sendDownstream(connect.EventType.LOG, log);
    });
    this._logs = [];
  };

  /** Create the singleton logger instance. */
  connect.rootLogger = new Logger();

  /** Fetch the singleton logger instance. */
  var getLog = function () {
    return connect.rootLogger;
  };

  connect = connect || {};
  connect.getLog = getLog;
  connect.LogEntry = LogEntry;
  connect.Logger = Logger;
  connect.LogLevel = LogLevel;
  connect.LogComponent = LogComponent;
  connect.DownstreamConduitLogger = DownstreamConduitLogger;
})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function() {
   var global = this;
   connect = global.connect || {};
   global.connect = connect;
   global.lily = connect;

   var userAgent = navigator.userAgent;
   var ONE_DAY_MILLIS = 24*60*60*1000;

   /**
    * Unpollute sprintf functions from the global namespace.
    */
   connect.sprintf = global.sprintf;
   connect.vsprintf = global.vsprintf;
   delete global.sprintf;
   delete global.vsprintf;

   connect.HTTP_STATUS_CODES = {
    SUCCESS: 200,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500
   };

   connect.TRANSPORT_TYPES = {
      CHAT_TOKEN: "chat_token",
      WEB_SOCKET: "web_socket"
   };

   /**
    * Binds the given instance object as the context for
    * the method provided.
    *
    * @param scope The instance object to be set as the scope
    *    of the function.
    * @param method The method to be encapsulated.
    *
    * All other arguments, if any, are bound to the method
    * invocation inside the closure.
    *
    * @return A closure encapsulating the invocation of the
    *    method provided in context of the given instance.
    */
   connect.hitch = function() {
      var args = Array.prototype.slice.call(arguments);
      var scope = args.shift();
      var method = args.shift();

      connect.assertNotNull(scope, 'scope');
      connect.assertNotNull(method, 'method');
      connect.assertTrue(connect.isFunction(method), 'method must be a function');

      return function() {
         var closureArgs = Array.prototype.slice.call(arguments);
         return method.apply(scope, args.concat(closureArgs));
      };
   };

   /**
    * Determine if the given value is a callable function type.
    * Borrowed from Underscore.js.
    */
   connect.isFunction = function(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
   };

   /**
    * Determine if the given value is an array.
    */
   connect.isArray = function(obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
   };

   /**
    * Get a list of keys from a Javascript object used
    * as a hash map.
    */
   connect.keys = function(map) {
      var keys = [];

      connect.assertNotNull(map, 'map');

      for (var k in map) {
         keys.push(k);
      }

      return keys;
   };

   /**
    * Get a list of values from a Javascript object used
    * as a hash map.
    */
   connect.values = function(map) {
      var values = [];

      connect.assertNotNull(map, 'map');

      for (var k in map) {
         values.push(map[k]);
      }

      return values;
   };

   /**
    * Get a list of key/value pairs from the given map.
    */
   connect.entries = function(map) {
      var entries = [];

      for (var k in map) {
         entries.push({key: k, value: map[k]});
      }

      return entries;
   };

   /**
    * Merge two or more maps together into a new map,
    * or simply copy a single map.
    */
   connect.merge = function() {
      var argMaps = Array.prototype.slice.call(arguments, 0);
      var resultMap = {};

      argMaps.forEach(function(map) {
         connect.entries(map).forEach(function(kv) {
            resultMap[kv.key] = kv.value;
         });
      });

      return resultMap;
   };

   connect.now = function() {
      return new Date().getTime();
   };

   connect.find = function(array, predicate) {
      for (var x = 0; x < array.length; x++) {
         if (predicate(array[x])) {
            return array[x];
         }
      }

      return null;
   };

   connect.contains = function(obj, value) {
      if (obj instanceof Array) {
         return connect.find(obj, function(v) { return v === value; }) != null;

      } else {
         return (value in obj);
      }
   };

   connect.containsValue = function(obj, value) {
      if (obj instanceof Array) {
         return connect.find(obj, function(v) { return v === value; }) != null;

      } else {
         return connect.find(connect.values(obj), function(v) { return v === value; }) != null;
      }
   };

   /**
    * Generate a random ID consisting of the current timestamp
    * and a random base-36 number based on Math.random().
    */
   connect.randomId = function() {
      return connect.sprintf("%s-%s", connect.now(), Math.random().toString(36).slice(2));
   };

   /**
    * Generate an enum from the given list of lower-case enum values,
    * where the enum keys will be upper case.
    *
    * Conversion from pascal case based on code from here:
    * http://stackoverflow.com/questions/30521224
    */
   connect.makeEnum = function(values) {
      var enumObj = {};

      values.forEach(function(value) {
         var key = value.replace(/\.?([a-z]+)_?/g, function (x, y) { return y.toUpperCase() + "_"; })
            .replace(/_$/, "");

         enumObj[key] = value;
      });

      return enumObj;
   };

   connect.makeNamespacedEnum = function(prefix, values) {
      var enumObj = connect.makeEnum(values);
      connect.keys(enumObj).forEach(function(key) {
         enumObj[key] = connect.sprintf("%s::%s", prefix, enumObj[key]);
      });
      return enumObj;
   };

   /**
   * Methods to determine browser type and versions, used for softphone initialization.
   */
   connect.isChromeBrowser = function() {
       return userAgent.indexOf("Chrome") !== -1;
   };

   connect.isFirefoxBrowser = function() {
       return userAgent.indexOf("Firefox") !== -1;
   };

   connect.isOperaBrowser = function() {
       return userAgent.indexOf("Opera") !== -1;
   };

   connect.getChromeBrowserVersion = function() {
       var chromeVersion = userAgent.substring(userAgent.indexOf("Chrome")+7);
       if (chromeVersion) {
           return parseFloat(chromeVersion);
       } else {
           return -1;
       }
   };

   connect.getFirefoxBrowserVersion = function() {
       var firefoxVersion = userAgent.substring(userAgent.indexOf("Firefox")+8);
       if (firefoxVersion) {
           return parseFloat(firefoxVersion);
       } else {
           return -1;
       }
   };

   connect.getOperaBrowserVersion = function() {
       var versionOffset = userAgent.indexOf("Opera");
       var operaVersion = (userAgent.indexOf("Version") !== -1) ? userAgent.substring(versionOffset+8) : userAgent.substring(versionOffset+6);
       if (operaVersion) {
           return parseFloat(operaVersion);
       } else {
           return -1;
       }
   };

   /**
    * Return a map of items in the given list indexed by
    * keys determined by the closure provided.
    *
    * @param iterable A list-like object.
    * @param closure A closure to determine the index for the
    *    items in the iterable.
    * @return A map from index to item for each item in the iterable.
    */
   connect.index = function(iterable, closure) {
      var map = {};

      iterable.forEach(function(item) {
         map[closure(item)] = item;
      });

      return map;
   };

   /**
    * Converts the given array into a map as a set,
    * where elements in the array are mapped to 1.
    */
   connect.set = function(arrayIn) {
      var setMap = {};

      arrayIn.forEach(function(key) {
         setMap[key] = 1;
      });

      return setMap;
   };

   /**
    * Returns a map for each key in mapB which
    * is NOT in mapA.
    */
   connect.relativeComplement = function(mapA, mapB) {
      var compMap = {};

      connect.keys(mapB).forEach(function(key) {
         if (! (key in mapA)) {
            compMap[key] = mapB[key];
         }
      });

      return compMap;
   };

   /**
    * Asserts that a premise is true.
    */
   connect.assertTrue = function(premise, message) {
      if (! premise) {
         throw new connect.ValueError(message);
      }
   };

   /**
    * Asserts that a value is not null or undefined.
    */
   connect.assertNotNull = function(value, name) {
      connect.assertTrue(value != null && typeof value !== undefined,
            connect.sprintf("%s must be provided", name || 'A value'));
      return value;
   };

   connect.deepcopy = function(src) {
      return JSON.parse(JSON.stringify(src));
   };

   /**
    * Get the current base url of the open page, e.g. if the page is
    * https://example.com:9494/oranges, this will be "https://example.com:9494".
    */
   connect.getBaseUrl = function() {
      var location = global.location;
      return connect.sprintf("%s//%s:%s", location.protocol, location.hostname, location.port);
   };

   /**
    * Determine if the current window is in an iframe.
    * Courtesy: http://stackoverflow.com/questions/326069/
    */
   connect.isFramed = function() {
      try {
         return window.self !== window.top;
      } catch (e) {
         return true;
      }
   };

   connect.fetch = function(endpoint, options, milliInterval, maxRetry){
      maxRetry = maxRetry || 5;
      milliInterval = milliInterval || 1000;
      options = options || {};
      return new Promise(function(resolve, reject) {
        function fetchData(maxRetry){
          fetch(endpoint, options).then(function (res) {
            if (res.status === connect.HTTP_STATUS_CODES.SUCCESS) {
              resolve(res.json());
            } else if (maxRetry !== 1 && (res.status >= connect.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR || res.status === connect.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)) {
              setTimeout(function () {
                fetchData(--maxRetry);
              }, milliInterval);
            } else {
                reject(res);
            }
          }).catch(function(e){ 
              reject(e);
          });
        }
        fetchData(maxRetry);
      });
   };

   /**
    * Calling a function with exponential backoff with full jitter retry strategy
    * It will retry calling the function for maximum maxRetry times if it fails.
    * Success callback will be called if the function succeeded.
    * Failure callback will be called only if the last try failed.
    */
   connect.backoff = function(func, milliInterval, maxRetry, callbacks) {
      connect.assertTrue(connect.isFunction(func), "func must be a Function");
      var self = this;
      var ratio = 2;

      func({
         success: function(data) {
            if (callbacks && callbacks.success) {
               callbacks.success(data);
            }
         },
         failure: function(err, data) {
            if (maxRetry > 0) {
               var interval = milliInterval * 2 * Math.random();
               global.setTimeout(function() {
                  self.backoff(func, interval * ratio, --maxRetry, callbacks);
               }, interval);
            } else {
               if (callbacks && callbacks.failure) {
                  callbacks.failure(err, data);
               }
            }
         }
      });
   };

   connect.publishMetric = function(metricData) {
      var bus = connect.core.getEventBus();
      bus.trigger(connect.EventType.CLIENT_METRIC, metricData);
   };

   /**
    * A wrapper around Window.open() for managing single instance popups.
    */
   connect.PopupManager = function() {};

   connect.PopupManager.prototype.open = function(url, name) {
      var then = this._getLastOpenedTimestamp(name);
      var now = new Date().getTime();

      if (now - then > ONE_DAY_MILLIS) {
         var win = window.open('', name);
         if (win.location !== url) {
            window.open(url, name);
         }
         this._setLastOpenedTimestamp(name, now);
      }
   };

   connect.PopupManager.prototype.clear = function(name) {
      var key = this._getLocalStorageKey(name);
      global.localStorage.removeItem(key);
   };

   connect.PopupManager.prototype._getLastOpenedTimestamp = function(name) {
      var key = this._getLocalStorageKey(name);
      var value = global.localStorage.getItem(key);

      if (value) {
         return parseInt(value, 10);

      } else {
         return 0;
      }
   };

   connect.PopupManager.prototype._setLastOpenedTimestamp = function(name, ts) {
      var key = this._getLocalStorageKey(name);
      global.localStorage.setItem(key, '' + ts);
   };

   connect.PopupManager.prototype._getLocalStorageKey = function(name) {
      return "connectPopupManager::" + name;
   };

   /**
    * An enumeration of the HTML5 notification permission values.
    */
   var NotificationPermission = connect.makeEnum([
      'granted',
      'denied',
      'default'
   ]);

   /**
    * A simple engine for showing notification popups.
    */
   connect.NotificationManager = function() {
      this.queue = [];
      this.permission = NotificationPermission.DEFAULT;
   };

   connect.NotificationManager.prototype.requestPermission = function() {
      var self = this;
      if (!("Notification" in global)) {
         connect.getLog().warn("This browser doesn't support notifications.");
         this.permission = NotificationPermission.DENIED;

      } else if (global.Notification.permission === NotificationPermission.DENIED) {
         connect.getLog().warn("The user has requested to not receive notifications.");
         this.permission = NotificationPermission.DENIED;

      } else if (this.permission !== NotificationPermission.GRANTED) {
         global.Notification.requestPermission().then(function(permission) {
            self.permission = permission;
            if (permission === NotificationPermission.GRANTED) {
               self._showQueued();

            } else {
               self.queue = [];
            }
         });
      }
   };

   connect.NotificationManager.prototype.show = function(title, options) {
      if (this.permission === NotificationPermission.GRANTED) {
         return this._showImpl({title: title, options: options});

      } else if (this.permission === NotificationPermission.DENIED) {
         connect.getLog().warn("Unable to show notification.").withObject({
            title: title,
            options: options
         });

      } else {
         var params = {title: title, options: options};
         connect.getLog().warn("Deferring notification until user decides to allow or deny.")
            .withObject(params);
         this.queue.push(params);
      }
   };

   connect.NotificationManager.prototype._showQueued = function() {
      var self = this;
      var notifications = this.queue.map(function(params) {
         return self._showImpl(params);
      });
      this.queue = [];
      return notifications;
   };

   connect.NotificationManager.prototype._showImpl = function(params) {
      var notification = new global.Notification(params.title, params.options);
      if (params.options.clicked) {
         notification.onclick = function() {
            params.options.clicked.call(notification);
         };
      }
      return notification;
   };

   connect.BaseError = function(format, args) {
      global.Error.call(this, connect.vsprintf(format, args));
   };
   connect.BaseError.prototype = Object.create(Error.prototype);
   connect.BaseError.prototype.constructor = connect.BaseError;

   connect.ValueError = function() {
      var args = Array.prototype.slice.call(arguments, 0);
      var format = args.shift();
      connect.BaseError.call(this, format, args);
   };
   connect.ValueError.prototype = Object.create(connect.BaseError.prototype);
   connect.ValueError.prototype.constructor = connect.ValueError;

   connect.NotImplementedError = function() {
      var args = Array.prototype.slice.call(arguments, 0);
      var format = args.shift();
      connect.BaseError.call(this, format, args);
   };
   connect.NotImplementedError.prototype = Object.create(connect.BaseError.prototype);
   connect.NotImplementedError.prototype.constructor = connect.NotImplementedError;

   connect.StateError = function() {
      var args = Array.prototype.slice.call(arguments, 0);
      var format = args.shift();
      connect.BaseError.call(this, format, args);
   };
   connect.StateError.prototype = Object.create(connect.BaseError.prototype);
   connect.StateError.prototype.constructor = connect.StateError;

})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function () {
  var global = this;
  connect = global.connect || {};
  global.connect = connect;

  var ALL_EVENTS = '<<all>>';

  /**---------------------------------------------------------------
   * enum EventType
   */
  var EventType = connect.makeEnum([
    'acknowledge',
    'ack_timeout',
    'api_request',
    'api_response',
    'auth_fail',
    'access_denied',
    'cross_domain_access_denied',
    'close',
    'configure',
    'log',
    'master_request',
    'master_response',
    'synchronize',
    'terminate',
    'terminated',
    'send_logs',
    'reload_agent_configuration',
    'broadcast',
    'api_metric',
    'client_metric',
    'mute'
  ]);

  /**---------------------------------------------------------------
   * enum MasterTopics
   */
  var MasterTopics = connect.makeNamespacedEnum('connect', [
    'loginPopup',
    'sendLogs',
    'softphone',
    'ringtone',
    'metrics'
  ]);

  /**---------------------------------------------------------------
   * enum AgentEvents
   */
  var AgentEvents = connect.makeNamespacedEnum('agent', [
    'init',
    'update',
    'refresh',
    'routable',
    'not_routable',
    'pending',
    'contact_pending',
    'offline',
    'error',
    'softphone_error',
    'state_change',
    'acw',
    'mute_toggle'
  ]);

  /**---------------------------------------------------------------
   * enum WebSocketEvents
   */
  var WebSocketEvents = connect.makeNamespacedEnum('webSocket', [
    'init_failure',
    'connection_gain',
    'connection_lost',
    'subscription_update',
    'subscription_failure',
    'all_message',
    'send',
    'subscribe'
  ]);

  /**---------------------------------------------------------------
   * enum ContactEvents
   */
  var ContactEvents = connect.makeNamespacedEnum('contact', [
    'init',
    'refresh',
    'destroyed',
    'incoming',
    'pending',
    'connecting',
    'connected',
    'missed',
    'acw',
    'view',
    'ended',
    'error',
    'accepted'
  ]);


   /**---------------------------------------------------------------
   * enum ConnnectionEvents
   */
  var ConnnectionEvents = connect.makeNamespacedEnum('connection', [
    'session_init'
  ]);

  /**---------------------------------------------------------------
   * class EventFactory
   */
  var EventFactory = function () { };
  EventFactory.createRequest = function (type, method, params) {
    return {
      event: type,
      requestId: connect.randomId(),
      method: method,
      params: params
    };
  };

  EventFactory.createResponse = function (type, request, data, err) {
    return {
      event: type,
      requestId: request.requestId,
      data: data,
      err: err || null
    };
  };

  /**
   * An object representing an event subscription in an EventBus.
   */
  var Subscription = function (subMap, eventName, f) {
    this.subMap = subMap;
    this.id = connect.randomId();
    this.eventName = eventName;
    this.f = f;
  };

  /**
   * Unsubscribe the handler of this subscription from the EventBus
   * from which it was created.
   */
  Subscription.prototype.unsubscribe = function () {
    this.subMap.unsubscribe(this.eventName, this.id);
  };

  /**
   * A map of event subscriptions, used by the EventBus.
   */
  var SubscriptionMap = function () {
    this.subIdMap = {};
    this.subEventNameMap = {};
  };

  /**
   * Add a subscription for the named event.  Creates a new Subscription
   * object and returns it.  This object can be used to unsubscribe.
   */
  SubscriptionMap.prototype.subscribe = function (eventName, f) {
    var sub = new Subscription(this, eventName, f);

    this.subIdMap[sub.id] = sub;
    var subList = this.subEventNameMap[eventName] || [];
    subList.push(sub);
    this.subEventNameMap[eventName] = subList;
    return sub;
  };

  /**
   * Unsubscribe a subscription matching the given event name and id.
   */
  SubscriptionMap.prototype.unsubscribe = function (eventName, subId) {
    if (connect.contains(this.subEventNameMap, eventName)) {
      this.subEventNameMap[eventName] = this.subEventNameMap[eventName].filter(function (s) { return s.id !== subId; });

      if (this.subEventNameMap[eventName].length < 1) {
        delete this.subEventNameMap[eventName];
      }
    }

    if (connect.contains(this.subIdMap, subId)) {
      delete this.subIdMap[subId];
    }
  };

  /**
   * Get a list of all subscriptions in the subscription map.
   */
  SubscriptionMap.prototype.getAllSubscriptions = function () {
    return connect.values(this.subEventNameMap).reduce(function (a, b) {
      return a.concat(b);
    }, []);
  };

  /**
   * Get a list of subscriptions for the given event name, or an empty
   * list if there are no subscriptions.
   */
  SubscriptionMap.prototype.getSubscriptions = function (eventName) {
    return this.subEventNameMap[eventName] || [];
  };

  /**
   * An object which maintains a map of subscriptions and serves as the
   * mechanism for triggering events to be handled by subscribers.
   */
  var EventBus = function (paramsIn) {
    var params = paramsIn || {};

    this.subMap = new SubscriptionMap();
    this.logEvents = params.logEvents || false;
  };

  /**
   * Subscribe to the named event.  Returns a new Subscription object
   * which can be used to unsubscribe.
   */
  EventBus.prototype.subscribe = function (eventName, f) {
    connect.assertNotNull(eventName, 'eventName');
    connect.assertNotNull(f, 'f');
    connect.assertTrue(connect.isFunction(f), 'f must be a function');
    return this.subMap.subscribe(eventName, f);
  };

  /**
   * Subscribe a function to be called on all events.
   */
  EventBus.prototype.subscribeAll = function (f) {
    connect.assertNotNull(f, 'f');
    connect.assertTrue(connect.isFunction(f), 'f must be a function');
    return this.subMap.subscribe(ALL_EVENTS, f);
  };

  /**
   * Get a list of subscriptions for the given event name, or an empty
   * list if there are no subscriptions.
   */
  EventBus.prototype.getSubscriptions = function (eventName) {
    return this.subMap.getSubscriptions(eventName);
  };

  /**
   * Trigger the given event with the given data.  All methods subscribed
   * to this event will be called and are provided with the given arbitrary
   * data object and the name of the event, in that order.
   */
  EventBus.prototype.trigger = function (eventName, data) {
    connect.assertNotNull(eventName, 'eventName');
    var self = this;
    var allEventSubs = this.subMap.getSubscriptions(ALL_EVENTS);
    var eventSubs = this.subMap.getSubscriptions(eventName);

    if (this.logEvents && (eventName !== connect.EventType.LOG && eventName !== connect.EventType.MASTER_RESPONSE && eventName !== connect.EventType.API_METRIC)) {
      connect.getLog().trace("Publishing event: %s", eventName);
    }

    allEventSubs.concat(eventSubs).forEach(function (sub) {
      try {
        sub.f(data || null, eventName, self);

      } catch (e) {
        connect.getLog().error("'%s' event handler failed.", eventName).withException(e);
      }
    });
  };

  /**
   * Returns a closure which bridges an event from another EventBus to this bus.
   *
   * Usage:
   * conduit.onUpstream("MyEvent", bus.bridge());
   */
  EventBus.prototype.bridge = function () {
    var self = this;
    return function (data, event) {
      self.trigger(event, data);
    };
  };

  /**
   * Unsubscribe all events in the event bus.
   */
  EventBus.prototype.unsubscribeAll = function () {
    this.subMap.getAllSubscriptions().forEach(function (sub) {
      sub.unsubscribe();
    });
  };

  connect.EventBus = EventBus;
  connect.EventFactory = EventFactory;
  connect.EventType = EventType;
  connect.AgentEvents = AgentEvents;
  connect.ConnnectionEvents = ConnnectionEvents;
  connect.ContactEvents = ContactEvents;
  connect.WebSocketEvents = WebSocketEvents;
  connect.MasterTopics = MasterTopics;
})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function() {
   var global = this;
   connect = global.connect || {};
   global.connect = connect;
   global.lily = connect;

   /**---------------------------------------------------------------
    * class Stream
    *
    * Represents an object from which messages can be read and to which
    * messages can be sent.
    */
   var Stream = function() {};

   /**
    * Send a message to the stream.  This method must be implemented by subclasses.
    */
   Stream.prototype.send = function(message) {
      throw new connect.NotImplementedError();
   };

   /**
    * Provide a method to be called when messages are received from this stream.
    * This method must be implemented by subclasses.
    */
   Stream.prototype.onMessage = function(f) {
      throw new connect.NotImplementedError();
   };

   /**---------------------------------------------------------------
    * class NullStream extends Stream
    *
    * A null stream which provides no message sending or receiving facilities.
    */
   var NullStream = function() {
      Stream.call(this);
   };
   NullStream.prototype = Object.create(Stream.prototype);
   NullStream.prototype.constructor = NullStream;

   NullStream.prototype.onMessage = function(f) {};
   NullStream.prototype.send = function(message) {};

   /**---------------------------------------------------------------
    * class WindowStream extends Stream
    *
    * A stream for communicating with a window object.  The domain provided
    * must match the allowed message domains of the downstream receiver
    * or messages will be rejected, see https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
    * for more info.
    */
   var WindowStream = function(win, domain) {
      Stream.call(this);
      this.window = win;
      this.domain = domain || '*';
   };
   WindowStream.prototype = Object.create(Stream.prototype);
   WindowStream.prototype.constructor = WindowStream;

   WindowStream.prototype.send = function(message) {
      this.window.postMessage(message, this.domain);
   };

   WindowStream.prototype.onMessage = function(f) {
      this.window.addEventListener("message", f);
   };

   /**---------------------------------------------------------------
    * class WindowIOStream extends Stream
    *
    * A stream used by IFrame/popup windows to communicate with their parents
    * and vise versa.
    *
    * This object encapsulates the fact that incoming and outgoing messages
    * arrive on different windows and allows this to be managed as a single
    * Stream object.
    */
   var WindowIOStream = function(inputwin, outputwin, domain) {
      Stream.call(this);
      this.input = inputwin;
      this.output = outputwin;
      this.domain = domain || '*';
   };
   WindowIOStream.prototype = Object.create(Stream.prototype);
   WindowIOStream.prototype.constructor = WindowIOStream;

   WindowIOStream.prototype.send = function(message) {
      this.output.postMessage(message, this.domain);
   };

   WindowIOStream.prototype.onMessage = function(f) {
      this.input.addEventListener("message", f);
   };

   /**---------------------------------------------------------------
    * class PortStream extends Stream
    *
    * A stream wrapping an HTML5 Worker port.  This could be the port
    * used to connect to a Worker or one of the multitude of ports
    * made available to a SharedWorker for communication back to
    * its connected clients.
    */
   var PortStream = function(port) {
      Stream.call(this);
      this.port = port;
      this.id = connect.randomId();
   };
   PortStream.prototype = Object.create(Stream.prototype);
   PortStream.prototype.constructor = PortStream;

   PortStream.prototype.send = function(message) {
      this.port.postMessage(message);
   };

   PortStream.prototype.onMessage = function(f) {
      this.port.addEventListener("message", f);
   };

   PortStream.prototype.getId = function() {
      return this.id;
   };

   /**---------------------------------------------------------------
    * class StreamMultiplexer extends Stream
    *
    * A wrapper for multiplexed downstream communication with
    * multiple streams at once.  Mainly useful for the SharedWorker to
    * broadcast events to many PortStream objects at once.
    */
   var StreamMultiplexer = function(streams) {
      Stream.call(this);
      this.streamMap = streams ?
         connect.index(streams, function(s) { return s.getId(); }) : {};
      this.messageListeners = [];
   };
   StreamMultiplexer.prototype = Object.create(Stream.prototype);
   StreamMultiplexer.prototype.constructor = StreamMultiplexer;

   /**
    * Send a message to all ports in the multiplexer.
    */
   StreamMultiplexer.prototype.send = function(message) {
      this.getStreams().forEach(function(stream) {
         try {
            stream.send(message);

         } catch (e) {
            // Couldn't send message to one of the downstreams for some reason...
            // No reliable logging possible without further failures,
            // no recovery, just eat it.
         }
      });
   };

   /**
    * Register a method which will be called when a message is received from
    * any of the downstreams.
    */
   StreamMultiplexer.prototype.onMessage = function(f) {
      this.messageListeners.push(f);

      // Update existing streams with the new listener.
      this.getStreams().forEach(function(stream) {
         stream.onMessage(f);
      });
   };

   /**
    * Add a stream to the multiplexer.
    */
   StreamMultiplexer.prototype.addStream = function(stream) {
      var self = this;
      this.streamMap[stream.getId()] = stream;

      // Update stream with existing listeners.
      this.messageListeners.forEach(function(messageListener) {
         stream.onMessage(messageListener);
      });
   };

   /**
    * Remove the given downstream.  This is typically used in response
    * to the SharedWorker's onclose event, indicating that a consumer
    * tab has been closed.
    */
   StreamMultiplexer.prototype.removeStream = function(stream) {
      delete this.streamMap[stream.getId()];
   };

   /**
    * Get a list of streams in the multiplexer.
    */
   StreamMultiplexer.prototype.getStreams = function(stream) {
      return connect.values(this.streamMap);
   };

   /**
    * Get the stream matching the given port.
    */
   StreamMultiplexer.prototype.getStreamForPort = function(port) {
      return connect.find(this.getStreams(), function(s) {
         return s.port === port;
      });
   };

   /**---------------------------------------------------------------
    * class Conduit
    *
    * An object which bridges an upstream and a downstream, allowing messages
    * to be passed to and from each and providing an event bus for event
    * subscriptions to be made upstream and downstream.
    */
   var Conduit = function(name, upstream, downstream) {
      this.name = name;
      this.upstream = upstream || new NullStream();
      this.downstream = downstream || new NullStream();
      this.downstreamBus = new connect.EventBus();
      this.upstreamBus = new connect.EventBus();

      this.upstream.onMessage(connect.hitch(this, this._dispatchEvent, this.upstreamBus));
      this.downstream.onMessage(connect.hitch(this, this._dispatchEvent, this.downstreamBus));
   };

   Conduit.prototype.onUpstream = function(eventName, f) {
      connect.assertNotNull(eventName, 'eventName');
      connect.assertNotNull(f, 'f');
      connect.assertTrue(connect.isFunction(f), 'f must be a function');
      return this.upstreamBus.subscribe(eventName, f);
   };

   Conduit.prototype.onAllUpstream = function(f) {
      connect.assertNotNull(f, 'f');
      connect.assertTrue(connect.isFunction(f), 'f must be a function');
      return this.upstreamBus.subscribeAll(f);
   };

   Conduit.prototype.onDownstream = function(eventName, f) {
      connect.assertNotNull(eventName, 'eventName');
      connect.assertNotNull(f, 'f');
      connect.assertTrue(connect.isFunction(f), 'f must be a function');
      return this.downstreamBus.subscribe(eventName, f);
   };

   Conduit.prototype.onAllDownstream = function(f) {
      connect.assertNotNull(f, 'f');
      connect.assertTrue(connect.isFunction(f), 'f must be a function');
      return this.downstreamBus.subscribeAll(f);
   };

   Conduit.prototype.sendUpstream = function(eventName, data) {
      connect.assertNotNull(eventName, 'eventName');
      this.upstream.send({event: eventName, data: data});
   };

   Conduit.prototype.sendDownstream = function(eventName, data) {
      connect.assertNotNull(eventName, 'eventName');
      this.downstream.send({event: eventName, data: data});
   };

   Conduit.prototype._dispatchEvent = function(bus, messageEvent) {
      var message = messageEvent.data;
      if (message.event) {
         bus.trigger(message.event, message.data);
      }
   };

   /**
    * Returns a closure which passes events upstream.
    *
    * Usage:
    * conduit.onDownstream("MyEvent", conduit.passUpstream());
    */
   Conduit.prototype.passUpstream = function() {
      var self = this;
      return function(data, eventName) {
         self.upstream.send({event: eventName, data: data});
      };
   };

   /**
    * Returns a closure which passes events downstream.
    *
    * Usage:
    * conduit.onUpstream("MyEvent", conduit.passDownstream());
    */
   Conduit.prototype.passDownstream = function() {
      var self = this;
      return function(data, eventName) {
         self.downstream.send({event: eventName, data: data});
      };
   };

   /**
    * Shutdown the conduit's event busses and remove all subscriptions.
    */
   Conduit.prototype.shutdown = function() {
      this.upstreamBus.unsubscribeAll();
      this.downstreamBus.unsubscribeAll();
   };

   /**---------------------------------------------------------------
    * class IFrameConduit extends Conduit
    *
    * Creates a conduit for the given IFrame element.
    */
   var IFrameConduit = function(name, window, iframe, domain) {
      Conduit.call(this, name, new WindowIOStream(window, iframe.contentWindow, domain || '*'), null);
   };
   IFrameConduit.prototype = Object.create(Conduit.prototype);
   IFrameConduit.prototype.constructor = IFrameConduit;

   connect.Stream = Stream;
   connect.NullStream = NullStream;
   connect.WindowStream = WindowStream;
   connect.WindowIOStream = WindowIOStream;
   connect.PortStream = PortStream;
   connect.StreamMultiplexer = StreamMultiplexer;
   connect.Conduit = Conduit;
   connect.IFrameConduit = IFrameConduit;
})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function() {
   var global = this;
   connect = global.connect || {};
   global.connect = connect;
   global.lily = connect;

   /**---------------------------------------------------------------
    * enum ClientMethods
    */
   connect.ClientMethods = connect.makeEnum([
         'getAgentSnapshot',
         'putAgentState',
         'getAgentStates',
         'getDialableCountryCodes',
         'getRoutingProfileQueues',
         'getAgentPermissions',
         'getAgentConfiguration',
         'updateAgentConfiguration',
         'acceptContact',
         'createOutboundContact',
         'destroyContact',
         'notifyContactIssue',
         'updateContactAttributes',
         'createAdditionalConnection',
         'destroyConnection',
         'holdConnection',
         'resumeConnection',
         'toggleActiveConnections',
         'conferenceConnections',
         'sendClientLogs',
         'sendDigits',
         'sendSoftphoneCallReport',
         'sendSoftphoneCallMetrics',
         'getEndpoints',
         'getNewAuthToken',
         'createTransport'
   ]);

   /**---------------------------------------------------------------
    * enum MasterMethods
    */
   connect.MasterMethods = connect.makeEnum([
         'becomeMaster',
         'checkMaster'
   ]);

   /**---------------------------------------------------------------
    * abstract class ClientBase
    */
   var ClientBase = function() {};
   ClientBase.EMPTY_CALLBACKS = {
      success: function() { },
      failure: function() { }
   };

   ClientBase.prototype.call = function(method, paramsIn, callbacksIn) {
      connect.assertNotNull(method, 'method');
      var params = paramsIn || {};
      var callbacks = callbacksIn || ClientBase.EMPTY_CALLBACKS;
      this._callImpl(method, params, callbacks);
   };

   ClientBase.prototype._callImpl = function(method, params, callbacks) {
      throw new connect.NotImplementedError();
   };

   /**---------------------------------------------------------------
    * class NullClient extends ClientBase
    */
   var NullClient = function() {
      ClientBase.call(this);
   };
   NullClient.prototype = Object.create(ClientBase.prototype);
   NullClient.prototype.constructor = NullClient;

   NullClient.prototype._callImpl = function(method, params, callbacks) {
      if (callbacks && callbacks.failure) {
         var message = connect.sprintf('No such method exists on NULL client: %s', method);
         callbacks.failure(new connect.ValueError(message), {message: message});
      }
   };

   /**---------------------------------------------------------------
    * abstract class UpstreamConduitClientBase extends ClientBase
    */
   var UpstreamConduitClientBase = function(conduit, requestEvent, responseEvent) {
      ClientBase.call(this);
      this.conduit = conduit;
      this.requestEvent = requestEvent;
      this.responseEvent = responseEvent;
      this._requestIdCallbacksMap = {};

      this.conduit.onUpstream(responseEvent, connect.hitch(this, this._handleResponse));
   };

   UpstreamConduitClientBase.prototype = Object.create(ClientBase.prototype);
   UpstreamConduitClientBase.prototype.constructor = UpstreamConduitClientBase;

   UpstreamConduitClientBase.prototype._callImpl = function(method, params, callbacks) {
      var request = connect.EventFactory.createRequest(this.requestEvent, method, params);
      this._requestIdCallbacksMap[request.requestId] = callbacks;
      this.conduit.sendUpstream(request.event, request);
   };

   UpstreamConduitClientBase.prototype._getCallbacksForRequest = function(requestId) {
      var callbacks = this._requestIdCallbacksMap[requestId] || null;

      if (callbacks != null) {
         delete this._requestIdCallbacksMap[requestId];
      }

      return callbacks;
   };

   UpstreamConduitClientBase.prototype._handleResponse = function(data) {
      var callbacks = this._getCallbacksForRequest(data.requestId);
      if (callbacks == null) {
         return;
      }

      if (data.err && callbacks.failure) {
         callbacks.failure(data.err, data.data);

      } else if (callbacks.success) {
         callbacks.success(data.data);
      }
   };

   /**---------------------------------------------------------------
    * class UpstreamConduitClient extends ClientBase
    */
   var UpstreamConduitClient = function(conduit) {
      UpstreamConduitClientBase.call(this, conduit, connect.EventType.API_REQUEST, connect.EventType.API_RESPONSE);
   };
   UpstreamConduitClient.prototype = Object.create(UpstreamConduitClientBase.prototype);
   UpstreamConduitClient.prototype.constructor = UpstreamConduitClient;

   /**---------------------------------------------------------------
    * class UpstreamConduitMasterClient extends ClientBase
    */
   var UpstreamConduitMasterClient = function(conduit) {
      UpstreamConduitClientBase.call(this, conduit, connect.EventType.MASTER_REQUEST, connect.EventType.MASTER_RESPONSE);
   };
   UpstreamConduitMasterClient.prototype = Object.create(UpstreamConduitClientBase.prototype);
   UpstreamConduitMasterClient.prototype.constructor = UpstreamConduitMasterClient;

   /**---------------------------------------------------------------
    * class AWSClient extends ClientBase
    */
   var AWSClient = function(authToken, region, endpointIn) {
      connect.assertNotNull(authToken, 'authToken');
      connect.assertNotNull(region, 'region');
      ClientBase.call(this);
      AWS.config.credentials = new AWS.Credentials({});
      AWS.config.region = region;
      this.authToken = authToken;
      var endpointUrl = endpointIn || connect.getBaseUrl() + '/connect/api';
      var endpoint = new AWS.Endpoint(endpointUrl);
      this.client = new AWS.Connect({endpoint: endpoint});
   };
   AWSClient.prototype = Object.create(ClientBase.prototype);
   AWSClient.prototype.constructor = AWSClient;

   AWSClient.prototype._callImpl = function(method, params, callbacks) {
      var self = this;
      var log = connect.getLog();

      params.authentication = {
         authToken: this.authToken
      };

      if (! connect.contains(this.client, method)) {
         var message = connect.sprintf('No such method exists on AWS client: %s', method);
         callbacks.failure(new connect.ValueError(message), {message: message});

      } else {
         params = this._translateParams(method, params);

         log.trace("AWSClient: --> Calling operation '%s'", method);

         this.client[method](params)
            .on('build', function(request) {
               request.httpRequest.headers['X-Amz-Bearer'] = self.authToken;
            })
            .send(function(err, data) {
               try {
                  if (err) {
                     if (err.code === connect.CTIExceptions.UNAUTHORIZED_EXCEPTION) {
                        callbacks.authFailure();
                     } else if (callbacks.accessDenied && (err.code === connect.CTIExceptions.ACCESS_DENIED_EXCEPTION || err.statusCode === 403)) {
                        callbacks.accessDenied();
                     } else{
                        // Can't pass err directly to postMessage
                        // postMessage() tries to clone the err object and failed.
                        // Refer to https://github.com/goatslacker/alt-devtool/issues/5
                        var error = {};
                        error.type = err.code;
                        error.message = err.message;
                        error.stack = err.stack ? err.stack.split('\n') : [];
                        callbacks.failure(error, data);
                     }

                     log.trace("AWSClient: <-- Operation '%s' failed: %s", method, JSON.stringify(err));

                  } else {
                     log.trace("AWSClient: <-- Operation '%s' succeeded.", method).withObject(data);
                     callbacks.success(data);
                  }
               } catch (e) {
                  connect.getLog().error("Failed to handle AWS API request for method %s", method)
                        .withException(e);
               }
            });
      }
   };

   AWSClient.prototype._translateParams = function(method, params) {
      switch (method) {
         case connect.ClientMethods.UPDATE_AGENT_CONFIGURATION:
            params.configuration = this._translateAgentConfiguration(params.configuration);
            break;

         case connect.ClientMethods.SEND_SOFTPHONE_CALL_METRICS:
            params.softphoneStreamStatistics = this._translateSoftphoneStreamStatistics(
                  params.softphoneStreamStatistics);
            break;

         case connect.ClientMethods.SEND_SOFTPHONE_CALL_REPORT:
            params.report = this._translateSoftphoneCallReport(params.report);
            break;

         default:
            break;
      }

      return params;
   };

   AWSClient.prototype._translateAgentConfiguration = function(config) {
      return {
         name: config.name,
         softphoneEnabled: config.softphoneEnabled,
         softphoneAutoAccept: config.softphoneAutoAccept,
         extension: config.extension,
         routingProfile: this._translateRoutingProfile(config.routingProfile),
         agentPreferences: config.agentPreferences
      };
   };

   AWSClient.prototype._translateRoutingProfile = function(profile) {
      return {
         name: profile.name,
         routingProfileARN: profile.routingProfileARN,
         defaultOutboundQueue: this._translateQueue(profile.defaultOutboundQueue)
      };
   };

   AWSClient.prototype._translateQueue = function(queue) {
      return {
         queueARN:   queue.queueARN,
         name:       queue.name
      };
   };

   AWSClient.prototype._translateSoftphoneStreamStatistics = function(stats) {
      stats.forEach(function(stat) {
         if ('packetsCount' in stat) {
            stat.packetCount = stat.packetsCount;
            delete stat.packetsCount;
         }
      });

      return stats;
   };

   AWSClient.prototype._translateSoftphoneCallReport = function(report) {
      if ('handshakingTimeMillis' in report) {
         report.handshakeTimeMillis = report.handshakingTimeMillis;
         delete report.handshakingTimeMillis;
      }

      if ('preTalkingTimeMillis' in report) {
         report.preTalkTimeMillis = report.preTalkingTimeMillis;
         delete report.preTalkingTimeMillis;
      }

      if ('handshakingFailure' in report) {
         report.handshakeFailure = report.handshakingFailure;
         delete report.handshakingFailure;
      }

      if ('talkingTimeMillis' in report) {
         report.talkTimeMillis = report.talkingTimeMillis;
         delete report.talkingTimeMillis;
      }

      report.softphoneStreamStatistics = this._translateSoftphoneStreamStatistics(
            report.softphoneStreamStatistics);

      return report;
   };

   connect.ClientBase = ClientBase;
   connect.NullClient = NullClient;
   connect.UpstreamConduitClient = UpstreamConduitClient;
   connect.UpstreamConduitMasterClient = UpstreamConduitMasterClient;
   connect.AWSClient = AWSClient;

})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function() {
   var global = this;
   connect = global.connect || {};
   global.connect = connect;
   global.lily = connect;

   /**-------------------------------------------------------------------------
    * GraphLink <<abstract class>>
    *
    * Represents the association of one or more attributes to a state transition.
    */
   var GraphLink = function(fromState, toState) {
      connect.assertNotNull(fromState, 'fromState');
      connect.assertNotNull(toState, 'toState');
      this.fromState = fromState;
      this.toState = toState;
   };

   GraphLink.prototype.getAssociations = function(context) {
      throw connect.NotImplementedError();
   };

   GraphLink.prototype.getFromState = function() {
      return this.fromState;
   };

   GraphLink.prototype.getToState = function() {
      return this.toState;
   };

   /**-------------------------------------------------------------------------
    * DirectGraphLink <<concrete class>> extends GraphLink
    *
    * Represents the by-value representation of one or more attributes to a
    * state transition.
    */
   var DirectGraphLink = function(fromState, toState, associations) {
      connect.assertNotNull(fromState, 'fromState');
      connect.assertNotNull(toState, 'toState');
      connect.assertNotNull(associations, 'associations');
      GraphLink.call(this, fromState, toState);
      this.associations = associations;
   };
   DirectGraphLink.prototype = Object.create(GraphLink.prototype);
   DirectGraphLink.prototype.constructor = DirectGraphLink;

   DirectGraphLink.prototype.getAssociations = function(context) {
      return this.associations;
   };

   /**
    * FunctionalGraphLink <<concrete class>> extends GraphLink
    *
    * Represents a functional association of one or more attributes to a
    * state transition.
    */
   var FunctionalGraphLink = function(fromState, toState, closure) {
      connect.assertNotNull(fromState, 'fromState');
      connect.assertNotNull(toState, 'toState');
      connect.assertNotNull(closure, 'closure');
      connect.assertTrue(connect.isFunction(closure), 'closure must be a function');
      GraphLink.call(this, fromState, toState);
      this.closure = closure;
   };
   FunctionalGraphLink.prototype = Object.create(GraphLink.prototype);
   FunctionalGraphLink.prototype.constructor = FunctionalGraphLink;

   FunctionalGraphLink.prototype.getAssociations = function(context) {
      return this.closure(context, this.getFromState(), this.getToState());
   };

   /**-------------------------------------------------------------------------
    * EventGraph <<class>>
    *
    * Builds a map of associations from one state to another in context of a
    * particular object.  The associations can be direct (one or more values)
    * or functional (a method returning one or more values), and are used to
    * provide additional contextual event hooks for the UI to consume.
    */
   var EventGraph = function() {
      this.fromMap = {};
   };
   EventGraph.ANY = "<<any>>";

   EventGraph.prototype.assoc = function(fromStateObj, toStateObj, assocObj) {
      var self = this;

      if (! fromStateObj) {
         throw new Error("fromStateObj is not defined.");
      }

      if (! toStateObj) {
         throw new Error("toStateObj is not defined.");
      }

      if (! assocObj) {
         throw new Error("assocObj is not defined.");
      }

      if (fromStateObj instanceof Array) {
         fromStateObj.forEach(function(fromState) {
            self.assoc(fromState, toStateObj, assocObj);
         });
      } else if (toStateObj instanceof Array) {
         toStateObj.forEach(function(toState) {
            self.assoc(fromStateObj, toState, assocObj);
         });
      } else {
         if (typeof assocObj === "function") {
            this._addAssociation(new FunctionalGraphLink(fromStateObj, toStateObj, assocObj));
         } else if (assocObj instanceof Array) {
            this._addAssociation(new DirectGraphLink(fromStateObj, toStateObj, assocObj));
         } else {
            this._addAssociation(new DirectGraphLink(fromStateObj, toStateObj, [assocObj]));
         }
      }
      return this;
   };

   EventGraph.prototype.getAssociations = function(context, fromState, toState) {
      connect.assertNotNull(fromState, 'fromState');
      connect.assertNotNull(toState, 'toState');
      var associations = [];

      var toMapFromAny = this.fromMap[EventGraph.ANY] || {};
      var toMap = this.fromMap[fromState] || {};

      associations = associations.concat(this._getAssociationsFromMap(
               toMapFromAny, context, fromState, toState));
      associations = associations.concat(this._getAssociationsFromMap(
               toMap, context, fromState, toState));

      return associations;
   };

   EventGraph.prototype._addAssociation = function(assoc) {
      var toMap = this.fromMap[assoc.getFromState()];

      if (! toMap) {
         toMap = this.fromMap[assoc.getFromState()] = {};
      }

      var assocList = toMap[assoc.getToState()];

      if (! assocList) {
         assocList = toMap[assoc.getToState()] = [];
      }

      assocList.push(assoc);
   };

   EventGraph.prototype._getAssociationsFromMap = function(map, context, fromState, toState) {
      var assocList = (map[EventGraph.ANY] || []).concat(map[toState] || []);
      return assocList.reduce(function(prev, assoc) {
         return prev.concat(assoc.getAssociations(context));
      }, []);
   };

   connect.EventGraph = EventGraph;

})();

/*
* Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
*
* Licensed under the Amazon Software License (the "License"). You may not use
* this file except in compliance with the License. A copy of the License is
* located at
*
*    http://aws.amazon.com/asl/
*
* or in the "license" file accompanying this file. This file is distributed
* on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
* or implied. See the License for the specific language governing permissions
* and limitations under the License.
*/
(function () {
  var global = this;
  connect = global.connect || {};
  global.connect = connect;
  global.lily = connect;

  /*----------------------------------------------------------------
  * enum AgentStateType
  */
  connect.AgentStateType = connect.makeEnum([
    'init',
    'routable',
    'not_routable',
    'offline'
  ]);
  connect.AgentStatusType = connect.AgentStateType;

  /**
   * enum AgentAvailStates
   */
  connect.AgentAvailStates = connect.makeEnum([
    'Init',
    'Busy',
    'AfterCallWork',
    'CallingCustomer',
    'Dialing',
    'Joining',
    'PendingAvailable',
    'PendingBusy'
  ]);

  /**
   * enum AgentErrorStates
   */
  connect.AgentErrorStates = connect.makeEnum([
    'Error',
    'AgentHungUp',
    'BadAddressAgent',
    'BadAddressCustomer',
    'Default',
    'FailedConnectAgent',
    'FailedConnectCustomer',
    'LineEngagedAgent',
    'LineEngagedCustomer',
    'MissedCallAgent',
    'MissedCallCustomer',
    'MultipleCcpWindows',
    'RealtimeCommunicationError'
  ]);

  /*----------------------------------------------------------------
  * enum AddressType
  */
  connect.EndpointType = connect.makeEnum([
    'phone_number',
    'agent',
    'queue'
  ]);
  connect.AddressType = connect.EndpointType;

  /*----------------------------------------------------------------
  * enum ConnectionType
  */
  connect.ConnectionType = connect.makeEnum([
    'agent',
    'inbound',
    'outbound',
    'monitoring'
  ]);

  /*----------------------------------------------------------------
  * enum ConnectionStateType
  */
  connect.ConnectionStateType = connect.makeEnum([
    'init',
    'connecting',
    'connected',
    'hold',
    'disconnected'
  ]);
  connect.ConnectionStatusType = connect.ConnectionStateType;

  connect.CONNECTION_ACTIVE_STATES = connect.set([
    connect.ConnectionStateType.CONNECTING,
    connect.ConnectionStateType.CONNECTED,
    connect.ConnectionStateType.HOLD
  ]);

  /*----------------------------------------------------------------
  * enum ContactStateType
  */
  connect.ContactStateType = connect.makeEnum([
    'init',
    'incoming',
    'pending',
    'connecting',
    'connected',
    'missed',
    'error',
    'ended'
  ]);
  connect.ContactStatusType = connect.ContactStateType;

  connect.CONTACT_ACTIVE_STATES = connect.makeEnum([
    'incoming',
    'connecting',
    'connected'
  ]);

  /*----------------------------------------------------------------
  * enum ContactType
  */
  connect.ContactType = connect.makeEnum([
    'voice',
    'queue_callback',
    'chat'
  ]);

  /*----------------------------------------------------------------
  * enum ChannelType
  */
  connect.ChannelType = connect.makeEnum([
    'VOICE',
    'CHAT'
  ]);

  /*----------------------------------------------------------------
  * enum MediaType
  */
  connect.MediaType = connect.makeEnum([
    'softphone',
    'chat'
  ]);

  /*----------------------------------------------------------------
  * enum SoftphoneCallType
  */
  connect.SoftphoneCallType = connect.makeEnum([
    'audio_video',
    'video_only',
    'audio_only',
    'none'
  ]);

  /*----------------------------------------------------------------
  * enum for SoftphoneErrorTypes
  */
  connect.SoftphoneErrorTypes = connect.makeEnum([
    'unsupported_browser',
    'microphone_not_shared',
    'signalling_handshake_failure',
    'signalling_connection_failure',
    'ice_collection_timeout',
    'user_busy_error',
    'webrtc_error',
    'realtime_communication_error',
    'other'
  ]);

  /*----------------------------------------------------------------
  * enum for CTI exceptions
  */
  connect.CTIExceptions = connect.makeEnum([
    "AccessDeniedException",
    "InvalidStateException",
    "BadEndpointException",
    "InvalidAgentARNException",
    "InvalidConfigurationException",
    "InvalidContactTypeException",
    "PaginationException",
    "RefreshTokenExpiredException",
    "SendDataFailedException",
    "UnauthorizedException"
  ]);
  /*----------------------------------------------------------------
  * class Agent
  */
  var Agent = function () {
    if (!connect.agent.initialized) {
      throw new connect.StateError("The agent is not yet initialized!");
    }
  };

  Agent.prototype._getData = function () {
    return connect.core.getAgentDataProvider().getAgentData();
  };

  Agent.prototype._createContactAPI = function (contactData) {
    return new connect.Contact(contactData.contactId);
  };

  Agent.prototype.onContactPending = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(connect.AgentEvents.CONTACT_PENDING, f);
  };

  Agent.prototype.onRefresh = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(connect.AgentEvents.REFRESH, f);
  };

  Agent.prototype.onRoutable = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(connect.AgentEvents.ROUTABLE, f);
  };

  Agent.prototype.onNotRoutable = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(connect.AgentEvents.NOT_ROUTABLE, f);
  };

  Agent.prototype.onOffline = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(connect.AgentEvents.OFFLINE, f);
  };

  Agent.prototype.onError = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(connect.AgentEvents.ERROR, f);
  };

  Agent.prototype.onSoftphoneError = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(connect.AgentEvents.SOFTPHONE_ERROR, f);
  };

  Agent.prototype.onAfterCallWork = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(connect.AgentEvents.ACW, f);
  };

  Agent.prototype.onStateChange = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(connect.AgentEvents.STATE_CHANGE, f);
  };

  Agent.prototype.onMuteToggle = function (f) {
    connect.core.getUpstream().onUpstream(connect.AgentEvents.MUTE_TOGGLE, f);
  };

  Agent.prototype.mute = function () {
    connect.core.getUpstream().sendUpstream(connect.EventType.BROADCAST,
      {
        event: connect.EventType.MUTE,
        data: { mute: true }
      });
  };

  Agent.prototype.unmute = function () {
    connect.core.getUpstream().sendUpstream(connect.EventType.BROADCAST,
      {
        event: connect.EventType.MUTE,
        data: { mute: false }
      });
  };

  Agent.prototype.getState = function () {
    return this._getData().snapshot.state;
  };

  Agent.prototype.getStatus = Agent.prototype.getState;

  Agent.prototype.getStateDuration = function () {
    return connect.now() - this._getData().snapshot.state.startTimestamp.getTime() + connect.core.getSkew();
  };

  Agent.prototype.getStatusDuration = Agent.prototype.getStateDuration;

  Agent.prototype.getPermissions = function () {
    return this.getConfiguration().permissions;
  };

  Agent.prototype.getContacts = function (contactTypeFilter) {
    var self = this;
    return this._getData().snapshot.contacts.map(function (contactData) {
      return self._createContactAPI(contactData);
    }).filter(function (contact) {
      return (!contactTypeFilter) || contact.getType() === contactTypeFilter;
    });
  };

  Agent.prototype.getConfiguration = function () {
    return this._getData().configuration;
  };

  Agent.prototype.getAgentStates = function () {
    return this.getConfiguration().agentStates;
  };

  Agent.prototype.getRoutingProfile = function () {
    return this.getConfiguration().routingProfile;
  };

  Agent.prototype.getChannelConcurrency = function (channel) {
    var channelConcurrencyMap = this.getRoutingProfile().channelConcurrencyMap;
    return channel
      ? (channelConcurrencyMap[channel] || 0)
      : channelConcurrencyMap;
  };

  Agent.prototype.getName = function () {
    return this.getConfiguration().name;
  };

  Agent.prototype.getExtension = function () {
    return this.getConfiguration().extension;
  };

  Agent.prototype.getDialableCountries = function () {
    return this.getConfiguration().dialableCountries;
  };

  Agent.prototype.isSoftphoneEnabled = function () {
    return this.getConfiguration().softphoneEnabled;
  };

  Agent.prototype.setConfiguration = function (configuration, callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.UPDATE_AGENT_CONFIGURATION, {
      configuration: connect.assertNotNull(configuration, 'configuration')
    }, {
        success: function (data) {
          // We need to ask the shared worker to reload agent config
          // once we change it so every tab has accurate config.
          var conduit = connect.core.getUpstream();
          conduit.sendUpstream(connect.EventType.RELOAD_AGENT_CONFIGURATION);

          if (callbacks.success) {
            callbacks.success(data);
          }
        },
        failure: callbacks.failure
      });
  };

  Agent.prototype.setState = function (state, callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.PUT_AGENT_STATE, {
      state: connect.assertNotNull(state, 'state')
    }, callbacks);
  };

  Agent.prototype.setStatus = Agent.prototype.setState;

  Agent.prototype.connect = function (endpointIn, params) {
    var client = connect.core.getClient();
    var endpoint = new connect.Endpoint(endpointIn);
    // Have to remove the endpointId field or AWS JS SDK gets mad.
    delete endpoint.endpointId;

    client.call(connect.ClientMethods.CREATE_OUTBOUND_CONTACT, {
      endpoint: connect.assertNotNull(endpoint, 'endpoint'),
      queueARN: params.queueARN || params.queueId || this.getRoutingProfile().defaultOutboundQueue.queueARN
    }, {
        success: params.success,
        failure: params.failure
      });
  };

  Agent.prototype.getAllQueueARNs = function () {
    return this.getConfiguration().routingProfile.queues.map(function (queue) {
      return queue.queueARN;
    });
  };

  Agent.prototype.getEndpoints = function (queueARNs, callbacks, pageInfoIn) {
    var self = this;
    var client = connect.core.getClient();
    var pageInfo = pageInfoIn || { endpoints: [] };

    pageInfo.maxResults = pageInfo.maxResults || connect.DEFAULT_BATCH_SIZE;

    // Backwards compatibility allowing a single queueARN to be specified
    // instead of an array.
    if (!connect.isArray(queueARNs)) {
      queueARNs = [queueARNs];
    }

    client.call(connect.ClientMethods.GET_ENDPOINTS, {
      queueARNs: queueARNs,
      nextToken: pageInfo.nextToken || null,
      maxResults: pageInfo.maxResults
    }, {
        success: function (data) {
          if (data.nextToken) {
            self.getEndpoints(queueARNs, callbacks, {
              nextToken: data.nextToken,
              maxResults: pageInfo.maxResults,
              endpoints: pageInfo.endpoints.concat(data.endpoints)
            });
          } else {
            pageInfo.endpoints = pageInfo.endpoints.concat(data.endpoints);
            var endpoints = pageInfo.endpoints.map(function (endpoint) {
              return new connect.Endpoint(endpoint);
            });

            callbacks.success({
              endpoints: endpoints,
              addresses: endpoints
            });
          }
        },
        failure: callbacks.failure
      });
  };

  Agent.prototype.getAddresses = Agent.prototype.getEndpoints;

  Agent.prototype.toSnapshot = function () {
    return new connect.AgentSnapshot(this._getData());
  };

  /*----------------------------------------------------------------
  * class AgentSnapshot
  */
  var AgentSnapshot = function (agentData) {
    connect.Agent.call(this);
    this.agentData = agentData;
  };
  AgentSnapshot.prototype = Object.create(Agent.prototype);
  AgentSnapshot.prototype.constructor = AgentSnapshot;

  AgentSnapshot.prototype._getData = function () {
    return this.agentData;
  };

  AgentSnapshot.prototype._createContactAPI = function (contactData) {
    return new connect.ContactSnapshot(contactData);
  };

  /*----------------------------------------------------------------
  * class Contact
  */
  var Contact = function (contactId) {
    this.contactId = contactId;
  };

  Contact.prototype._getData = function () {
    return connect.core.getAgentDataProvider().getContactData(this.getContactId());
  };

  Contact.prototype._createConnectionAPI = function (connectionData) {
    if (this.getType() === connect.ContactType.CHAT) {
      return new connect.ChatConnection(this.contactId, connectionData.connectionId);
    } else {
      return new connect.VoiceConnection(this.contactId, connectionData.connectionId);
    }
  };

  Contact.prototype.getEventName = function (eventName) {
    return connect.core.getContactEventName(eventName, this.getContactId());
  };

  Contact.prototype.onRefresh = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.REFRESH), f);
  };

  Contact.prototype.onIncoming = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.INCOMING), f);
  };

  Contact.prototype.onConnecting = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.CONNECTING), f);
  };

  Contact.prototype.onPending = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.PENDING), f);
  };

  Contact.prototype.onAccepted = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.ACCEPTED), f);
  };

  Contact.prototype.onMissed = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.MISSED), f);
  };

  Contact.prototype.onEnded = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.ENDED), f);
    bus.subscribe(this.getEventName(connect.ContactEvents.DESTROYED), f);
  };

  Contact.prototype.onDestroy = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.DESTROYED), f);
  };

  Contact.prototype.onACW = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.ACW), f);
  };

  Contact.prototype.onConnected = function (f) {
    var bus = connect.core.getEventBus();
    bus.subscribe(this.getEventName(connect.ContactEvents.CONNECTED), f);
  };

  Contact.prototype.getContactId = function () {
    return this.contactId;
  };

  Contact.prototype.getOriginalContactId = function () {
    return this._getData().initialContactId;
  };

  Contact.prototype.getType = function () {
    return this._getData().type;
  };

  Contact.prototype.getStatus = function () {
    return this._getData().state;
  };

  Contact.prototype.getStatusDuration = function () {
    return connect.now() - this._getData().state.timestamp.getTime() + connect.core.getSkew();
  };

  Contact.prototype.getQueue = function () {
    return this._getData().queue;
  };

  Contact.prototype.getQueueTimestamp = function () {
    return this._getData().queueTimestamp;
  };

  Contact.prototype.getConnections = function () {
    var self = this;
    return this._getData().connections.map(function (connData) {
      if (self.getType() === connect.ContactType.CHAT) {
        return new connect.ChatConnection(self.contactId, connData.connectionId);
      } else {
        return new connect.VoiceConnection(self.contactId, connData.connectionId);
      }
    });
  };

  Contact.prototype.getInitialConnection = function () {
    return connect.find(this.getConnections(), function (conn) {
      return conn.isInitialConnection();
    }) || null;
  };

  Contact.prototype.getActiveInitialConnection = function () {
    var initialConn = this.getInitialConnection();
    if (initialConn != null && initialConn.isActive()) {
      return initialConn;
    } else {
      return null;
    }
  };

  Contact.prototype.getThirdPartyConnections = function () {
    return this.getConnections().filter(function (conn) {
      return !conn.isInitialConnection() && conn.getType() !== connect.ConnectionType.AGENT;
    });
  };

  Contact.prototype.getSingleActiveThirdPartyConnection = function () {
    return this.getThirdPartyConnections().filter(function (conn) {
      return conn.isActive();
    })[0] || null;
  };

  Contact.prototype.getAgentConnection = function () {
    return connect.find(this.getConnections(), function (conn) {
      var connType = conn.getType();
      return connType === connect.ConnectionType.AGENT || connType === connect.ConnectionType.MONITORING;
    });
  };

  Contact.prototype.getAttributes = function () {
    return this._getData().attributes;
  };

  Contact.prototype.isSoftphoneCall = function () {
    return connect.find(this.getConnections(), function (conn) {
      return conn.getSoftphoneMediaInfo() != null;
    }) != null;
  };

  Contact.prototype.isInbound = function () {
    var conn = this.getInitialConnection();
    return conn ? conn.getType() === connect.ConnectionType.INBOUND : false;
  };

  Contact.prototype.isConnected = function () {
    return this.getStatus().type === connect.ContactStateType.CONNECTED;
  };

  Contact.prototype.accept = function (callbacks) {
    var client = connect.core.getClient();
    var self = this;
    client.call(connect.ClientMethods.ACCEPT_CONTACT, {
      contactId: this.getContactId()
    }, {
        success: function (data) {
          var conduit = connect.core.getUpstream();
          conduit.sendUpstream(connect.EventType.BROADCAST, {
            event: connect.ContactEvents.ACCEPTED
          });
          conduit.sendUpstream(connect.EventType.BROADCAST, {
            event: connect.core.getContactEventName(connect.ContactEvents.ACCEPTED,
              self.getContactId())
          });

          if (callbacks && callbacks.success) {
            callbacks.success(data);
          }
        },
        failure: callbacks ? callbacks.failure : null
      });
  };

  Contact.prototype.destroy = function (callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.DESTROY_CONTACT, {
      contactId: this.getContactId()
    }, callbacks);
  };

  Contact.prototype.notifyIssue = function (issueCode, description, callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.NOTIFY_CONTACT_ISSUE, {
      contactId: this.getContactId(),
      issueCode: issueCode,
      description: description
    }, callbacks);
  };

  Contact.prototype.addConnection = function (endpointIn, callbacks) {
    var client = connect.core.getClient();
    var endpoint = new connect.Endpoint(endpointIn);
    // Have to remove the endpointId field or AWS JS SDK gets mad.
    delete endpoint.endpointId;

    client.call(connect.ClientMethods.CREATE_ADDITIONAL_CONNECTION, {
      contactId: this.getContactId(),
      endpoint: endpoint
    }, callbacks);
  };

  Contact.prototype.toggleActiveConnections = function (callbacks) {
    var client = connect.core.getClient();
    var connectionId = null;
    var holdingConn = connect.find(this.getConnections(), function (conn) {
      return conn.getStatus().type === connect.ConnectionStateType.HOLD;
    });

    if (holdingConn != null) {
      connectionId = holdingConn.getConnectionId();

    } else {
      var activeConns = this.getConnections().filter(function (conn) {
        return conn.isActive();
      });
      if (activeConns.length > 0) {
        connectionId = activeConns[0].getConnectionId();
      }
    }

    client.call(connect.ClientMethods.TOGGLE_ACTIVE_CONNECTIONS, {
      contactId: this.getContactId(),
      connectionId: connectionId
    }, callbacks);
  };

  Contact.prototype.sendSoftphoneMetrics = function (softphoneStreamStatistics, callbacks) {
    var client = connect.core.getClient();

    client.call(connect.ClientMethods.SEND_SOFTPHONE_CALL_METRICS, {
      contactId: this.getContactId(),
      softphoneStreamStatistics: softphoneStreamStatistics
    }, callbacks);
  };

  Contact.prototype.sendSoftphoneReport = function (report, callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.SEND_SOFTPHONE_CALL_REPORT, {
      contactId: this.getContactId(),
      report: report
    }, callbacks);
  };

  Contact.prototype.conferenceConnections = function (callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.CONFERENCE_CONNECTIONS, {
      contactId: this.getContactId()
    }, callbacks);
  };

  Contact.prototype.toSnapshot = function () {
    return new connect.ContactSnapshot(this._getData());
  };

  /*----------------------------------------------------------------
  * class ContactSnapshot
  */
  var ContactSnapshot = function (contactData) {
    connect.Contact.call(this, contactData.contactId);
    this.contactData = contactData;
  };
  ContactSnapshot.prototype = Object.create(Contact.prototype);
  ContactSnapshot.prototype.constructor = ContactSnapshot;

  ContactSnapshot.prototype._getData = function () {
    return this.contactData;
  };

  ContactSnapshot.prototype._createConnectionAPI = function (connectionData) {
    return new connect.ConnectionSnapshot(connectionData);
  };

  /*----------------------------------------------------------------
  * class Connection
  */
  var Connection = function (contactId, connectionId) {
    this.contactId = contactId;
    this.connectionId = connectionId;
    this._initMediaController();
  };

  Connection.prototype._getData = function () {
    return connect.core.getAgentDataProvider().getConnectionData(
      this.getContactId(), this.getConnectionId());
  };

  Connection.prototype.getContactId = function () {
    return this.contactId;
  };

  Connection.prototype.getConnectionId = function () {
    return this.connectionId;
  };

  Connection.prototype.getEndpoint = function () {
    return new connect.Endpoint(this._getData().endpoint);
  };

  Connection.prototype.getAddress = Connection.prototype.getEndpoint;

  Connection.prototype.getStatus = function () {
    return this._getData().state;
  };

  Connection.prototype.getStatusDuration = function () {
    return connect.now() - this._getData().state.timestamp.getTime() + connect.core.getSkew();
  };

  Connection.prototype.getType = function () {
    return this._getData().type;
  };

  Connection.prototype.isInitialConnection = function () {
    return this._getData().initial;
  };

  Connection.prototype.isActive = function () {
    return connect.contains(connect.CONNECTION_ACTIVE_STATES, this.getStatus().type);
  };

  Connection.prototype.isConnected = function () {
    return this.getStatus().type === connect.ConnectionStateType.CONNECTED;
  };

  Connection.prototype.isConnecting = function () {
    return this.getStatus().type === connect.ConnectionStateType.CONNECTING;
  };

  Connection.prototype.isOnHold = function () {
    return this.getStatus().type === connect.ConnectionStateType.HOLD;
  };

  Connection.prototype.getSoftphoneMediaInfo = function () {
    return this._getData().softphoneMediaInfo;
  };

  /**
   * Gets the currently monitored contact info, Returns null if does not exists.
   * @return {{agentName:string, customerName:string, joinTime:Date}}
   */
  Connection.prototype.getMonitorInfo = function () {
    return this._getData().monitoringInfo;
  };


  Connection.prototype.destroy = function (callbacks) {
    var client = connect.core.getClient(), self = this;

    client.call(connect.ClientMethods.DESTROY_CONNECTION, {
      contactId: this.getContactId(),
      connectionId: this.getConnectionId()
    }, callbacks);
  };

  Connection.prototype.sendDigits = function (digits, callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.SEND_DIGITS, {
      contactId: this.getContactId(),
      connectionId: this.getConnectionId(),
      digits: digits
    }, callbacks);
  };

  Connection.prototype.hold = function (callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.HOLD_CONNECTION, {
      contactId: this.getContactId(),
      connectionId: this.getConnectionId()
    }, callbacks);
  };

  Connection.prototype.resume = function (callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.RESUME_CONNECTION, {
      contactId: this.getContactId(),
      connectionId: this.getConnectionId()
    }, callbacks);
  };

  Connection.prototype.toSnapshot = function () {
    return new connect.ConnectionSnapshot(this._getData());
  };

  Connection.prototype._initMediaController = function () {
    if (this.getMediaInfo()) {
      connect.core.mediaFactory.get(this).catch(function () { });
    }
  }

  /**
   * @class VoiceConnection
   * @param {number} contactId 
   * @param {number} connectionId 
   * @description - Provides voice media specific operations
   */
  var VoiceConnection = function (contactId, connectionId) {
    Connection.call(this, contactId, connectionId);
  };

  VoiceConnection.prototype = Object.create(Connection.prototype);
  VoiceConnection.prototype.constructor = VoiceConnection;

  VoiceConnection.prototype.sendDigits = function (digits, callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.SEND_DIGITS, {
      contactId: this.getContactId(),
      connectionId: this.getConnectionId(),
      digits: digits
    }, callbacks);
  };

  VoiceConnection.prototype.hold = function (callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.HOLD_CONNECTION, {
      contactId: this.getContactId(),
      connectionId: this.getConnectionId()
    }, callbacks);
  };

  VoiceConnection.prototype.resume = function (callbacks) {
    var client = connect.core.getClient();
    client.call(connect.ClientMethods.RESUME_CONNECTION, {
      contactId: this.getContactId(),
      connectionId: this.getConnectionId()
    }, callbacks);
  };

  VoiceConnection.prototype.isOnHold = function () {
    return this.getStatus().type === connect.ConnectionStateType.HOLD;
  };

  /**
  * @deprecated
  * Please use getMediaInfo 
  */
  VoiceConnection.prototype.getSoftphoneMediaInfo = function () {
    return this._getData().softphoneMediaInfo;
  };

  VoiceConnection.prototype.getMediaInfo = function () {
    return this._getData().softphoneMediaInfo;
  };

  VoiceConnection.prototype.getMediaType = function () {
    return connect.MediaType.SOFTPHONE;
  };

  VoiceConnection.prototype.getMediaController = function () {
    return connect.core.mediaFactory.get(this);
  }


  /**
   * @class ChatConnection
   * @param {*} contactId 
   * @param {*} connectionId 
   * @description adds the chat media specific functionality
   */
  var ChatConnection = function (contactId, connectionId) {
    Connection.call(this, contactId, connectionId);
  };

  ChatConnection.prototype = Object.create(Connection.prototype);
  ChatConnection.prototype.constructor = ChatConnection;

  ChatConnection.prototype.getMediaInfo = function () {
    var data = this._getData().chatMediaInfo;
    if (!data) {
      return null;
    } else {
      var contactData = connect.core.getAgentDataProvider().getContactData(this.contactId);
      var mediaObject = {
        contactId: this.contactId,
        initialContactId: contactData.initialContactId || this.contactId,
        participantId: this.connectionId,
        getConnectionToken: connect.hitch(this, this.getConnectionToken)
      };
      if (data.connectionData) {
        try {
          mediaObject.participantToken = JSON.parse(data.connectionData).ConnectionAuthenticationToken;
        } catch (e) {
          connect.getLog().error(connect.LogComponent.CHAT, "Connection data is invalid").withObject(data).withException(e);
          mediaObject.participantToken = null;
        }
      }
      mediaObject.participantToken = mediaObject.participantToken || null;
      /** Just to keep the data accessible */
      mediaObject.originalInfo = this._getData().chatMediaInfo;
      return mediaObject;
    }
  };

  /**
  * Provides the chat connectionToken through the create_transport API for a specific contact and participant Id. 
  * @returns a promise which, upon success, returns the response from the createTransport API.
  * Usage:
  * connect.core.getConnectionToken()
  *  .then(response => {})
  *  .catch(error => {})
  */
  ChatConnection.prototype.getConnectionToken = function () {

    client = connect.core.getClient();
    var transportDetails = {
      transportType: connect.TRANSPORT_TYPES.CHAT_TOKEN,
      participantId: this.connectionId,
      contactId: this.contactId
    };
    return new Promise(function (resolve, reject) {
      client.call(connect.ClientMethods.CREATE_TRANSPORT, transportDetails, {
        success: function (data) {
          connect.getLog().info("getConnectionToken succeeded");
          resolve(data);
        },
        failure: function (err, data) {
          connect.getLog().error("getConnectionToken failed")
              .withObject({
                err: err,
                data: data
              });
          reject(Error("getConnectionToken failed"));
        }
      });
    });
  };

  ChatConnection.prototype.getMediaType = function () {
    return connect.MediaType.CHAT;
  };

  ChatConnection.prototype.getMediaController = function () {
    return connect.core.mediaFactory.get(this);
  };

  ChatConnection.prototype._initMediaController = function () {
    if (connect.core.mediaFactory) {
      connect.core.mediaFactory.get(this).catch(function () { });
    }
  }

  /*----------------------------------------------------------------
  * class ConnectionSnapshot
  */
  var ConnectionSnapshot = function (connectionData) {
    connect.Connection.call(this, connectionData.contactId, connectionData.connectionId);
    this.connectionData = connectionData;
  };
  ConnectionSnapshot.prototype = Object.create(Connection.prototype);
  ConnectionSnapshot.prototype.constructor = ConnectionSnapshot;

  ConnectionSnapshot.prototype._getData = function () {
    return this.connectionData;
  };

  ConnectionSnapshot.prototype._initMediaController = function () { };

  var Endpoint = function (paramsIn) {
    var params = paramsIn || {};
    this.endpointARN = params.endpointId || params.endpointARN || null;
    this.endpointId = this.endpointARN;
    this.type = params.type || null;
    this.name = params.name || null;
    this.phoneNumber = params.phoneNumber || null;
    this.agentLogin = params.agentLogin || null;
    this.queue = params.queue || null;
  };

  /**
   * Strip the SIP endpoint components from the phoneNumber field.
   */
  Endpoint.prototype.stripPhoneNumber = function () {
    return this.phoneNumber ? this.phoneNumber.replace(/sip:([^@]*)@.*/, "$1") : "";
  };

  /**
   * Create an Endpoint object from the given phone number and name.
   */
  Endpoint.byPhoneNumber = function (number, name) {
    return new Endpoint({
      type: connect.EndpointType.PHONE_NUMBER,
      phoneNumber: number,
      name: name || null
    });
  };

  /*----------------------------------------------------------------
  * class SoftphoneError
  */
  var SoftphoneError = function (errorType, errorMessage, endPointUrl) {
    this.errorType = errorType;
    this.errorMessage = errorMessage;
    this.endPointUrl = endPointUrl;
  };
  SoftphoneError.prototype.getErrorType = function () {
    return this.errorType;
  };
  SoftphoneError.prototype.getErrorMessage = function () {
    return this.errorMessage;
  };
  SoftphoneError.prototype.getEndPointUrl = function () {
    return this.endPointUrl;
  };

  /*----------------------------------------------------------------
  * Root Subscription APIs.
  */
  connect.agent = function (f) {
    var bus = connect.core.getEventBus();
    var sub = bus.subscribe(connect.AgentEvents.INIT, f);
    if (connect.agent.initialized) {
      f(new connect.Agent());
    }
    return sub;
  };
  connect.agent.initialized = false;

  connect.contact = function (f) {
    var bus = connect.core.getEventBus();
    return bus.subscribe(connect.ContactEvents.INIT, f);
  };

  /**
   * Execute the given function asynchronously only if the shared worker
   * says we are the master for the given topic.  If there is no master for
   * the given topic, we become the master and execute the function.
   *
   * @param topic The master topic we are concerned about.
   * @param f_true The callback to be invoked if we are the master.
   * @param f_else [optional] A callback to be invoked if we are not the master.
   */
  connect.ifMaster = function (topic, f_true, f_else) {
    connect.assertNotNull(topic, "A topic must be provided.");
    connect.assertNotNull(f_true, "A true callback must be provided.");

    if (!connect.core.masterClient) {
      // We can't be the master because there is no master client!
      connect.getLog().warn("We can't be the master for topic '%s' because there is no master client!", topic);
      if (f_else) {
        f_else();
      }
      return;
    }

    var masterClient = connect.core.getMasterClient();
    masterClient.call(connect.MasterMethods.CHECK_MASTER, {
      topic: topic
    }, {
        success: function (data) {
          if (data.isMaster) {
            f_true();

          } else if (f_else) {
            f_else();
          }
        }
      });
  };

  /**
   * Notify the shared worker that we are now the master for the given topic.
   */
  connect.becomeMaster = function (topic) {
    connect.assertNotNull(topic, "A topic must be provided.");
    var masterClient = connect.core.getMasterClient();
    masterClient.call(connect.MasterMethods.BECOME_MASTER, {
      topic: topic
    });
  };

  connect.Agent = Agent;
  connect.AgentSnapshot = AgentSnapshot;
  connect.Contact = Contact;
  connect.ContactSnapshot = ContactSnapshot;
  /** Default will get the Voice connection */
  connect.Connection = VoiceConnection;
  connect.BaseConnection = Connection;
  connect.VoiceConnection = VoiceConnection;
  connect.ChatConnection = ChatConnection;
  connect.ConnectionSnapshot = ConnectionSnapshot;
  connect.Endpoint = Endpoint;
  connect.Address = Endpoint;
  connect.SoftphoneError = SoftphoneError;
})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function () {
  var global = this;
  connect = global.connect || {};
  global.connect = connect;
  global.lily = connect;

  connect.core = {};

  connect.core.initialized = false;

  connect.DEFAULT_BATCH_SIZE = 100;


  var CCP_SYN_TIMEOUT = 1000; // 1 sec
  var CCP_ACK_TIMEOUT = 3000; // 3 sec
  var CCP_LOAD_TIMEOUT = 3000; // 3 sec
  var CCP_IFRAME_REFRESH_INTERVAL = 5000; // 5 sec

  var LOGIN_URL_PATTERN = "https://{alias}.awsapps.com/auth/?client_id={client_id}&redirect_uri={redirect}";
  var CLIENT_ID_MAP = {
    "us-east-1": "06919f4fd8ed324e"
  };

  var AUTHORIZE_ENDPOINT = "/connect/auth/authorize";
  var AUTHORIZE_RETRY_INTERVAL = 2000;
  var AUTHORIZE_MAX_RETRY = 5;

  var WHITELISTED_ORIGINS_ENDPOINT = "/connect/whitelisted-origins";
  var WHITELISTED_ORIGINS_RETRY_INTERVAL = 2000;
  var WHITELISTED_ORIGINS_MAX_RETRY = 5;

  var NON_RECOVERABLE_EVENTS = [connect.EventType.CROSS_DOMAIN_ACCESS_DENIED];

  /**
   * @deprecated
   * We will no longer need this function soon.
   */
  var createLoginUrl = function (params) {
    var redirect = "https://lily.us-east-1.amazonaws.com/taw/auth/code";
    connect.assertNotNull(redirect);

    if (params.alias) {
      return LOGIN_URL_PATTERN.replace("{alias}", params.alias)
        .replace("{client_id}", CLIENT_ID_MAP["us-east-1"])
        .replace("{redirect}", global.encodeURIComponent(redirect));
    } else if (params.loginUrl) {
      /** Now SAML users can pass custom Login URLs to handle the Auth*/
      return params.loginUrl;
    } else {
      return params.ccpUrl;
    }
  };

  /**-------------------------------------------------------------------------
   * Returns scheme://host:port for a given url
   */
  function sanitizeDomain(url){
    var domain = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/ig);
    return domain.length ? domain[0] : "";
  }

  /**-------------------------------------------------------------------------
   * Print a warning message if the Connect core is not initialized.
   */
  connect.core.checkNotInitialized = function () {
    if (connect.core.initialized) {
      var log = connect.getLog();
      log.warn("Connect core already initialized, only needs to be initialized once.");
    }
  };
  /**-------------------------------------------------------------------------
   * Basic Connect client initialization.
   * Should be used only by the API Shared Worker.
   */
  connect.core.init = function (params) {
    connect.core.eventBus = new connect.EventBus();
    connect.core.agentDataProvider = new AgentDataProvider(connect.core.getEventBus());
    connect.core.initClient(params);
    connect.core.initialized = true;
  };

  /**-------------------------------------------------------------------------
   * Initialized AWS client
   * Should be used by Shared Worker to update AWS client with new credentials
   * after refreshed authentication.
   */
  connect.core.initClient = function (params) {
    connect.assertNotNull(params, 'params');

    var authToken = connect.assertNotNull(params.authToken, 'params.authToken');
    var region = connect.assertNotNull(params.region, 'params.region');
    var endpoint = params.endpoint || null;

    connect.core.client = new connect.AWSClient(authToken, region, endpoint);
  };

  /**-------------------------------------------------------------------------
   * Uninitialize Connect.
   */
  connect.core.terminate = function () {
    connect.core.client = new connect.NullClient();
    connect.core.masterClient = new connect.NullClient();
    var bus = connect.core.getEventBus();
    if (bus) bus.unsubscribeAll();
    connect.core.bus = new connect.EventBus();
    connect.core.agentDataProvider = null;
    connect.core.upstream = null;
    connect.core.keepaliveManager = null;
    connect.agent.initialized = false;
    connect.core.initialized = false;
  };

  /**-------------------------------------------------------------------------
   * Setup the SoftphoneManager to be initialized when the agent
   * is determined to have softphone enabled.
   */
  connect.core.softphoneUserMediaStream = null;

  connect.core.getSoftphoneUserMediaStream = function () {
    return connect.core.softphoneUserMediaStream;
  };

  connect.core.setSoftphoneUserMediaStream = function (stream) {
    connect.core.softphoneUserMediaStream = stream;
  };

  connect.core.initRingtoneEngines = function (params) {
    connect.assertNotNull(params, "params");

    var setupRingtoneEngines = function (ringtoneSettings) {
      connect.assertNotNull(ringtoneSettings, "ringtoneSettings");
      connect.assertNotNull(ringtoneSettings.voice, "ringtoneSettings.voice");
      connect.assertTrue(ringtoneSettings.voice.ringtoneUrl || ringtoneSettings.voice.disabled, "ringtoneSettings.voice.ringtoneUrl must be provided or ringtoneSettings.voice.disabled must be true");
      connect.assertNotNull(ringtoneSettings.queue_callback, "ringtoneSettings.queue_callback");
      connect.assertTrue(ringtoneSettings.queue_callback.ringtoneUrl || ringtoneSettings.queue_callback.disabled, "ringtoneSettings.voice.ringtoneUrl must be provided or ringtoneSettings.queue_callback.disabled must be true");

      connect.core.ringtoneEngines = {};

      connect.agent(function (agent) {
        agent.onRefresh(function () {
          connect.ifMaster(connect.MasterTopics.RINGTONE, function () {
            if (!ringtoneSettings.voice.disabled && !connect.core.ringtoneEngines.voice) {
              connect.core.ringtoneEngines.voice =
                new connect.VoiceRingtoneEngine(ringtoneSettings.voice);
              connect.getLog().info("VoiceRingtoneEngine initialized.");
            }

            if (!ringtoneSettings.chat.disabled && !connect.core.ringtoneEngines.chat) {
              connect.core.ringtoneEngines.chat =
                new connect.ChatRingtoneEngine(ringtoneSettings.chat);
              connect.getLog().info("ChatRingtoneEngine initialized.");
            }

            if (!ringtoneSettings.queue_callback.disabled && !connect.core.ringtoneEngines.queue_callback) {
              connect.core.ringtoneEngines.queue_callback =
                new connect.QueueCallbackRingtoneEngine(ringtoneSettings.queue_callback);
              connect.getLog().info("QueueCallbackRingtoneEngine initialized.");
            }
          });
        });
      });
    };

    var mergeParams = function (params, otherParams) {
      // For backwards compatibility: support pulling disabled flag and ringtoneUrl
      // from softphone config if it exists from downstream into the ringtone config.
      params.ringtone = params.ringtone || {};
      params.ringtone.voice = params.ringtone.voice || {};
      params.ringtone.queue_callback = params.ringtone.queue_callback || {};
      params.ringtone.chat = params.ringtone.chat || { disabled: true };

      if (otherParams.softphone) {
        if (otherParams.softphone.disableRingtone) {
          params.ringtone.voice.disabled = true;
          params.ringtone.queue_callback.disabled = true;
        }

        if (otherParams.softphone.ringtoneUrl) {
          params.ringtone.voice.ringtoneUrl = otherParams.softphone.ringtoneUrl;
          params.ringtone.queue_callback.ringtoneUrl = otherParams.softphone.ringtoneUrl;
        }
      }

      // Merge in ringtone settings from downstream.
      if (otherParams.ringtone) {
        params.ringtone.voice = connect.merge(params.ringtone.voice,
          otherParams.ringtone.voice || {});
        params.ringtone.queue_callback = connect.merge(params.ringtone.queue_callback,
          otherParams.ringtone.voice || {});
        params.ringtone.chat = connect.merge(params.ringtone.chat,
          otherParams.ringtone.chat || {});
      }
    };

    // Merge params from params.softphone into params.ringtone
    // for embedded and non-embedded use cases so that defaults
    // are picked up.
    mergeParams(params, params);

    if (connect.isFramed()) {
      // If the CCP is in a frame, wait for configuration from downstream.
      var bus = connect.core.getEventBus();
      bus.subscribe(connect.EventType.CONFIGURE, function (data) {
        this.unsubscribe();
        // Merge all params from data into params for any overridden
        // values in either legacy "softphone" or "ringtone" settings.
        mergeParams(params, data);
        setupRingtoneEngines(params.ringtone);
      });

    } else {
      setupRingtoneEngines(params.ringtone);
    }
  };

  connect.core.initSoftphoneManager = function (paramsIn) {
    var params = paramsIn || {};

    var competeForMasterOnAgentUpdate = function (softphoneParamsIn) {
      var softphoneParams = connect.merge(params.softphone || {}, softphoneParamsIn);

      connect.agent(function (agent) {
        if (!agent.getChannelConcurrency(connect.ChannelType.VOICE)) {
          return;
        }
        agent.onRefresh(function () {
          var sub = this;

          connect.ifMaster(connect.MasterTopics.SOFTPHONE, function () {
            if (!connect.core.softphoneManager && agent.isSoftphoneEnabled()) {
              // Become master to send logs, since we need logs from softphone tab.
              connect.becomeMaster(connect.MasterTopics.SEND_LOGS);
              connect.core.softphoneManager = new connect.SoftphoneManager(softphoneParams);
              sub.unsubscribe();
            }
          });
        });
      });
    };

    /**
     * If the window is framed, we need to wait for a CONFIGURE message from
     * downstream before we try to initialize, unless params.allowFramedSoftphone is true.
     */
    if (connect.isFramed() && !params.allowFramedSoftphone) {
      var bus = connect.core.getEventBus();
      bus.subscribe(connect.EventType.CONFIGURE, function (data) {
        if (data.softphone && data.softphone.allowFramedSoftphone) {
          this.unsubscribe();
          competeForMasterOnAgentUpdate(data.softphone);
        }
      });
    } else {
      competeForMasterOnAgentUpdate(params);
    }


    connect.agent(function (agent) {
      // Sync mute across all tabs 
      if (agent.isSoftphoneEnabled() && agent.getChannelConcurrency(connect.ChannelType.VOICE)) {
        connect.core.getUpstream().sendUpstream(connect.EventType.BROADCAST,
          {
            event: connect.EventType.MUTE
          });
      }
    });
  };
  
  connect.core.authorize = function (endpoint) { 
    var options = {
      credentials: 'include'
    };
    return connect.fetch(endpoint || AUTHORIZE_ENDPOINT, options, AUTHORIZE_RETRY_INTERVAL, AUTHORIZE_MAX_RETRY);
  };

  connect.core.verifyDomainAccess = function (authToken, endpoint) {
    if (!connect.isFramed()) {
      return Promise.resolve();
    }
    var options = {
      headers: {
        'X-Amz-Bearer': authToken
      }
    };
    return connect.fetch(endpoint || WHITELISTED_ORIGINS_ENDPOINT, options, WHITELISTED_ORIGINS_RETRY_INTERVAL, WHITELISTED_ORIGINS_MAX_RETRY).then(function (response) {
      var topDomain = sanitizeDomain(window.document.referrer);
      var isAllowed = response.whitelistedOrigins.some(function (origin) {
        return topDomain === sanitizeDomain(origin);
      });
      if (!isAllowed) {
        var conduit = new connect.Conduit("ErrorIframeConduit", new connect.WindowIOStream(window, parent));
        conduit.sendUpstream(connect.EventType.CROSS_DOMAIN_ACCESS_DENIED);
        return Promise.reject();
      }
      return Promise.resolve();
    });
  };

  /**-------------------------------------------------------------------------
   * Initializes Connect by creating or connecting to the API Shared Worker.
   * Used primarily by the CCP.
   */
  connect.core.initSharedWorker = function (params) {
    connect.core.checkNotInitialized();
    if (connect.core.initialized) {
      return;
    }
    connect.assertNotNull(params, 'params');

    var sharedWorkerUrl = connect.assertNotNull(params.sharedWorkerUrl, 'params.sharedWorkerUrl');
    var authToken = connect.assertNotNull(params.authToken, 'params.authToken');
    var refreshToken = connect.assertNotNull(params.refreshToken, 'params.refreshToken');
    var authTokenExpiration = connect.assertNotNull(params.authTokenExpiration, 'params.authTokenExpiration');
    var region = connect.assertNotNull(params.region, 'params.region');
    var endpoint = params.endpoint || null;
    var authorizeEndpoint = params.authorizeEndpoint || "/connect/auth/authorize";

    try {
      // Initialize the event bus and agent data providers.
      connect.core.eventBus = new connect.EventBus({ logEvents: true });
      connect.core.agentDataProvider = new AgentDataProvider(connect.core.getEventBus());
      connect.core.mediaFactory = new connect.MediaFactory(params);
      // Create the shared worker and upstream conduit.
      var worker = new SharedWorker(sharedWorkerUrl, "ConnectSharedWorker");
      var conduit = new connect.Conduit("ConnectSharedWorkerConduit",
        new connect.PortStream(worker.port),
        new connect.WindowIOStream(window, parent));

      // Set the global upstream conduit for external use.
      connect.core.upstream = conduit;

      connect.core.webSocketProvider = new WebSocketProvider();

      // Close our port to the shared worker before the window closes.
      global.onunload = function () {
        conduit.sendUpstream(connect.EventType.CLOSE);
        worker.port.close();
      };

      connect.getLog().scheduleUpstreamLogPush(conduit);
      // Bridge all upstream messages into the event bus.
      conduit.onAllUpstream(connect.core.getEventBus().bridge());
      // Bridge all downstream messages into the event bus.
      conduit.onAllDownstream(connect.core.getEventBus().bridge());
      // Pass all upstream messages (from shared worker) downstream (to CCP consumer).
      conduit.onAllUpstream(conduit.passDownstream());
      // Pass all downstream messages (from CCP consumer) upstream (to shared worker).
      conduit.onAllDownstream(conduit.passUpstream());
      // Send configuration up to the shared worker.

      conduit.sendUpstream(connect.EventType.CONFIGURE, {
        authToken: authToken,
        authTokenExpiration: authTokenExpiration,
        endpoint: endpoint,
        refreshToken: refreshToken,
        region: region,
        authorizeEndpoint: authorizeEndpoint
      });
      
      conduit.onUpstream(connect.EventType.ACKNOWLEDGE, function () {
        connect.getLog().info("Acknowledged by the ConnectSharedWorker!");
        connect.core.initialized = true;
        this.unsubscribe();
      });
      // Add all upstream log entries to our own logger.
      conduit.onUpstream(connect.EventType.LOG, function (logEntry) {
        connect.getLog().addLogEntry(connect.LogEntry.fromObject(logEntry));
      });
      // Reload the page if the shared worker detects an API auth failure.
      conduit.onUpstream(connect.EventType.AUTH_FAIL, function (logEntry) {
        location.reload();
      });

      connect.core.client = new connect.UpstreamConduitClient(conduit);
      connect.core.masterClient = new connect.UpstreamConduitMasterClient(conduit);

      // Pass the TERMINATE request upstream to the shared worker.
      connect.core.getEventBus().subscribe(connect.EventType.TERMINATE,
        conduit.passUpstream());

      // Refresh the page when we receive the TERMINATED response from the
      // shared worker.
      connect.core.getEventBus().subscribe(connect.EventType.TERMINATED, function () {
        window.location.reload(true);
      });

      worker.port.start();

      // Attempt to get permission to show notifications.
      var nm = connect.core.getNotificationManager();
      nm.requestPermission();

    } catch (e) {
      connect.getLog().error("Failed to initialize the API shared worker, we're dead!")
        .withException(e);
    }
  };

  /**-------------------------------------------------------------------------
   * Initializes Connect by creating or connecting to the API Shared Worker.
   * Initializes Connect by loading the CCP in an iframe and connecting to it.
   */
  connect.core.initCCP = function (containerDiv, paramsIn) {
    connect.core.checkNotInitialized();
    if (connect.core.initialized) {
      return;
    }

    // To prevent reloading iframe content in case of cross-domain access denied
    var inNonRecoverableState = false;

    // For backwards compatibility, when instead of taking a params object
    // as input we only accepted ccpUrl.
    var params = {};
    if (typeof (paramsIn) === 'string') {
      params.ccpUrl = paramsIn;
    } else {
      params = paramsIn;
    }

    var softphoneParams = params.softphone || null;

    connect.assertNotNull(containerDiv, 'containerDiv');
    connect.assertNotNull(params.ccpUrl, 'params.ccpUrl');

    // Create the CCP iframe and append it to the container div.
    var iframe = document.createElement('iframe');
    iframe.src = params.ccpUrl;
    iframe.allow = "microphone";
    iframe.style = "width: 100%; height: 100%";
    containerDiv.appendChild(iframe);

    // Initialize the event bus and agent data providers.
    // NOTE: Setting logEvents here to FALSE in order to avoid duplicating
    // events which are logged in CCP.
    connect.core.eventBus = new connect.EventBus({ logEvents: false });
    connect.core.agentDataProvider = new AgentDataProvider(connect.core.getEventBus());
    connect.core.mediaFactory = new connect.MediaFactory(params);
  
    // Build the upstream conduit communicating with the CCP iframe.
    var conduit = new connect.IFrameConduit(params.ccpUrl, window, iframe);

    // Set the global upstream conduit for external use.
    connect.core.upstream = conduit;

    // Init webSocketProvider
    connect.core.webSocketProvider = new WebSocketProvider();

    conduit.onAllUpstream(connect.core.getEventBus().bridge());

    // Initialize the keepalive manager.
    connect.core.keepaliveManager = new KeepaliveManager(conduit,
      connect.core.getEventBus(),
      params.ccpSynTimeout || CCP_SYN_TIMEOUT,
      params.ccpAckTimeout || CCP_ACK_TIMEOUT)
    ;
    connect.core.iframeRefreshInterval = null;

    // Allow 10 sec (default) before receiving the first ACK from the CCP.
    connect.core.ccpLoadTimeoutInstance = global.setTimeout(function () {
      connect.core.ccpLoadTimeoutInstance = null;
      connect.core.getEventBus().trigger(connect.EventType.ACK_TIMEOUT);
    }, params.ccpLoadTimeout || CCP_LOAD_TIMEOUT);

    // Once we receive the first ACK, setup our upstream API client and establish
    // the SYN/ACK refresh flow.
    conduit.onUpstream(connect.EventType.ACKNOWLEDGE, function () {
      connect.getLog().info("Acknowledged by the CCP!");
      connect.core.client = new connect.UpstreamConduitClient(conduit);
      connect.core.masterClient = new connect.UpstreamConduitMasterClient(conduit);
      connect.core.initialized = true;

      if (softphoneParams) {
        // Send configuration up to the CCP.
        conduit.sendUpstream(connect.EventType.CONFIGURE, {
          softphone: softphoneParams
        });
      }

      if (connect.core.ccpLoadTimeoutInstance) {
        global.clearTimeout(connect.core.ccpLoadTimeoutInstance);
        connect.core.ccpLoadTimeoutInstance = null;
      }

      connect.core.keepaliveManager.start();
      this.unsubscribe();
    });

    // Add any logs from the upstream to our own logger.
    conduit.onUpstream(connect.EventType.LOG, function (logEntry) {
      connect.getLog().addLogEntry(connect.LogEntry.fromObject(logEntry));
    });

    NON_RECOVERABLE_EVENTS.forEach(function (event) {
      conduit.onUpstream(event, function () {
        inNonRecoverableState = true;
        this.unsubscribe();
        global.clearInterval(connect.core.iframeRefreshInterval);
        connect.core.iframeRefreshInterval = null;
        connect.core.getPopupManager().clear(connect.MasterTopics.LOGIN_POPUP);
      });
    });

    // Pop a login page when we encounter an ACK timeout.
    connect.core.getEventBus().subscribe(connect.EventType.ACK_TIMEOUT, function () {
      // loginPopup is true by default, only false if explicitly set to false.
      if (params.loginPopup !== false) {
        try {
          var loginUrl = createLoginUrl(params);
          connect.getLog().warn("ACK_TIMEOUT occurred, attempting to pop the login page if not already open.");
          connect.core.getPopupManager().open(loginUrl, connect.MasterTopics.LOGIN_POPUP);

        } catch (e) {
          connect.getLog().error("ACK_TIMEOUT occurred but we are unable to open the login popup.").withException(e);
        }
      }

      if (connect.core.iframeRefreshInterval == null && !inNonRecoverableState) {
        connect.core.iframeRefreshInterval = window.setInterval(function () {
          iframe.src = params.ccpUrl;
        }, CCP_IFRAME_REFRESH_INTERVAL);

        conduit.onUpstream(connect.EventType.ACKNOWLEDGE, function () {
          this.unsubscribe();
          global.clearInterval(connect.core.iframeRefreshInterval);
          connect.core.iframeRefreshInterval = null;
          connect.core.getPopupManager().clear(connect.MasterTopics.LOGIN_POPUP);
        });
      }
    });
  };

  /**-----------------------------------------------------------------------*/
  var KeepaliveManager = function (conduit, eventBus, synTimeout, ackTimeout) {
    this.conduit = conduit;
    this.eventBus = eventBus;
    this.synTimeout = synTimeout;
    this.ackTimeout = ackTimeout;
    this.ackTimer = null;
    this.synTimer = null;
    this.ackSub = null;
  };

  KeepaliveManager.prototype.start = function () {
    var self = this;

    this.conduit.sendUpstream(connect.EventType.SYNCHRONIZE);
    this.ackSub = this.conduit.onUpstream(connect.EventType.ACKNOWLEDGE, function () {
      this.unsubscribe();
      global.clearTimeout(self.ackTimer);
      self.deferStart();
    });
    this.ackTimer = global.setTimeout(function () {
      self.ackSub.unsubscribe();
      self.eventBus.trigger(connect.EventType.ACK_TIMEOUT);
      self.deferStart();
    }, this.ackTimeout);
  };

  KeepaliveManager.prototype.deferStart = function () {
    if (this.synTimer == null) {
      this.synTimer = global.setTimeout(connect.hitch(this, this.start), this.synTimeout);
    }
  };

  /**-----------------------------------------------------------------------*/

  var WebSocketProvider = function() {

    var callbacks = {
      initFailure: new Set(),
      subscriptionUpdate: new Set(),
      subscriptionFailure: new Set(),
      topic: new Map(),
      allMessage: new Set(),
      connectionGain: new Set(),
      connectionLost: new Set()
    };

    var invokeCallbacks = function(callbacks, response) {
      callbacks.forEach(function (callback) {
        callback(response);
      });
    };

    connect.core.getUpstream().onUpstream(connect.WebSocketEvents.INIT_FAILURE, function () {
      invokeCallbacks(callbacks.initFailure);
    });

    connect.core.getUpstream().onUpstream(connect.WebSocketEvents.CONNECTION_GAIN, function () {
      invokeCallbacks(callbacks.connectionGain);
    });

    connect.core.getUpstream().onUpstream(connect.WebSocketEvents.CONNECTION_LOST, function () {
      invokeCallbacks(callbacks.connectionLost);
    });

    connect.core.getUpstream().onUpstream(connect.WebSocketEvents.SUBSCRIPTION_UPDATE, function (response) {
      invokeCallbacks(callbacks.subscriptionUpdate, response);
    });

    connect.core.getUpstream().onUpstream(connect.WebSocketEvents.SUBSCRIPTION_FAILURE, function (response) {
      invokeCallbacks(callbacks.subscriptionFailure, response);
    });

    connect.core.getUpstream().onUpstream(connect.WebSocketEvents.ALL_MESSAGE, function (response) {
      invokeCallbacks(callbacks.allMessage, response);
      if (callbacks.topic.has(response.topic)) {
        invokeCallbacks(callbacks.topic.get(response.topic), response);
      }
    });

    this.sendMessage = function(webSocketPayload) {
      connect.core.getUpstream().sendUpstream(connect.WebSocketEvents.SEND, webSocketPayload);
    };

    this.onInitFailure = function(cb) {
      connect.assertTrue(connect.isFunction(cb), 'method must be a function');
      callbacks.initFailure.add(cb);
      return function () {
        return callbacks.initFailure.delete(cb);
      };
    };

    this.onConnectionGain = function(cb) {
      connect.assertTrue(connect.isFunction(cb), 'method must be a function');
      callbacks.connectionGain.add(cb);
      return function () {
        return callbacks.connectionGain.delete(cb);
      };
    };

    this.onConnectionLost = function(cb) {
      connect.assertTrue(connect.isFunction(cb), 'method must be a function');
      callbacks.connectionLost.add(cb);
      return function () {
        return callbacks.connectionLost.delete(cb);
      };
    };

    this.onSubscriptionUpdate = function(cb) {
      connect.assertTrue(connect.isFunction(cb), 'method must be a function');
      callbacks.subscriptionUpdate.add(cb);
      return function () {
        return callbacks.subscriptionUpdate.delete(cb);
      };
    };

    this.onSubscriptionFailure = function(cb) {
      connect.assertTrue(connect.isFunction(cb), 'method must be a function');
      callbacks.subscriptionFailure.add(cb);
      return function () {
        return callbacks.subscriptionFailure.delete(cb);
      };
    };

    this.subscribeTopics = function(topics) {
      connect.assertNotNull(topics, 'topics');
      connect.assertTrue(connect.isArray(topics), 'topics must be a array');
      connect.core.getUpstream().sendUpstream(connect.WebSocketEvents.SUBSCRIBE, topics);
    };

    this.onMessage = function(topicName, cb) {
      connect.assertNotNull(topicName, 'topicName');
      connect.assertTrue(connect.isFunction(cb), 'method must be a function');
      if (callbacks.topic.has(topicName)) {
        callbacks.topic.get(topicName).add(cb);
      } else {
        callbacks.topic.set(topicName, new Set([cb]));
      }
      return function () {
        return callbacks.topic.get(topicName).delete(cb);
      };
    };

    this.onAllMessage = function (cb) {
      connect.assertTrue(connect.isFunction(cb), 'method must be a function');
      callbacks.allMessage.add(cb);
      return function () {
        return callbacks.allMessage.delete(cb);
      };
    };

  };

  /**-----------------------------------------------------------------------*/
  var AgentDataProvider = function (bus) {
    var agentData = null;
    this.bus = bus;
    this.bus.subscribe(connect.AgentEvents.UPDATE, connect.hitch(this, this.updateAgentData));
  };

  AgentDataProvider.prototype.updateAgentData = function (agentData) {
    var oldAgentData = this.agentData;
    this.agentData = agentData;

    if (oldAgentData == null) {
      connect.agent.initialized = true;
      this.bus.trigger(connect.AgentEvents.INIT, new connect.Agent());
    }

    this.bus.trigger(connect.AgentEvents.REFRESH, new connect.Agent());

    this._fireAgentUpdateEvents(oldAgentData);
  };

  AgentDataProvider.prototype.getAgentData = function () {
    if (this.agentData == null) {
      throw new connect.StateError('No agent data is available yet!');
    }

    return this.agentData;
  };

  AgentDataProvider.prototype.getContactData = function (contactId) {
    var agentData = this.getAgentData();
    var contactData = connect.find(agentData.snapshot.contacts, function (ctdata) {
      return ctdata.contactId === contactId;
    });

    if (contactData == null) {
      throw new connect.StateError('Contact %s no longer exists.', contactId);
    }

    return contactData;
  };

  AgentDataProvider.prototype.getConnectionData = function (contactId, connectionId) {
    var contactData = this.getContactData(contactId);
    var connectionData = connect.find(contactData.connections, function (cdata) {
      return cdata.connectionId === connectionId;
    });

    if (connectionData == null) {
      throw new connect.StateError('Connection %s for contact %s no longer exists.', connectionId, contactId);
    }

    return connectionData;
  };

  AgentDataProvider.prototype._diffContacts = function (oldAgentData) {
    var diff = {
      added: {},
      removed: {},
      common: {},
      oldMap: connect.index(oldAgentData == null ? [] : oldAgentData.snapshot.contacts, function (contact) { return contact.contactId; }),
      newMap: connect.index(this.agentData.snapshot.contacts, function (contact) { return contact.contactId; })
    };

    connect.keys(diff.oldMap).forEach(function (contactId) {
      if (connect.contains(diff.newMap, contactId)) {
        diff.common[contactId] = diff.newMap[contactId];
      } else {
        diff.removed[contactId] = diff.oldMap[contactId];
      }
    });

    connect.keys(diff.newMap).forEach(function (contactId) {
      if (!connect.contains(diff.oldMap, contactId)) {
        diff.added[contactId] = diff.newMap[contactId];
      }
    });

    return diff;
  };

  AgentDataProvider.prototype._fireAgentUpdateEvents = function (oldAgentData) {
    var self = this;
    var diff = null;
    var oldAgentState = oldAgentData == null ? connect.AgentAvailStates.INIT : oldAgentData.snapshot.state.name;
    var newAgentState = this.agentData.snapshot.state.name;
    var oldRoutingState = oldAgentData == null ? connect.AgentStateType.INIT : oldAgentData.snapshot.state.type;
    var newRoutingState = this.agentData.snapshot.state.type;

    if (oldRoutingState !== newRoutingState) {
      connect.core.getAgentRoutingEventGraph().getAssociations(this, oldRoutingState, newRoutingState).forEach(function (event) {
        self.bus.trigger(event, new connect.Agent());
      });
    }

    if (oldAgentState !== newAgentState) {
      this.bus.trigger(connect.AgentEvents.STATE_CHANGE, {
        agent: new connect.Agent(),
        oldState: oldAgentState,
        newState: newAgentState

      });
      connect.core.getAgentStateEventGraph().getAssociations(this, oldAgentState, newAgentState).forEach(function (event) {
        self.bus.trigger(event, new connect.Agent());
      });
    }

    if (oldAgentData !== null) {
      diff = this._diffContacts(oldAgentData);

    } else {
      diff = {
        added: connect.index(this.agentData.snapshot.contacts, function (contact) { return contact.contactId; }),
        removed: {},
        common: {},
        oldMap: {},
        newMap: connect.index(this.agentData.snapshot.contacts, function (contact) { return contact.contactId; })
      };
    }

    connect.values(diff.added).forEach(function (contactData) {
      self.bus.trigger(connect.ContactEvents.INIT, new connect.Contact(contactData.contactId));
      self._fireContactUpdateEvents(contactData.contactId, connect.ContactStateType.INIT, contactData.state.type);
    });

    connect.values(diff.removed).forEach(function (contactData) {
      self.bus.trigger(connect.ContactEvents.DESTROYED, new connect.ContactSnapshot(contactData));
      self.bus.trigger(connect.core.getContactEventName(connect.ContactEvents.DESTROYED, contactData.contactId), new connect.ContactSnapshot(contactData));
      self._unsubAllContactEventsForContact(contactData.contactId);
    });

    connect.keys(diff.common).forEach(function (contactId) {
      self._fireContactUpdateEvents(contactId, diff.oldMap[contactId].state.type, diff.newMap[contactId].state.type);
    });
  };

  AgentDataProvider.prototype._fireContactUpdateEvents = function (contactId, oldContactState, newContactState) {
    var self = this;
    if (oldContactState !== newContactState) {
      connect.core.getContactEventGraph().getAssociations(this, oldContactState, newContactState).forEach(function (event) {
        self.bus.trigger(event, new connect.Contact(contactId));
        self.bus.trigger(connect.core.getContactEventName(event, contactId), new connect.Contact(contactId));
      });
    }

    self.bus.trigger(connect.ContactEvents.REFRESH, new connect.Contact(contactId));
    self.bus.trigger(connect.core.getContactEventName(connect.ContactEvents.REFRESH, contactId), new connect.Contact(contactId));
  };

  AgentDataProvider.prototype._unsubAllContactEventsForContact = function (contactId) {
    var self = this;
    connect.values(connect.ContactEvents).forEach(function (eventName) {
      self.bus.getSubscriptions(connect.core.getContactEventName(eventName, contactId))
        .map(function (sub) { sub.unsubscribe(); });
    });
  };

  /** ----- minimal view layer event handling **/

  connect.core.onViewContact = function (f) {
    connect.core.getUpstream().onUpstream(connect.ContactEvents.VIEW, f);
  };

  /**
   * Used of agent interface control. 
   * connect.core.viewContact("contactId") ->  this is curently programmed to get the contact into view.
   */
  connect.core.viewContact = function (contactId) {
    connect.core.getUpstream().sendUpstream(connect.EventType.BROADCAST, {
      event: connect.ContactEvents.VIEW,
      data: {
        contactId: contactId
      }
    });
  };

  /** ------------------------------------------------- */

   /**
   * This will be helpful for the custom and embedded CCPs 
   * to handle the access denied use case. 
   */
  connect.core.onAccessDenied = function (f) {
    connect.core.getUpstream().onUpstream(connect.EventType.ACCESS_DENIED, f);
  };
  
   /**
   * This will be helpful for SAML use cases to handle the custom logins. 
   */
  connect.core.onAuthFail = function (f) {
    connect.core.getUpstream().onUpstream(connect.EventType.AUTH_FAIL, f);
  };

  /** ------------------------------------------------- */

  /**
   * Used for handling the rtc session stats.
   * Usage
   * connect.core.onSoftphoneSessionInit(function({ connectionId }) {
   *     var softphoneManager = connect.core.getSoftphoneManager();
   *     if(softphoneManager){
   *        // access session
   *        var session = softphoneManager.getSession(connectionId); 
   *      }
   * });
   */

  connect.core.onSoftphoneSessionInit = function (f) {
    connect.core.getUpstream().onUpstream(connect.ConnnectionEvents.SESSION_INIT, f);
  };

  /**-----------------------------------------------------------------------*/
  connect.core.getContactEventName = function (eventName, contactId) {
    connect.assertNotNull(eventName, 'eventName');
    connect.assertNotNull(contactId, 'contactId');
    if (!connect.contains(connect.values(connect.ContactEvents), eventName)) {
      throw new connect.ValueError('%s is not a valid contact event.', eventName);
    }
    return connect.sprintf('%s::%s', eventName, contactId);
  };

  /**-----------------------------------------------------------------------*/
  connect.core.getEventBus = function () {
    return connect.core.eventBus;
  };

  /**-----------------------------------------------------------------------*/
  connect.core.getWebSocketManager = function () {
    return connect.core.webSocketProvider;
  };

  /**-----------------------------------------------------------------------*/
  connect.core.getAgentDataProvider = function () {
    return connect.core.agentDataProvider;
  };

  /**-----------------------------------------------------------------------*/
  connect.core.getLocalTimestamp = function () {
    return connect.core.getAgentDataProvider().getAgentData().snapshot.localTimestamp;
  };

  /**-----------------------------------------------------------------------*/
  connect.core.getSkew = function () {
    return connect.core.getAgentDataProvider().getAgentData().snapshot.skew;
  };

  /**-----------------------------------------------------------------------*/
  connect.core.getAgentRoutingEventGraph = function () {
    return connect.core.agentRoutingEventGraph;
  };
  connect.core.agentRoutingEventGraph = new connect.EventGraph()
    .assoc(connect.EventGraph.ANY, connect.AgentStateType.ROUTABLE,
      connect.AgentEvents.ROUTABLE)
    .assoc(connect.EventGraph.ANY, connect.AgentStateType.NOT_ROUTABLE,
      connect.AgentEvents.NOT_ROUTABLE)
    .assoc(connect.EventGraph.ANY, connect.AgentStateType.OFFLINE,
      connect.AgentEvents.OFFLINE);

  /**-----------------------------------------------------------------------*/
  connect.core.getAgentStateEventGraph = function () {
    return connect.core.agentStateEventGraph;
  };
  connect.core.agentStateEventGraph = new connect.EventGraph()
    .assoc(connect.EventGraph.ANY,
      connect.values(connect.AgentErrorStates),
      connect.AgentEvents.ERROR)
    .assoc(connect.EventGraph.ANY, connect.AgentAvailStates.AFTER_CALL_WORK,
      connect.AgentEvents.ACW);

  /**-----------------------------------------------------------------------*/
  connect.core.getContactEventGraph = function () {
    return connect.core.contactEventGraph;
  };

  connect.core.contactEventGraph = new connect.EventGraph()
    .assoc(connect.EventGraph.ANY,
      connect.ContactStateType.INCOMING,
      connect.ContactEvents.INCOMING)
    .assoc(connect.EventGraph.ANY,
      connect.ContactStateType.PENDING,
      connect.ContactEvents.PENDING)
    .assoc(connect.EventGraph.ANY,
      connect.ContactStateType.CONNECTING,
      connect.ContactEvents.CONNECTING)
    .assoc(connect.EventGraph.ANY,
      connect.ContactStateType.CONNECTED,
      connect.ContactEvents.CONNECTED)
    .assoc(connect.ContactStateType.INCOMING,
      connect.ContactStateType.ERROR,
      connect.ContactEvents.MISSED)
    .assoc(connect.EventGraph.ANY,
      connect.ContactStateType.ENDED,
      connect.ContactEvents.ACW)
    .assoc(connect.values(connect.CONTACT_ACTIVE_STATES),
      connect.values(connect.relativeComplement(connect.CONTACT_ACTIVE_STATES, connect.ContactStateType)),
      connect.ContactEvents.ENDED);

  /**-----------------------------------------------------------------------*/
  connect.core.getClient = function () {
    if (!connect.core.client) {
      throw new connect.StateError('The connect core has not been initialized!');
    }
    return connect.core.client;
  };
  connect.core.client = null;

  /**-----------------------------------------------------------------------*/
  connect.core.getMasterClient = function () {
    if (!connect.core.masterClient) {
      throw new connect.StateError('The connect master client has not been initialized!');
    }
    return connect.core.masterClient;
  };
  connect.core.masterClient = null;

  /**-----------------------------------------------------------------------*/
  connect.core.getSoftphoneManager = function () {
    return connect.core.softphoneManager;
  };
  connect.core.softphoneManager = null;

  /**-----------------------------------------------------------------------*/
  connect.core.getNotificationManager = function () {
    if (!connect.core.notificationManager) {
      connect.core.notificationManager = new connect.NotificationManager();
    }
    return connect.core.notificationManager;
  };
  connect.core.notificationManager = null;

  /**-----------------------------------------------------------------------*/
  connect.core.getPopupManager = function () {
    return connect.core.popupManager;
  };
  connect.core.popupManager = new connect.PopupManager();

  /**-----------------------------------------------------------------------*/
  connect.core.getPopupManager = function () {
    return connect.core.popupManager;
  };
  connect.core.popupManager = new connect.PopupManager();

  /**-----------------------------------------------------------------------*/
  connect.core.getUpstream = function () {
    if (!connect.core.upstream) {
      throw new connect.StateError('There is no upstream conduit!');
    }
    return connect.core.upstream;
  };
  connect.core.upstream = null;

  /**-----------------------------------------------------------------------*/
  connect.core.AgentDataProvider = AgentDataProvider;

})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function () {
  var global = this;
  var connect = global.connect || {};
  global.connect = connect;
  global.lily = connect;

  var RingtoneEngineBase = function (ringtoneConfig) {
    var self = this;
    this._prevContactId = null;

    connect.assertNotNull(ringtoneConfig, "ringtoneConfig");
    if (!ringtoneConfig.ringtoneUrl) {
      throw new Error("ringtoneUrl is required!");
    }

    if (global.Audio && typeof global.Promise !== "undefined") {
      this._playableAudioPromise = new Promise(function (resolve, reject) {
        self._audio = new Audio(ringtoneConfig.ringtoneUrl);
        self._audio.loop = true;
        self._audio.addEventListener("canplay", function () {
          self._audioPlayable = true;
          resolve(self._audio);
        });
      });

    } else {
      this._audio = null;
      connect.getLog().error("Unable to provide a ringtone.");
    }

    self._driveRingtone();
  };

  RingtoneEngineBase.prototype._driveRingtone = function () {
    throw new Error("Not implemented.");
  };

  RingtoneEngineBase.prototype._startRingtone = function (contact) {
    if (this._audio) {
      this._audio.play();
      this._publishTelemetryEvent("Ringtone Start", contact);
    }
  };

  RingtoneEngineBase.prototype._stopRingtone = function (contact) {
    if (this._audio) {
      this._audio.pause();
      this._audio.currentTime = 0;
      this._publishTelemetryEvent("Ringtone Stop", contact);
    }
  };

  /**
   * Stop ringtone.
   */
  RingtoneEngineBase.prototype.stopRingtone = function () {
    this._stopRingtone();
  };

  RingtoneEngineBase.prototype._ringtoneSetup = function (contact) {
    var self = this;
    connect.ifMaster(connect.MasterTopics.RINGTONE, function () {
      self._startRingtone(contact);
      self._prevContactId = contact.getContactId();

      contact.onConnected(lily.hitch(self, self._stopRingtone));
      contact.onAccepted(lily.hitch(self, self._stopRingtone));
      contact.onEnded(lily.hitch(self, self._stopRingtone));
      // Just to make sure to stop the ringtone in case of the failures of specific callbacks(onAccepted,onConnected);
      contact.onRefresh(function (contact) {
        if (contact.getStatus().type !== connect.ContactStatusType.CONNECTING) {
          self._stopRingtone();
        }
      });
    });
  };

  RingtoneEngineBase.prototype._publishTelemetryEvent = function (eventName, contact) {
    if (contact && contact.getContactId()) {
      connect.publishMetric({
        name: eventName,
        contactId: contact.getContactId()
      });
    }
  };

  /**
   * Change the audio device used to play ringtone.
   * If audio element is not fully initialized, the API will wait _audioPlayablePromise for 3 seconds and fail on timeout.
   * This API is supported only by browsers that implemented ES6 Promise and http://www.w3.org/TR/audio-output/
   * Return a Promise that indicates the result of changing output device.
   */
  RingtoneEngineBase.prototype.setOutputDevice = function (deviceId) {
    if (this._playableAudioPromise) {
      var playableAudioWithTimeout = Promise.race([
        this._playableAudioPromise,
        new Promise(function (resolve, reject) {
          global.setTimeout(function () { reject("Timed out waiting for playable audio"); }, 3000/*ms*/);
        })
      ]);
      return playableAudioWithTimeout.then(function (audio) {
        if (audio.setSinkId) {
          return Promise.resolve(audio.setSinkId(deviceId));
        } else {
          return Promise.reject("Not supported");
        }
      });
    }

    if (global.Promise) {
      return Promise.reject("Not eligible ringtone owner");
    }
  };

  var VoiceRingtoneEngine = function (ringtoneConfig) {
    RingtoneEngineBase.call(this, ringtoneConfig);
  };
  VoiceRingtoneEngine.prototype = Object.create(RingtoneEngineBase.prototype);
  VoiceRingtoneEngine.prototype.constructor = VoiceRingtoneEngine;

  VoiceRingtoneEngine.prototype._driveRingtone = function () {
    var self = this;

    var onContactConnect = function (contact) {
      if (contact.getType() === lily.ContactType.VOICE &&
        contact.isSoftphoneCall() && contact.isInbound()) {
        self._ringtoneSetup(contact);
        self._publishTelemetryEvent("Ringtone Connecting", contact);
      }
    };

    connect.contact(function (contact) {
      contact.onConnecting(onContactConnect);
    });

    new connect.Agent().getContacts().forEach(function (contact) {
      if (contact.getStatus().type === connect.ContactStatusType.CONNECTING) {
        onContactConnect(contact);
      }
    });
  };


  var ChatRingtoneEngine = function (ringtoneConfig) {
    RingtoneEngineBase.call(this, ringtoneConfig);
  };
  ChatRingtoneEngine.prototype = Object.create(RingtoneEngineBase.prototype);
  ChatRingtoneEngine.prototype.constructor = ChatRingtoneEngine;

  ChatRingtoneEngine.prototype._driveRingtone = function () {
    var self = this;

    var onContactConnect = function (contact) {
      if (contact.getType() === lily.ContactType.CHAT && contact.isInbound()) {
        self._ringtoneSetup(contact);
        self._publishTelemetryEvent("Chat Ringtone Connecting", contact);
      }
    };

    connect.contact(function (contact) {
      contact.onConnecting(onContactConnect);
    });
  };

  var QueueCallbackRingtoneEngine = function (ringtoneConfig) {
    RingtoneEngineBase.call(this, ringtoneConfig);
  };
  QueueCallbackRingtoneEngine.prototype = Object.create(RingtoneEngineBase.prototype);
  QueueCallbackRingtoneEngine.prototype.constructor = QueueCallbackRingtoneEngine;

  QueueCallbackRingtoneEngine.prototype._driveRingtone = function () {
    var self = this;

    connect.contact(function (contact) {
      contact.onIncoming(function () {
        if (contact.getType() === lily.ContactType.QUEUE_CALLBACK) {
          self._ringtoneSetup(contact);
          self._publishTelemetryEvent("Callback Ringtone Connecting", contact);
        }
      });
    });
  };

  /* export connect.RingtoneEngine */
  connect.VoiceRingtoneEngine = VoiceRingtoneEngine;
  connect.ChatRingtoneEngine = ChatRingtoneEngine;
  connect.QueueCallbackRingtoneEngine = QueueCallbackRingtoneEngine;
})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function() {
    var global = this;
    connect = global.connect || {};
    global.connect = connect;
    global.lily = connect;

    var RTPJobIntervalMs = 1000;
    var statsReportingJobIntervalMs = 30000;
    var streamBufferSize = 500;
    var CallTypeMap = {};
    CallTypeMap[connect.SoftphoneCallType.AUDIO_ONLY] = 'Audio';
    CallTypeMap[connect.SoftphoneCallType.VIDEO_ONLY] = 'Video';
    CallTypeMap[connect.SoftphoneCallType.AUDIO_VIDEO] = 'AudioVideo';
    CallTypeMap[connect.SoftphoneCallType.NONE] = 'None';
    var AUDIO_INPUT = 'audio_input';
    var AUDIO_OUTPUT = 'audio_output';

    var MediaTypeMap = {};
    MediaTypeMap[connect.ContactType.VOICE] = "Voice";
    var UNKNOWN_MEDIA_TYPE = "Unknown";

    var timeSeriesStreamStatsBuffer = [];
    var aggregatedUserAudioStats = {};
    var aggregatedRemoteAudioStats = {};
    var rtpStatsJob = null;
    var reportStatsJob = null;
    //Logger specific to softphone.
    var logger = null;
    var SoftphoneErrorTypes = connect.SoftphoneErrorTypes;
    var HANG_UP_MULTIPLE_SESSIONS_EVENT = "MultiSessionHangUp";
    var MULTIPLE_SESSIONS_EVENT = "MultiSessions";

    var localMediaStream = {};

    var softphoneClientId = connect.randomId();

    var requestIceAccess = function (transport) {
        return new Promise(function (resolve, reject) {
            connect.core.getClient().call(connect.ClientMethods.CREATE_TRANSPORT, transport, {
                success: function (data) {
                    resolve(data.softphoneTransport.softphoneMediaConnections);
                },
                failure: function (reason) {
                    if (reason.message && reason.message.includes("SoftphoneConnectionLimitBreachedException")) {
                        publishError("multiple_softphone_active_sessions", "Number of active sessions are more then allowed limit.");
                    }
                    reject(Error("requestIceAccess failed"));
                },
                authFailure: function () {
                    reject(Error("Authentication failed while requestIceAccess"));
                },
                accessDenied: function () {
                    reject(Error("Access Denied while requestIceAccess"));
                }
            });
        });
    };

    var SoftphoneManager = function(softphoneParams) {
        var self = this;
        logger = new SoftphoneLogger(connect.getLog());
        var rtcPeerConnectionFactory;
        if (connect.RtcPeerConnectionFactory) {
            rtcPeerConnectionFactory = new connect.RtcPeerConnectionFactory(logger,
                connect.core.getWebSocketManager(),
                softphoneClientId,
                connect.hitch(self, requestIceAccess, {
                    transportType: "softphone",
                    softphoneClientId: softphoneClientId
                }),
                connect.hitch(self, publishError));
        }
        if (!isBrowserSoftPhoneSupported()) {
            publishError(SoftphoneErrorTypes.UNSUPPORTED_BROWSER,
                      "Connect does not support this browser. Some functionality may not work. ",
                      "");
        }
        var gumPromise = fetchUserMedia({
            success: function(stream) {
                if (connect.isFirefoxBrowser()) {
                    connect.core.setSoftphoneUserMediaStream(stream);
                }
            },
            failure: function(err) {
                publishError(err, "Your microphone is not enabled in your browser. ", "");
            }
        });
        handleSoftPhoneMuteToggle();

        this.ringtoneEngine = null;
        var cleanMultipleSessions = 'true' === softphoneParams.cleanMultipleSessions;
        var rtcSessions = {};
        // Tracks the agent connection ID, so that if the same contact gets re-routed to the same agent, it'll still set up softphone
        var callsDetected = {};

        // helper method to provide access to rtc sessions
        this.getSession = function(connectionId){
          return rtcSessions[connectionId];
        }

        var isContactTerminated = function(contact) {
            return contact.getStatus().type === connect.ContactStatusType.ENDED ||
                   contact.getStatus().type === connect.ContactStatusType.ERROR ||
                   contact.getStatus().type === connect.ContactStatusType.MISSED;
        };

        var destroySession = function (agentConnectionId) {
            if (rtcSessions.hasOwnProperty(agentConnectionId)) {
                var session = rtcSessions[agentConnectionId];
                // Currently the assumption is it will throw an exception only and if only it already has been hung up.
                // TODO: Update once the hangup API does not throw exceptions
                new Promise(function(resolve, reject){
                    delete rtcSessions[agentConnectionId];
                    delete callsDetected[agentConnectionId];
                    session.hangup();
                }).catch(function(err){
                    lily.getLog().warn("Clean up the session locally " + agentConnectionId, err.message);
                });
            }
        };

        // When feature access control flag is on, ignore the new call and hang up the previous sessions.
        // Otherwise just log the contact and agent in the client side metrics.
        // TODO: Update when connect-rtc exposes an API to detect session status.
        var sanityCheckActiveSessions = function(rtcSessions) {
            if (Object.keys(rtcSessions).length > 0) {
                if (cleanMultipleSessions) {
                    // Error! our state doesn't match, tear it all down.
                    for (var connectionId in rtcSessions) {
                        if (rtcSessions.hasOwnProperty(connectionId)) {
                            // Log an error for the session we are about to kill.
                            publishMultipleSessionsEvent(HANG_UP_MULTIPLE_SESSIONS_EVENT, rtcSessions[connectionId].callId, connectionId);
                            destroySession(connectionId);
                        }
                    }
                    throw new Error("duplicate session detected, refusing to setup new connection");
                } else {
                    for (var _connectionId in rtcSessions) {
                        if (rtcSessions.hasOwnProperty(_connectionId)) {
                            publishMultipleSessionsEvent(MULTIPLE_SESSIONS_EVENT, rtcSessions[_connectionId].callId, _connectionId);
                        }
                    }
                }
            }
        };

        var onRefreshContact = function(contact, agentConnectionId) {
                if (rtcSessions[agentConnectionId] && isContactTerminated(contact)) {
                    destroySession(agentConnectionId);
                }
                if (contact.isSoftphoneCall() && !callsDetected[agentConnectionId] && (
                        contact.getStatus().type === connect.ContactStatusType.CONNECTING ||
                        contact.getStatus().type === connect.ContactStatusType.INCOMING)) {

                    // Set to true, this will block subsequent invokes from entering.
                    callsDetected[agentConnectionId] = true;
                    logger.info("Softphone call detected:", "contactId " + contact.getContactId(), "agent connectionId " + agentConnectionId);

                    // Ensure our session state matches our contact state to prevent issues should we lose track of a contact.
                    sanityCheckActiveSessions(rtcSessions);

                    if (contact.getStatus().type === connect.ContactStatusType.CONNECTING) {
                        publishTelemetryEvent("Softphone Connecting", contact.getContactId());
                    }

                    initializeParams();
                    var softphoneInfo = contact.getAgentConnection().getSoftphoneMediaInfo();
                    var callConfig = parseCallConfig(softphoneInfo.callConfigJson);
                    var webSocketProvider;
                    if (callConfig.useWebSocketProvider) {
                        webSocketProvider = connect.core.getWebSocketManager();
                    }
                    var session = new connect.RTCSession(
                        callConfig.signalingEndpoint,
                        callConfig.iceServers,
                        softphoneInfo.callContextToken,
                        logger,
                        contact.getContactId(),
                        agentConnectionId,
                        webSocketProvider);

                    rtcSessions[agentConnectionId] = session;

                    if (connect.core.getSoftphoneUserMediaStream()) {
                        session.mediaStream = connect.core.getSoftphoneUserMediaStream();
                    }

                     // Custom Event to indicate the session init operations
                    connect.core.upstream.sendUpstream(connect.EventType.BROADCAST, {
                      event: connect.ConnnectionEvents.SESSION_INIT,
                      data: {
                        connectionId: agentConnectionId
                      }
                    });

                    session.onSessionFailed = function (rtcSession, reason) {
                        delete rtcSessions[agentConnectionId];
                        delete callsDetected[agentConnectionId];
                        publishSoftphoneFailureLogs(rtcSession, reason);
                        publishSessionFailureTelemetryEvent(contact.getContactId(), reason);
                        stopJobsAndReport(contact, rtcSession.sessionReport);
                    };
                    session.onSessionConnected = function (rtcSession) {
                        publishTelemetryEvent("Softphone Session Connected", contact.getContactId());
                        // Become master to send logs, since we need logs from softphone tab.
                        connect.becomeMaster(connect.MasterTopics.SEND_LOGS);
                        //start stats collection and reporting jobs
                        startStatsCollectionJob(rtcSession);
                        startStatsReportingJob(contact);
                        fireContactAcceptedEvent(contact);
                    };

                    session.onSessionCompleted = function (rtcSession) {
                        publishTelemetryEvent("Softphone Session Completed", contact.getContactId());

                        delete rtcSessions[agentConnectionId];
                        delete callsDetected[agentConnectionId];
                        // Stop all jobs and perform one last job.
                        stopJobsAndReport(contact, rtcSession.sessionReport);

                        // Cleanup the cached streams
                        deleteLocalMediaStream(agentConnectionId);
                    };

                    session.onLocalStreamAdded = function (rtcSession, stream) {
                       // Cache the streams for mute/unmute
                       localMediaStream[agentConnectionId] = {
                            stream: stream
                        };
                    };

                    session.remoteAudioElement = document.getElementById('remote-audio');
                    if (rtcPeerConnectionFactory) {
                        session.connect(rtcPeerConnectionFactory.get(callConfig.iceServers));
                    } else {
                        session.connect();
                    }
                }
        };

        var onInitContact = function(contact){
            var agentConnectionId = contact.getAgentConnection().connectionId;
            logger.info("Contact detected:", "contactId " + contact.getContactId(), "agent connectionId " + agentConnectionId);

            if (!callsDetected[agentConnectionId]) {
                contact.onRefresh(function() {
                    onRefreshContact(contact, agentConnectionId);
                });
            }
        };

        connect.contact(onInitContact);

        // Contact already in connecting state scenario - In this case contact INIT is missed hence the OnRefresh callback is missed. 
        new connect.Agent().getContacts().forEach(function(contact){
            var agentConnectionId = contact.getAgentConnection().connectionId;
            logger.info("Contact exist in the snapshot. Reinitiate the Contact and RTC session creation for contactId" + contact.getContactId(), "agent connectionId " + agentConnectionId);
            onInitContact(contact);
            onRefreshContact(contact, agentConnectionId);
        });
    };

    var fireContactAcceptedEvent = function(contact) {
        var conduit = connect.core.getUpstream();
        var agentConnection = contact.getAgentConnection();
        if (!agentConnection) {
            logger.info("Not able to retrieve the auto-accept setting from null AgentConnection, ignoring event publish..");
            return;
        }
        var softphoneMediaInfo = agentConnection.getSoftphoneMediaInfo();
        if (!softphoneMediaInfo) {
            logger.info("Not able to retrieve the auto-accept setting from null SoftphoneMediaInfo, ignoring event publish..");
            return;
        }
        if (softphoneMediaInfo.autoAccept === true) {
            logger.info("Auto-accept is enabled, sending out Accepted event to stop ringtone..");
            conduit.sendUpstream(connect.EventType.BROADCAST, {
                event: connect.ContactEvents.ACCEPTED
            });
            conduit.sendUpstream(connect.EventType.BROADCAST, {
                event: connect.core.getContactEventName(connect.ContactEvents.ACCEPTED, contact.contactId)
            });
        } else {
            logger.info("Auto-accept is disabled, ringtone will be stopped by user action.");
        }
    };
    
    // Bind events for mute
    var handleSoftPhoneMuteToggle = function(){
        var bus = connect.core.getEventBus();
        bus.subscribe(connect.EventType.MUTE, muteToggle);
    };

    // Make sure once we disconnected we get the mute state back to normal
    var deleteLocalMediaStream = function(connectionId){
        delete localMediaStream[connectionId];
        connect.core.getUpstream().sendUpstream(connect.EventType.BROADCAST, {
          event: connect.AgentEvents.MUTE_TOGGLE,
          data: {muted: false}
        });
    };

    // Check for the local streams if exists  -  revert it
    // And inform other clients about the change 
    var muteToggle = function(data){
        var status;
        if(connect.keys(localMediaStream).length === 0){
            return;
        }

        if(data && data.mute !== undefined){
          status = data.mute;
        }

        for(var connectionId in localMediaStream){
          if (localMediaStream.hasOwnProperty(connectionId)) {
            var localMedia = localMediaStream[connectionId].stream;
            if(localMedia){
              var audioTracks = localMedia.getAudioTracks()[0];
              if(status !== undefined){
                audioTracks.enabled = !status;
                localMediaStream[connectionId].muted = status;

                if(status){
                    logger.info("Agent has muted the contact, connectionId -  " + connectionId);
                }else{
                    logger.info("Agent has unmuted the contact, connectionId - " + connectionId);
                }

              }else{
                status = localMediaStream[connectionId].muted || false;
              }
            }
          }
        }

        connect.core.getUpstream().sendUpstream(connect.EventType.BROADCAST, {
          event: connect.AgentEvents.MUTE_TOGGLE,
          data: {muted: status}
        });
    };

    var publishSoftphoneFailureLogs = function (rtcSession, reason) {
        if (reason === connect.RTCErrors.ICE_COLLECTION_TIMEOUT) {
            var endPointUrl = "\n";
            for (var i = 0; i < rtcSession._iceServers.length; i++) {
                for (var j = 0; j < rtcSession._iceServers[i].urls.length; j++) {
                    endPointUrl = endPointUrl + rtcSession._iceServers[i].urls[j] + "\n";
                }
            }
            publishError(SoftphoneErrorTypes.ICE_COLLECTION_TIMEOUT, "Ice collection timedout. ", endPointUrl);
        } else if (reason === connect.RTCErrors.USER_BUSY) {
            publishError(SoftphoneErrorTypes.USER_BUSY_ERROR,
                "Softphone call UserBusy error. ",
                "");
        } else if (reason === connect.RTCErrors.SIGNALLING_HANDSHAKE_FAILURE) {
            publishError(SoftphoneErrorTypes.SIGNALLING_HANDSHAKE_FAILURE,
                "Handshaking with Signalling Server " + rtcSession._signalingUri + " failed. ",
                rtcSession._signalingUri);
        } else if (reason === connect.RTCErrors.GUM_TIMEOUT_FAILURE || reason === connect.RTCErrors.GUM_OTHER_FAILURE) {
            publishError(SoftphoneErrorTypes.MICROPHONE_NOT_SHARED,
                "Your microphone is not enabled in your browser. ",
                "");
        } else if (reason === connect.RTCErrors.SIGNALLING_CONNECTION_FAILURE) {
            publishError(SoftphoneErrorTypes.SIGNALLING_CONNECTION_FAILURE,
                "URL " + rtcSession._signalingUri + " cannot be reached. ",
                rtcSession._signalingUri);
        } else if (reason === connect.RTCErrors.CALL_NOT_FOUND) {
            // No need to publish any softphone error for this case. CCP UX will handle this case.
            logger.error("Softphone call failed due to CallNotFoundException.");
        } else {
            publishError(SoftphoneErrorTypes.WEBRTC_ERROR,
                "webrtc system error. ",
                "");
        }
    };

    /** Parse the JSON encoded web call config into the data it represents. */
    var parseCallConfig = function(serializedConfig) {
        // Our underscore is too old for unescape
        // https://issues.amazon.com/issues/CSWF-1467
        var decodedJSON = serializedConfig.replace(/&quot;/g, '"');
        return JSON.parse(decodedJSON);
    };

    var fetchUserMedia = function(callbacksIn) {
        var callbacks = callbacksIn || {};
        callbacks.success = callbacks.success || function() {};
        callbacks.failure = callbacks.failure || function() {};

        var CONSTRAINT = {
            audio: true
        };

        var promise = null;

        if (typeof Promise !== "function") {
            callbacks.failure(SoftphoneErrorTypes.UNSUPPORTED_BROWSER);
            return;
        }

        if (typeof navigator.mediaDevices === "object" && typeof navigator.mediaDevices.getUserMedia === "function") {
            promise = navigator.mediaDevices.getUserMedia(CONSTRAINT);

        } else if (typeof navigator.webkitGetUserMedia === "function") {
            promise = new Promise(function(resolve, reject) {
                navigator.webkitGetUserMedia(CONSTRAINT, resolve, reject);
            });

        } else {
            callbacks.failure(SoftphoneErrorTypes.UNSUPPORTED_BROWSER);
            return;
        }

        promise.then(function(stream) {
            var audioTracks = stream.getAudioTracks();
            if (audioTracks && audioTracks.length > 0) {
                callbacks.success(stream);
            } else {
                callbacks.failure(SoftphoneErrorTypes.MICROPHONE_NOT_SHARED);
            }
        }, function(err) {
            callbacks.failure(SoftphoneErrorTypes.MICROPHONE_NOT_SHARED);
        });
        return promise;
    };

    var publishError = function(errorType, message, endPointUrl) {
        var bus = connect.core.getEventBus();
        logger.error("Softphone error occurred : ", errorType,
            message || "");

        connect.core.upstream.sendUpstream(connect.EventType.BROADCAST, {
            event: connect.AgentEvents.SOFTPHONE_ERROR,
            data: new connect.SoftphoneError(errorType, message, endPointUrl)
        });
    };

    var publishSessionFailureTelemetryEvent = function(contactId, reason) {
        publishTelemetryEvent("Softphone Session Failed", contactId, {
            failedReason: reason
        });
    };

    var publishTelemetryEvent = function(eventName, contactId, data) {
        if (contactId) {
            connect.publishMetric({
                name: eventName,
                contactId: contactId,
                data: data
            });
        }
    };

    // Publish the contact and agent information in a multiple sessions scenarios
    var publishMultipleSessionsEvent = function(eventName, contactId, agentConnectionId) {
        publishTelemetryEvent(eventName, contactId, [{
            name: "AgentConnectionId",
            value: agentConnectionId
        }]);
        logger.info("Publish multiple session error metrics", eventName, "contactId " + contactId, "agent connectionId " + agentConnectionId);
    };

    var isBrowserSoftPhoneSupported = function () {
        // In Opera, the true version is after "Opera" or after "Version"
        if (connect.isOperaBrowser() && connect.getOperaBrowserVersion() > 17) {
            return true;
        }
        // In Chrome, the true version is after "Chrome"
        else if (connect.isChromeBrowser() && connect.getChromeBrowserVersion() > 22) {
            return true;
        }
        // In Firefox, the true version is after "Firefox"
        else if (connect.isFirefoxBrowser() && connect.getFirefoxBrowserVersion() > 21) {
            return true;
        } else {
            return false;
        }
    };

    var sendSoftphoneMetrics = function(contact) {
        var streamStats = timeSeriesStreamStatsBuffer.slice();
        timeSeriesStreamStatsBuffer = [];
        if (streamStats.length > 0) {
            contact.sendSoftphoneMetrics(streamStats, {
               success: function(){
                   logger.info("sendSoftphoneMetrics success");
               },
               failure: function(data){
                   logger.error("sendSoftphoneMetrics failed.")
                      .withObject(data);
               }
            });
        }
    };

    var sendSoftphoneReport = function(contact, report, userAudioStats, remoteAudioStats) {
        report.streamStats = [ addStreamTypeToStats(userAudioStats, AUDIO_INPUT),
                                addStreamTypeToStats(remoteAudioStats, AUDIO_OUTPUT) ];
        var callReport = {
                        callStartTime: report.sessionStartTime,
                        callEndTime: report.sessionEndTime,
                        gumTimeMillis: report.gumTimeMillis,
                        initializationTimeMillis: report.initializationTimeMillis,
                        iceCollectionTimeMillis: report.iceCollectionTimeMillis,
                        signallingConnectTimeMillis: report.signallingConnectTimeMillis,
                        handshakingTimeMillis: report.handshakingTimeMillis,
                        preTalkingTimeMillis: report.preTalkingTimeMillis,
                        talkingTimeMillis: report.talkingTimeMillis,
                        cleanupTimeMillis: report.cleanupTimeMillis,
                        iceCollectionFailure: report.iceCollectionFailure,
                        signallingConnectionFailure: report.signallingConnectionFailure,
                        handshakingFailure: report.handshakingFailure,
                        gumOtherFailure: report.gumOtherFailure,
                        gumTimeoutFailure: report.gumTimeoutFailure,
                        createOfferFailure: report.createOfferFailure,
                        setLocalDescriptionFailure: report.setLocalDescriptionFailure,
                        userBusyFailure: report.userBusyFailure,
                        invalidRemoteSDPFailure: report.invalidRemoteSDPFailure,
                        noRemoteIceCandidateFailure: report.noRemoteIceCandidateFailure,
                        setRemoteDescriptionFailure: report.setRemoteDescriptionFailure,
                        softphoneStreamStatistics: report.streamStats
                      };
        contact.sendSoftphoneReport(callReport, {
            success: function(){
                logger.info("sendSoftphoneReport success");
            },
            failure: function(data){
                logger.error("sendSoftphoneReport failed.")
                    .withObject(data);
            }
        });
    };

    var startStatsCollectionJob = function(rtcSession) {
        rtpStatsJob = window.setInterval(function() {
            rtcSession.getUserAudioStats().then(function(stats) {
                var previousUserStats = aggregatedUserAudioStats;
                aggregatedUserAudioStats = stats;
                timeSeriesStreamStatsBuffer.push(getTimeSeriesStats(aggregatedUserAudioStats, previousUserStats, AUDIO_INPUT));
            }, function(error) {
                logger.debug("Failed to get user audio stats.", error);
            });
            rtcSession.getRemoteAudioStats().then(function(stats) {
                var previousRemoteStats = aggregatedRemoteAudioStats;
                aggregatedRemoteAudioStats = stats;
                timeSeriesStreamStatsBuffer.push(getTimeSeriesStats(aggregatedRemoteAudioStats, previousRemoteStats, AUDIO_OUTPUT));
            }, function(error) {
                logger.debug("Failed to get remote audio stats.", error);
            });
        }, 1000);
    };

    var startStatsReportingJob = function(contact) {
        reportStatsJob = window.setInterval(function() {
                           sendSoftphoneMetrics(contact);
        }, statsReportingJobIntervalMs);
    };

    var initializeParams = function() {
        aggregatedUserAudioStats = null;
        aggregatedRemoteAudioStats = null;
        timeSeriesStreamStatsBuffer = [];
        rtpStatsJob = null;
        reportStatsJob = null;
    };

    var getTimeSeriesStats = function(currentStats, previousStats, streamType) {
        if (previousStats && currentStats) {
            var packetsLost = currentStats.packetsLost > previousStats.packetsLost ? currentStats.packetsLost - previousStats.packetsLost : 0;
            var packetsCount = currentStats.packetsCount > previousStats.packetsCount ? currentStats.packetsCount - previousStats.packetsCount : 0;
            return new RTPStreamStats(currentStats.timestamp,
                                      packetsLost,
                                      packetsCount,
                                      streamType,
                                      currentStats.audioLevel,
                                      currentStats.jbMilliseconds,
                                      currentStats.rttMilliseconds);
        } else {
            return new RTPStreamStats(currentStats.timestamp,
                                      currentStats.packetsLost,
                                      currentStats.packetsCount,
                                      streamType,
                                      currentStats.audioLevel,
                                      currentStats.jbMilliseconds,
                                      currentStats.rttMilliseconds);
        }
    };

    var stopJob = function(task) {
        if (task !== null){
            window.clearInterval(task);
        }
        return null;
    };

    var stopJobsAndReport = function(contact, sessionReport) {
       rtpStatsJob = stopJob(rtpStatsJob);
       reportStatsJob = stopJob(reportStatsJob);
       sendSoftphoneReport(contact, sessionReport, addStreamTypeToStats(aggregatedUserAudioStats, AUDIO_INPUT), addStreamTypeToStats(aggregatedRemoteAudioStats, AUDIO_OUTPUT));
       sendSoftphoneMetrics(contact);
    };

    /**
    *   Adding streamtype parameter on top of RTCJS RTStats object.
    */
    var RTPStreamStats = function(timestamp, packetsLost, packetsCount, streamType, audioLevel, jitterBufferMillis, roundTripTimeMillis) {
        this.softphoneStreamType = streamType;
        this.timestamp = timestamp;
        this.packetsLost = packetsLost;
        this.packetsCount = packetsCount;
        this.audioLevel = audioLevel;
        this.jitterBufferMillis = jitterBufferMillis;
        this.roundTripTimeMillis = roundTripTimeMillis;
    };

    var addStreamTypeToStats = function(stats, streamType) {
        stats = stats || {};
        return new RTPStreamStats(stats.timestamp, stats.packetsLost, stats.packetsCount, streamType, stats.audioLevel);
    };

    var SoftphoneLogger = function(logger) {
        this._originalLogger = logger;
        var self = this;
        this._tee = function(level, method) {
            return function() {
                // call the original logger object to output to browser
                //Connect logger follows %s format to print objects to console.
                var args = Array.prototype.slice.call(arguments[0]);
                var format = "";
                args.forEach(function(){
                    format = format + " %s";
                });
                method.apply(self._originalLogger, [connect.LogComponent.SOFTPHONE, format].concat(args));
            };
        };
    };

    SoftphoneLogger.prototype.debug =  function() {
        this._tee(1, this._originalLogger.debug)(arguments);
    };
    SoftphoneLogger.prototype.info =  function() {
        this._tee(2, this._originalLogger.info)(arguments);
    };
    SoftphoneLogger.prototype.log =  function() {
        this._tee(3, this._originalLogger.log)(arguments);
    };
    SoftphoneLogger.prototype.warn =  function() {
        this._tee(4, this._originalLogger.warn)(arguments);
    };
    SoftphoneLogger.prototype.error =  function() {
        this._tee(5, this._originalLogger.error)(arguments);
    };

    connect.SoftphoneManager = SoftphoneManager;
})();
/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */
(function () {
  var global = this;
  connect = global.connect || {};
  global.connect = connect;
  global.lily = connect;

  connect.worker = {};

  var GET_AGENT_TIMEOUT_MS = 30000;
  var GET_AGENT_RECOVERY_TIMEOUT_MS = 5000;
  var GET_AGENT_SUCCESS_TIMEOUT_MS = 100;
  var LOG_BUFFER_CAP_SIZE = 400;

  var CHECK_AUTH_TOKEN_INTERVAL_MS = 300000; // 5 minuts
  var REFRESH_AUTH_TOKEN_INTERVAL_MS = 10000; // 10 seconds
  var REFRESH_AUTH_TOKEN_MAX_TRY = 4;

  var GET_AGENT_CONFIGURATION_INTERVAL_MS = 30000;

  /**-----------------------------------------------------------------------*/
  var MasterTopicCoordinator = function () {
    this.topicMasterMap = {};
  };

  MasterTopicCoordinator.prototype.getMaster = function (topic) {
    connect.assertNotNull(topic, 'topic');
    return this.topicMasterMap[topic] || null;
  };

  MasterTopicCoordinator.prototype.setMaster = function (topic, id) {
    connect.assertNotNull(topic, 'topic');
    connect.assertNotNull(id, 'id');
    this.topicMasterMap[topic] = id;
  };

  MasterTopicCoordinator.prototype.removeMaster = function (id) {
    connect.assertNotNull(id, 'id');
    var self = this;

    connect.entries(this.topicMasterMap).filter(function (entry) {
      return entry.value === id;
    }).forEach(function (entry) {
      delete self.topicMasterMap[entry.key];
    });
  };

  /**---------------------------------------------------------------
   * class WorkerClient extends ClientBase
   */
  var WorkerClient = function (conduit) {
    connect.ClientBase.call(this);
    this.conduit = conduit;
  };
  WorkerClient.prototype = Object.create(connect.ClientBase.prototype);
  WorkerClient.prototype.constructor = WorkerClient;

  WorkerClient.prototype._callImpl = function (method, params, callbacks) {
    var self = this;
    var request_start = new Date().getTime();
    connect.core.getClient()._callImpl(method, params, {
      success: function (data) {
        self._recordAPILatency(method, request_start);
        callbacks.success(data);
      },
      failure: function (error, data) {
        self._recordAPILatency(method, request_start, error);
        callbacks.failure(error, data);
      },
      authFailure: function () {
        self._recordAPILatency(method, request_start);
        callbacks.authFailure();
      },
      accessDenied: function () {
        callbacks.accessDenied && callbacks.accessDenied();
      }
    });
  };

  WorkerClient.prototype._recordAPILatency = function (method, request_start, err) {
    var request_end = new Date().getTime();
    var request_time = request_end - request_start;
    this._sendAPIMetrics(method, request_time, err);
  };

  WorkerClient.prototype._sendAPIMetrics = function (method, time, err) {
    this.conduit.sendDownstream(connect.EventType.API_METRIC, {
      name: method,
      time: time,
      dimensions: [
        {
          name: "Category",
          value: "API"
        }
      ],
      error: err
    });
  };

  /**-------------------------------------------------------------------------
   * The object responsible for polling and passing data downstream to all
   * consumer ports.
   */
  var ClientEngine = function () {
    var self = this;

    this.multiplexer = new connect.StreamMultiplexer();
    this.conduit = new connect.Conduit("AmazonConnectSharedWorker", null, this.multiplexer);
    this.client = new WorkerClient(this.conduit);
    this.timeout = null;
    this.agent = null;
    this.nextToken = null;
    this.initData = {};
    this.portConduitMap = {};
    this.masterCoord = new MasterTopicCoordinator();
    this.logsBuffer = [];
  
    var webSocketManager = null;

    connect.rootLogger = new connect.DownstreamConduitLogger(this.conduit);

    this.conduit.onDownstream(connect.EventType.SEND_LOGS, function (logsToUpload) {
      self.logsBuffer = self.logsBuffer.concat(logsToUpload);
      //only call API to send logs if buffer reached cap
      if (self.logsBuffer.length > LOG_BUFFER_CAP_SIZE) {
        self.handleSendLogsRequest(self.logsBuffer);
      }
    });
    this.conduit.onDownstream(connect.EventType.CONFIGURE, function (data) {
      if (data.authToken && data.authToken !== self.initData.authToken) {
        self.initData = data;
        connect.core.init(data);

        // Start polling for agent data.
        if (!self.agentPolling) {
          connect.getLog().info("Kicking off agent polling");
          self.agentPolling = true;
          self.pollForAgent();
        } else {
          connect.getLog().info("Not kicking off new agent polling, since there's already polling going on");
        }
        if (!self.configPolling) {
          connect.getLog().info("Kicking off config polling");
          self.configPolling = true;
          self.pollForAgentConfiguration({ repeatForever: true });
        } else {
          connect.getLog().info("Not kicking off new config polling, since there's already polling going on");
        }
        if (!global.checkAuthTokenInterval) {
          connect.getLog().info("Kicking off auth token polling");
          global.checkAuthTokenInterval = global.setInterval(connect.hitch(self, self.checkAuthToken), CHECK_AUTH_TOKEN_INTERVAL_MS);
        } else {
          connect.getLog().info("Not kicking off auth token polling, since there's already polling going on");
        }

        // init only once.
        if(!webSocketManager){

          connect.getLog().info("Creating a new Websocket connection for CCP");

          connect.WebSocketManager.setGlobalConfig({
            loggerConfig: { logger: connect.getLog() }
          });
          
          webSocketManager = connect.WebSocketManager.create();

          webSocketManager.onInitFailure(function () {
            self.conduit.sendDownstream(connect.WebSocketEvents.INIT_FAILURE);
          });

          webSocketManager.onConnectionGain(function () {
            self.conduit.sendDownstream(connect.WebSocketEvents.CONNECTION_GAIN);
          });

          webSocketManager.onConnectionLost(function () {
            self.conduit.sendDownstream(connect.WebSocketEvents.CONNECTION_LOST);
          });

          webSocketManager.onSubscriptionUpdate(function (response) {
            self.conduit.sendDownstream(connect.WebSocketEvents.SUBSCRIPTION_UPDATE, response);
          });

          webSocketManager.onSubscriptionFailure(function (response) {
            self.conduit.sendDownstream(connect.WebSocketEvents.SUBSCRIPTION_FAILURE, response);
          });
          webSocketManager.onAllMessage(function (response) {
            self.conduit.sendDownstream(connect.WebSocketEvents.ALL_MESSAGE, response);
          });

          self.conduit.onDownstream(connect.WebSocketEvents.SEND, function (message) {
            webSocketManager.sendMessage(message);
          });

          self.conduit.onDownstream(connect.WebSocketEvents.SUBSCRIBE, function (topics) {
            webSocketManager.subscribeTopics(topics);
          });

          webSocketManager.init(connect.hitch(self, self.getConnectionDetails, { transportType: "web_socket" }));
        } else{
          connect.getLog().info("Not Creating a Websocket instance, since there's already one exist");
        }
      }
    });
    this.conduit.onDownstream(connect.EventType.TERMINATE, function () {
      //upload pending logs before terminating.
      self.handleSendLogsRequest(self.logsBuffer);
      connect.core.terminate();
      self.conduit.sendDownstream(connect.EventType.TERMINATED);
    });
    this.conduit.onDownstream(connect.EventType.SYNCHRONIZE, function () {
      self.conduit.sendDownstream(connect.EventType.ACKNOWLEDGE);
    });
    this.conduit.onDownstream(connect.EventType.BROADCAST, function (data) {
      self.conduit.sendDownstream(data.event, data.data);
    });

    /**
     * Called when a consumer port connects to this SharedWorker.
     * Let's add them to our multiplexer.
     */
    global.onconnect = function (event) {
      var port = event.ports[0];
      var stream = new connect.PortStream(port);
      self.multiplexer.addStream(stream);
      port.start();

      var portConduit = new connect.Conduit(stream.getId(), null, stream);
      portConduit.sendDownstream(connect.EventType.ACKNOWLEDGE, { id: stream.getId() });

      self.portConduitMap[stream.getId()] = portConduit;

      if (self.agent !== null) {
        self.updateAgent();
      }

      portConduit.onDownstream(connect.EventType.API_REQUEST,
        connect.hitch(self, self.handleAPIRequest, portConduit));
      portConduit.onDownstream(connect.EventType.MASTER_REQUEST,
        connect.hitch(self, self.handleMasterRequest, portConduit, stream.getId()));
      portConduit.onDownstream(connect.EventType.RELOAD_AGENT_CONFIGURATION,
        connect.hitch(self, self.pollForAgentConfiguration));
      portConduit.onDownstream(connect.EventType.CLOSE, function () {
        self.multiplexer.removeStream(stream);
        delete self.portConduitMap[stream.getId()];
        self.masterCoord.removeMaster(stream.getId());
      });
    };
  };

  ClientEngine.prototype.pollForAgent = function () {
    var self = this;
    var client = connect.core.getClient();
    var onAuthFail = connect.hitch(self, self.handleAuthFail);

    this.client.call(connect.ClientMethods.GET_AGENT_SNAPSHOT, {
      nextToken: self.nextToken,
      timeout: GET_AGENT_TIMEOUT_MS
    }, {
        success: function (data) {
          try {
            self.agent = self.agent || {};
            self.agent.snapshot = data.snapshot;
            self.agent.snapshot.localTimestamp = connect.now();
            self.agent.snapshot.skew = self.agent.snapshot.snapshotTimestamp - self.agent.snapshot.localTimestamp;
            self.nextToken = data.nextToken;
            connect.getLog().trace("GET_AGENT_SNAPSHOT succeeded.").withObject(data);
            self.updateAgent();
          } catch (e) {
            connect.getLog().error("Long poll failed to update agent.").withObject(data).withException(e);
          } finally {
            global.setTimeout(connect.hitch(self, self.pollForAgent), GET_AGENT_SUCCESS_TIMEOUT_MS);
          }
        },
        failure: function (err, data) {
          try {
            connect.getLog().error("Failed to get agent data.")
              .withObject({
                err: err,
                data: data
              });

          } finally {
            global.setTimeout(connect.hitch(self, self.pollForAgent), GET_AGENT_RECOVERY_TIMEOUT_MS);
          }
        },
        authFailure: function () {
          self.agentPolling = false;
          onAuthFail();
        },
        accessDenied: connect.hitch(self, self.handleAccessDenied)

      });

  };

  ClientEngine.prototype.pollForAgentConfiguration = function (paramsIn) {
    var self = this;
    var params = paramsIn || {};
    var onAuthFail = connect.hitch(self, self.handleAuthFail);

    this.client.call(connect.ClientMethods.GET_AGENT_CONFIGURATION, {}, {
      success: function (data) {
        var configuration = data.configuration;
        self.pollForAgentPermissions(configuration);
        self.pollForAgentStates(configuration);
        self.pollForDialableCountryCodes(configuration);
        self.pollForRoutingProfileQueues(configuration);
        if (params.repeatForever) {
          global.setTimeout(connect.hitch(self, self.pollForAgentConfiguration, params),
            GET_AGENT_CONFIGURATION_INTERVAL_MS);
        }
      },
      failure: function (err, data) {
        try {
          connect.getLog().error("Failed to fetch agent configuration data.")
            .withObject({
              err: err,
              data: data
            });
        } finally {
          if (params.repeatForever) {
            global.setTimeout(connect.hitch(self, self.pollForAgentConfiguration),
              GET_AGENT_CONFIGURATION_INTERVAL_MS, params);
          }
        }
      },
      authFailure: function () {
        self.configPolling = false;
        onAuthFail();
      },
      accessDenied: connect.hitch(self, self.handleAccessDenied)
    });
  };

  ClientEngine.prototype.pollForAgentStates = function (configuration, paramsIn) {
    var self = this;
    var params = paramsIn || {};
    params.maxResults = params.maxResults || connect.DEFAULT_BATCH_SIZE;

    this.client.call(connect.ClientMethods.GET_AGENT_STATES, {
      nextToken: params.nextToken || null,
      maxResults: params.maxResults

    }, {
        success: function (data) {
          if (data.nextToken) {
            self.pollForAgentStates(configuration, {
              states: (params.states || []).concat(data.states),
              nextToken: data.nextToken,
              maxResults: params.maxResults
            });

          } else {
            configuration.agentStates = (params.states || []).concat(data.states);
            self.updateAgentConfiguration(configuration);
          }
        },
        failure: function (err, data) {
          connect.getLog().error("Failed to fetch agent states list.")
            .withObject({
              err: err,
              data: data
            });
        },
        authFailure: connect.hitch(self, self.handleAuthFail),
        accessDenied: connect.hitch(self, self.handleAccessDenied)
      });
  };

  ClientEngine.prototype.pollForAgentPermissions = function (configuration, paramsIn) {
    var self = this;
    var params = paramsIn || {};
    params.maxResults = params.maxResults || connect.DEFAULT_BATCH_SIZE;

    this.client.call(connect.ClientMethods.GET_AGENT_PERMISSIONS, {
      nextToken: params.nextToken || null,
      maxResults: params.maxResults

    }, {
        success: function (data) {
          if (data.nextToken) {
            self.pollForAgentPermissions(configuration, {
              permissions: (params.permissions || []).concat(data.permissions),
              nextToken: data.nextToken,
              maxResults: params.maxResults
            });

          } else {
            configuration.permissions = (params.permissions || []).concat(data.permissions);
            self.updateAgentConfiguration(configuration);
          }
        },
        failure: function (err, data) {
          connect.getLog().error("Failed to fetch agent permissions list.")
            .withObject({
              err: err,
              data: data
            });
        },
        authFailure: connect.hitch(self, self.handleAuthFail),
        accessDenied: connect.hitch(self, self.handleAccessDenied)
      });
  };

  ClientEngine.prototype.pollForDialableCountryCodes = function (configuration, paramsIn) {
    var self = this;
    var params = paramsIn || {};
    params.maxResults = params.maxResults || connect.DEFAULT_BATCH_SIZE;

    this.client.call(connect.ClientMethods.GET_DIALABLE_COUNTRY_CODES, {
      nextToken: params.nextToken || null,
      maxResults: params.maxResults
    }, {
        success: function (data) {
          if (data.nextToken) {
            self.pollForDialableCountryCodes(configuration, {
              countryCodes: (params.countryCodes || []).concat(data.countryCodes),
              nextToken: data.nextToken,
              maxResults: params.maxResults
            });

          } else {
            configuration.dialableCountries = (params.countryCodes || []).concat(data.countryCodes);
            self.updateAgentConfiguration(configuration);
          }
        },
        failure: function (err, data) {
          connect.getLog().error("Failed to fetch dialable country codes list.")
            .withObject({
              err: err,
              data: data
            });
        },
        authFailure: connect.hitch(self, self.handleAuthFail),
        accessDenied: connect.hitch(self, self.handleAccessDenied)
      });
  };

  ClientEngine.prototype.pollForRoutingProfileQueues = function (configuration, paramsIn) {
    var self = this;
    var params = paramsIn || {};
    params.maxResults = params.maxResults || connect.DEFAULT_BATCH_SIZE;

    this.client.call(connect.ClientMethods.GET_ROUTING_PROFILE_QUEUES, {
      routingProfileARN: configuration.routingProfile.routingProfileARN,
      nextToken: params.nextToken || null,
      maxResults: params.maxResults
    }, {
        success: function (data) {
          if (data.nextToken) {
            self.pollForRoutingProfileQueues(configuration, {
              countryCodes: (params.queues || []).concat(data.queues),
              nextToken: data.nextToken,
              maxResults: params.maxResults
            });

          } else {
            configuration.routingProfile.queues = (params.queues || []).concat(data.queues);
            self.updateAgentConfiguration(configuration);
          }
        },
        failure: function (err, data) {
          connect.getLog().error("Failed to fetch routing profile queues list.")
            .withObject({
              err: err,
              data: data
            });
        },
        authFailure: connect.hitch(self, self.handleAuthFail),
        accessDenied: connect.hitch(self, self.handleAccessDenied)
      });
  };

  ClientEngine.prototype.handleAPIRequest = function (portConduit, request) {
    var self = this;

    this.client.call(request.method, request.params, {
      success: function (data) {
        var response = connect.EventFactory.createResponse(connect.EventType.API_RESPONSE, request, data);
        portConduit.sendDownstream(response.event, response);
      },
      failure: function (err, data) {
        var response = connect.EventFactory.createResponse(connect.EventType.API_RESPONSE, request, data, JSON.stringify(err));
        portConduit.sendDownstream(response.event, response);
        connect.getLog().error("'%s' API request failed: %s", request.method, err)
          .withObject({ request: self.filterAuthToken(request), response: response });
      },
      authFailure: connect.hitch(self, self.handleAuthFail),
      accessDenied: connect.hitch(self, self.handleAccessDenied)
    });
  };

  /**
   * Handle incoming master query or modification requests from connected tab ports.
   */
  ClientEngine.prototype.handleMasterRequest = function (portConduit, portId, request) {
    var response = null;

    switch (request.method) {
      case connect.MasterMethods.BECOME_MASTER:
        this.masterCoord.setMaster(request.params.topic, portId);
        response = connect.EventFactory.createResponse(connect.EventType.MASTER_RESPONSE, request, {
          masterId: portId,
          isMaster: true,
          topic: request.params.topic
        });

        break;

      case connect.MasterMethods.CHECK_MASTER:
        var masterId = this.masterCoord.getMaster(request.params.topic);
        if (!masterId) {
          this.masterCoord.setMaster(request.params.topic, portId);
          masterId = portId;
        }

        response = connect.EventFactory.createResponse(connect.EventType.MASTER_RESPONSE, request, {
          masterId: masterId,
          isMaster: portId === masterId,
          topic: request.params.topic
        });

        break;

      default:
        throw new Error("Unknown master method: " + request.method);
    }

    portConduit.sendDownstream(response.event, response);
  };

  ClientEngine.prototype.updateAgentConfiguration = function (configuration) {
    if (configuration.permissions &&
      configuration.dialableCountries &&
      configuration.agentStates &&
      configuration.routingProfile.queues) {

      this.agent = this.agent || {};
      this.agent.configuration = configuration;
      this.updateAgent();

    } else {
      connect.getLog().trace("Waiting to update agent configuration until all config data has been fetched.");
    }
  };

  ClientEngine.prototype.updateAgent = function () {
    if (!this.agent) {
      connect.getLog().trace("Waiting to update agent until the agent has been fully constructed.");

    } else if (!this.agent.snapshot) {
      connect.getLog().trace("Waiting to update agent until the agent snapshot is available.");

    } else if (!this.agent.configuration) {
      connect.getLog().trace("Waiting to update agent until the agent configuration is available.");

    } else {
      // Alias some of the properties for backwards compatibility.
      this.agent.snapshot.status = this.agent.state;

      // Sort the contacts on the timestamp
      if (this.agent.snapshot.contacts && this.agent.snapshot.contacts.length > 1) {
        this.agent.snapshot.contacts.sort(function (contactA, contactB) {
          return contactA.state.timestamp.getTime() - contactB.state.timestamp.getTime();
        });
      }

      this.agent.snapshot.contacts.forEach(function (contact) {
        contact.status = contact.state;

        contact.connections.forEach(function (connection) {
          connection.address = connection.endpoint;
        });
      });

      this.agent.configuration.routingProfile.defaultOutboundQueue.queueId =
        this.agent.configuration.routingProfile.defaultOutboundQueue.queueARN;
      this.agent.configuration.routingProfile.queues.forEach(function (queue) {
        queue.queueId = queue.queueARN;
      });
      this.agent.snapshot.contacts.forEach(function (contact) {
        //contact.queue is null when monitoring
        if (contact.queue !== undefined) {
          contact.queue.queueId = contact.queue.queueARN;
        }
      });
      this.agent.configuration.routingProfile.routingProfileId =
        this.agent.configuration.routingProfile.routingProfileARN;

      this.conduit.sendDownstream(connect.AgentEvents.UPDATE, this.agent);
    }
  };

  /**
  * Provides a websocket url through the create_transport API.
  * @returns a promise which, upon success, returns the response from the createTransport API.
  */
  ClientEngine.prototype.getWebSocketUrl = function() {
    var self = this;
    var client = connect.core.getClient();
    var onAuthFail = connect.hitch(self, self.handleAuthFail);
    var onAccessDenied = connect.hitch(self, self.handleAccessDenied);
    return new Promise(function (resolve, reject) {
      client.call(connect.ClientMethods.CREATE_TRANSPORT, { transportType: connect.TRANSPORT_TYPES.WEB_SOCKET }, {
        success: function (data) {
          connect.getLog().info("getWebSocketUrl succeeded");
          resolve(data);
        },
        failure: function (err, data) {
          connect.getLog().error("getWebSocketUrl failed")
              .withObject({
                err: err,
                data: data
              });
          reject(Error("getWebSocketUrl failed"));
        },
        authFailure: function() {
          connect.getLog().error("getWebSocketUrl Auth Failure");
          reject(Error("Authentication failed while getting getWebSocketUrl"));
          onAuthFail();
        },
        accessDenied: function() {
          connect.getLog().error("getWebSocketUrl Access Denied Failure");
          reject(Error("Access Denied Failure while getting getWebSocketUrl"));
          onAccessDenied();
        }
      });
    });
  };


  /**
   * Send a message downstream to all consumers when we detect that authentication
   * against one of our APIs has failed.
   */
  ClientEngine.prototype.handleSendLogsRequest = function () {
    var self = this;
    var logEvents = [];
    var logsToSend = self.logsBuffer.slice();
    self.logsBuffer = [];
    logsToSend.forEach(function (log) {
      logEvents.push({
        timestamp: log.time,
        component: log.component,
        message: log.text
      });
    });
    this.client.call(connect.ClientMethods.SEND_CLIENT_LOGS, { logEvents: logEvents }, {
      success: function (data) {
        connect.getLog().info("SendLogs request succeeded.");
      },
      failure: function (err, data) {
        connect.getLog().error("SendLogs request failed. %s", err);
      },
      authFailure: connect.hitch(self, self.handleAuthFail)
    });
  };

  ClientEngine.prototype.handleAuthFail = function () {
    var self = this;
    self.conduit.sendDownstream(connect.EventType.AUTH_FAIL);
  };

  ClientEngine.prototype.handleAccessDenied = function () {
    var self = this;
    self.conduit.sendDownstream(connect.EventType.ACCESS_DENIED);
  };

  ClientEngine.prototype.checkAuthToken = function () {
    var self = this;
    var expirationDate = new Date(self.initData.authTokenExpiration);
    var currentTimeStamp = new Date().getTime();
    var thirtyMins = 30 * 60 * 1000;

    // refresh token 30 minutes before expiration
    if (expirationDate.getTime() < (currentTimeStamp + thirtyMins)) {
      connect.getLog().info("Auth token expires at " + expirationDate + " Start refreshing token with retry.");
      connect.backoff(connect.hitch(self, self.authorize), REFRESH_AUTH_TOKEN_INTERVAL_MS, REFRESH_AUTH_TOKEN_MAX_TRY);
    }
  };
  

  ClientEngine.prototype.authorize = function (callbacks) {
    var self = this;
    connect.core.authorize(this.initData.authorizeEndpoint).then(function (response) {
      var expiration = new Date(response.expiration);
      connect.getLog().info("Authorization succeded and the token expires at %s", expiration);
      self.initData.authToken = response.accessToken;
      self.initData.authTokenExpiration = expiration;
      connect.core.initClient(self.initData);
      callbacks.success();
    }).catch(function (response) {
      connect.getLog().error("Authorization failed %s ", response);
      if (response.status === 401) {
        self.handleAuthFail();
      } else {
        callbacks.failure();
      }
    });
  };

  /**
   * Filter the 'authentication' field of the request params from the given API_REQUEST event.
   */
  ClientEngine.prototype.filterAuthToken = function (request) {
    var new_request = {};

    for (var keyA in request) {
      if (keyA === 'params') {
        var new_params = {};
        for (var keyB in request.params) {
          if (keyB !== 'authentication') {
            new_params[keyB] = request.params[keyB];
          }
        }

        new_request.params = new_params;
      } else {
        new_request[keyA] = request[keyA];
      }
    }

    return new_request;
  };

  /**-----------------------------------------------------------------------*/
  connect.worker.main = function () {
    connect.worker.clientEngine = new ClientEngine();
  };

})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

(function () {
  var global = this;
  connect = global.connect || {};
  global.connect = connect;

  connect.ChatMediaController = function (mediaInfo, metadata) {
    var logger = connect.getLog();
    var logComponent = connect.LogComponent.CHAT;

    var createMediaInstance = function () {
      publishTelemetryEvent("Chat media controller init", mediaInfo.contactId);
      logger.info(logComponent, "Chat media controller init").withObject(mediaInfo);

      connect.ChatSession.setGlobalConfig({
        loggerConfig: {
          logger: logger
        },
        region: metadata.region
      });

      /** Could be also CUSTOMER -  For now we are creating only Agent connection media object */
      var controller = connect.ChatSession.create({
        chatDetails: mediaInfo,
        type: "AGENT",
        websocketManager: connect.core.getWebSocketManager()
      });
      
      trackChatConnectionStatus(controller);
      return controller
        .connect()
        .then(function (data) {
          logger.info(logComponent, "Chat Session Successfully established for contactId %s", mediaInfo.contactId);
          publishTelemetryEvent("Chat Session Successfully established", mediaInfo.contactId);
          return controller;
        })
        .catch(function (error) {
          logger.error(logComponent, "Chat Session establishement failed for contact %s", mediaInfo.contactId).withException(error);
          publishTelemetryEvent("Chat Session establishement failed", mediaInfo.contactId, error);
          throw error;
        });
    };

    var publishTelemetryEvent = function (eventName, data) {
      connect.publishMetric({
        name: eventName,
        contactId: mediaInfo.contactId,
        data: data || mediaInfo
      });
    };

    var trackChatConnectionStatus = function (controller) {
      controller.onConnectionBroken(function (data) {
        logger.error(logComponent, "Chat Session connection broken").withException(data);
        publishTelemetryEvent("Chat Session connection broken", data);
      });

      controller.onConnectionEstablished(function (data) {
        logger.info(logComponent, "Chat Session connection established").withObject(data);
        publishTelemetryEvent("Chat Session connection established", data);
      });
    }

    return {
      get: function () {
        return createMediaInstance();
      }
    }
  }
})();

/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

(function () {
  var global = this;
  connect = global.connect || {};
  global.connect = connect;

  connect.MediaFactory = function (params) {
    /** controller holder */
    var mediaControllers = {};

    var logger = connect.getLog();
    var logComponent = connect.LogComponent.CHAT;

    var metadata = params || {};
    metadata.region =  metadata.region || "us-west-2"; // Default it to us-west-2

    var getMediaController = function (connectionObj) {
      var connectionId = connectionObj.getConnectionId();
      var mediaInfo = connectionObj.getMediaInfo();
      /** if we do not have the media info then just reject the request */
      if (!mediaInfo) {
        logger.error(logComponent, "Media info does not exists for a media type %s").withObject(connectionObj);
        return Promise.reject("Media info does not exists for this connection");
      }

      if (!mediaControllers[connectionId]) {
        logger.info(logComponent, "media controller of type %s init", connectionObj.getMediaType()).withObject(connectionObj);
        switch (connectionObj.getMediaType()) {
          case connect.MediaType.CHAT:
            return mediaControllers[connectionId] = new connect.ChatMediaController(connectionObj.getMediaInfo(), metadata).get();
          case connect.MediaType.SOFTPHONE:
            return mediaControllers[connectionId] = new connect.SoftphoneMediaController(connectionObj.getMediaInfo()).get();
          default:
            logger.error(logComponent, "Unrecognized media type %s ", connectionObj.getMediaType());
            return Promise.reject();
        }
      } else {
        return mediaControllers[connectionId];
      }
    };

    /** Check all the active states for the connection */
    var ifConnectionActive = function (connectionObj) {
      return connectionObj.isActive();
    };

    var get = function (connectionObj) {
      if (ifConnectionActive(connectionObj)) {
        return getMediaController(connectionObj);
      } else {
        destroy(connectionObj.getConnectionId());
        return Promise.reject("Media Controller is no longer available for this connection");
      }
    };

    var destroy = function (connectionId) {
      if (mediaControllers[connectionId]) {
        logger.info(logComponent, "Destroying mediaController for %s", connectionId);
        delete mediaControllers[connectionId];
      }
    };

    return {
      get: get,
      destroy: destroy
    };
  }
})();
/*
 * Copyright 2014-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Amazon Software License (the "License"). You may not use
 * this file except in compliance with the License. A copy of the License is
 * located at
 *
 *    http://aws.amazon.com/asl/
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, express
 * or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

(function () {
  var global = this;
  connect = global.connect || {};
  global.connect = connect;

  // TODO move softphone implementations here - Wil do this for GA
  connect.SoftphoneMediaController = function (mediaInfo) {
    return {
      get: function () {
        return Promise.resolve(mediaInfo)
      }
    }
  }
})();

!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n,t){"use strict";var r=t(1);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i={assertTrue:function(e,n){if(!e)throw new Error(n)},assertNotNull:function(e,n){return i.assertTrue(null!==e&&void 0!==o(e),Object(r.sprintf)("%s must be provided",n||"A value")),e},isString:function(e){return"string"==typeof e},assertIsNonEmptyString:function(e,n){if(!e||"string"!=typeof e)throw new Error(n+" is not a non-empty string!")},assertIsList:function(e,n){if(!Array.isArray(e))throw new Error(n+" is not an array")},assertIsEnum:function(e,n,t){var r;for(r=0;r<n.length;r++)if(n[r]===e)return;throw new Error(t+" passed is not valid. Allowed values are: "+n)},makeEnum:function(e){var n={};return e.forEach(function(e){var t=e.replace(/\.?([a-z]+)_?/g,function(e,n){return n.toUpperCase()+"_"}).replace(/_$/,"");n[t]=e}),n},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){return!("object"!==o(e)||null===e)}};i.isString=function(e){return"string"==typeof e},i.isNumber=function(e){return"number"==typeof e};var a=new RegExp("^(wss://)\\w*");i.validWSUrl=function(e){return a.test(e)},i.assertIsObject=function(e,n){if(!i.isObject(e))throw new Error(n+" is not an object!")};var c=i,s="NULL",u="CLIENT_LOGGER",l="DEBUG",f="aws/subscribe",p="aws/unsubscribe",g="aws/heartbeat";function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,n){return!n||"object"!==d(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function v(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,n,t){return n&&h(e.prototype,n),t&&h(e,t),e}var w=function(){function e(){v(this,e)}return S(e,[{key:"debug",value:function(e){}},{key:"info",value:function(e){}},{key:"warn",value:function(e){}},{key:"error",value:function(e){}}]),e}(),k={DEBUG:10,INFO:20,WARN:30,ERROR:40},_=function(){function e(){v(this,e),this.updateLoggerConfig(),this.consoleLoggerWrapper=O()}return S(e,[{key:"writeToClientLogger",value:function(e,n){if(this.hasClientLogger())switch(e){case k.DEBUG:return this._clientLogger.debug(n);case k.INFO:return this._clientLogger.info(n);case k.WARN:return this._clientLogger.warn(n);case k.ERROR:return this._clientLogger.error(n)}}},{key:"isLevelEnabled",value:function(e){return e>=this._level}},{key:"hasClientLogger",value:function(){return null!==this._clientLogger}},{key:"getLogger",value:function(e){var n=e.prefix||"";return this._logsDestination===l?this.consoleLoggerWrapper:new C(n)}},{key:"updateLoggerConfig",value:function(e){var n=e||{};this._level=n.level||k.INFO,this._clientLogger=n.logger||null,this._logsDestination=s,n.debug&&(this._logsDestination=l),n.logger&&(this._logsDestination=u)}}]),e}(),T=function(){function e(){v(this,e)}return S(e,[{key:"debug",value:function(){}},{key:"info",value:function(){}},{key:"warn",value:function(){}},{key:"error",value:function(){}}]),e}(),C=function(e){function n(e){var t;return v(this,n),(t=b(this,y(n).call(this))).prefix=e||"",t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,T),S(n,[{key:"debug",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(k.DEBUG,n)}},{key:"info",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(k.INFO,n)}},{key:"warn",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(k.WARN,n)}},{key:"error",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];this._log(k.ERROR,n)}},{key:"_shouldLog",value:function(e){return x.hasClientLogger()&&x.isLevelEnabled(e)}},{key:"_writeToClientLogger",value:function(e,n){x.writeToClientLogger(e,n)}},{key:"_log",value:function(e,n){if(this._shouldLog(e)){var t=this._convertToSingleStatement(n);this._writeToClientLogger(e,t)}}},{key:"_convertToSingleStatement",value:function(e){var n="";this.prefix&&(n+=this.prefix+" ");for(var t=0;t<e.length;t++){var r=e[t];n+=this._convertToString(r)+" "}return n}},{key:"_convertToString",value:function(e){try{if(!e)return"";if(c.isString(e))return e;if(c.isObject(e)&&c.isFunction(e.toString)){var n=e.toString();if("[object Object]"!==n)return n}return JSON.stringify(e)}catch(n){return console.error("Error while converting argument to string",e,n),""}}}]),n}(),O=function(){var e=new T;return e.debug=console.debug,e.info=console.info,e.warn=console.warn,e.error=console.error,e},x=new _;t.d(n,"a",function(){return L});var E=function(){var e=x.getLogger({}),n=null,t={reconnectWebSocket:!1,websocketInitFailed:!1,linearConnectAttempt:0,exponentialConnectAttempt:0,exponentialBackOffTime:1,exponentialTimeoutHandle:null,lifeTimeTimeoutHandle:null},r={pendingResponse:!1,intervalHandle:null},o={initFailure:new Set,getWebSocketTransport:null,subscriptionUpdate:new Set,subscriptionFailure:new Set,topic:new Map,allMessage:new Set,connectionGain:new Set,connectionLost:new Set},i={connConfig:null,promiseHandle:null,promiseCompleted:!1},a={subscribed:new Set,pending:new Set},s=new Set([f,p,g]),u=navigator.onLine,l=setInterval(function(){u!==navigator.onLine&&(u=navigator.onLine)&&(!n||n.readyState>1)&&(e.info("Network online, Connecting to websocket"),O())},250),d=function(e,n){e.forEach(function(e){e(n)})},b=function(){if(r.pendingResponse)return e.warn("Heartbeat response not received"),clearInterval(r.intervalHandle),r.pendingResponse=!1,void k();e.debug("Sending heartbeat"),n.send(T(g)),r.pendingResponse=!0},y=function(){t.linearConnectAttempt=0,t.exponentialConnectAttempt=0,t.exponentialBackOffTime=1,r.pendingResponse=!1,t.reconnectWebSocket=!1,clearTimeout(t.lifeTimeTimeoutHandle),clearInterval(r.intervalHandle),clearTimeout(t.exponentialTimeoutHandle)},m=function(){try{if(e.info("WebSocket connection established!"),d(o.connectionGain),y(),a.subscribed.size>0||a.pending.size>0){var c=Array.from(a.subscribed.values());c=c.concat(Array.from(a.pending.values())),a.subscribed.clear(),n.send(T(f,{topics:c}))}b(),r.intervalHandle=setInterval(b,1e4),t.lifeTimeTimeoutHandle=setTimeout(function(){e.debug("Starting scheduled WebSocket manager reconnect"),k()},1e3*i.connConfig.webSocketTransport.transportLifeTimeInSeconds)}catch(n){e.error("Error after establishing web socket connection, error: ",n)}},v=function(n){t.linearConnectAttempt<=1&&d(o.connectionLost),e.info("Socket connection is closed. event: ",n),t.reconnectWebSocket&&E()},h=function(n){e.error("WebSocketManager Error, error_event: ",n),k()},S=function(n){e.debug("Message received from webSocket server",n.data);var t=JSON.parse(n.data);switch(t.topic){case f:"success"===t.content.status?(t.content.topics.forEach(function(e){a.subscribed.add(e),a.pending.delete(e)}),d(o.subscriptionUpdate,t)):d(o.subscriptionFailure,t);break;case g:e.debug("Heartbeat response received"),r.pendingResponse=!1;break;default:if(t.topic){if(0===o.allMessage.size&&0===o.topic.size)return void e.warn("No registered callback listener for Topic: ",t);d(o.allMessage,t),o.topic.has(t.topic)&&d(o.topic.get(t.topic),t)}else t.message?e.warn("WebSocketManager Message Error, error: ",t):e.warn("Invalid incoming message, error: ",t)}},w=function(e){return!(!n||n.readyState===WebSocket.CLOSED)&&(n.close(1e3,e),!0)},k=function(){u?(clearTimeout(t.lifeTimeTimeoutHandle),clearInterval(r.intervalHandle),t.linearConnectAttempt<3?(t.linearConnectAttempt++,e.debug("Starting Consecutive WebSocket reconnect, Attempt : "+t.linearConnectAttempt),t.reconnectWebSocket=!0,O()):t.exponentialConnectAttempt<5?(t.exponentialConnectAttempt++,t.exponentialBackOffTime*=2,e.debug("Starting Exponential WebSocket reconnect, Attempt : "+t.exponentialConnectAttempt+" with delay "+t.exponentialBackOffTime+" sec."),i.promiseCompleted=!1,i.connConfig=null,t.exponentialTimeoutHandle=setTimeout(function(){t.reconnectWebSocket=!0,O()},1e3*t.exponentialBackOffTime)):i.promiseCompleted&&(e.error("Could not connect to WebSocket after several attempts"),_())):w("Network Offline, Closing WebSocket Manager")},_=function(){y(),w("Terminating WebSocket Manager"),e.error("WebSocket Initialization failed"),t.websocketInitFailed=!0,clearInterval(l),d(o.initFailure)},T=function(e,n){return JSON.stringify({topic:e,content:n})},C=function(n){return!!(c.isObject(n)&&c.isObject(n.webSocketTransport)&&c.isString(n.webSocketTransport.url)&&c.validWSUrl(n.webSocketTransport.url)&&c.isNumber(n.webSocketTransport.transportLifeTimeInSeconds)&&n.webSocketTransport.transportLifeTimeInSeconds>=3600)||(e.error("Invalid WebSocket Connection Configuration",n),!1)},O=function(){t.websocketInitFailed||(i.connConfig=null,i.promiseCompleted=!1,i.promiseHandle=o.getWebSocketTransport(),i.promiseHandle.then(function(n){i.promiseCompleted=!0,e.debug("Successfully fetched webSocket connection configuration"),C(n)?(i.connConfig=n,u&&(w("Restarting WebSocket Manager")||E())):_()},function(n){i.promiseCompleted=!0,e.error("Failed to fetch webSocket connection configuration",n),k()}))},E=function(){if(!t.websocketInitFailed){e.debug("Initializing Websocket Manager");try{C(i.connConfig)?((n=new WebSocket(i.connConfig.webSocketTransport.url)).addEventListener("open",m),n.addEventListener("message",S),n.addEventListener("error",h),n.addEventListener("close",v)):i.promiseCompleted&&_()}catch(n){e.error("Error Initializing web-socket-manager",n),_()}}};this.init=function(n){c.assertTrue(c.isFunction(n),"transportHandle must be a function"),null===o.getWebSocketTransport?(o.getWebSocketTransport=n,O()):e.warn("Web Socket Manager was already initialized")},this.onInitFailure=function(e){return c.assertTrue(c.isFunction(e),"cb must be a function"),o.initFailure.add(e),t.websocketInitFailed&&e(),function(){return o.initFailure.delete(e)}},this.onConnectionGain=function(e){return c.assertTrue(c.isFunction(e),"cb must be a function"),o.connectionGain.add(e),n&&n.readyState===WebSocket.OPEN&&e(),function(){return o.connectionGain.delete(e)}},this.onConnectionLost=function(e){return c.assertTrue(c.isFunction(e),"cb must be a function"),o.connectionLost.add(e),n&&n.readyState===WebSocket.CLOSED&&e(),function(){return o.connectionLost.delete(e)}},this.onSubscriptionUpdate=function(e){return c.assertTrue(c.isFunction(e),"cb must be a function"),o.subscriptionUpdate.add(e),function(){return o.subscriptionUpdate.delete(e)}},this.onSubscriptionFailure=function(e){return c.assertTrue(c.isFunction(e),"cb must be a function"),o.subscriptionFailure.add(e),function(){return o.subscriptionFailure.delete(e)}},this.onMessage=function(e,n){return c.assertNotNull(e,"topicName"),c.assertTrue(c.isFunction(n),"cb must be a function"),o.topic.has(e)?o.topic.get(e).add(n):o.topic.set(e,new Set([n])),function(){return o.topic.get(e).delete(n)}},this.onAllMessage=function(e){return c.assertTrue(c.isFunction(e),"cb must be a function"),o.allMessage.add(e),function(){return o.allMessage.delete(e)}},this.subscribeTopics=function(e){c.assertNotNull(e,"topics"),c.assertIsList(e),e.forEach(function(e){a.pending.add(e)}),n&&n.readyState===WebSocket.OPEN&&n.send(T(f,{topics:e}))},this.sendMessage=function(t){if(c.assertIsObject(t,"payload"),void 0===t.topic||s.has(t.topic))e.warn("Cannot send message, Invalid topic",t);else{try{t=JSON.stringify(t)}catch(n){return void e.warn("Error stringify message",t)}n&&n.readyState===WebSocket.OPEN?(e.debug("WebSocketManager sending message",t),n.send(t)):e.warn("Cannot send message, web socket connection is not open")}},this.closeWebSocket=function(){y(),clearInterval(l),w("User request to close WebSocket")}},L={create:function(){return new E},setGlobalConfig:function(e){var n=e.loggerConfig;x.updateLoggerConfig(n)},LogLevel:k,Logger:w}},function(e,n,t){var r;!function(){"use strict";var o={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function i(e){return function(e,n){var t,r,a,c,s,u,l,f,p,g=1,d=e.length,b="";for(r=0;r<d;r++)if("string"==typeof e[r])b+=e[r];else if("object"==typeof e[r]){if((c=e[r]).keys)for(t=n[g],a=0;a<c.keys.length;a++){if(null==t)throw new Error(i('[sprintf] Cannot access property "%s" of undefined value "%s"',c.keys[a],c.keys[a-1]));t=t[c.keys[a]]}else t=c.param_no?n[c.param_no]:n[g++];if(o.not_type.test(c.type)&&o.not_primitive.test(c.type)&&t instanceof Function&&(t=t()),o.numeric_arg.test(c.type)&&"number"!=typeof t&&isNaN(t))throw new TypeError(i("[sprintf] expecting number but found %T",t));switch(o.number.test(c.type)&&(f=t>=0),c.type){case"b":t=parseInt(t,10).toString(2);break;case"c":t=String.fromCharCode(parseInt(t,10));break;case"d":case"i":t=parseInt(t,10);break;case"j":t=JSON.stringify(t,null,c.width?parseInt(c.width):0);break;case"e":t=c.precision?parseFloat(t).toExponential(c.precision):parseFloat(t).toExponential();break;case"f":t=c.precision?parseFloat(t).toFixed(c.precision):parseFloat(t);break;case"g":t=c.precision?String(Number(t.toPrecision(c.precision))):parseFloat(t);break;case"o":t=(parseInt(t,10)>>>0).toString(8);break;case"s":t=String(t),t=c.precision?t.substring(0,c.precision):t;break;case"t":t=String(!!t),t=c.precision?t.substring(0,c.precision):t;break;case"T":t=Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),t=c.precision?t.substring(0,c.precision):t;break;case"u":t=parseInt(t,10)>>>0;break;case"v":t=t.valueOf(),t=c.precision?t.substring(0,c.precision):t;break;case"x":t=(parseInt(t,10)>>>0).toString(16);break;case"X":t=(parseInt(t,10)>>>0).toString(16).toUpperCase()}o.json.test(c.type)?b+=t:(!o.number.test(c.type)||f&&!c.sign?p="":(p=f?"+":"-",t=t.toString().replace(o.sign,"")),u=c.pad_char?"0"===c.pad_char?"0":c.pad_char.charAt(1):" ",l=c.width-(p+t).length,s=c.width&&l>0?u.repeat(l):"",b+=c.align?p+t+s:"0"===u?p+s+t:s+p+t)}return b}(function(e){if(c[e])return c[e];var n,t=e,r=[],i=0;for(;t;){if(null!==(n=o.text.exec(t)))r.push(n[0]);else if(null!==(n=o.modulo.exec(t)))r.push("%");else{if(null===(n=o.placeholder.exec(t)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){i|=1;var a=[],s=n[2],u=[];if(null===(u=o.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(u[1]);""!==(s=s.substring(u[0].length));)if(null!==(u=o.key_access.exec(s)))a.push(u[1]);else{if(null===(u=o.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(u[1])}n[2]=a}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:n[0],param_no:n[1],keys:n[2],sign:n[3],pad_char:n[4],align:n[5],width:n[6],precision:n[7],type:n[8]})}t=t.substring(n[0].length)}return c[e]=r}(e),arguments)}function a(e,n){return i.apply(null,[e].concat(n||[]))}var c=Object.create(null);n.sprintf=i,n.vsprintf=a,"undefined"!=typeof window&&(window.sprintf=i,window.vsprintf=a,void 0===(r=function(){return{sprintf:i,vsprintf:a}}.call(n,t,n,e))||(e.exports=r))}()},function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"WebSocketManager",function(){return o});var r=t(0);e.connect=e.connect||{},connect.WebSocketManager=r.a;var o=r.a}.call(this,t(3))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViU29ja2V0TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ByaW50Zi1qcy9zcmMvc3ByaW50Zi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIlV0aWxzIiwicHJlbWlzZSIsIm1lc3NhZ2UiLCJFcnJvciIsImFzc2VydFRydWUiLCJ1bmRlZmluZWQiLCJfdHlwZW9mIiwic3ByaW50ZiIsIkFycmF5IiwiaXNBcnJheSIsImFsbG93ZWRWYWx1ZXMiLCJsZW5ndGgiLCJ2YWx1ZXMiLCJlbnVtT2JqIiwiZm9yRWFjaCIsInJlcGxhY2UiLCJ4IiwieSIsInRvVXBwZXJDYXNlIiwib2JqIiwiY29uc3RydWN0b3IiLCJhcHBseSIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJ3c1JlZ2V4IiwiUmVnRXhwIiwidmFsaWRXU1VybCIsIndzVXJsIiwidGVzdCIsImFzc2VydElzT2JqZWN0IiwiaXNPYmplY3QiLCJMT0dTX0RFU1RJTkFUSU9OIiwiUk9VVEVfS0VZIiwiTG9nZ2VyIiwiZGF0YSIsIkxvZ0xldmVsIiwiREVCVUciLCJJTkZPIiwiV0FSTiIsIkVSUk9SIiwiTG9nTWFuYWdlckltcGwiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwidXBkYXRlTG9nZ2VyQ29uZmlnIiwiY29uc29sZUxvZ2dlcldyYXBwZXIiLCJjcmVhdGVDb25zb2xlTG9nZ2VyIiwibGV2ZWwiLCJsb2dTdGF0ZW1lbnQiLCJoYXNDbGllbnRMb2dnZXIiLCJfY2xpZW50TG9nZ2VyIiwiZGVidWciLCJpbmZvIiwid2FybiIsImVycm9yIiwiX2xldmVsIiwib3B0aW9ucyIsInByZWZpeCIsIl9sb2dzRGVzdGluYXRpb24iLCJMb2dnZXJXcmFwcGVySW1wbCIsImlucHV0Q29uZmlnIiwiY29uZmlnIiwibG9nZ2VyIiwiTG9nZ2VyV3JhcHBlciIsIl90aGlzIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfZ2V0UHJvdG90eXBlT2YiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIl9rZXkiLCJfbG9nIiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJfbGVuNCIsIl9rZXk0IiwiTG9nTWFuYWdlciIsImlzTGV2ZWxFbmFibGVkIiwid3JpdGVUb0NsaWVudExvZ2dlciIsIl9zaG91bGRMb2ciLCJfY29udmVydFRvU2luZ2xlU3RhdGVtZW50IiwiX3dyaXRlVG9DbGllbnRMb2dnZXIiLCJpbmRleCIsImFyZyIsIl9jb252ZXJ0VG9TdHJpbmciLCJpc0Z1bmN0aW9uIiwidG9TdHJpbmciLCJ0b1N0cmluZ1Jlc3VsdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwiX193ZWJwYWNrX2V4cG9ydHNfXyIsIldlYlNvY2tldE1hbmFnZXJPYmplY3QiLCJXZWJTb2NrZXRNYW5hZ2VyIiwiZ2V0TG9nZ2VyIiwid2ViU29ja2V0IiwicmVjb25uZWN0Q29uZmlnIiwicmVjb25uZWN0V2ViU29ja2V0Iiwid2Vic29ja2V0SW5pdEZhaWxlZCIsImxpbmVhckNvbm5lY3RBdHRlbXB0IiwiZXhwb25lbnRpYWxDb25uZWN0QXR0ZW1wdCIsImV4cG9uZW50aWFsQmFja09mZlRpbWUiLCJleHBvbmVudGlhbFRpbWVvdXRIYW5kbGUiLCJsaWZlVGltZVRpbWVvdXRIYW5kbGUiLCJoZWFydGJlYXRDb25maWciLCJwZW5kaW5nUmVzcG9uc2UiLCJpbnRlcnZhbEhhbmRsZSIsImNhbGxiYWNrcyIsImluaXRGYWlsdXJlIiwiU2V0IiwiZ2V0V2ViU29ja2V0VHJhbnNwb3J0Iiwic3Vic2NyaXB0aW9uVXBkYXRlIiwic3Vic2NyaXB0aW9uRmFpbHVyZSIsInRvcGljIiwiTWFwIiwiYWxsTWVzc2FnZSIsImNvbm5lY3Rpb25HYWluIiwiY29ubmVjdGlvbkxvc3QiLCJ3ZWJTb2NrZXRDb25maWciLCJjb25uQ29uZmlnIiwicHJvbWlzZUhhbmRsZSIsInByb21pc2VDb21wbGV0ZWQiLCJ0b3BpY1N1YnNjcmlwdGlvbiIsInN1YnNjcmliZWQiLCJwZW5kaW5nIiwiaW52YWxpZFNlbmRNZXNzYWdlUm91dGVLZXlzIiwib25saW5lIiwibmF2aWdhdG9yIiwib25MaW5lIiwibmV0d29ya0Nvbm5lY3Rpdml0eUNoZWNrZXIiLCJzZXRJbnRlcnZhbCIsInJlYWR5U3RhdGUiLCJnZXRXZWJTb2NrZXRDb25uQ29uZmlnIiwiaW52b2tlQ2FsbGJhY2tzIiwicmVzcG9uc2UiLCJjYWxsYmFjayIsInNlbmRIZWFydEJlYXQiLCJjbGVhckludGVydmFsIiwicmVmcmVzaFdlYlNvY2tldENvbm5lY3Rpb24iLCJzZW5kIiwiY3JlYXRlV2ViU29ja2V0UGF5bG9hZCIsInJlc2V0U3RhdGUiLCJjbGVhclRpbWVvdXQiLCJ3ZWJTb2NrZXRPbk9wZW4iLCJzaXplIiwidG9waWNzIiwiZnJvbSIsImNvbmNhdCIsImNsZWFyIiwic2V0VGltZW91dCIsIndlYlNvY2tldFRyYW5zcG9ydCIsInRyYW5zcG9ydExpZmVUaW1lSW5TZWNvbmRzIiwid2ViU29ja2V0T25DbG9zZSIsImV2ZW50IiwiaW5pdFdlYlNvY2tldCIsIndlYlNvY2tldE9uRXJyb3IiLCJ3ZWJTb2NrZXRPbk1lc3NhZ2UiLCJwYXJzZSIsImNvbnRlbnQiLCJzdGF0dXMiLCJ0b3BpY05hbWUiLCJhZGQiLCJoYXMiLCJjbG9zZVdlYlNvY2tldCIsInJlYXNvbiIsIldlYlNvY2tldCIsIkNMT1NFRCIsImNsb3NlIiwidGVybWluYXRlV2ViU29ja2V0TWFuYWdlciIsInZhbGlkV2ViU29ja2V0Q29ubkNvbmZpZyIsInVybCIsInRoZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsInRyYW5zcG9ydEhhbmRsZSIsIm9uSW5pdEZhaWx1cmUiLCJjYiIsIm9uQ29ubmVjdGlvbkdhaW4iLCJPUEVOIiwib25Db25uZWN0aW9uTG9zdCIsIm9uU3Vic2NyaXB0aW9uVXBkYXRlIiwib25TdWJzY3JpcHRpb25GYWlsdXJlIiwib25NZXNzYWdlIiwiYXNzZXJ0Tm90TnVsbCIsInNldCIsIm9uQWxsTWVzc2FnZSIsInN1YnNjcmliZVRvcGljcyIsImFzc2VydElzTGlzdCIsInNlbmRNZXNzYWdlIiwicGF5bG9hZCIsInNldEdsb2JhbENvbmZpZyIsImxvZ2dlckNvbmZpZyIsIl9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fIiwicmUiLCJub3Rfc3RyaW5nIiwibm90X2Jvb2wiLCJub3RfdHlwZSIsIm5vdF9wcmltaXRpdmUiLCJudW1iZXIiLCJudW1lcmljX2FyZyIsImpzb24iLCJub3RfanNvbiIsInRleHQiLCJtb2R1bG8iLCJwbGFjZWhvbGRlciIsImtleV9hY2Nlc3MiLCJpbmRleF9hY2Nlc3MiLCJzaWduIiwicGFyc2VfdHJlZSIsImFyZ3YiLCJrIiwicGgiLCJwYWQiLCJwYWRfY2hhcmFjdGVyIiwicGFkX2xlbmd0aCIsImlzX3Bvc2l0aXZlIiwiY3Vyc29yIiwidHJlZV9sZW5ndGgiLCJvdXRwdXQiLCJrZXlzIiwicGFyYW1fbm8iLCJ0eXBlIiwiRnVuY3Rpb24iLCJpc05hTiIsIlR5cGVFcnJvciIsInBhcnNlSW50IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwid2lkdGgiLCJwcmVjaXNpb24iLCJwYXJzZUZsb2F0IiwidG9FeHBvbmVudGlhbCIsInRvRml4ZWQiLCJOdW1iZXIiLCJ0b1ByZWNpc2lvbiIsInN1YnN0cmluZyIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJ2YWx1ZU9mIiwicGFkX2NoYXIiLCJjaGFyQXQiLCJyZXBlYXQiLCJhbGlnbiIsInNwcmludGZfZm9ybWF0IiwiZm10Iiwic3ByaW50Zl9jYWNoZSIsIm1hdGNoIiwiX2ZtdCIsImFyZ19uYW1lcyIsImV4ZWMiLCJwdXNoIiwiU3ludGF4RXJyb3IiLCJmaWVsZF9saXN0IiwicmVwbGFjZW1lbnRfZmllbGQiLCJmaWVsZF9tYXRjaCIsInNwcmludGZfcGFyc2UiLCJ2c3ByaW50ZiIsIndpbmRvdyIsImdsb2JhbCIsIl93ZWJTb2NrZXRNYW5hZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJjb25uZWN0IiwiZyIsImUiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRGLEVBQW1CLElBQUksSUFBSU0sS0FBT04sRUFBT3JCLEVBQW9CVSxFQUFFZSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSekIsRUFBb0I2QixFQUFJLFNBQVMxQixHQUNoQyxJQUFJUyxFQUFTVCxHQUFVQSxFQUFPcUIsV0FDN0IsV0FBd0IsT0FBT3JCLEVBQWdCLFNBQy9DLFdBQThCLE9BQU9BLEdBRXRDLE9BREFILEVBQW9CVSxFQUFFRSxFQUFRLElBQUtBLEdBQzVCQSxHQUlSWixFQUFvQmEsRUFBSSxTQUFTaUIsRUFBUUMsR0FBWSxPQUFPakIsT0FBT2tCLFVBQVVDLGVBQWUxQixLQUFLdUIsRUFBUUMsSUFHekcvQixFQUFvQmtDLEVBQUksR0FJakJsQyxFQUFvQkEsRUFBb0JtQyxFQUFJLEcsK1FDakZyRCxJQUFNQyxFQUFRLENBS2RBLFdBQW1CLFNBQVNDLEVBQVNDLEdBQ25DLElBQUtELEVBQ0gsTUFBTSxJQUFJRSxNQUFNRCxJQU9wQkYsY0FBc0IsU0FBU2YsRUFBT1YsR0FLcEMsT0FKQXlCLEVBQU1JLFdBQ00sT0FBVm5CLFFBQW1Db0IsSUFBakJDLEVBQU9yQixHQUN6QnNCLGtCQUFRLHNCQUF1QmhDLEdBQVEsWUFFbENVLEdBR1RlLFNBQWlCLFNBQVNmLEdBQ3hCLE1BQXdCLGlCQUFWQSxHQUdoQmUsdUJBQStCLFNBQVNmLEVBQU9NLEdBQzdDLElBQUtOLEdBQTBCLGlCQUFWQSxFQUNuQixNQUFNLElBQUlrQixNQUFNWixFQUFNLGdDQUkxQlMsYUFBcUIsU0FBU2YsRUFBT00sR0FDbkMsSUFBS2lCLE1BQU1DLFFBQVF4QixHQUNqQixNQUFNLElBQUlrQixNQUFNWixFQUFNLHFCQUkxQlMsYUFBcUIsU0FBU2YsRUFBT3lCLEVBQWVuQixHQUNsRCxJQUFJdkIsRUFDSixJQUFLQSxFQUFJLEVBQUdBLEVBQUkwQyxFQUFjQyxPQUFRM0MsSUFDcEMsR0FBSTBDLEVBQWMxQyxLQUFPaUIsRUFDdkIsT0FHSixNQUFNLElBQUlrQixNQUNSWixFQUFNLDZDQUFvRG1CLElBVzlEVixTQUFpQixTQUFTWSxHQUN4QixJQUFJQyxFQUFVLEdBWWQsT0FWQUQsRUFBT0UsUUFBUSxTQUFTN0IsR0FDdEIsSUFBSU0sRUFBTU4sRUFDUDhCLFFBQVEsaUJBQWtCLFNBQVNDLEVBQUdDLEdBQ3JDLE9BQU9BLEVBQUVDLGNBQWdCLE1BRTFCSCxRQUFRLEtBQU0sSUFFakJGLEVBQVF0QixHQUFPTixJQUdWNEIsR0FPVGIsV0FBbUIsU0FBU21CLEdBQzFCLFNBQVVBLEdBQU9BLEVBQUlDLGFBQWVELEVBQUloRCxNQUFRZ0QsRUFBSUUsUUFHdERyQixTQUFpQixTQUFTZixHQUN4QixRQUEwQixXQUFqQnFCLEVBQU9yQixJQUFnQyxPQUFWQSxLQUd4Q2UsRUFBTXNCLFNBQVcsU0FBU3JDLEdBQ3hCLE1BQXdCLGlCQUFWQSxHQUdoQmUsRUFBTXVCLFNBQVcsU0FBU3RDLEdBQ3hCLE1BQXdCLGlCQUFWQSxHQUdoQixJQUFNdUMsRUFBVSxJQUFJQyxPQUFPLGlCQUMzQnpCLEVBQU0wQixXQUFhLFNBQVVDLEdBQzNCLE9BQU9ILEVBQVFJLEtBQUtELElBR3RCM0IsRUFBTTZCLGVBQWlCLFNBQVM1QyxFQUFPTSxHQUNyQyxJQUFLUyxFQUFNOEIsU0FBUzdDLEdBQ2xCLE1BQU0sSUFBSWtCLE1BQU1aLEVBQU0sdUJBSVhTLFFDeEdGK0IsRUFDTCxPQURLQSxFQUVJLGdCQUZKQSxFQUdKLFFBUUlDLEVBQ0EsZ0JBREFBLEVBRUUsa0JBRkZBLEVBR0EsZ0IsazhCQ1hQQyxFLDBFQUNFQyxNLDJCQUVEQSxNLDJCQUVBQSxNLDRCQUVDQSxRLEtBSUZDLEVBQVcsQ0FDZkMsTUFBTyxHQUNQQyxLQUFNLEdBQ05DLEtBQU0sR0FDTkMsTUFBTyxJQUdIQyxFLFdBQ0osU0FBQUEsSUFBY0MsRUFBQUMsS0FBQUYsR0FDWkUsS0FBS0MscUJBQ0xELEtBQUtFLHFCQUF1QkMsSSxzREFHVkMsRUFBT0MsR0FDekIsR0FBS0wsS0FBS00sa0JBR1YsT0FBUUYsR0FDTixLQUFLWCxFQUFTQyxNQUNaLE9BQU9NLEtBQUtPLGNBQWNDLE1BQU1ILEdBQ2xDLEtBQUtaLEVBQVNFLEtBQ1osT0FBT0ssS0FBS08sY0FBY0UsS0FBS0osR0FDakMsS0FBS1osRUFBU0csS0FDWixPQUFPSSxLQUFLTyxjQUFjRyxLQUFLTCxHQUNqQyxLQUFLWixFQUFTSSxNQUNaLE9BQU9HLEtBQUtPLGNBQWNJLE1BQU1OLE0scUNBSXZCRCxHQUNiLE9BQU9BLEdBQVNKLEtBQUtZLFMsd0NBSXJCLE9BQThCLE9BQXZCWixLQUFLTyxnQixnQ0FHSk0sR0FDUixJQUFJQyxFQUFTRCxFQUFRQyxRQUFVLEdBQy9CLE9BQUlkLEtBQUtlLG1CQUFxQjFCLEVBQ3JCVyxLQUFLRSxxQkFFUCxJQUFJYyxFQUFrQkYsSyx5Q0FHWkcsR0FDakIsSUFBSUMsRUFBU0QsR0FBZSxHQUM1QmpCLEtBQUtZLE9BQVNNLEVBQU9kLE9BQVNYLEVBQVNFLEtBQ3ZDSyxLQUFLTyxjQUFnQlcsRUFBT0MsUUFBVSxLQUN0Q25CLEtBQUtlLGlCQUFtQjFCLEVBQ3BCNkIsRUFBT1YsUUFDVFIsS0FBS2UsaUJBQW1CMUIsR0FFdEI2QixFQUFPQyxTQUNUbkIsS0FBS2UsaUJBQW1CMUIsTyxLQUt4QitCLEUsdUxBVUFKLEUsWUFDSixTQUFBQSxFQUFZRixHQUFRLElBQUFPLEVBQUEsT0FBQXRCLEVBQUFDLEtBQUFnQixJQUNsQkssRUFBQUMsRUFBQXRCLEtBQUF1QixFQUFBUCxHQUFBdkYsS0FBQXVFLFFBQ0tjLE9BQVNBLEdBQVUsR0FGTk8sRSw0T0FEVUQsRyxtQ0FNZixRQUFBSSxFQUFBQyxVQUFBeEQsT0FBTnlELEVBQU0sSUFBQTVELE1BQUEwRCxHQUFBRyxFQUFBLEVBQUFBLEVBQUFILEVBQUFHLElBQU5ELEVBQU1DLEdBQUFGLFVBQUFFLEdBQ2IzQixLQUFLNEIsS0FBS25DLEVBQVNDLE1BQU9nQyxLLDZCQUdkLFFBQUFHLEVBQUFKLFVBQUF4RCxPQUFOeUQsRUFBTSxJQUFBNUQsTUFBQStELEdBQUFDLEVBQUEsRUFBQUEsRUFBQUQsRUFBQUMsSUFBTkosRUFBTUksR0FBQUwsVUFBQUssR0FDWjlCLEtBQUs0QixLQUFLbkMsRUFBU0UsS0FBTStCLEssNkJBR2IsUUFBQUssRUFBQU4sVUFBQXhELE9BQU55RCxFQUFNLElBQUE1RCxNQUFBaUUsR0FBQUMsRUFBQSxFQUFBQSxFQUFBRCxFQUFBQyxJQUFOTixFQUFNTSxHQUFBUCxVQUFBTyxHQUNaaEMsS0FBSzRCLEtBQUtuQyxFQUFTRyxLQUFNOEIsSyw4QkFHWixRQUFBTyxFQUFBUixVQUFBeEQsT0FBTnlELEVBQU0sSUFBQTVELE1BQUFtRSxHQUFBQyxFQUFBLEVBQUFBLEVBQUFELEVBQUFDLElBQU5SLEVBQU1RLEdBQUFULFVBQUFTLEdBQ2JsQyxLQUFLNEIsS0FBS25DLEVBQVNJLE1BQU82QixLLGlDQUdqQnRCLEdBQ1QsT0FBTytCLEVBQVc3QixtQkFBcUI2QixFQUFXQyxlQUFlaEMsSywyQ0FHOUNBLEVBQU9DLEdBQzFCOEIsRUFBV0Usb0JBQW9CakMsRUFBT0MsSywyQkFHbkNELEVBQU9zQixHQUNWLEdBQUkxQixLQUFLc0MsV0FBV2xDLEdBQVEsQ0FDMUIsSUFBSUMsRUFBZUwsS0FBS3VDLDBCQUEwQmIsR0FDbEQxQixLQUFLd0MscUJBQXFCcEMsRUFBT0MsTSxnREFJWHFCLEdBQ3hCLElBQUlyQixFQUFlLEdBQ2ZMLEtBQUtjLFNBQ1BULEdBQWdCTCxLQUFLYyxPQUFTLEtBRWhDLElBQUssSUFBSTJCLEVBQVEsRUFBR0EsRUFBUWYsRUFBS3pELE9BQVF3RSxJQUFTLENBQ2hELElBQUlDLEVBQU1oQixFQUFLZSxHQUNmcEMsR0FBZ0JMLEtBQUsyQyxpQkFBaUJELEdBQU8sSUFFL0MsT0FBT3JDLEksdUNBR1FxQyxHQUNmLElBQ0UsSUFBS0EsRUFDSCxNQUFPLEdBRVQsR0FBSXBGLEVBQU1zQixTQUFTOEQsR0FDakIsT0FBT0EsRUFFVCxHQUFJcEYsRUFBTThCLFNBQVNzRCxJQUFRcEYsRUFBTXNGLFdBQVdGLEVBQUlHLFVBQVcsQ0FDekQsSUFBSUMsRUFBaUJKLEVBQUlHLFdBQ3pCLEdBQXVCLG9CQUFuQkMsRUFDRixPQUFPQSxFQUdYLE9BQU9DLEtBQUtDLFVBQVVOLEdBQ3RCLE1BQU8vQixHQUVQLE9BREFzQyxRQUFRdEMsTUFBTSw0Q0FBNkMrQixFQUFLL0IsR0FDekQsUSxLQUtUUixFQUFzQixXQUN4QixJQUFJZ0IsRUFBUyxJQUFJQyxFQUtqQixPQUpBRCxFQUFPWCxNQUFReUMsUUFBUXpDLE1BQ3ZCVyxFQUFPVixLQUFPd0MsUUFBUXhDLEtBQ3RCVSxFQUFPVCxLQUFPdUMsUUFBUXZDLEtBQ3RCUyxFQUFPUixNQUFRc0MsUUFBUXRDLE1BQ2hCUSxHQUdIZ0IsRUFBYSxJQUFJckMsRUNwS3ZCNUUsRUFBQVUsRUFBQXNILEVBQUEsc0JBQUFDLElBV0EsSUFBTUMsRUFBbUIsV0FFckIsSUFBTWpDLEVBQVNnQixFQUFXa0IsVUFBVSxJQUVoQ0MsRUFBWSxLQUVaQyxFQUFrQixDQUNsQkMsb0JBQW9CLEVBQ3BCQyxxQkFBcUIsRUFDckJDLHFCQUFzQixFQUN0QkMsMEJBQTJCLEVBQzNCQyx1QkFBd0IsRUFDeEJDLHlCQUEwQixLQUMxQkMsc0JBQXVCLE1BR3ZCQyxFQUFrQixDQUNsQkMsaUJBQWlCLEVBQ2pCQyxlQUFnQixNQUdoQkMsRUFBWSxDQUNaQyxZQUFhLElBQUlDLElBQ2pCQyxzQkFBdUIsS0FDdkJDLG1CQUFvQixJQUFJRixJQUN4Qkcsb0JBQXFCLElBQUlILElBQ3pCSSxNQUFPLElBQUlDLElBQ1hDLFdBQVksSUFBSU4sSUFDaEJPLGVBQWdCLElBQUlQLElBQ3BCUSxlQUFnQixJQUFJUixLQUdwQlMsRUFBa0IsQ0FDbEJDLFdBQVksS0FDWkMsY0FBZSxLQUNmQyxrQkFBa0IsR0FHbEJDLEVBQW9CLENBQ3BCQyxXQUFZLElBQUlkLElBQ2hCZSxRQUFTLElBQUlmLEtBR1hnQixFQUE4QixJQUFJaEIsSUFBSSxDQUFDOUUsRUFBcUJBLEVBQXVCQSxJQUVyRitGLEVBQVNDLFVBQVVDLE9BQ2pCQyxFQUE2QkMsWUFBWSxXQUN2Q0osSUFBV0MsVUFBVUMsU0FDckJGLEVBQVNDLFVBQVVDLFdBQ0hqQyxHQUFhQSxFQUFVb0MsV0FBYSxLQUNoRHZFLEVBQU9WLEtBQUssMkNBQ1prRixNQUdULEtBRUdDLEVBQWtCLFNBQVMxQixFQUFXMkIsR0FDeEMzQixFQUFVOUYsUUFBUSxTQUFVMEgsR0FDeEJBLEVBQVNELE1BSVhFLEVBQWdCLFdBQ2xCLEdBQUloQyxFQUFnQkMsZ0JBS2hCLE9BSkE3QyxFQUFPVCxLQUFLLG1DQUNac0YsY0FBY2pDLEVBQWdCRSxnQkFDOUJGLEVBQWdCQyxpQkFBa0IsT0FDbENpQyxJQUdKOUUsRUFBT1gsTUFBTSxxQkFDYjhDLEVBQVU0QyxLQUFLQyxFQUF1QjdHLElBQ3RDeUUsRUFBZ0JDLGlCQUFrQixHQUdoQ29DLEVBQWEsV0FDZjdDLEVBQWdCRyxxQkFBdUIsRUFDdkNILEVBQWdCSSwwQkFBNEIsRUFDNUNKLEVBQWdCSyx1QkFBeUIsRUFDekNHLEVBQWdCQyxpQkFBa0IsRUFDbENULEVBQWdCQyxvQkFBcUIsRUFFckM2QyxhQUFhOUMsRUFBZ0JPLHVCQUM3QmtDLGNBQWNqQyxFQUFnQkUsZ0JBQzlCb0MsYUFBYTlDLEVBQWdCTSwyQkFHM0J5QyxFQUFrQixXQUNwQixJQU1JLEdBTEFuRixFQUFPVixLQUFLLHFDQUNabUYsRUFBZ0IxQixFQUFVUyxnQkFFMUJ5QixJQUVJbkIsRUFBa0JDLFdBQVdxQixLQUFPLEdBQUt0QixFQUFrQkUsUUFBUW9CLEtBQU8sRUFBRyxDQUM3RSxJQUFJQyxFQUFTMUksTUFBTTJJLEtBQUt4QixFQUFrQkMsV0FBV2hILFVBQ3JEc0ksRUFBU0EsRUFBT0UsT0FBTzVJLE1BQU0ySSxLQUFLeEIsRUFBa0JFLFFBQVFqSCxXQUM1RCtHLEVBQWtCQyxXQUFXeUIsUUFDN0JyRCxFQUFVNEMsS0FBS0MsRUFBdUI3RyxFQUFxQixDQUFDa0gsT0FBVUEsS0FHMUVULElBQ0FoQyxFQUFnQkUsZUFBaUJ3QixZQUFZTSxFQUFlLEtBRTVEeEMsRUFBZ0JPLHNCQUF3QjhDLFdBQVcsV0FDL0N6RixFQUFPWCxNQUFNLGtEQUNieUYsS0FDRCxJQUFPcEIsRUFBZ0JDLFdBQVcrQixtQkFBbUJDLDRCQUMxRCxNQUFPbkcsR0FDTFEsRUFBT1IsTUFBTSwwREFBMkRBLEtBSTFFb0csRUFBbUIsU0FBU0MsR0FDMUJ6RCxFQUFnQkcsc0JBQXdCLEdBQ3hDa0MsRUFBZ0IxQixFQUFVVSxnQkFFOUJ6RCxFQUFPVixLQUFLLHVDQUF3Q3VHLEdBQ2hEekQsRUFBZ0JDLG9CQUNoQnlELEtBSUZDLEVBQW1CLFNBQVNGLEdBQzlCN0YsRUFBT1IsTUFBTSx3Q0FBeUNxRyxHQUN0RGYsS0FHRWtCLEVBQXFCLFNBQVNILEdBQ2hDN0YsRUFBT1gsTUFBTSx5Q0FBMEN3RyxFQUFNeEgsTUFDN0QsSUFBTXFHLEVBQVc5QyxLQUFLcUUsTUFBTUosRUFBTXhILE1BQ2xDLE9BQVFxRyxFQUFTckIsT0FDYixLQUFLbEYsRUFDK0IsWUFBNUJ1RyxFQUFTd0IsUUFBUUMsUUFDakJ6QixFQUFTd0IsUUFBUWIsT0FBT3BJLFFBQVMsU0FBVW1KLEdBQ3ZDdEMsRUFBa0JDLFdBQVdzQyxJQUFJRCxHQUNqQ3RDLEVBQWtCRSxRQUFsQixPQUFpQ29DLEtBRXJDM0IsRUFBZ0IxQixFQUFVSSxtQkFBb0J1QixJQUU5Q0QsRUFBZ0IxQixFQUFVSyxvQkFBcUJzQixHQUVuRCxNQUNKLEtBQUt2RyxFQUNENkIsRUFBT1gsTUFBTSwrQkFDYnVELEVBQWdCQyxpQkFBa0IsRUFDbEMsTUFDSixRQUNJLEdBQUk2QixFQUFTckIsTUFBTyxDQUNoQixHQUFrQyxJQUE5Qk4sRUFBVVEsV0FBVzZCLE1BQXVDLElBQXpCckMsRUFBVU0sTUFBTStCLEtBRW5ELFlBREFwRixFQUFPVCxLQUFLLDhDQUErQ21GLEdBRy9ERCxFQUFnQjFCLEVBQVVRLFdBQVltQixHQUNsQzNCLEVBQVVNLE1BQU1pRCxJQUFJNUIsRUFBU3JCLFFBQzdCb0IsRUFBZ0IxQixFQUFVTSxNQUFNckksSUFBSTBKLEVBQVNyQixPQUFRcUIsUUFFbERBLEVBQVNySSxRQUNoQjJELEVBQU9ULEtBQUssMENBQTJDbUYsR0FFdkQxRSxFQUFPVCxLQUFLLG9DQUFxQ21GLEtBSzNENkIsRUFBaUIsU0FBU0MsR0FDNUIsU0FBSXJFLEdBQWFBLEVBQVVvQyxhQUFla0MsVUFBVUMsVUFDaER2RSxFQUFVd0UsTUFBTSxJQUFNSCxJQUNmLElBS1QxQixFQUE2QixXQUMxQlosR0FJTGdCLGFBQWE5QyxFQUFnQk8sdUJBQzdCa0MsY0FBY2pDLEVBQWdCRSxnQkFFMUJWLEVBQWdCRyxxQkZ4TGUsR0V5TC9CSCxFQUFnQkcsdUJBQ2hCdkMsRUFBT1gsTUFBTSx1REFBeUQrQyxFQUFnQkcsc0JBQ3RGSCxFQUFnQkMsb0JBQXFCLEVBQ3JDbUMsS0FDT3BDLEVBQWdCSSwwQkY1TGEsR0U2THBDSixFQUFnQkksNEJBQ2hCSixFQUFnQkssd0JBQTBCLEVBQzFDekMsRUFBT1gsTUFBTSx1REFDUCtDLEVBQWdCSSwwQkFBNEIsZUFDNUNKLEVBQWdCSyx1QkFBeUIsU0FHL0NpQixFQUFnQkcsa0JBQW1CLEVBQ25DSCxFQUFnQkMsV0FBYSxLQUU3QnZCLEVBQWdCTSx5QkFBMkIrQyxXQUFXLFdBQ2xEckQsRUFBZ0JDLG9CQUFxQixFQUNyQ21DLEtBQ0QsSUFBT3BDLEVBQWdCSyx5QkFDbkJpQixFQUFnQkcsbUJBQ3ZCN0QsRUFBT1IsTUFBTSx5REFDYm9ILE1BNUJBTCxFQUFlLCtDQWdDakJLLEVBQTRCLFdBQzlCM0IsSUFDQXNCLEVBQWUsaUNBQ2Z2RyxFQUFPUixNQUFNLG1DQUNiNEMsRUFBZ0JFLHFCQUFzQixFQUN0Q3VDLGNBQWNSLEdBQ2RJLEVBQWdCMUIsRUFBVUMsY0FHeEJnQyxFQUF5QixTQUFVdEosRUFBS3dLLEdBQzFDLE9BQU90RSxLQUFLQyxVQUFVLENBQ2xCd0IsTUFBUzNILEVBQ1R3SyxRQUFXQSxLQXFDYlcsRUFBMkIsU0FBVWxELEdBQ3ZDLFNBQUl4SCxFQUFNOEIsU0FBUzBGLElBQWV4SCxFQUFNOEIsU0FBUzBGLEVBQVcrQixxQkFDckR2SixFQUFNc0IsU0FBU2tHLEVBQVcrQixtQkFBbUJvQixNQUM3QzNLLEVBQU0wQixXQUFXOEYsRUFBVytCLG1CQUFtQm9CLE1BQy9DM0ssRUFBTXVCLFNBQVNpRyxFQUFXK0IsbUJBQW1CQyw2QkFDaERoQyxFQUFXK0IsbUJBQW1CQyw0QkZ6UUosUUU0UTlCM0YsRUFBT1IsTUFBTSw2Q0FBOENtRSxJQUNwRCxJQUdMYSxFQUF5QixXQUN2QnBDLEVBQWdCRSxzQkFHcEJvQixFQUFnQkMsV0FBYSxLQUM3QkQsRUFBZ0JHLGtCQUFtQixFQUNuQ0gsRUFBZ0JFLGNBQWdCYixFQUFVRyx3QkFDMUNRLEVBQWdCRSxjQUNYbUQsS0FBSyxTQUFTckMsR0FDUGhCLEVBQWdCRyxrQkFBbUIsRUFDbkM3RCxFQUFPWCxNQUFNLDJEQUNSd0gsRUFBeUJuQyxJQUk5QmhCLEVBQWdCQyxXQUFhZSxFQUN4QlIsSUFHRHFDLEVBQWUsaUNBR25CVCxNQVZJYyxLQVlSLFNBQVNKLEdBQ0w5QyxFQUFnQkcsa0JBQW1CLEVBQ25DN0QsRUFBT1IsTUFBTSxxREFBc0RnSCxHQUNuRTFCLFFBSVZnQixFQUFnQixXQUNsQixJQUFJMUQsRUFBZ0JFLG9CQUFwQixDQUdBdEMsRUFBT1gsTUFBTSxrQ0FDYixJQUNRd0gsRUFBeUJuRCxFQUFnQkMsY0FFekN4QixFQUFZLElBQUlzRSxVQUFVL0MsRUFBZ0JDLFdBQVcrQixtQkFBbUJvQixNQUM5REUsaUJBQWlCLE9BQVE3QixHQUNuQ2hELEVBQVU2RSxpQkFBaUIsVUFBV2hCLEdBQ3RDN0QsRUFBVTZFLGlCQUFpQixRQUFTakIsR0FDcEM1RCxFQUFVNkUsaUJBQWlCLFFBQVNwQixJQUVoQ2xDLEVBQWdCRyxrQkFDaEIrQyxJQUdWLE1BQU9wSCxHQUNMUSxFQUFPUixNQUFNLHdDQUF5Q0EsR0FDdERvSCxPQXVFUi9ILEtBQUtvSSxLQXhDUSxTQUFTQyxHQUNsQi9LLEVBQU1JLFdBQVdKLEVBQU1zRixXQUFXeUYsR0FBa0Isc0NBQ1osT0FBcENuRSxFQUFVRyx1QkFJZEgsRUFBVUcsc0JBQXdCZ0UsRUFFbEMxQyxLQUxJeEUsRUFBT1QsS0FBSywrQ0FzQ3BCVixLQUFLc0ksY0FsRGlCLFNBQVNDLEdBTTNCLE9BTEFqTCxFQUFNSSxXQUFXSixFQUFNc0YsV0FBVzJGLEdBQUsseUJBQ3ZDckUsRUFBVUMsWUFBWXFELElBQUllLEdBQ3RCaEYsRUFBZ0JFLHFCQUNoQjhFLElBRUcsa0JBQU1yRSxFQUFVQyxZQUFWLE9BQTZCb0UsS0E2QzlDdkksS0FBS3dJLGlCQXJFb0IsU0FBU0QsR0FNOUIsT0FMQWpMLEVBQU1JLFdBQVdKLEVBQU1zRixXQUFXMkYsR0FBSyx5QkFDdkNyRSxFQUFVUyxlQUFlNkMsSUFBSWUsR0FDekJqRixHQUFhQSxFQUFVb0MsYUFBZWtDLFVBQVVhLE1BQ2hERixJQUVHLGtCQUFNckUsRUFBVVMsZUFBVixPQUFnQzRELEtBZ0VqRHZJLEtBQUswSSxpQkE3RG9CLFNBQVNILEdBTTlCLE9BTEFqTCxFQUFNSSxXQUFXSixFQUFNc0YsV0FBVzJGLEdBQUsseUJBQ3ZDckUsRUFBVVUsZUFBZTRDLElBQUllLEdBQ3pCakYsR0FBYUEsRUFBVW9DLGFBQWVrQyxVQUFVQyxRQUNoRFUsSUFFRyxrQkFBTXJFLEVBQVVVLGVBQVYsT0FBZ0MyRCxLQXdEakR2SSxLQUFLMkkscUJBakN3QixTQUFTSixHQUdsQyxPQUZBakwsRUFBTUksV0FBV0osRUFBTXNGLFdBQVcyRixHQUFLLHlCQUN2Q3JFLEVBQVVJLG1CQUFtQmtELElBQUllLEdBQzFCLGtCQUFNckUsRUFBVUksbUJBQVYsT0FBb0NpRSxLQStCckR2SSxLQUFLNEksc0JBNUJ5QixTQUFTTCxHQUduQyxPQUZBakwsRUFBTUksV0FBV0osRUFBTXNGLFdBQVcyRixHQUFLLHlCQUN2Q3JFLEVBQVVLLG9CQUFvQmlELElBQUllLEdBQzNCLGtCQUFNckUsRUFBVUssb0JBQVYsT0FBcUNnRSxLQTBCdER2SSxLQUFLNkksVUF2QmEsU0FBU3RCLEVBQVdnQixHQVFsQyxPQVBBakwsRUFBTXdMLGNBQWN2QixFQUFXLGFBQy9CakssRUFBTUksV0FBV0osRUFBTXNGLFdBQVcyRixHQUFLLHlCQUNuQ3JFLEVBQVVNLE1BQU1pRCxJQUFJRixHQUNwQnJELEVBQVVNLE1BQU1ySSxJQUFJb0wsR0FBV0MsSUFBSWUsR0FFbkNyRSxFQUFVTSxNQUFNdUUsSUFBSXhCLEVBQVcsSUFBSW5ELElBQUksQ0FBQ21FLEtBRXJDLGtCQUFNckUsRUFBVU0sTUFBTXJJLElBQUlvTCxHQUFwQixPQUFzQ2dCLEtBZ0J2RHZJLEtBQUtnSixhQWJnQixTQUFVVCxHQUczQixPQUZBakwsRUFBTUksV0FBV0osRUFBTXNGLFdBQVcyRixHQUFLLHlCQUN2Q3JFLEVBQVVRLFdBQVc4QyxJQUFJZSxHQUNsQixrQkFBTXJFLEVBQVVRLFdBQVYsT0FBNEI2RCxLQVc3Q3ZJLEtBQUtpSixnQkEzSm1CLFNBQVN6QyxHQUM3QmxKLEVBQU13TCxjQUFjdEMsRUFBUSxVQUM1QmxKLEVBQU00TCxhQUFhMUMsR0FFbkJBLEVBQU9wSSxRQUFRLFNBQVVvRyxHQUNyQlMsRUFBa0JFLFFBQVFxQyxJQUFJaEQsS0FHOUJsQixHQUFhQSxFQUFVb0MsYUFBZWtDLFVBQVVhLE1BQ2hEbkYsRUFBVTRDLEtBQUtDLEVBQXVCN0csRUFBcUIsQ0FBQ2tILE9BQVVBLE1BbUo5RXhHLEtBQUttSixZQWhMZSxTQUFTQyxHQUV6QixHQURBOUwsRUFBTTZCLGVBQWVpSyxFQUFTLGdCQUNSekwsSUFBbEJ5TCxFQUFRNUUsT0FBdUJZLEVBQTRCcUMsSUFBSTJCLEVBQVE1RSxPQUN2RXJELEVBQU9ULEtBQUsscUNBQXNDMEksT0FEdEQsQ0FJQSxJQUNJQSxFQUFVckcsS0FBS0MsVUFBVW9HLEdBQzNCLE1BQU96SSxHQUVMLFlBREFRLEVBQU9ULEtBQUssMEJBQTJCMEksR0FHdkM5RixHQUFhQSxFQUFVb0MsYUFBZWtDLFVBQVVhLE1BQ2hEdEgsRUFBT1gsTUFBTSxtQ0FBb0M0SSxHQUNqRDlGLEVBQVU0QyxLQUFLa0QsSUFFZmpJLEVBQU9ULEtBQUssNERBa0twQlYsS0FBSzBILGVBQWlCLFdBQ2xCdEIsSUFDQUosY0FBY1IsR0FDZGtDLEVBQWUscUNBYWpCdkUsRUFBeUIsQ0FDM0J2RyxPQVZnQyxXQUNoQyxPQUFPLElBQUl3RyxHQVVYaUcsZ0JBUG9CLFNBQUFuSSxHQUNwQixJQUFNb0ksRUFBZXBJLEVBQU9vSSxhQUM1Qm5ILEVBQVdsQyxtQkFBbUJxSixJQU05QjdKLFNBQVVBLEVBQ1ZGLE9BQVFBLEksZ0JDaGJaLElBQUFnSyxHQUVDLFdBQ0csYUFFQSxJQUFJQyxFQUFLLENBQ0xDLFdBQVksT0FDWkMsU0FBVSxPQUNWQyxTQUFVLE9BQ1ZDLGNBQWUsT0FDZkMsT0FBUSxVQUNSQyxZQUFhLGVBQ2JDLEtBQU0sTUFDTkMsU0FBVSxPQUNWQyxLQUFNLFlBQ05DLE9BQVEsV0FDUkMsWUFBYSwyRkFDYnROLElBQUssc0JBQ0x1TixXQUFZLHdCQUNaQyxhQUFjLGFBQ2RDLEtBQU0sU0FHVixTQUFTek0sRUFBUWhCLEdBRWIsT0FPSixTQUF3QjBOLEVBQVlDLEdBQ2hDLElBQWlEOUgsRUFBa0JwSCxFQUFHbVAsRUFBR0MsRUFBSUMsRUFBS0MsRUFBZUMsRUFBWUMsRUFBYVIsRUFBdEhTLEVBQVMsRUFBR0MsRUFBY1QsRUFBV3RNLE9BQWFnTixFQUFTLEdBQy9ELElBQUszUCxFQUFJLEVBQUdBLEVBQUkwUCxFQUFhMVAsSUFDekIsR0FBNkIsaUJBQWxCaVAsRUFBV2pQLEdBQ2xCMlAsR0FBVVYsRUFBV2pQLFFBRXBCLEdBQTZCLGlCQUFsQmlQLEVBQVdqUCxHQUFpQixDQUV4QyxJQURBb1AsRUFBS0gsRUFBV2pQLElBQ1Q0UCxLQUVILElBREF4SSxFQUFNOEgsRUFBS08sR0FDTk4sRUFBSSxFQUFHQSxFQUFJQyxFQUFHUSxLQUFLak4sT0FBUXdNLElBQUssQ0FDakMsR0FBVzlNLE1BQVArRSxFQUNBLE1BQU0sSUFBSWpGLE1BQU1JLEVBQVEsZ0VBQWlFNk0sRUFBR1EsS0FBS1QsR0FBSUMsRUFBR1EsS0FBS1QsRUFBRSxLQUVuSC9ILEVBQU1BLEVBQUlnSSxFQUFHUSxLQUFLVCxTQUl0Qi9ILEVBREtnSSxFQUFHUyxTQUNGWCxFQUFLRSxFQUFHUyxVQUdSWCxFQUFLTyxLQU9mLEdBSkl2QixFQUFHRyxTQUFTekssS0FBS3dMLEVBQUdVLE9BQVM1QixFQUFHSSxjQUFjMUssS0FBS3dMLEVBQUdVLE9BQVMxSSxhQUFlMkksV0FDOUUzSSxFQUFNQSxLQUdOOEcsRUFBR00sWUFBWTVLLEtBQUt3TCxFQUFHVSxPQUF5QixpQkFBUjFJLEdBQW9CNEksTUFBTTVJLEdBQ2xFLE1BQU0sSUFBSTZJLFVBQVUxTixFQUFRLDBDQUEyQzZFLElBTzNFLE9BSkk4RyxFQUFHSyxPQUFPM0ssS0FBS3dMLEVBQUdVLFFBQ2xCTixFQUFjcEksR0FBTyxHQUdqQmdJLEVBQUdVLE1BQ1AsSUFBSyxJQUNEMUksRUFBTThJLFNBQVM5SSxFQUFLLElBQUlHLFNBQVMsR0FDakMsTUFDSixJQUFLLElBQ0RILEVBQU0rSSxPQUFPQyxhQUFhRixTQUFTOUksRUFBSyxLQUN4QyxNQUNKLElBQUssSUFDTCxJQUFLLElBQ0RBLEVBQU04SSxTQUFTOUksRUFBSyxJQUNwQixNQUNKLElBQUssSUFDREEsRUFBTUssS0FBS0MsVUFBVU4sRUFBSyxLQUFNZ0ksRUFBR2lCLE1BQVFILFNBQVNkLEVBQUdpQixPQUFTLEdBQ2hFLE1BQ0osSUFBSyxJQUNEakosRUFBTWdJLEVBQUdrQixVQUFZQyxXQUFXbkosR0FBS29KLGNBQWNwQixFQUFHa0IsV0FBYUMsV0FBV25KLEdBQUtvSixnQkFDbkYsTUFDSixJQUFLLElBQ0RwSixFQUFNZ0ksRUFBR2tCLFVBQVlDLFdBQVduSixHQUFLcUosUUFBUXJCLEVBQUdrQixXQUFhQyxXQUFXbkosR0FDeEUsTUFDSixJQUFLLElBQ0RBLEVBQU1nSSxFQUFHa0IsVUFBWUgsT0FBT08sT0FBT3RKLEVBQUl1SixZQUFZdkIsRUFBR2tCLGFBQWVDLFdBQVduSixHQUNoRixNQUNKLElBQUssSUFDREEsR0FBTzhJLFNBQVM5SSxFQUFLLE1BQVEsR0FBR0csU0FBUyxHQUN6QyxNQUNKLElBQUssSUFDREgsRUFBTStJLE9BQU8vSSxHQUNiQSxFQUFPZ0ksRUFBR2tCLFVBQVlsSixFQUFJd0osVUFBVSxFQUFHeEIsRUFBR2tCLFdBQWFsSixFQUN2RCxNQUNKLElBQUssSUFDREEsRUFBTStJLFNBQVMvSSxHQUNmQSxFQUFPZ0ksRUFBR2tCLFVBQVlsSixFQUFJd0osVUFBVSxFQUFHeEIsRUFBR2tCLFdBQWFsSixFQUN2RCxNQUNKLElBQUssSUFDREEsRUFBTTFHLE9BQU9rQixVQUFVMkYsU0FBU3BILEtBQUtpSCxHQUFLeUosTUFBTSxHQUFJLEdBQUdDLGNBQ3ZEMUosRUFBT2dJLEVBQUdrQixVQUFZbEosRUFBSXdKLFVBQVUsRUFBR3hCLEVBQUdrQixXQUFhbEosRUFDdkQsTUFDSixJQUFLLElBQ0RBLEVBQU04SSxTQUFTOUksRUFBSyxNQUFRLEVBQzVCLE1BQ0osSUFBSyxJQUNEQSxFQUFNQSxFQUFJMkosVUFDVjNKLEVBQU9nSSxFQUFHa0IsVUFBWWxKLEVBQUl3SixVQUFVLEVBQUd4QixFQUFHa0IsV0FBYWxKLEVBQ3ZELE1BQ0osSUFBSyxJQUNEQSxHQUFPOEksU0FBUzlJLEVBQUssTUFBUSxHQUFHRyxTQUFTLElBQ3pDLE1BQ0osSUFBSyxJQUNESCxHQUFPOEksU0FBUzlJLEVBQUssTUFBUSxHQUFHRyxTQUFTLElBQUlyRSxjQUdqRGdMLEVBQUdPLEtBQUs3SyxLQUFLd0wsRUFBR1UsTUFDaEJILEdBQVV2SSxJQUdOOEcsRUFBR0ssT0FBTzNLLEtBQUt3TCxFQUFHVSxPQUFXTixJQUFlSixFQUFHSixLQUsvQ0EsRUFBTyxJQUpQQSxFQUFPUSxFQUFjLElBQU0sSUFDM0JwSSxFQUFNQSxFQUFJRyxXQUFXeEUsUUFBUW1MLEVBQUdjLEtBQU0sS0FLMUNNLEVBQWdCRixFQUFHNEIsU0FBMkIsTUFBaEI1QixFQUFHNEIsU0FBbUIsSUFBTTVCLEVBQUc0QixTQUFTQyxPQUFPLEdBQUssSUFDbEYxQixFQUFhSCxFQUFHaUIsT0FBU3JCLEVBQU81SCxHQUFLekUsT0FDckMwTSxFQUFNRCxFQUFHaUIsT0FBU2QsRUFBYSxFQUFJRCxFQUFjNEIsT0FBTzNCLEdBQW9CLEdBQzVFSSxHQUFVUCxFQUFHK0IsTUFBUW5DLEVBQU81SCxFQUFNaUksRUFBeUIsTUFBbEJDLEVBQXdCTixFQUFPSyxFQUFNakksRUFBTWlJLEVBQU1MLEVBQU81SCxHQUk3RyxPQUFPdUksRUFqSEF5QixDQXNIWCxTQUF1QkMsR0FDbkIsR0FBSUMsRUFBY0QsR0FDZCxPQUFPQyxFQUFjRCxHQUd6QixJQUFnQkUsRUFBWkMsRUFBT0gsRUFBWXBDLEVBQWEsR0FBSXdDLEVBQVksRUFDcEQsS0FBT0QsR0FBTSxDQUNULEdBQXFDLFFBQWhDRCxFQUFRckQsRUFBR1MsS0FBSytDLEtBQUtGLElBQ3RCdkMsRUFBVzBDLEtBQUtKLEVBQU0sU0FFckIsR0FBdUMsUUFBbENBLEVBQVFyRCxFQUFHVSxPQUFPOEMsS0FBS0YsSUFDN0J2QyxFQUFXMEMsS0FBSyxTQUVmLElBQTRDLFFBQXZDSixFQUFRckQsRUFBR1csWUFBWTZDLEtBQUtGLElBNkNsQyxNQUFNLElBQUlJLFlBQVksb0NBNUN0QixHQUFJTCxFQUFNLEdBQUksQ0FDVkUsR0FBYSxFQUNiLElBQUlJLEVBQWEsR0FBSUMsRUFBb0JQLEVBQU0sR0FBSVEsRUFBYyxHQUNqRSxHQUF1RCxRQUFsREEsRUFBYzdELEVBQUczTSxJQUFJbVEsS0FBS0ksSUFlM0IsTUFBTSxJQUFJRixZQUFZLGdEQWJ0QixJQURBQyxFQUFXRixLQUFLSSxFQUFZLElBQ3dELE1BQTVFRCxFQUFvQkEsRUFBa0JsQixVQUFVbUIsRUFBWSxHQUFHcFAsVUFDbkUsR0FBOEQsUUFBekRvUCxFQUFjN0QsRUFBR1ksV0FBVzRDLEtBQUtJLElBQ2xDRCxFQUFXRixLQUFLSSxFQUFZLFFBRTNCLElBQWdFLFFBQTNEQSxFQUFjN0QsRUFBR2EsYUFBYTJDLEtBQUtJLElBSXpDLE1BQU0sSUFBSUYsWUFBWSxnREFIdEJDLEVBQVdGLEtBQUtJLEVBQVksSUFVeENSLEVBQU0sR0FBS00sT0FHWEosR0FBYSxFQUVqQixHQUFrQixJQUFkQSxFQUNBLE1BQU0sSUFBSXRQLE1BQU0sNkVBR3BCOE0sRUFBVzBDLEtBQ1AsQ0FDSTlDLFlBQWEwQyxFQUFNLEdBQ25CMUIsU0FBYTBCLEVBQU0sR0FDbkIzQixLQUFhMkIsRUFBTSxHQUNuQnZDLEtBQWF1QyxFQUFNLEdBQ25CUCxTQUFhTyxFQUFNLEdBQ25CSixNQUFhSSxFQUFNLEdBQ25CbEIsTUFBYWtCLEVBQU0sR0FDbkJqQixVQUFhaUIsRUFBTSxHQUNuQnpCLEtBQWF5QixFQUFNLEtBTy9CQyxFQUFPQSxFQUFLWixVQUFVVyxFQUFNLEdBQUc1TyxRQUVuQyxPQUFPMk8sRUFBY0QsR0FBT3BDLEVBcExOK0MsQ0FBY3pRLEdBQU00RSxXQUc5QyxTQUFTOEwsRUFBU1osRUFBS25DLEdBQ25CLE9BQU8zTSxFQUFRYyxNQUFNLEtBQU0sQ0FBQ2dPLEdBQUtqRyxPQUFPOEQsR0FBUSxLQWdIcEQsSUFBSW9DLEVBQWdCNVEsT0FBT1ksT0FBTyxNQXdFOUJ4QixFQUFpQixRQUFJeUMsRUFDckJ6QyxFQUFrQixTQUFJbVMsRUFFSixvQkFBWEMsU0FDUEEsT0FBZ0IsUUFBSTNQLEVBQ3BCMlAsT0FBaUIsU0FBSUQsT0FRaEI1UCxLQUxENEwsRUFBQSxXQUNJLE1BQU8sQ0FDSDFMLFFBQVdBLEVBQ1gwUCxTQUFZQSxJQUVuQjlSLEtBQUFMLEVBQUFGLEVBQUFFLEVBQUFDLFFBQUFELFFBQUFtTyxJQWhPWixJLDZCQ0ZEck8sRUFBQWtCLEVBQUE4RyxHQUFBLFNBQUF1SyxHQUFBdlMsRUFBQVUsRUFBQXNILEVBQUEscUNBQUFFLElBQUEsSUFBQXNLLEVBQUF4UyxFQUFBLEdBR0F1UyxFQUFPRSxRQUFVRixFQUFPRSxTQUFXLEdBQ25DQSxRQUFRdkssaUJBQW1CRCxJQUVwQixJQUFNQyxFQUFtQkQsSywrQkNOaEMsSUFBSXlLLEVBR0pBLEVBQUksV0FDSCxPQUFPNU4sS0FESixHQUlKLElBRUM0TixFQUFJQSxHQUFLLElBQUl2QyxTQUFTLGNBQWIsR0FDUixNQUFPd0MsR0FFYyxpQkFBWEwsU0FBcUJJLEVBQUlKLFFBT3JDblMsRUFBT0QsUUFBVXdTIiwiZmlsZSI6ImFtYXpvbi1jb25uZWN0LXdlYnNvY2tldC1tYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiaW1wb3J0IHsgc3ByaW50ZiB9IGZyb20gXCJzcHJpbnRmLWpzXCI7XG5jb25zdCBVdGlscyA9IHt9O1xuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHByZW1pc2UgaXMgdHJ1ZS5cbiAqL1xuVXRpbHMuYXNzZXJ0VHJ1ZSA9IGZ1bmN0aW9uKHByZW1pc2UsIG1lc3NhZ2UpIHtcbiAgaWYgKCFwcmVtaXNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59O1xuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIG5vdCBudWxsIG9yIHVuZGVmaW5lZC5cbiAqL1xuVXRpbHMuYXNzZXJ0Tm90TnVsbCA9IGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gIFV0aWxzLmFzc2VydFRydWUoXG4gICAgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlICE9PSB1bmRlZmluZWQsXG4gICAgc3ByaW50ZihcIiVzIG11c3QgYmUgcHJvdmlkZWRcIiwgbmFtZSB8fCBcIkEgdmFsdWVcIilcbiAgKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuVXRpbHMuaXNTdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiO1xufTtcblxuVXRpbHMuYXNzZXJ0SXNOb25FbXB0eVN0cmluZyA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgXCIgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyFcIik7XG4gIH1cbn07XG5cblV0aWxzLmFzc2VydElzTGlzdCA9IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyBcIiBpcyBub3QgYW4gYXJyYXlcIik7XG4gIH1cbn07XG5cblV0aWxzLmFzc2VydElzRW51bSA9IGZ1bmN0aW9uKHZhbHVlLCBhbGxvd2VkVmFsdWVzLCBrZXkpIHtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBhbGxvd2VkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGFsbG93ZWRWYWx1ZXNbaV0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBrZXkgKyBcIiBwYXNzZWQgaXMgbm90IHZhbGlkLiBcIiArIFwiQWxsb3dlZCB2YWx1ZXMgYXJlOiBcIiArIGFsbG93ZWRWYWx1ZXNcbiAgKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYW4gZW51bSBmcm9tIHRoZSBnaXZlbiBsaXN0IG9mIGxvd2VyLWNhc2UgZW51bSB2YWx1ZXMsXG4gKiB3aGVyZSB0aGUgZW51bSBrZXlzIHdpbGwgYmUgdXBwZXIgY2FzZS5cbiAqXG4gKiBDb252ZXJzaW9uIGZyb20gcGFzY2FsIGNhc2UgYmFzZWQgb24gY29kZSBmcm9tIGhlcmU6XG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwNTIxMjI0XG4gKi9cblV0aWxzLm1ha2VFbnVtID0gZnVuY3Rpb24odmFsdWVzKSB7XG4gIHZhciBlbnVtT2JqID0ge307XG5cbiAgdmFsdWVzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIga2V5ID0gdmFsdWVcbiAgICAgIC5yZXBsYWNlKC9cXC4/KFthLXpdKylfPy9nLCBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHJldHVybiB5LnRvVXBwZXJDYXNlKCkgKyBcIl9cIjtcbiAgICAgIH0pXG4gICAgICAucmVwbGFjZSgvXyQvLCBcIlwiKTtcblxuICAgIGVudW1PYmpba2V5XSA9IHZhbHVlO1xuICB9KTtcblxuICByZXR1cm4gZW51bU9iajtcbn07XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGNhbGxhYmxlIGZ1bmN0aW9uIHR5cGUuXG4gKiBCb3Jyb3dlZCBmcm9tIFVuZGVyc2NvcmUuanMuXG4gKi9cblV0aWxzLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNhbGwgJiYgb2JqLmFwcGx5KTtcbn07XG5cblV0aWxzLmlzT2JqZWN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuICEodHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiIHx8IHZhbHVlID09PSBudWxsKTtcbn07XG5cblV0aWxzLmlzU3RyaW5nID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn07XG5cblV0aWxzLmlzTnVtYmVyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIjtcbn07XG5cbmNvbnN0IHdzUmVnZXggPSBuZXcgUmVnRXhwKFwiXih3c3M6Ly8pXFxcXHcqXCIpO1xuVXRpbHMudmFsaWRXU1VybCA9IGZ1bmN0aW9uICh3c1VybCkge1xuICByZXR1cm4gd3NSZWdleC50ZXN0KHdzVXJsKTtcbn07XG5cblV0aWxzLmFzc2VydElzT2JqZWN0ID0gZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICBpZiAoIVV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyBcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7XG5cbiIsIlxuZXhwb3J0IGNvbnN0IExPR1NfREVTVElOQVRJT04gPSB7XG4gIE5VTEw6IFwiTlVMTFwiLFxuICBDTElFTlRfTE9HR0VSOiBcIkNMSUVOVF9MT0dHRVJcIixcbiAgREVCVUc6IFwiREVCVUdcIlxufTtcblxuZXhwb3J0IGNvbnN0IE1JTl9XRUJTT0NLRVRfTElGRVRJTUUgPSAzNjAwO1xuZXhwb3J0IGNvbnN0IE1BWF9MSU5FQVJfQ09OTkVDVF9BVFRFTVBUUyA9IDM7XG5leHBvcnQgY29uc3QgTUFYX0VYUE9ORU5USUFMX0NPTk5FQ1RfQVRURU1QVFMgPSA1O1xuZXhwb3J0IGNvbnN0IEhFQVJUQkVBVF9JTlRFUlZBTCA9IDEwOyAvL3NlY29uZHNcblxuZXhwb3J0IGNvbnN0IFJPVVRFX0tFWSA9IHtcbiAgU1VCU0NSSUJFOiBcImF3cy9zdWJzY3JpYmVcIixcbiAgVU5TVUJTQ1JJQkU6IFwiYXdzL3Vuc3Vic2NyaWJlXCIsXG4gIEhFQVJUQkVBVDogXCJhd3MvaGVhcnRiZWF0XCJcbn07XG4iLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IExPR1NfREVTVElOQVRJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG5jbGFzcyBMb2dnZXIge1xuICBkZWJ1ZyhkYXRhKSB7fVxuXG4gIGluZm8oZGF0YSkge31cblxuICB3YXJuKGRhdGEpIHt9XG5cbiAgZXJyb3IoZGF0YSkge31cbn1cbi8qZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyovXG5cbmNvbnN0IExvZ0xldmVsID0ge1xuICBERUJVRzogMTAsXG4gIElORk86IDIwLFxuICBXQVJOOiAzMCxcbiAgRVJST1I6IDQwXG59O1xuXG5jbGFzcyBMb2dNYW5hZ2VySW1wbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXBkYXRlTG9nZ2VyQ29uZmlnKCk7XG4gICAgdGhpcy5jb25zb2xlTG9nZ2VyV3JhcHBlciA9IGNyZWF0ZUNvbnNvbGVMb2dnZXIoKTtcbiAgfVxuXG4gIHdyaXRlVG9DbGllbnRMb2dnZXIobGV2ZWwsIGxvZ1N0YXRlbWVudCkge1xuICAgIGlmICghdGhpcy5oYXNDbGllbnRMb2dnZXIoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgICBjYXNlIExvZ0xldmVsLkRFQlVHOlxuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50TG9nZ2VyLmRlYnVnKGxvZ1N0YXRlbWVudCk7XG4gICAgICBjYXNlIExvZ0xldmVsLklORk86XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRMb2dnZXIuaW5mbyhsb2dTdGF0ZW1lbnQpO1xuICAgICAgY2FzZSBMb2dMZXZlbC5XQVJOOlxuICAgICAgICByZXR1cm4gdGhpcy5fY2xpZW50TG9nZ2VyLndhcm4obG9nU3RhdGVtZW50KTtcbiAgICAgIGNhc2UgTG9nTGV2ZWwuRVJST1I6XG4gICAgICAgIHJldHVybiB0aGlzLl9jbGllbnRMb2dnZXIuZXJyb3IobG9nU3RhdGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBpc0xldmVsRW5hYmxlZChsZXZlbCkge1xuICAgIHJldHVybiBsZXZlbCA+PSB0aGlzLl9sZXZlbDtcbiAgfVxuXG4gIGhhc0NsaWVudExvZ2dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2xpZW50TG9nZ2VyICE9PSBudWxsO1xuICB9XG5cbiAgZ2V0TG9nZ2VyKG9wdGlvbnMpIHtcbiAgICB2YXIgcHJlZml4ID0gb3B0aW9ucy5wcmVmaXggfHwgXCJcIjtcbiAgICBpZiAodGhpcy5fbG9nc0Rlc3RpbmF0aW9uID09PSBMT0dTX0RFU1RJTkFUSU9OLkRFQlVHKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zb2xlTG9nZ2VyV3JhcHBlcjtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBMb2dnZXJXcmFwcGVySW1wbChwcmVmaXgpO1xuICB9XG5cbiAgdXBkYXRlTG9nZ2VyQ29uZmlnKGlucHV0Q29uZmlnKSB7XG4gICAgdmFyIGNvbmZpZyA9IGlucHV0Q29uZmlnIHx8IHt9O1xuICAgIHRoaXMuX2xldmVsID0gY29uZmlnLmxldmVsIHx8IExvZ0xldmVsLklORk87XG4gICAgdGhpcy5fY2xpZW50TG9nZ2VyID0gY29uZmlnLmxvZ2dlciB8fCBudWxsO1xuICAgIHRoaXMuX2xvZ3NEZXN0aW5hdGlvbiA9IExPR1NfREVTVElOQVRJT04uTlVMTDtcbiAgICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgICB0aGlzLl9sb2dzRGVzdGluYXRpb24gPSBMT0dTX0RFU1RJTkFUSU9OLkRFQlVHO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmxvZ2dlcikge1xuICAgICAgdGhpcy5fbG9nc0Rlc3RpbmF0aW9uID0gTE9HU19ERVNUSU5BVElPTi5DTElFTlRfTE9HR0VSO1xuICAgIH1cbiAgfVxufVxuXG5jbGFzcyBMb2dnZXJXcmFwcGVyIHtcbiAgZGVidWcoKSB7fVxuXG4gIGluZm8oKSB7fVxuXG4gIHdhcm4oKSB7fVxuXG4gIGVycm9yKCkge31cbn1cblxuY2xhc3MgTG9nZ2VyV3JhcHBlckltcGwgZXh0ZW5kcyBMb2dnZXJXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IocHJlZml4KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeCB8fCBcIlwiO1xuICB9XG5cbiAgZGVidWcoLi4uYXJncykge1xuICAgIHRoaXMuX2xvZyhMb2dMZXZlbC5ERUJVRywgYXJncyk7XG4gIH1cblxuICBpbmZvKC4uLmFyZ3MpIHtcbiAgICB0aGlzLl9sb2coTG9nTGV2ZWwuSU5GTywgYXJncyk7XG4gIH1cblxuICB3YXJuKC4uLmFyZ3MpIHtcbiAgICB0aGlzLl9sb2coTG9nTGV2ZWwuV0FSTiwgYXJncyk7XG4gIH1cblxuICBlcnJvciguLi5hcmdzKSB7XG4gICAgdGhpcy5fbG9nKExvZ0xldmVsLkVSUk9SLCBhcmdzKTtcbiAgfVxuXG4gIF9zaG91bGRMb2cobGV2ZWwpIHtcbiAgICByZXR1cm4gTG9nTWFuYWdlci5oYXNDbGllbnRMb2dnZXIoKSAmJiBMb2dNYW5hZ2VyLmlzTGV2ZWxFbmFibGVkKGxldmVsKTtcbiAgfVxuXG4gIF93cml0ZVRvQ2xpZW50TG9nZ2VyKGxldmVsLCBsb2dTdGF0ZW1lbnQpIHtcbiAgICBMb2dNYW5hZ2VyLndyaXRlVG9DbGllbnRMb2dnZXIobGV2ZWwsIGxvZ1N0YXRlbWVudCk7XG4gIH1cblxuICBfbG9nKGxldmVsLCBhcmdzKSB7XG4gICAgaWYgKHRoaXMuX3Nob3VsZExvZyhsZXZlbCkpIHtcbiAgICAgIHZhciBsb2dTdGF0ZW1lbnQgPSB0aGlzLl9jb252ZXJ0VG9TaW5nbGVTdGF0ZW1lbnQoYXJncyk7XG4gICAgICB0aGlzLl93cml0ZVRvQ2xpZW50TG9nZ2VyKGxldmVsLCBsb2dTdGF0ZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIF9jb252ZXJ0VG9TaW5nbGVTdGF0ZW1lbnQoYXJncykge1xuICAgIHZhciBsb2dTdGF0ZW1lbnQgPSBcIlwiO1xuICAgIGlmICh0aGlzLnByZWZpeCkge1xuICAgICAgbG9nU3RhdGVtZW50ICs9IHRoaXMucHJlZml4ICsgXCIgXCI7XG4gICAgfVxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBhcmdzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIGFyZyA9IGFyZ3NbaW5kZXhdO1xuICAgICAgbG9nU3RhdGVtZW50ICs9IHRoaXMuX2NvbnZlcnRUb1N0cmluZyhhcmcpICsgXCIgXCI7XG4gICAgfVxuICAgIHJldHVybiBsb2dTdGF0ZW1lbnQ7XG4gIH1cblxuICBfY29udmVydFRvU3RyaW5nKGFyZykge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWFyZykge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICAgIGlmIChVdGlscy5pc1N0cmluZyhhcmcpKSB7XG4gICAgICAgIHJldHVybiBhcmc7XG4gICAgICB9XG4gICAgICBpZiAoVXRpbHMuaXNPYmplY3QoYXJnKSAmJiBVdGlscy5pc0Z1bmN0aW9uKGFyZy50b1N0cmluZykpIHtcbiAgICAgICAgdmFyIHRvU3RyaW5nUmVzdWx0ID0gYXJnLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh0b1N0cmluZ1Jlc3VsdCAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICAgIHJldHVybiB0b1N0cmluZ1Jlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGlsZSBjb252ZXJ0aW5nIGFyZ3VtZW50IHRvIHN0cmluZ1wiLCBhcmcsIGVycm9yKTtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxufVxuXG52YXIgY3JlYXRlQ29uc29sZUxvZ2dlciA9ICgpID0+IHtcbiAgdmFyIGxvZ2dlciA9IG5ldyBMb2dnZXJXcmFwcGVyKCk7XG4gIGxvZ2dlci5kZWJ1ZyA9IGNvbnNvbGUuZGVidWc7XG4gIGxvZ2dlci5pbmZvID0gY29uc29sZS5pbmZvO1xuICBsb2dnZXIud2FybiA9IGNvbnNvbGUud2FybjtcbiAgbG9nZ2VyLmVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgcmV0dXJuIGxvZ2dlcjtcbn07XG5cbmNvbnN0IExvZ01hbmFnZXIgPSBuZXcgTG9nTWFuYWdlckltcGwoKTtcblxuZXhwb3J0IHsgTG9nTWFuYWdlciwgTG9nZ2VyLCBMb2dMZXZlbCB9O1xuIiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBMb2dNYW5hZ2VyLCBMb2dMZXZlbCwgTG9nZ2VyIH0gZnJvbSBcIi4vbG9nXCI7XG5pbXBvcnQge1xuICAgIE1JTl9XRUJTT0NLRVRfTElGRVRJTUUsXG4gICAgTUFYX0xJTkVBUl9DT05ORUNUX0FUVEVNUFRTLFxuICAgIE1BWF9FWFBPTkVOVElBTF9DT05ORUNUX0FUVEVNUFRTLFxuICAgIEhFQVJUQkVBVF9JTlRFUlZBTCxcbiAgICBST1VURV9LRVlcbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cblxuY29uc3QgV2ViU29ja2V0TWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbG9nZ2VyID0gTG9nTWFuYWdlci5nZXRMb2dnZXIoe30pO1xuXG4gICAgbGV0IHdlYlNvY2tldCA9IG51bGw7XG5cbiAgICBsZXQgcmVjb25uZWN0Q29uZmlnID0ge1xuICAgICAgICByZWNvbm5lY3RXZWJTb2NrZXQ6IGZhbHNlLFxuICAgICAgICB3ZWJzb2NrZXRJbml0RmFpbGVkOiBmYWxzZSxcbiAgICAgICAgbGluZWFyQ29ubmVjdEF0dGVtcHQ6IDAsXG4gICAgICAgIGV4cG9uZW50aWFsQ29ubmVjdEF0dGVtcHQ6IDAsXG4gICAgICAgIGV4cG9uZW50aWFsQmFja09mZlRpbWU6IDEsXG4gICAgICAgIGV4cG9uZW50aWFsVGltZW91dEhhbmRsZTogbnVsbCxcbiAgICAgICAgbGlmZVRpbWVUaW1lb3V0SGFuZGxlOiBudWxsXG4gICAgfTtcblxuICAgIGxldCBoZWFydGJlYXRDb25maWcgPSB7XG4gICAgICAgIHBlbmRpbmdSZXNwb25zZTogZmFsc2UsXG4gICAgICAgIGludGVydmFsSGFuZGxlOiBudWxsXG4gICAgfTtcblxuICAgIGxldCBjYWxsYmFja3MgPSB7XG4gICAgICAgIGluaXRGYWlsdXJlOiBuZXcgU2V0KCksXG4gICAgICAgIGdldFdlYlNvY2tldFRyYW5zcG9ydDogbnVsbCxcbiAgICAgICAgc3Vic2NyaXB0aW9uVXBkYXRlOiBuZXcgU2V0KCksXG4gICAgICAgIHN1YnNjcmlwdGlvbkZhaWx1cmU6IG5ldyBTZXQoKSxcbiAgICAgICAgdG9waWM6IG5ldyBNYXAoKSxcbiAgICAgICAgYWxsTWVzc2FnZTogbmV3IFNldCgpLFxuICAgICAgICBjb25uZWN0aW9uR2FpbjogbmV3IFNldCgpLFxuICAgICAgICBjb25uZWN0aW9uTG9zdDogbmV3IFNldCgpXG4gICAgfTtcblxuICAgIGxldCB3ZWJTb2NrZXRDb25maWcgPSB7XG4gICAgICAgIGNvbm5Db25maWc6IG51bGwsXG4gICAgICAgIHByb21pc2VIYW5kbGU6IG51bGwsXG4gICAgICAgIHByb21pc2VDb21wbGV0ZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGxldCB0b3BpY1N1YnNjcmlwdGlvbiA9IHtcbiAgICAgICAgc3Vic2NyaWJlZDogbmV3IFNldCgpLFxuICAgICAgICBwZW5kaW5nOiBuZXcgU2V0KClcbiAgICB9O1xuXG4gICAgY29uc3QgaW52YWxpZFNlbmRNZXNzYWdlUm91dGVLZXlzID0gbmV3IFNldChbUk9VVEVfS0VZLlNVQlNDUklCRSwgUk9VVEVfS0VZLlVOU1VCU0NSSUJFLCBST1VURV9LRVkuSEVBUlRCRUFUXSk7XG5cbiAgICBsZXQgb25saW5lID0gbmF2aWdhdG9yLm9uTGluZTtcbiAgICBjb25zdCBuZXR3b3JrQ29ubmVjdGl2aXR5Q2hlY2tlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG9ubGluZSAhPT0gbmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgICAgICAgb25saW5lID0gbmF2aWdhdG9yLm9uTGluZTtcbiAgICAgICAgICAgIGlmIChvbmxpbmUgJiYgKCF3ZWJTb2NrZXQgfHwgd2ViU29ja2V0LnJlYWR5U3RhdGUgPiAxKSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKFwiTmV0d29yayBvbmxpbmUsIENvbm5lY3RpbmcgdG8gd2Vic29ja2V0XCIpO1xuICAgICAgICAgICAgICAgIGdldFdlYlNvY2tldENvbm5Db25maWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIDI1MCk7XG5cbiAgICBjb25zdCBpbnZva2VDYWxsYmFja3MgPSBmdW5jdGlvbihjYWxsYmFja3MsIHJlc3BvbnNlKSB7XG4gICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2VuZEhlYXJ0QmVhdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaGVhcnRiZWF0Q29uZmlnLnBlbmRpbmdSZXNwb25zZSkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJIZWFydGJlYXQgcmVzcG9uc2Ugbm90IHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChoZWFydGJlYXRDb25maWcuaW50ZXJ2YWxIYW5kbGUpO1xuICAgICAgICAgICAgaGVhcnRiZWF0Q29uZmlnLnBlbmRpbmdSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmVmcmVzaFdlYlNvY2tldENvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIuZGVidWcoXCJTZW5kaW5nIGhlYXJ0YmVhdFwiKTtcbiAgICAgICAgd2ViU29ja2V0LnNlbmQoY3JlYXRlV2ViU29ja2V0UGF5bG9hZChST1VURV9LRVkuSEVBUlRCRUFUKSk7XG4gICAgICAgIGhlYXJ0YmVhdENvbmZpZy5wZW5kaW5nUmVzcG9uc2UgPSB0cnVlO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlY29ubmVjdENvbmZpZy5saW5lYXJDb25uZWN0QXR0ZW1wdCA9IDA7XG4gICAgICAgIHJlY29ubmVjdENvbmZpZy5leHBvbmVudGlhbENvbm5lY3RBdHRlbXB0ID0gMDtcbiAgICAgICAgcmVjb25uZWN0Q29uZmlnLmV4cG9uZW50aWFsQmFja09mZlRpbWUgPSAxO1xuICAgICAgICBoZWFydGJlYXRDb25maWcucGVuZGluZ1Jlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgIHJlY29ubmVjdENvbmZpZy5yZWNvbm5lY3RXZWJTb2NrZXQgPSBmYWxzZTtcblxuICAgICAgICBjbGVhclRpbWVvdXQocmVjb25uZWN0Q29uZmlnLmxpZmVUaW1lVGltZW91dEhhbmRsZSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaGVhcnRiZWF0Q29uZmlnLmludGVydmFsSGFuZGxlKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlY29ubmVjdENvbmZpZy5leHBvbmVudGlhbFRpbWVvdXRIYW5kbGUpO1xuICAgIH07XG5cbiAgICBjb25zdCB3ZWJTb2NrZXRPbk9wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKFwiV2ViU29ja2V0IGNvbm5lY3Rpb24gZXN0YWJsaXNoZWQhXCIpO1xuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2tzKGNhbGxiYWNrcy5jb25uZWN0aW9uR2Fpbik7XG5cbiAgICAgICAgICAgIHJlc2V0U3RhdGUoKTtcblxuICAgICAgICAgICAgaWYgKHRvcGljU3Vic2NyaXB0aW9uLnN1YnNjcmliZWQuc2l6ZSA+IDAgfHwgdG9waWNTdWJzY3JpcHRpb24ucGVuZGluZy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BpY3MgPSBBcnJheS5mcm9tKHRvcGljU3Vic2NyaXB0aW9uLnN1YnNjcmliZWQudmFsdWVzKCkpO1xuICAgICAgICAgICAgICAgIHRvcGljcyA9IHRvcGljcy5jb25jYXQoQXJyYXkuZnJvbSh0b3BpY1N1YnNjcmlwdGlvbi5wZW5kaW5nLnZhbHVlcygpKSk7XG4gICAgICAgICAgICAgICAgdG9waWNTdWJzY3JpcHRpb24uc3Vic2NyaWJlZC5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHdlYlNvY2tldC5zZW5kKGNyZWF0ZVdlYlNvY2tldFBheWxvYWQoUk9VVEVfS0VZLlNVQlNDUklCRSwge1widG9waWNzXCI6IHRvcGljc30pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VuZEhlYXJ0QmVhdCgpO1xuICAgICAgICAgICAgaGVhcnRiZWF0Q29uZmlnLmludGVydmFsSGFuZGxlID0gc2V0SW50ZXJ2YWwoc2VuZEhlYXJ0QmVhdCwgMTAwMCAqIEhFQVJUQkVBVF9JTlRFUlZBTCk7XG5cbiAgICAgICAgICAgIHJlY29ubmVjdENvbmZpZy5saWZlVGltZVRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcIlN0YXJ0aW5nIHNjaGVkdWxlZCBXZWJTb2NrZXQgbWFuYWdlciByZWNvbm5lY3RcIik7XG4gICAgICAgICAgICAgICAgcmVmcmVzaFdlYlNvY2tldENvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIH0sIDEwMDAgKiB3ZWJTb2NrZXRDb25maWcuY29ubkNvbmZpZy53ZWJTb2NrZXRUcmFuc3BvcnQudHJhbnNwb3J0TGlmZVRpbWVJblNlY29uZHMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiRXJyb3IgYWZ0ZXIgZXN0YWJsaXNoaW5nIHdlYiBzb2NrZXQgY29ubmVjdGlvbiwgZXJyb3I6IFwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgd2ViU29ja2V0T25DbG9zZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChyZWNvbm5lY3RDb25maWcubGluZWFyQ29ubmVjdEF0dGVtcHQgPD0gMSkge1xuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2tzKGNhbGxiYWNrcy5jb25uZWN0aW9uTG9zdCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmluZm8oXCJTb2NrZXQgY29ubmVjdGlvbiBpcyBjbG9zZWQuIGV2ZW50OiBcIiwgZXZlbnQpO1xuICAgICAgICBpZiAocmVjb25uZWN0Q29uZmlnLnJlY29ubmVjdFdlYlNvY2tldCkge1xuICAgICAgICAgICAgaW5pdFdlYlNvY2tldCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHdlYlNvY2tldE9uRXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBsb2dnZXIuZXJyb3IoXCJXZWJTb2NrZXRNYW5hZ2VyIEVycm9yLCBlcnJvcl9ldmVudDogXCIsIGV2ZW50KTtcbiAgICAgICAgcmVmcmVzaFdlYlNvY2tldENvbm5lY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgd2ViU29ja2V0T25NZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiTWVzc2FnZSByZWNlaXZlZCBmcm9tIHdlYlNvY2tldCBzZXJ2ZXJcIiwgZXZlbnQuZGF0YSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgc3dpdGNoIChyZXNwb25zZS50b3BpYykge1xuICAgICAgICAgICAgY2FzZSBST1VURV9LRVkuU1VCU0NSSUJFOlxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jb250ZW50LnN0YXR1cyA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuY29udGVudC50b3BpY3MuZm9yRWFjaCgoZnVuY3Rpb24gKHRvcGljTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWNTdWJzY3JpcHRpb24uc3Vic2NyaWJlZC5hZGQodG9waWNOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljU3Vic2NyaXB0aW9uLnBlbmRpbmcuZGVsZXRlKHRvcGljTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2tzKGNhbGxiYWNrcy5zdWJzY3JpcHRpb25VcGRhdGUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFja3MoY2FsbGJhY2tzLnN1YnNjcmlwdGlvbkZhaWx1cmUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJPVVRFX0tFWS5IRUFSVEJFQVQ6XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKFwiSGVhcnRiZWF0IHJlc3BvbnNlIHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdENvbmZpZy5wZW5kaW5nUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnRvcGljKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3MuYWxsTWVzc2FnZS5zaXplID09PSAwICYmIGNhbGxiYWNrcy50b3BpYy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybignTm8gcmVnaXN0ZXJlZCBjYWxsYmFjayBsaXN0ZW5lciBmb3IgVG9waWM6ICcsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFja3MoY2FsbGJhY2tzLmFsbE1lc3NhZ2UsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy50b3BpYy5oYXMocmVzcG9uc2UudG9waWMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZva2VDYWxsYmFja3MoY2FsbGJhY2tzLnRvcGljLmdldChyZXNwb25zZS50b3BpYyksIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIud2FybihcIldlYlNvY2tldE1hbmFnZXIgTWVzc2FnZSBFcnJvciwgZXJyb3I6IFwiLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJJbnZhbGlkIGluY29taW5nIG1lc3NhZ2UsIGVycm9yOiBcIiwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjbG9zZVdlYlNvY2tldCA9IGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICBpZiAod2ViU29ja2V0ICYmIHdlYlNvY2tldC5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuQ0xPU0VEKSB7XG4gICAgICAgICAgICB3ZWJTb2NrZXQuY2xvc2UoMTAwMCwgcmVhc29uKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVmcmVzaFdlYlNvY2tldENvbm5lY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghb25saW5lKSB7XG4gICAgICAgICAgICBjbG9zZVdlYlNvY2tldChcIk5ldHdvcmsgT2ZmbGluZSwgQ2xvc2luZyBXZWJTb2NrZXQgTWFuYWdlclwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjbGVhclRpbWVvdXQocmVjb25uZWN0Q29uZmlnLmxpZmVUaW1lVGltZW91dEhhbmRsZSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaGVhcnRiZWF0Q29uZmlnLmludGVydmFsSGFuZGxlKTtcblxuICAgICAgICBpZiAocmVjb25uZWN0Q29uZmlnLmxpbmVhckNvbm5lY3RBdHRlbXB0IDwgTUFYX0xJTkVBUl9DT05ORUNUX0FUVEVNUFRTKSB7XG4gICAgICAgICAgICByZWNvbm5lY3RDb25maWcubGluZWFyQ29ubmVjdEF0dGVtcHQrKztcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcIlN0YXJ0aW5nIENvbnNlY3V0aXZlIFdlYlNvY2tldCByZWNvbm5lY3QsIEF0dGVtcHQgOiBcIiArIHJlY29ubmVjdENvbmZpZy5saW5lYXJDb25uZWN0QXR0ZW1wdCk7XG4gICAgICAgICAgICByZWNvbm5lY3RDb25maWcucmVjb25uZWN0V2ViU29ja2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGdldFdlYlNvY2tldENvbm5Db25maWcoKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNvbm5lY3RDb25maWcuZXhwb25lbnRpYWxDb25uZWN0QXR0ZW1wdCA8IE1BWF9FWFBPTkVOVElBTF9DT05ORUNUX0FUVEVNUFRTKSB7XG4gICAgICAgICAgICByZWNvbm5lY3RDb25maWcuZXhwb25lbnRpYWxDb25uZWN0QXR0ZW1wdCsrO1xuICAgICAgICAgICAgcmVjb25uZWN0Q29uZmlnLmV4cG9uZW50aWFsQmFja09mZlRpbWUgKj0gMjtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhcIlN0YXJ0aW5nIEV4cG9uZW50aWFsIFdlYlNvY2tldCByZWNvbm5lY3QsIEF0dGVtcHQgOiBcIlxuICAgICAgICAgICAgICAgICsgcmVjb25uZWN0Q29uZmlnLmV4cG9uZW50aWFsQ29ubmVjdEF0dGVtcHQgKyBcIiB3aXRoIGRlbGF5IFwiXG4gICAgICAgICAgICAgICAgKyByZWNvbm5lY3RDb25maWcuZXhwb25lbnRpYWxCYWNrT2ZmVGltZSArIFwiIHNlYy5cIik7XG5cbiAgICAgICAgICAgIC8vIHJlcXVpcmVkIGZvciBzY2VuYXJpb3Mgd2hlbiBlcnJvciBhbmQgY2xvc2UgZXZlbnRzIGFyZSBmaXJlZCBiYWNrIHRvIGJhY2tcbiAgICAgICAgICAgIHdlYlNvY2tldENvbmZpZy5wcm9taXNlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICB3ZWJTb2NrZXRDb25maWcuY29ubkNvbmZpZyA9IG51bGw7XG5cbiAgICAgICAgICAgIHJlY29ubmVjdENvbmZpZy5leHBvbmVudGlhbFRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlY29ubmVjdENvbmZpZy5yZWNvbm5lY3RXZWJTb2NrZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGdldFdlYlNvY2tldENvbm5Db25maWcoKTtcbiAgICAgICAgICAgIH0sIDEwMDAgKiByZWNvbm5lY3RDb25maWcuZXhwb25lbnRpYWxCYWNrT2ZmVGltZSk7XG4gICAgICAgIH0gZWxzZSBpZiAod2ViU29ja2V0Q29uZmlnLnByb21pc2VDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkNvdWxkIG5vdCBjb25uZWN0IHRvIFdlYlNvY2tldCBhZnRlciBzZXZlcmFsIGF0dGVtcHRzXCIpO1xuICAgICAgICAgICAgdGVybWluYXRlV2ViU29ja2V0TWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRlcm1pbmF0ZVdlYlNvY2tldE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc2V0U3RhdGUoKTtcbiAgICAgICAgY2xvc2VXZWJTb2NrZXQoXCJUZXJtaW5hdGluZyBXZWJTb2NrZXQgTWFuYWdlclwiKTtcbiAgICAgICAgbG9nZ2VyLmVycm9yKFwiV2ViU29ja2V0IEluaXRpYWxpemF0aW9uIGZhaWxlZFwiKTtcbiAgICAgICAgcmVjb25uZWN0Q29uZmlnLndlYnNvY2tldEluaXRGYWlsZWQgPSB0cnVlO1xuICAgICAgICBjbGVhckludGVydmFsKG5ldHdvcmtDb25uZWN0aXZpdHlDaGVja2VyKTtcbiAgICAgICAgaW52b2tlQ2FsbGJhY2tzKGNhbGxiYWNrcy5pbml0RmFpbHVyZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVdlYlNvY2tldFBheWxvYWQgPSBmdW5jdGlvbiAoa2V5LCBjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBcInRvcGljXCI6IGtleSxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBjb250ZW50XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9IGZ1bmN0aW9uKHBheWxvYWQpIHtcbiAgICAgICAgVXRpbHMuYXNzZXJ0SXNPYmplY3QocGF5bG9hZCwgXCJwYXlsb2FkXCIpO1xuICAgICAgICBpZiAocGF5bG9hZC50b3BpYyA9PT0gdW5kZWZpbmVkIHx8IGludmFsaWRTZW5kTWVzc2FnZVJvdXRlS2V5cy5oYXMocGF5bG9hZC50b3BpYykpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKFwiQ2Fubm90IHNlbmQgbWVzc2FnZSwgSW52YWxpZCB0b3BpY1wiLCBwYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJFcnJvciBzdHJpbmdpZnkgbWVzc2FnZVwiLCBwYXlsb2FkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2ViU29ja2V0ICYmIHdlYlNvY2tldC5yZWFkeVN0YXRlID09PSBXZWJTb2NrZXQuT1BFTikge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdXZWJTb2NrZXRNYW5hZ2VyIHNlbmRpbmcgbWVzc2FnZScsIHBheWxvYWQpO1xuICAgICAgICAgICAgd2ViU29ja2V0LnNlbmQocGF5bG9hZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcIkNhbm5vdCBzZW5kIG1lc3NhZ2UsIHdlYiBzb2NrZXQgY29ubmVjdGlvbiBpcyBub3Qgb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzdWJzY3JpYmVUb3BpY3MgPSBmdW5jdGlvbih0b3BpY3MpIHtcbiAgICAgICAgVXRpbHMuYXNzZXJ0Tm90TnVsbCh0b3BpY3MsICd0b3BpY3MnKTtcbiAgICAgICAgVXRpbHMuYXNzZXJ0SXNMaXN0KHRvcGljcyk7XG5cbiAgICAgICAgdG9waWNzLmZvckVhY2goZnVuY3Rpb24gKHRvcGljKSB7XG4gICAgICAgICAgICB0b3BpY1N1YnNjcmlwdGlvbi5wZW5kaW5nLmFkZCh0b3BpYyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh3ZWJTb2NrZXQgJiYgd2ViU29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgICAgICB3ZWJTb2NrZXQuc2VuZChjcmVhdGVXZWJTb2NrZXRQYXlsb2FkKFJPVVRFX0tFWS5TVUJTQ1JJQkUsIHtcInRvcGljc1wiOiB0b3BpY3N9KSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdmFsaWRXZWJTb2NrZXRDb25uQ29uZmlnID0gZnVuY3Rpb24gKGNvbm5Db25maWcpIHtcbiAgICAgICAgaWYgKFV0aWxzLmlzT2JqZWN0KGNvbm5Db25maWcpICYmIFV0aWxzLmlzT2JqZWN0KGNvbm5Db25maWcud2ViU29ja2V0VHJhbnNwb3J0KVxuICAgICAgICAgICAgJiYgVXRpbHMuaXNTdHJpbmcoY29ubkNvbmZpZy53ZWJTb2NrZXRUcmFuc3BvcnQudXJsKVxuICAgICAgICAgICAgJiYgVXRpbHMudmFsaWRXU1VybChjb25uQ29uZmlnLndlYlNvY2tldFRyYW5zcG9ydC51cmwpXG4gICAgICAgICAgICAmJiBVdGlscy5pc051bWJlcihjb25uQ29uZmlnLndlYlNvY2tldFRyYW5zcG9ydC50cmFuc3BvcnRMaWZlVGltZUluU2Vjb25kcykgJiZcbiAgICAgICAgICAgIGNvbm5Db25maWcud2ViU29ja2V0VHJhbnNwb3J0LnRyYW5zcG9ydExpZmVUaW1lSW5TZWNvbmRzID49IE1JTl9XRUJTT0NLRVRfTElGRVRJTUUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci5lcnJvcihcIkludmFsaWQgV2ViU29ja2V0IENvbm5lY3Rpb24gQ29uZmlndXJhdGlvblwiLCBjb25uQ29uZmlnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRXZWJTb2NrZXRDb25uQ29uZmlnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocmVjb25uZWN0Q29uZmlnLndlYnNvY2tldEluaXRGYWlsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3ZWJTb2NrZXRDb25maWcuY29ubkNvbmZpZyA9IG51bGw7XG4gICAgICAgIHdlYlNvY2tldENvbmZpZy5wcm9taXNlQ29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHdlYlNvY2tldENvbmZpZy5wcm9taXNlSGFuZGxlID0gY2FsbGJhY2tzLmdldFdlYlNvY2tldFRyYW5zcG9ydCgpO1xuICAgICAgICB3ZWJTb2NrZXRDb25maWcucHJvbWlzZUhhbmRsZVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgd2ViU29ja2V0Q29uZmlnLnByb21pc2VDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoXCJTdWNjZXNzZnVsbHkgZmV0Y2hlZCB3ZWJTb2NrZXQgY29ubmVjdGlvbiBjb25maWd1cmF0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkV2ViU29ja2V0Q29ubkNvbmZpZyhyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZVdlYlNvY2tldE1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3ZWJTb2NrZXRDb25maWcuY29ubkNvbmZpZyA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW9ubGluZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbG9zZVdlYlNvY2tldChcIlJlc3RhcnRpbmcgV2ViU29ja2V0IE1hbmFnZXJcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbml0V2ViU29ja2V0KCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2ViU29ja2V0Q29uZmlnLnByb21pc2VDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggd2ViU29ja2V0IGNvbm5lY3Rpb24gY29uZmlndXJhdGlvblwiLCByZWFzb24pO1xuICAgICAgICAgICAgICAgICAgICByZWZyZXNoV2ViU29ja2V0Q29ubmVjdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0V2ViU29ja2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChyZWNvbm5lY3RDb25maWcud2Vic29ja2V0SW5pdEZhaWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIkluaXRpYWxpemluZyBXZWJzb2NrZXQgTWFuYWdlclwiKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh2YWxpZFdlYlNvY2tldENvbm5Db25maWcod2ViU29ja2V0Q29uZmlnLmNvbm5Db25maWcpKSB7XG5cbiAgICAgICAgICAgICAgICB3ZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KHdlYlNvY2tldENvbmZpZy5jb25uQ29uZmlnLndlYlNvY2tldFRyYW5zcG9ydC51cmwpO1xuICAgICAgICAgICAgICAgIHdlYlNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCB3ZWJTb2NrZXRPbk9wZW4pO1xuICAgICAgICAgICAgICAgIHdlYlNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCB3ZWJTb2NrZXRPbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHdlYlNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgd2ViU29ja2V0T25FcnJvcik7XG4gICAgICAgICAgICAgICAgd2ViU29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCB3ZWJTb2NrZXRPbkNsb3NlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHdlYlNvY2tldENvbmZpZy5wcm9taXNlQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlcm1pbmF0ZVdlYlNvY2tldE1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJFcnJvciBJbml0aWFsaXppbmcgd2ViLXNvY2tldC1tYW5hZ2VyXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRlcm1pbmF0ZVdlYlNvY2tldE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBvbkNvbm5lY3Rpb25HYWluID0gZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgVXRpbHMuYXNzZXJ0VHJ1ZShVdGlscy5pc0Z1bmN0aW9uKGNiKSwgJ2NiIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICBjYWxsYmFja3MuY29ubmVjdGlvbkdhaW4uYWRkKGNiKTtcbiAgICAgICAgaWYgKHdlYlNvY2tldCAmJiB3ZWJTb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IGNhbGxiYWNrcy5jb25uZWN0aW9uR2Fpbi5kZWxldGUoY2IpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNvbm5lY3Rpb25Mb3N0ID0gZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgVXRpbHMuYXNzZXJ0VHJ1ZShVdGlscy5pc0Z1bmN0aW9uKGNiKSwgJ2NiIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICBjYWxsYmFja3MuY29ubmVjdGlvbkxvc3QuYWRkKGNiKTtcbiAgICAgICAgaWYgKHdlYlNvY2tldCAmJiB3ZWJTb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0LkNMT1NFRCkge1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FsbGJhY2tzLmNvbm5lY3Rpb25Mb3N0LmRlbGV0ZShjYik7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uSW5pdEZhaWx1cmUgPSBmdW5jdGlvbihjYikge1xuICAgICAgICBVdGlscy5hc3NlcnRUcnVlKFV0aWxzLmlzRnVuY3Rpb24oY2IpLCAnY2IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIGNhbGxiYWNrcy5pbml0RmFpbHVyZS5hZGQoY2IpO1xuICAgICAgICBpZiAocmVjb25uZWN0Q29uZmlnLndlYnNvY2tldEluaXRGYWlsZWQpIHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IGNhbGxiYWNrcy5pbml0RmFpbHVyZS5kZWxldGUoY2IpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbml0ID0gZnVuY3Rpb24odHJhbnNwb3J0SGFuZGxlKSB7XG4gICAgICAgIFV0aWxzLmFzc2VydFRydWUoVXRpbHMuaXNGdW5jdGlvbih0cmFuc3BvcnRIYW5kbGUpLCAndHJhbnNwb3J0SGFuZGxlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICBpZiAoY2FsbGJhY2tzLmdldFdlYlNvY2tldFRyYW5zcG9ydCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJXZWIgU29ja2V0IE1hbmFnZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2tzLmdldFdlYlNvY2tldFRyYW5zcG9ydCA9IHRyYW5zcG9ydEhhbmRsZTtcblxuICAgICAgICBnZXRXZWJTb2NrZXRDb25uQ29uZmlnKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3Vic2NyaXB0aW9uVXBkYXRlID0gZnVuY3Rpb24oY2IpIHtcbiAgICAgICAgVXRpbHMuYXNzZXJ0VHJ1ZShVdGlscy5pc0Z1bmN0aW9uKGNiKSwgJ2NiIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICBjYWxsYmFja3Muc3Vic2NyaXB0aW9uVXBkYXRlLmFkZChjYik7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYWxsYmFja3Muc3Vic2NyaXB0aW9uVXBkYXRlLmRlbGV0ZShjYik7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3Vic2NyaXB0aW9uRmFpbHVyZSA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICAgIFV0aWxzLmFzc2VydFRydWUoVXRpbHMuaXNGdW5jdGlvbihjYiksICdjYiBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgICAgY2FsbGJhY2tzLnN1YnNjcmlwdGlvbkZhaWx1cmUuYWRkKGNiKTtcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbGxiYWNrcy5zdWJzY3JpcHRpb25GYWlsdXJlLmRlbGV0ZShjYik7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uTWVzc2FnZSA9IGZ1bmN0aW9uKHRvcGljTmFtZSwgY2IpIHtcbiAgICAgICAgVXRpbHMuYXNzZXJ0Tm90TnVsbCh0b3BpY05hbWUsICd0b3BpY05hbWUnKTtcbiAgICAgICAgVXRpbHMuYXNzZXJ0VHJ1ZShVdGlscy5pc0Z1bmN0aW9uKGNiKSwgJ2NiIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICBpZiAoY2FsbGJhY2tzLnRvcGljLmhhcyh0b3BpY05hbWUpKSB7XG4gICAgICAgICAgICBjYWxsYmFja3MudG9waWMuZ2V0KHRvcGljTmFtZSkuYWRkKGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy50b3BpYy5zZXQodG9waWNOYW1lLCBuZXcgU2V0KFtjYl0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FsbGJhY2tzLnRvcGljLmdldCh0b3BpY05hbWUpLmRlbGV0ZShjYik7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uQWxsTWVzc2FnZSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICBVdGlscy5hc3NlcnRUcnVlKFV0aWxzLmlzRnVuY3Rpb24oY2IpLCAnY2IgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIGNhbGxiYWNrcy5hbGxNZXNzYWdlLmFkZChjYik7XG4gICAgICAgIHJldHVybiAoKSA9PiBjYWxsYmFja3MuYWxsTWVzc2FnZS5kZWxldGUoY2IpO1xuICAgIH07XG5cbiAgICB0aGlzLmluaXQgPSBpbml0O1xuICAgIHRoaXMub25Jbml0RmFpbHVyZSA9IG9uSW5pdEZhaWx1cmU7XG4gICAgdGhpcy5vbkNvbm5lY3Rpb25HYWluID0gb25Db25uZWN0aW9uR2FpbjtcbiAgICB0aGlzLm9uQ29ubmVjdGlvbkxvc3QgPSBvbkNvbm5lY3Rpb25Mb3N0O1xuICAgIHRoaXMub25TdWJzY3JpcHRpb25VcGRhdGUgPSBvblN1YnNjcmlwdGlvblVwZGF0ZTtcbiAgICB0aGlzLm9uU3Vic2NyaXB0aW9uRmFpbHVyZSA9IG9uU3Vic2NyaXB0aW9uRmFpbHVyZTtcbiAgICB0aGlzLm9uTWVzc2FnZSA9IG9uTWVzc2FnZTtcbiAgICB0aGlzLm9uQWxsTWVzc2FnZSA9IG9uQWxsTWVzc2FnZTtcbiAgICB0aGlzLnN1YnNjcmliZVRvcGljcyA9IHN1YnNjcmliZVRvcGljcztcbiAgICB0aGlzLnNlbmRNZXNzYWdlID0gc2VuZE1lc3NhZ2U7XG5cbiAgICB0aGlzLmNsb3NlV2ViU29ja2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc2V0U3RhdGUoKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChuZXR3b3JrQ29ubmVjdGl2aXR5Q2hlY2tlcik7XG4gICAgICAgIGNsb3NlV2ViU29ja2V0KFwiVXNlciByZXF1ZXN0IHRvIGNsb3NlIFdlYlNvY2tldFwiKTtcbiAgICB9O1xufTtcblxuY29uc3QgV2ViU29ja2V0TWFuYWdlckNvbnN0cnVjdG9yID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgV2ViU29ja2V0TWFuYWdlcigpO1xufTtcblxuY29uc3Qgc2V0R2xvYmFsQ29uZmlnID0gY29uZmlnID0+IHtcbiAgICBjb25zdCBsb2dnZXJDb25maWcgPSBjb25maWcubG9nZ2VyQ29uZmlnO1xuICAgIExvZ01hbmFnZXIudXBkYXRlTG9nZ2VyQ29uZmlnKGxvZ2dlckNvbmZpZyk7XG59O1xuXG5jb25zdCBXZWJTb2NrZXRNYW5hZ2VyT2JqZWN0ID0ge1xuICAgIGNyZWF0ZTogV2ViU29ja2V0TWFuYWdlckNvbnN0cnVjdG9yLFxuICAgIHNldEdsb2JhbENvbmZpZzogc2V0R2xvYmFsQ29uZmlnLFxuICAgIExvZ0xldmVsOiBMb2dMZXZlbCxcbiAgICBMb2dnZXI6IExvZ2dlclxufTtcblxuZXhwb3J0IHsgV2ViU29ja2V0TWFuYWdlck9iamVjdCB9OyIsIi8qIGdsb2JhbCB3aW5kb3csIGV4cG9ydHMsIGRlZmluZSAqL1xuXG4hZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnXG5cbiAgICB2YXIgcmUgPSB7XG4gICAgICAgIG5vdF9zdHJpbmc6IC9bXnNdLyxcbiAgICAgICAgbm90X2Jvb2w6IC9bXnRdLyxcbiAgICAgICAgbm90X3R5cGU6IC9bXlRdLyxcbiAgICAgICAgbm90X3ByaW1pdGl2ZTogL1tedl0vLFxuICAgICAgICBudW1iZXI6IC9bZGllZmddLyxcbiAgICAgICAgbnVtZXJpY19hcmc6IC9bYmNkaWVmZ3V4WF0vLFxuICAgICAgICBqc29uOiAvW2pdLyxcbiAgICAgICAgbm90X2pzb246IC9bXmpdLyxcbiAgICAgICAgdGV4dDogL15bXlxceDI1XSsvLFxuICAgICAgICBtb2R1bG86IC9eXFx4MjV7Mn0vLFxuICAgICAgICBwbGFjZWhvbGRlcjogL15cXHgyNSg/OihbMS05XVxcZCopXFwkfFxcKChbXildKylcXCkpPyhcXCspPygwfCdbXiRdKT8oLSk/KFxcZCspPyg/OlxcLihcXGQrKSk/KFtiLWdpam9zdFR1dnhYXSkvLFxuICAgICAgICBrZXk6IC9eKFthLXpfXVthLXpfXFxkXSopL2ksXG4gICAgICAgIGtleV9hY2Nlc3M6IC9eXFwuKFthLXpfXVthLXpfXFxkXSopL2ksXG4gICAgICAgIGluZGV4X2FjY2VzczogL15cXFsoXFxkKylcXF0vLFxuICAgICAgICBzaWduOiAvXlsrLV0vXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3ByaW50ZihrZXkpIHtcbiAgICAgICAgLy8gYGFyZ3VtZW50c2AgaXMgbm90IGFuIGFycmF5LCBidXQgc2hvdWxkIGJlIGZpbmUgZm9yIHRoaXMgY2FsbFxuICAgICAgICByZXR1cm4gc3ByaW50Zl9mb3JtYXQoc3ByaW50Zl9wYXJzZShrZXkpLCBhcmd1bWVudHMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdnNwcmludGYoZm10LCBhcmd2KSB7XG4gICAgICAgIHJldHVybiBzcHJpbnRmLmFwcGx5KG51bGwsIFtmbXRdLmNvbmNhdChhcmd2IHx8IFtdKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzcHJpbnRmX2Zvcm1hdChwYXJzZV90cmVlLCBhcmd2KSB7XG4gICAgICAgIHZhciBjdXJzb3IgPSAxLCB0cmVlX2xlbmd0aCA9IHBhcnNlX3RyZWUubGVuZ3RoLCBhcmcsIG91dHB1dCA9ICcnLCBpLCBrLCBwaCwgcGFkLCBwYWRfY2hhcmFjdGVyLCBwYWRfbGVuZ3RoLCBpc19wb3NpdGl2ZSwgc2lnblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdHJlZV9sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJzZV90cmVlW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG91dHB1dCArPSBwYXJzZV90cmVlW2ldXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgcGFyc2VfdHJlZVtpXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBwaCA9IHBhcnNlX3RyZWVbaV0gLy8gY29udmVuaWVuY2UgcHVycG9zZXMgb25seVxuICAgICAgICAgICAgICAgIGlmIChwaC5rZXlzKSB7IC8vIGtleXdvcmQgYXJndW1lbnRcbiAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJndltjdXJzb3JdXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBwaC5rZXlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJnID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihzcHJpbnRmKCdbc3ByaW50Zl0gQ2Fubm90IGFjY2VzcyBwcm9wZXJ0eSBcIiVzXCIgb2YgdW5kZWZpbmVkIHZhbHVlIFwiJXNcIicsIHBoLmtleXNba10sIHBoLmtleXNbay0xXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmdbcGgua2V5c1trXV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwaC5wYXJhbV9ubykgeyAvLyBwb3NpdGlvbmFsIGFyZ3VtZW50IChleHBsaWNpdClcbiAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJndltwaC5wYXJhbV9ub11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7IC8vIHBvc2l0aW9uYWwgYXJndW1lbnQgKGltcGxpY2l0KVxuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmd2W2N1cnNvcisrXVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZS5ub3RfdHlwZS50ZXN0KHBoLnR5cGUpICYmIHJlLm5vdF9wcmltaXRpdmUudGVzdChwaC50eXBlKSAmJiBhcmcgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmcoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZS5udW1lcmljX2FyZy50ZXN0KHBoLnR5cGUpICYmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyAmJiBpc05hTihhcmcpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHNwcmludGYoJ1tzcHJpbnRmXSBleHBlY3RpbmcgbnVtYmVyIGJ1dCBmb3VuZCAlVCcsIGFyZykpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlLm51bWJlci50ZXN0KHBoLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzX3Bvc2l0aXZlID0gYXJnID49IDBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBoLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBwYXJzZUludChhcmcsIDEwKS50b1N0cmluZygyKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGFyZywgMTApKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2knOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gcGFyc2VJbnQoYXJnLCAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2onOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gSlNPTi5zdHJpbmdpZnkoYXJnLCBudWxsLCBwaC53aWR0aCA/IHBhcnNlSW50KHBoLndpZHRoKSA6IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IHBoLnByZWNpc2lvbiA/IHBhcnNlRmxvYXQoYXJnKS50b0V4cG9uZW50aWFsKHBoLnByZWNpc2lvbikgOiBwYXJzZUZsb2F0KGFyZykudG9FeHBvbmVudGlhbCgpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IHBoLnByZWNpc2lvbiA/IHBhcnNlRmxvYXQoYXJnKS50b0ZpeGVkKHBoLnByZWNpc2lvbikgOiBwYXJzZUZsb2F0KGFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2cnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gcGgucHJlY2lzaW9uID8gU3RyaW5nKE51bWJlcihhcmcudG9QcmVjaXNpb24ocGgucHJlY2lzaW9uKSkpIDogcGFyc2VGbG9hdChhcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwYXJzZUludChhcmcsIDEwKSA+Pj4gMCkudG9TdHJpbmcoOClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gU3RyaW5nKGFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwaC5wcmVjaXNpb24gPyBhcmcuc3Vic3RyaW5nKDAsIHBoLnByZWNpc2lvbikgOiBhcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IFN0cmluZyghIWFyZylcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IChwaC5wcmVjaXNpb24gPyBhcmcuc3Vic3RyaW5nKDAsIHBoLnByZWNpc2lvbikgOiBhcmcpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSAocGgucHJlY2lzaW9uID8gYXJnLnN1YnN0cmluZygwLCBwaC5wcmVjaXNpb24pIDogYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBwYXJzZUludChhcmcsIDEwKSA+Pj4gMFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndic6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmcudmFsdWVPZigpXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSAocGgucHJlY2lzaW9uID8gYXJnLnN1YnN0cmluZygwLCBwaC5wcmVjaXNpb24pIDogYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAneCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSAocGFyc2VJbnQoYXJnLCAxMCkgPj4+IDApLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnWCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSAocGFyc2VJbnQoYXJnLCAxMCkgPj4+IDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocmUuanNvbi50ZXN0KHBoLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBhcmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZS5udW1iZXIudGVzdChwaC50eXBlKSAmJiAoIWlzX3Bvc2l0aXZlIHx8IHBoLnNpZ24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduID0gaXNfcG9zaXRpdmUgPyAnKycgOiAnLSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZyA9IGFyZy50b1N0cmluZygpLnJlcGxhY2UocmUuc2lnbiwgJycpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduID0gJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYWRfY2hhcmFjdGVyID0gcGgucGFkX2NoYXIgPyBwaC5wYWRfY2hhciA9PT0gJzAnID8gJzAnIDogcGgucGFkX2NoYXIuY2hhckF0KDEpIDogJyAnXG4gICAgICAgICAgICAgICAgICAgIHBhZF9sZW5ndGggPSBwaC53aWR0aCAtIChzaWduICsgYXJnKS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgcGFkID0gcGgud2lkdGggPyAocGFkX2xlbmd0aCA+IDAgPyBwYWRfY2hhcmFjdGVyLnJlcGVhdChwYWRfbGVuZ3RoKSA6ICcnKSA6ICcnXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCArPSBwaC5hbGlnbiA/IHNpZ24gKyBhcmcgKyBwYWQgOiAocGFkX2NoYXJhY3RlciA9PT0gJzAnID8gc2lnbiArIHBhZCArIGFyZyA6IHBhZCArIHNpZ24gKyBhcmcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXRcbiAgICB9XG5cbiAgICB2YXIgc3ByaW50Zl9jYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICAgIGZ1bmN0aW9uIHNwcmludGZfcGFyc2UoZm10KSB7XG4gICAgICAgIGlmIChzcHJpbnRmX2NhY2hlW2ZtdF0pIHtcbiAgICAgICAgICAgIHJldHVybiBzcHJpbnRmX2NhY2hlW2ZtdF1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfZm10ID0gZm10LCBtYXRjaCwgcGFyc2VfdHJlZSA9IFtdLCBhcmdfbmFtZXMgPSAwXG4gICAgICAgIHdoaWxlIChfZm10KSB7XG4gICAgICAgICAgICBpZiAoKG1hdGNoID0gcmUudGV4dC5leGVjKF9mbXQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcnNlX3RyZWUucHVzaChtYXRjaFswXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChtYXRjaCA9IHJlLm1vZHVsby5leGVjKF9mbXQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcnNlX3RyZWUucHVzaCgnJScpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgobWF0Y2ggPSByZS5wbGFjZWhvbGRlci5leGVjKF9mbXQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaFsyXSkge1xuICAgICAgICAgICAgICAgICAgICBhcmdfbmFtZXMgfD0gMVxuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRfbGlzdCA9IFtdLCByZXBsYWNlbWVudF9maWVsZCA9IG1hdGNoWzJdLCBmaWVsZF9tYXRjaCA9IFtdXG4gICAgICAgICAgICAgICAgICAgIGlmICgoZmllbGRfbWF0Y2ggPSByZS5rZXkuZXhlYyhyZXBsYWNlbWVudF9maWVsZCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZF9saXN0LnB1c2goZmllbGRfbWF0Y2hbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKHJlcGxhY2VtZW50X2ZpZWxkID0gcmVwbGFjZW1lbnRfZmllbGQuc3Vic3RyaW5nKGZpZWxkX21hdGNoWzBdLmxlbmd0aCkpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZmllbGRfbWF0Y2ggPSByZS5rZXlfYWNjZXNzLmV4ZWMocmVwbGFjZW1lbnRfZmllbGQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZF9saXN0LnB1c2goZmllbGRfbWF0Y2hbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChmaWVsZF9tYXRjaCA9IHJlLmluZGV4X2FjY2Vzcy5leGVjKHJlcGxhY2VtZW50X2ZpZWxkKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRfbGlzdC5wdXNoKGZpZWxkX21hdGNoWzFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdbc3ByaW50Zl0gZmFpbGVkIHRvIHBhcnNlIG5hbWVkIGFyZ3VtZW50IGtleScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdbc3ByaW50Zl0gZmFpbGVkIHRvIHBhcnNlIG5hbWVkIGFyZ3VtZW50IGtleScpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0gPSBmaWVsZF9saXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhcmdfbmFtZXMgfD0gMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXJnX25hbWVzID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW3NwcmludGZdIG1peGluZyBwb3NpdGlvbmFsIGFuZCBuYW1lZCBwbGFjZWhvbGRlcnMgaXMgbm90ICh5ZXQpIHN1cHBvcnRlZCcpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFyc2VfdHJlZS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogbWF0Y2hbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbV9ubzogICAgbWF0Y2hbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzOiAgICAgICAgbWF0Y2hbMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduOiAgICAgICAgbWF0Y2hbM10sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRfY2hhcjogICAgbWF0Y2hbNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogICAgICAgbWF0Y2hbNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogICAgICAgbWF0Y2hbNl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb246ICAgbWF0Y2hbN10sXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAgICAgICAgbWF0Y2hbOF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignW3NwcmludGZdIHVuZXhwZWN0ZWQgcGxhY2Vob2xkZXInKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2ZtdCA9IF9mbXQuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3ByaW50Zl9jYWNoZVtmbXRdID0gcGFyc2VfdHJlZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGV4cG9ydCB0byBlaXRoZXIgYnJvd3NlciBvciBub2RlLmpzXG4gICAgICovXG4gICAgLyogZXNsaW50LWRpc2FibGUgcXVvdGUtcHJvcHMgKi9cbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGV4cG9ydHNbJ3NwcmludGYnXSA9IHNwcmludGZcbiAgICAgICAgZXhwb3J0c1sndnNwcmludGYnXSA9IHZzcHJpbnRmXG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3dbJ3NwcmludGYnXSA9IHNwcmludGZcbiAgICAgICAgd2luZG93Wyd2c3ByaW50ZiddID0gdnNwcmludGZcblxuICAgICAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmVbJ2FtZCddKSB7XG4gICAgICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgJ3NwcmludGYnOiBzcHJpbnRmLFxuICAgICAgICAgICAgICAgICAgICAndnNwcmludGYnOiB2c3ByaW50ZlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBxdW90ZS1wcm9wcyAqL1xufSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4iLCIvKmVzbGludCBuby11bnVzZWQtdmFyczogXCJvZmZcIiovXG5pbXBvcnQgeyBXZWJTb2NrZXRNYW5hZ2VyT2JqZWN0IH0gZnJvbSBcIi4vd2ViU29ja2V0TWFuYWdlclwiO1xuXG5nbG9iYWwuY29ubmVjdCA9IGdsb2JhbC5jb25uZWN0IHx8IHt9O1xuY29ubmVjdC5XZWJTb2NrZXRNYW5hZ2VyID0gV2ViU29ja2V0TWFuYWdlck9iamVjdDtcblxuZXhwb3J0IGNvbnN0IFdlYlNvY2tldE1hbmFnZXIgPSBXZWJTb2NrZXRNYW5hZ2VyT2JqZWN0O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
